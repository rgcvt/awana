import type { Schedule } from '@/@types/global';

const schedule: Schedule = {
	date: '2026-03-20',
	out: [
		'Jacob Smith',
		'Ethan Walters',
		'Holly Raiche',
		'Levi Walters',
		'Johnny Johnson',
		'Karen Johnson',
		'Andrew Hale',
		'Chelsea Hale',
		'Lexi Boardman',
		'Gavin Sylvia',
		'Corrine Thomas',
		'Karly Crawford',
		'Chip Crawford',
		'Amelia Munger',
		'Chris Butler',
		'Cheryl Zeigler',
	],
	schedule: [
		{
			time: '5:35 pm',
			events: [
				{
					title: 'Setup',
					location: 'Worship Center',
					inCharge: ['Keith McClymonds'],
					roles: {
						'Setup - Before Club': ['Keith McClymonds', 'Nick Smith'],
						'Cubbies Setup - Before Club': ['David Lugo', 'Naomi Lugo'],
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
					inCharge: ['Nikki Criscolo'],
					roles: {
						'Check-In': ['Nikki Criscolo', 'Sarah Fox', 'Heather Fick'],
						Director: ['Keith McClymonds'],
					},
				},
				{
					title: 'Music',
					location: 'Worship Center',
					description:
						'This is a loosely structured time that allows kids to jump in and participate as they arrive from Check-In or Fast Track. ',
					inCharge: ['CJ North'],
					roles: {
						'Music Leader - Sparks + T&T': ['CJ North', 'Evelyn Larson', 'Julia Larson'],
						AV: ['Josh Larson'],
						'Music Helper': [
							'Isaiah Parker',
							'Baxter Williamson',
							'Jimmy Williamson',
							'Sonia Williamson',
							'Josh Thomas',
						],
					},
				},
				{
					title: 'T&T Fast Track',
					description: 'Fast Track is the time when kids recite scriptures they have memorized.',
					location: 'Foundations Room',
					inCharge: ['Niki McClymonds'],
					roles: {
						'Fast Track': ['Niki McClymonds', 'Mike Criscolo', 'Nick Smith', 'Josh Porter'],
					},
				},
				{
					title: 'Cubbies - Check-In',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Naomi Lugo'],
					roles: {
						'Cubbies Game Leader': ['David Lugo'],
						'Cubbies Check-in': ['Naomi Lugo'],
						'Cubbies Helper': ['Jared Fullerton', 'Allie Fullerton', 'Kenzie McClymonds'],
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
						Director: ['Keith McClymonds'],
						'Game Director': ['Brad Parker', 'CJ North'],
						'Team Helper': ['Julia Larson', 'Josh Thomas', 'Josh Porter'],
						'Team Captain': ['Josh Larson', 'Nick Smith', 'Jimmy Williamson', 'Niki McClymonds', 'Mike Criscolo'],
						'Game Helper': ['Isaiah Parker'],
						'Score Keeper': ['Baxter Williamson'],
					},
				},
				{
					title: 'Sparks Activity Setup',
					location: 'Foundations Room / Hallway',
					inCharge: ['Sonia Williamson'],
					roles: {
						'Sparks - Activity Setup': ['Sonia Williamson', 'Ella Albert'],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					description: 'Track progress for T&T kids who completed sections.',
					inCharge: ['Nikki Criscolo'],
					roles: {
						'Progress Tracking': ['Nikki Criscolo', 'Sarah Fox', 'Heather Fick'],
					},
				},
				{
					title: 'Cubbies - Music',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Naomi Lugo'],
					roles: {
						'Music Leader - Cubbies': ['Evelyn Larson'],
						'Cubbies Director': ['David Lugo'],
						'Cubbies Music Helper': ['Allie Fullerton', 'Jared Fullerton', 'Kenzie McClymonds', 'Naomi Lugo'],
					},
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
							'Niki McClymonds',

							'Mike Criscolo',
							'Nick Smith',
							'CJ North',

							'Evelyn Larson',
							'Julia Larson',
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
						'Fast Track - Sparks': ['Josh Thomas', 'Ella Albert'],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					description: 'Track progress for Sparks who completed sections.',
					inCharge: ['Nikki Criscolo'],
					roles: {
						'Progress Tracking': ['Nikki Criscolo', 'Sarah Fox', 'Heather Fick'],
						Director: ['Keith McClymonds'],
					},
				},

				{
					title: 'Setup - During Club',
					location: 'Worship Center',
					inCharge: ['Josh Larson'],
					roles: {
						'Setup - During Club': ['Josh Larson', 'Isaiah Parker', 'Baxter Williamson', 'Josh Porter'],
					},
				},
				{
					title: 'Cubbies - Lesson',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Naomi Lugo'],
					roles: {
						'Cubbies Teacher': ['David Lugo'],
						'Cubbies Puppeteer': ['Naomi Lugo'],
						'Cubbies Lesson Helper': ['Allie Fullerton', 'Jared Fullerton', 'Kenzie McClymonds'],
					},
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
						'Lesson Helper': ['Ella Albert', 'Josh Thomas', 'Sonia Williamson', 'Jimmy Williamson'],
					},
				},
				{
					title: 'T&T Small Groups',
					location: 'Worship Center + Foundations Room',
					inCharge: ['Niki McClymonds'],
					smallGroupQuestions: [],
					roles: {
						'Small Group Leader': [
							'Josh Porter',
							'Mike Criscolo',
							'Evelyn Larson',
							'Julia Larson',
							'Niki McClymonds',
							'CJ North',
							'Nick Smith',
						],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					inCharge: ['Sarah Fox'],
					roles: {
						'Progress Tracking': ['Sarah Fox', 'Heather Fick'],
						Director: ['Keith McClymonds'],
					},
				},
				{
					title: 'Cubbies - Craft and Snack',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Naomi Lugo'],
					roles: {
						'Cubbies Director': ['David Lugo'],
						'Cubbies Snack and Craft Helper': ['Allie Fullerton', 'Jared Fullerton', 'Kenzie McClymonds', 'Naomi Lugo'],
					},
				},
				{
					title: 'Setup - During Club',
					location: 'Worship Center',
					inCharge: ['Josh Larson'],
					roles: {
						'Setup - During Club': ['Josh Larson', 'Isaiah Parker', 'Baxter Williamson'],
					},
				},
			],
		},
		{
			time: '7:25 pm',
			events: [
				{
					title: 'Closing Assembly',
					location: 'Worship Center',
					inCharge: ['Keith McClymonds'],
					roles: {
						'Check-Out': ['Heather Fick', 'Sarah Fox'],
						Director: ['Keith McClymonds'],
						'Leader - Closing Assembly': [
							'Mike Criscolo',
							'Evelyn Larson',
							'Julia Larson',
							'Niki McClymonds',
							'CJ North',
							'Nick Smith',
							'Ella Albert',
							'Josh Thomas',
							'Josh Porter',
							'Sonia Williamson',
							'Jimmy Williamson',
						],
					},
				},
				{
					title: 'Setup - After Club',
					location: 'Worship Center',
					inCharge: ['Josh Larson'],
					roles: {
						'Setup - After Club': ['Josh Larson', 'Isaiah Parker', 'Baxter Williamson'],
					},
				},
				{
					title: 'Cubbies - Clean Up',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Naomi Lugo'],
					roles: {
						'Cubbies Setup - After Club': [
							'David Lugo',
							'Naomi Lugo',
							'Kenzie McClymonds',
							'Jared Fullerton',
							'Allie Fullerton',
						],
					},
				},
			],
		},
	],
};
export default schedule;
