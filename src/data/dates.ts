import type { Event, Person, Role, RoleTitle, Schedule } from '@/@types/global';
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
				for (const r in e.roles) {
					const roleTitle = r as RoleTitle;
					if (!found) {
						const foundName = e.roles![roleTitle]!.find((n) => n == name);

						if (foundName) {
							role = roleByTitle(roleTitle);
							event = e;
							found = true;
						}
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
