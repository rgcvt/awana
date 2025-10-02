import type { Schedule } from '@/@types/global';

const schedule: Schedule = {
	date: '2025-10-03',
	out: [
		'Ethan Walters',
		'Amelia Munger',
		'CJ North',
		'Julia Larson',
		'Corrine Thomas',
		'Evelyn Larson',
		'Josh Larson',
		'Kenzie McClymonds',
		'Niki McClymonds',
	],
	schedule: [
		{
			time: '5:35 pm',
			events: [
				{
					title: 'Setup',
					location: 'Worship Center',
					inCharge: ['Andrew Hale'],
					roles: {
						'Setup - Before Club': ['Andrew Hale', 'Chelsea Hale'],
						'Cubbies Setup - Before Club': ['David Lugo', 'Naomi Lugo'],
						Nursery: ['Cheryl Zeigler'],
					},
				},
			],
		},
		{
			time: '5:50 pm',
			events: [
				{
					title: 'Check-In',
					location: 'Foyer',
					description: 'Parents check their kids in at a table outside the Worship Center.',
					inCharge: ['Chelsea Hale'],
					roles: {
						'Check-In': ['Chelsea Hale', 'Nikki Criscolo', 'Sarah Fox', 'Heather Fick'],
					},
				},
				{
					title: 'Music',
					location: 'Worship Center',
					description:
						'This is a loosely structured time that allows kids to jump in and participate as they arrive from Check-In or Fast Track. ',
					inCharge: ['Holly Raiche'],
					roles: {
						'Music Leader - Sparks + T&T': ['Holly Raiche'],
						AV: ['Andrew Hale'],
						'Music Helper': [
							'Chris Butler',
							'Isaiah Parker',
							'Gavin Sylvia',
							'Josh Thomas',
							'Baxter Williamson',
							'Jimmy Williamson',
							'Sonia Williamson',
							'Jacob Smith',
						],
					},
				},
				{
					title: 'T&T Fast Track',
					description: 'Fast Track is the time when kids recite scriptures they have memorized.',
					location: 'Foundations Room',
					inCharge: ['Keith McClymonds'],
					roles: {
						'Fast Track': ['Keith McClymonds', 'Chip Crawford', 'Karly Crawford', 'Mike Criscolo', 'Nick Smith'],
					},
				},
				{
					title: 'Cubbies - Check-In',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Naomi Lugo'],
					roles: {
						'Cubbies Game Leader': ['David Lugo'],
						'Cubbies Check-in': ['Naomi Lugo'],
						'Cubbies Helper': ['Jared Fullerton', 'Allie Fullerton'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Cheryl Zeigler'],
					roles: {
						Nursery: ['Cheryl Zeigler', 'Lexi Boardman', 'Ella Albert'],
					},
				},
			],
		},
		{
			time: '6:10 pm',
			events: [
				{
					title: 'Game Time',
					location: 'Worship Center',
					description:
						'Game time is purposeful. We teach teamwork, sportsmanship, learning and following rules, and healthy competitiveness.',
					inCharge: [],
					roles: {
						'Game Director': ['Andrew Hale'],
						'Team Helper': ['Josh Thomas', 'Chip Crawford', 'Karly Crawford', 'Keith McClymonds', 'Jacob Smith'],
						'Team Captain': ['Chris Butler', 'Nick Smith', 'Jimmy Williamson', 'Mike Criscolo'],
						'Game Helper': ['Isaiah Parker'],
						'Score Keeper': ['Gavin Sylvia', 'Baxter Williamson'],
					},
				},
				{
					title: 'Sparks Activity Setup',
					location: 'Foundations Room / Hallway',
					inCharge: ['Sonia Williamson'],
					roles: {
						'Sparks - Activity Setup': ['Sonia Williamson', 'Lexi Boardman', 'Ella Albert'],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					description: 'Track progress for T&T kids who completed sections.',
					inCharge: ['Chelsea Hale'],
					roles: {
						'Progress Tracking': ['Chelsea Hale', 'Nikki Criscolo', 'Sarah Fox', 'Heather Fick'],
					},
				},
				{
					title: 'Cubbies - Music',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Naomi Lugo'],
					roles: {
						'Music Leader - Cubbies': ['Naomi Lugo'],
						'Cubbies Director': ['David Lugo'],
						'Cubbies Music Helper': ['Allie Fullerton', 'Jared Fullerton', 'Naomi Lugo'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Cheryl Zeigler'],
					roles: { Nursery: ['Cheryl Zeigler'] },
				},
			],
		},
		{
			time: '6:35 pm',
			events: [
				{
					title: 'T&T Lesson',
					location: "Cheryl's Office",

					inCharge: ['Brad Parker'],
					roles: {
						Teacher: ['Brad Parker'],
						'Lesson Helper': [
							'Keith McClymonds',
							'Chip Crawford',
							'Karly Crawford',
							'Mike Criscolo',
							'Chris Butler',
							'Jacob Smith',
						],
					},
				},
				{
					title: 'Sparks Activity + Fast Track',
					location: 'Foundations Room',
					description: 'Large group activity time with one-on-one time for reciting verses.',
					inCharge: ['Jimmy Williamson', 'Sonia Williamson'],
					roles: {
						'Sparks - Activities': ['Sonia Williamson', 'Jimmy Williamson'],
						'Fast Track - Sparks': ['Josh Thomas', 'Ella Albert', 'Lexi Boardman'],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					description: 'Track progress for Sparks who completed sections.',
					inCharge: ['Chelsea Hale'],
					roles: {
						'Progress Tracking': ['Chelsea Hale', 'Nikki Criscolo', 'Sarah Fox', 'Heather Fick'],
						Director: ['Andrew Hale'],
					},
				},

				{
					title: 'Setup - During Club',
					location: 'Worship Center',
					inCharge: ['Nick Smith'],
					roles: {
						'Setup - During Club': ['Nick Smith', 'Isaiah Parker', 'Gavin Sylvia', 'Baxter Williamson'],
					},
				},
				{
					title: 'Cubbies - Lesson',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Naomi Lugo'],
					roles: {
						'Cubbies Teacher': ['David Lugo'],
						'Cubbies Puppeteer': ['Naomi Lugo'],
						'Cubbies Lesson Helper': ['Allie Fullerton', 'Jared Fullerton'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Cheryl Zeigler'],
					roles: { Nursery: ['Cheryl Zeigler'] },
				},
			],
		},
		{
			time: '7:00 pm',
			events: [
				{
					title: 'Sparks Lesson',
					location: "Cheryl's Office",
					inCharge: ['Brad Parker'],
					roles: {
						Teacher: ['Brad Parker'],
						'Lesson Helper': ['Lexi Boardman', 'Ella Albert', 'Josh Thomas', 'Sonia Williamson', 'Jimmy Williamson'],
					},
				},
				{
					title: 'T&T Small Groups',
					location: 'Worship Center + Foundations Room',
					inCharge: ['Keith McClymonds'],
					smallGroupQuestions: [],
					roles: {
						'Small Group Leader': [
							'Chris Butler',
							'Chip Crawford',
							'Karly Crawford',
							'Mike Criscolo',
							'Keith McClymonds',
							'Nick Smith',
							'Niki McClymonds',
							'Jacob Smith',
						],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					inCharge: ['Chelsea Hale'],
					roles: {
						'Progress Tracking': ['Chelsea Hale', 'Sarah Fox'],
					},
				},
				{
					title: 'Cubbies - Craft and Snack',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Naomi Lugo'],
					roles: {
						'Cubbies Director': ['David Lugo'],
						'Cubbies Snack and Craft Helper': ['Allie Fullerton', 'Jared Fullerton', 'Naomi Lugo', 'Niki McClymonds'],
					},
				},
				{
					title: 'Setup - During Club',
					location: 'Worship Center',
					inCharge: ['Andrew Hale'],
					roles: {
						'Setup - During Club': ['Andrew Hale', 'Isaiah Parker', 'Gavin Sylvia', 'Baxter Williamson'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Cheryl Zeigler'],
					roles: { Nursery: ['Cheryl Zeigler'] },
				},
			],
		},
		{
			time: '7:25 pm',
			events: [
				{
					title: 'Closing Assembly',
					location: 'Worship Center',
					inCharge: ['Andrew Hale'],
					roles: {
						'Check-Out': ['Chelsea Hale', 'Sarah Fox'],
						Director: ['Andrew Hale'],
						'Leader - Closing Assembly': [
							'Chris Butler',
							'Chip Crawford',
							'Karly Crawford',
							'Mike Criscolo',

							'Keith McClymonds',

							'Nick Smith',
							'Josh Thomas',
							'Jacob Smith',
							'Sonia Williamson',
							'Jimmy Williamson',
						],
					},
				},
				{
					title: 'Setup - After Club',
					location: 'Worship Center',
					inCharge: ['Nick Smith'],
					roles: {
						'Setup - After Club': ['Isaiah Parker', 'Gavin Sylvia', 'Baxter Williamson'],
					},
				},
				{
					title: 'Cubbies - Clean Up',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Naomi Lugo'],
					roles: {
						'Cubbies Setup - After Club': ['David Lugo', 'Naomi Lugo', 'Jared Fullerton', 'Allie Fullerton'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Cheryl Zeigler'],
					roles: { Nursery: ['Cheryl Zeigler', 'Ella Albert', 'Lexi Boardman'] },
				},
			],
		},
	],
};
export default schedule;
