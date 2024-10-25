type RoleTitle =
	| 'Setup - Before Club'
	| 'Setup - During Club'
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
	| 'Fast Track'
	| 'Score Keeper'
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

export type Person =
	| 'Ella Albert'
	| 'Cailey Appenzeller'
	| 'Kirsten Appenzeller'
	| 'Ben Ashline'
	| 'Sandra Ashline'
	| 'Chelsea Boardman'
	| 'Lexi Boardman'
	| 'Matt Boardman'
	| 'Chapin Bond'
	| 'Lindsey Bond'
	| 'Chris Butler'
	| 'Chip Crawford'
	| 'Mike / Nikki Criscolo'
	| 'Heather Fick'
	| 'Allie Fullerton'
	| 'Jared Fullerton'
	| 'Rebekah Glen'
	| 'Bear Grey'
	| 'Andrew Hale'
	| 'Chelsea Hale'
	| 'Amy Kolar'
	| 'Chris Kolar'
	| 'Evelyn Larson'
	| 'Julia Larson'
	| 'David Lugo'
	| 'Keith McClymonds'
	| 'Niki McClymonds'
	| 'Karly Merchant'
	| 'Amelia Munger'
	| 'Sarah Norton'
	| 'Brad Parker'
	| 'Carol Parker'
	| 'Brenda Saunders'
	| 'Abby Smith'
	| 'Ashley Smith'
	| 'Jacob Smith'
	| 'Nick Smith'
	| 'Naomi Walters'
	| 'Jimmy Williamson'
	| 'Sonia Williamson';

type StaffMember = {
	name: Person;
	role: RoleTitle;
};

type Event = {
	title: string;
	location: string;
	description?: string;
	inCharge: Person[];
	staff?: StaffMember[];
	notes?: string; // Optional for events that may have additional notes
	smallGroupQuestions?: string[];
};

type ScheduleItem = {
	time: string;
	events: Event[];
};

type Schedule = {
	date: string;
	schedule: ScheduleItem[];
};
