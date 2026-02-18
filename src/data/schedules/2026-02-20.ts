import type { Schedule } from '@/@types/global';

const schedule: Schedule = {
	date: '2026-02-20',
	out: [
		'Jacob Smith',
		'Ethan Walters',
		'Holly Raiche',
		'Levi Walters',
		'Johnny Johnson',
		'Karen Johnson',
		'Corrine Thomas',
		'Karly Crawford',
		'Chip Crawford',
		'Heather Fick',
		'Andrew Hale',
		'Chelsea Hale',
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
						'Setup - Before Club': ['Keith McClymonds', 'Niki McClymonds'],
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
					inCharge: ['Nikki Criscolo'],
					roles: {
						'Check-In': ['Nikki Criscolo', 'Sarah Fox'],
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
						'Music Leader - Sparks + T&T': ['CJ North', 'Evelyn Larson', 'Julia Larson', 'Amelia Munger'],
						AV: ['Josh Larson'],
						'Music Helper': [
							'Chris Butler',
							'Isaiah Parker',
							'Gavin Sylvia',
							'Josh Thomas',
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
					inCharge: ['Brad Parker'],
					roles: {
						'Fast Track': ['Brad Parker', 'Josh Porter', 'Niki McClymonds', 'Mike Criscolo', 'Nick Smith'],
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
					inCharge: ['CJ North'],
					roles: {
						'Game Director': ['CJ North'],
						'Team Helper': ['Julia Larson', 'Amelia Munger', 'Josh Thomas', 'Chip Crawford', 'Josh Porter'],
						'Team Captain': [
							'Josh Larson',
							'Chris Butler',
							'Nick Smith',
							'Jimmy Williamson',
							'Niki McClymonds',
							'Mike Criscolo',
						],
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
					inCharge: ['Nikki Criscolo'],
					roles: {
						'Progress Tracking': ['Nikki Criscolo', 'Sarah Fox'],
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
							'Niki McClymonds',
							'Josh Porter',
							'Mike Criscolo',
							'Nick Smith',
							'CJ North',
							'Chris Butler',
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
						'Sparks - Activities': ['Sonia Williamson', 'Jimmy Williamson', 'Corrine Thomas'],
						'Fast Track - Sparks': ['Josh Thomas', 'Amelia Munger', 'Ella Albert', 'Lexi Boardman'],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					description: 'Track progress for Sparks who completed sections.',
					inCharge: ['Nikki Criscolo'],
					roles: {
						'Progress Tracking': ['Nikki Criscolo', 'Sarah Fox'],
						Director: ['Keith McClymonds'],
					},
				},

				{
					title: 'Setup - During Club',
					location: 'Worship Center',
					inCharge: ['Josh Larson'],
					roles: {
						'Setup - During Club': ['Josh Larson', 'Isaiah Parker', 'Gavin Sylvia', 'Baxter Williamson'],
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
						'Lesson Helper': [
							'Lexi Boardman',
							'Ella Albert',
							'Josh Thomas',
							'Amelia Munger',
							'Sonia Williamson',
							'Jimmy Williamson',
						],
					},
				},
				{
					title: 'T&T Small Groups',
					location: 'Worship Center + Foundations Room',
					inCharge: ['Niki McClymonds'],
					smallGroupQuestions: [],
					roles: {
						'Small Group Leader': [
							'Chris Butler',
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
					inCharge: ['Nikki Criscolo'],
					roles: {
						'Progress Tracking': ['Sarah Fox'],
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
						'Setup - During Club': ['Josh Larson', 'Isaiah Parker', 'Gavin Sylvia', 'Baxter Williamson'],
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
					inCharge: ['Keith McClymonds'],
					roles: {
						'Check-Out': ['Sarah Fox'],
						Director: ['Keith McClymonds'],
						'Leader - Closing Assembly': [
							'Chris Butler',
							'Josh Porter',
							'Mike Criscolo',
							'Evelyn Larson',
							'Julia Larson',
							'Niki McClymonds',
							'CJ North',
							'Nick Smith',

							'Josh Thomas',
							'Amelia Munger',
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
						'Setup - After Club': ['Josh Larson', 'Isaiah Parker', 'Gavin Sylvia', 'Baxter Williamson'],
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
