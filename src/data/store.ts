import type { Schedule } from '@/@types/global';

const schedule: Schedule = {
	date: '2025-01-01',
	out: ['Ethan Walters'],
	schedule: [
		{
			time: '5:35 pm',
			events: [
				{
					title: 'Setup',
					location: 'Worship Center',
					inCharge: ['Andrew Hale'],
					roles: {
						'Setup - Before Store': ['Andrew Hale', 'Chelsea Hale'],
						'Cubbies Setup - Before Club': ['David Lugo'],
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
						'Check-In (Store Night)': ['Chelsea Hale', 'Sara Fox', 'Heather Fick'],
						Director: ['Andrew Hale'],
						'Store Facilitator': ['Niki McClymonds'],
					},
				},
				{
					title: 'Music',
					location: 'Worship Center',
					description:
						'This is a loosely structured time that allows kids to jump in and participate as they arrive from Check-In or Fast Track. ',
					inCharge: ['CJ North'],
					roles: {
						'Music Leader - Sparks + T&T': ['CJ North', 'Julia Larson', 'Amelia Munger'],
						AV: ['Josh Larson'],
						'Music Helper': [
							'Chris Butler',
							'Isaiah Parker',
							'Baxter Williamson',
							'Jimmy Williamson',
							'Sonia Williamson',
						],
					},
				},
				{
					title: 'T&T Fast Track',
					description: 'Fast Track is the time when kids recite scriptures they have memorized.',
					location: 'Foundations Room',
					inCharge: ['Keith McClymonds'],
					roles: {
						'Fast Track': ['Keith McClymonds', 'Chip Crawford', 'Karly Crawford', 'Nick Smith'],
					},
				},
				{
					title: 'Cubbies - Check-In',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo'],
					roles: {
						'Cubbies Game Leader': ['David Lugo'],
						'Cubbies Check-in': [],
						'Cubbies Helper': ['Jared Fullerton', 'Kenzie McClymonds'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Cheryl Zeigler'],
					roles: {
						Nursery: ['Cheryl Zeigler', 'Lexi Boardman'],
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
					inCharge: ['CJ North'],
					roles: {
						'Game Director': ['CJ North', 'Andrew Hale'],
						'Team Helper': [
							'Julia Larson',
							'Amelia Munger',
							'Chip Crawford',
							'Karly Crawford',
							'Keith McClymonds',
						],
						'Team Captain': [
							'Josh Larson',
							'Chris Butler',
							'Nick Smith',
							'Jimmy Williamson',
							'Niki McClymonds',
							],
						'Game Helper': ['Isaiah Parker'],
						'Score Keeper': ['Baxter Williamson'],
					},
				},
				{
					title: 'Sparks Activity Setup',
					location: "Cheryl's Office / Hallway",
					inCharge: ['Sonia Williamson'],
					roles: {
						'Sparks - Activity Setup': ['Sonia Williamson', 'Lexi Boardman'],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					description: 'Track progress for T&T kids who completed sections.',
					inCharge: ['Chelsea Hale'],
					roles: {
						'Progress Tracking': ['Chelsea Hale', 'Sara Fox', 'Heather Fick'],
					},
				},
				{
					title: 'Cubbies - Music',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo'],
					roles: {
						'Music Leader - Cubbies': [],
						'Cubbies Director': ['David Lugo'],
						'Cubbies Music Helper': ['Jared Fullerton', 'Kenzie McClymonds'],
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
					title: 'T&T Store',
					location: 'Foundations Room',

					inCharge: ['Keith McClymonds'],
					roles: {
						Director: ['Keith McClymonds'],
						'Store Facilitator': ['Niki McClymonds'],
						'Store Clerk': ['Julia Larson', 'Karly Crawford', 'Chip Crawford'],
						'Filler Games Leader': ['Andrew Hale'],
						'Filler Games Helper': [
							'Isaiah Parker',
							'Baxter Williamson',
							'Nick Smith',
							'Chris Butler',
							'Josh Larson',
							'CJ North',
						],
					},
				},
				{
					title: 'Sparks Activity + Fast Track',
					location: "Cheryl's Office",
					description: 'Large group activity time with one-on-one time for reciting verses.',
					inCharge: ['Jimmy Williamson', 'Sonia Williamson'],
					roles: {
						'Sparks - Activities': ['Sonia Williamson', 'Jimmy Williamson'],
						'Fast Track - Sparks': ['Amelia Munger', 'Lexi Boardman'],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					description: 'Track progress for Sparks who completed sections.',
					inCharge: ['Chelsea Hale'],
					roles: {
						'Progress Tracking': ['Chelsea Hale', 'Sara Fox', 'Heather Fick'],
					},
				},
				{
					title: 'Cubbies - Lesson',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo'],
					roles: {
						'Cubbies Teacher': ['David Lugo'],
						'Cubbies Puppeteer': [],
						'Cubbies Lesson Helper': ['Jared Fullerton', 'Kenzie McClymonds'],
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
					title: 'Sparks Store',
					location: 'Foundations Room',
					inCharge: ['Keith McClymonds'],
					roles: {
						Director: ['Keith McClymonds'],
						'Store Facilitator': ['Niki McClymonds'],
						'Store Clerk': ['Julia Larson', 'Lexi Boardman'],
						'Store Helper': ['Amelia Munger', 'Jimmy Williamson', 'Sonia Williamson'],
						'Filler Games Leader': ['Andrew Hale'],
						'Filler Games Helper': ['Isaiah Parker', 'Baxter Williamson', 'Nick Smith', 'Josh Larson'],
					},
				},
				{
					title: 'T&T Lesson',
					location: "Cheryl's Office",
					inCharge: ['Brad Parker'],
					roles: {
						Teacher: ['Brad Parker'],
						'Lesson Helper': ['CJ North', 'Chris Butler', 'Chip Crawford', 'Karly Crawford'],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					inCharge: ['Chelsea Hale'],
					roles: {
						'Progress Tracking': ['Chelsea Hale', 'Sara Fox'],
					},
				},
				{
					title: 'Cubbies - Craft and Snack',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo'],
					roles: {
						'Cubbies Director': ['David Lugo'],
						'Cubbies Snack and Craft Helper': ['Jared Fullerton', 'Kenzie McClymonds'],
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
						'Check-Out': ['Chelsea Hale', 'Sara Fox'],
						Director: ['Andrew Hale'],
						'Leader - Closing Assembly': [
							'Chris Butler',
							'Chip Crawford',
							'Karly Crawford',
							'Julia Larson',
							'Niki McClymonds',
							'Keith McClymonds',
							'CJ North',
							'Amelia Munger',
							'Sonia Williamson',
							'Jimmy Williamson',
						],
					},
				},
				{
					title: 'Setup - During Club',
					location: 'Worship Center',
					inCharge: ['Josh Larson'],
					roles: {
						'Setup - During Club': ['Josh Larson', 'Isaiah Parker'],
					},
				},
				{
					title: 'Setup - After Club',
					location: 'Worship Center',
					inCharge: ['Nick Smith'],
					roles: {
						'Setup - After Club': ['Nick Smith', 'Baxter Williamson'],
					},
				},
				{
					title: 'Cubbies - Clean Up',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo'],
					roles: {
						'Cubbies Setup - After Club': [
							'David Lugo',
							'Kenzie McClymonds',
							'Jared Fullerton',
							],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Cheryl Zeigler'],
					roles: { Nursery: ['Cheryl Zeigler', 'Lexi Boardman'] },
				},
			],
		},
	],
};
export default schedule;
