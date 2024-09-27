import { Event, Person, Role, Schedule } from '../@types/global';
import { roleByTitle } from './roles';

const schedules = import.meta.glob('./schedules/*.ts', {
	import: 'default',
	eager: true,
});

export const dates = Object.values(schedules) as Schedule[];

export type StaffScheduleItem = {
	time: string;
	event: Event;
	role: Role;
};

export const scheduleByDateAndName = (date: string, name: Person): StaffScheduleItem[] => {
	const clubDate = dates.find((d) => d.date == date);

	const staffSchedule: StaffScheduleItem[] = [];

	if (clubDate) {
		clubDate.schedule.forEach((t) => {
			//let event = null;
			let found: boolean = false;
			let role = null;
			let event = null;
			t.events.forEach((e) => {
				if (!found) {
					const personRole = e.staff?.find((s) => s.name == name);

					if (personRole) {
						const newEvent = { ...e };
						delete newEvent.staff;

						role = roleByTitle(personRole.role);
						event = e;
						found = true;
					}
				}
			});
			if (event && role) {
				staffSchedule.push({
					time: t.time,
					event: event,
					role: role,
				});
			}
		});
	}
	return staffSchedule;
};
