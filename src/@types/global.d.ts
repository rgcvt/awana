import type { people } from '@/data/people';

type RoleTitle =
	| 'Setup - Before Club'
	| 'Setup - Before Store'
	| 'Setup - During Club'
	| 'Setup - After Club'
	| 'Photographer/Videographer'
	| 'Cubbies Director'
	| 'Cubbies Helper'
	| 'Director'
	| 'AV'
	| 'Music Leader - Sparks + T&T'
	| 'Music Helper'
	| 'Music Leader - Cubbies'
	| 'Check-In'
	| 'Check-In (Store Night)'
	| 'Progress Tracking'
	| 'Check-Out'
	| 'Fast Track'
	| 'Score Keeper'
	| 'Game Helper'
	| 'Game Director'
	| 'Team Captain'
	| 'Team Helper'
	| 'Lesson Helper'
	| 'Sparks - Activity Setup'
	| 'Sparks - Activities'
	| 'Sparks Director - Fast Track'
	| 'Fast Track - Sparks'
	| 'Small Group Leader'
	| 'Leader - Closing Assembly'
	| 'Teacher'
	| 'Store Facilitator'
	| 'Store Clerk'
	| 'Store Helper'
	| 'Filler Games Leader'
	| 'Filler Games Helper'
	| 'Cubbies Setup - Before Club'
	| 'Cubbies Check-in'
	| 'Cubbies Verses'
	| 'Cubbies Game Leader'
	| 'Cubbies Snack Setup'
	| 'Cubbies Music Helper'
	| 'Cubbies Puppeteer'
	| 'Cubbies Teacher'
	| 'Cubbies Lesson Helper'
	| 'Cubbies Snack and Craft Helper'
	| 'Cubbies Setup - After Club'
	| 'Nursery';

interface Role {
	title: RoleTitle;
	responsibilities: string[];
}
type Person = (typeof people)[number];

type EventRoles = {
	[K in RoleTitle]?: Person[];
};

type Event = {
	title: string;
	location: string;
	description?: string;
	inCharge: Person[];
	roles: EventRoles;
	notes?: string; // Optional for events that may have additional notes
	smallGroupQuestions?: string[];
};

type ScheduleItem = {
	time: string;
	events: Event[];
};

type Schedule = {
	date: string;
	out: Person[];
	schedule: ScheduleItem[];
};
