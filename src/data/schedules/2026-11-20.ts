import type { Schedule } from '@/@types/global';

const schedule: Schedule = {
	date: '2026-11-20',
	out: [
		'Julia Larson',
		'Gabrielle Stoughton',
		'Karen Johnson',
		'Amelia Munger',
		'Caleb Munger',
		'Chelsea Hale',
		'Andrew Hale',
		'Nick Smith',
	],
	schedule: [
		{
			time: '5:35 pm',
			events: [
				{
					title: 'Setup',
					location: 'Worship Center',
					inCharge: ['Josh Porter'],
					roles: {
						'Setup - Before Club': ['Josh Porter', 'Levi Wetherald'],
						'Cubbies Setup - Before Club': ['Ethan Walters', 'Emma Walters'],
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
					inCharge: ['Sara Fox'],
					roles: {
						'Check-In': ['Heather Fick', 'Sara Fox', 'Karly Crawford'],
						Director: ['Keith McClymonds'],
					},
				},
				{
					title: 'Music',
					location: 'Worship Center',
					description:
						'This is a loosely structured time that allows kids to jump in and participate as they arrive from Check-In or Fast Track. ',
					inCharge: ['Brad Parker'],
					roles: {
						'Music Leader - Sparks + T&T': ['Brad Parker', 'Grace Boardman', 'Lexi Boardman'],
						AV: ['Josh Larson'],
						'Music Helper': [
							'Chris Butler',
							'Simon Parker',
							'Jimmy Williamson',
							'Rocco Williamson',
							'Sonia Williamson',
							'Hayden Stanislas',
							'CJ North',
							'Ethan Stoughton',
							'Gavin Stoughton',
							'Baxter Williamson',
						],
					},
				},
				{
					title: 'T&T Fast Track',
					description: 'Fast Track is the time when kids recite scriptures they have memorized.',
					location: 'Foundations Room',
					inCharge: ['Niki McClymonds'],
					roles: {
						'Fast Track': [
							'Niki McClymonds',
							'Chip Crawford',
							'Tyler Quinn',
							'David Lugo',
							'Levi Wetherald',
							'Josh Porter',
						],
					},
				},
				{
					title: 'Cubbies - Check-In',
					location: "Children's Sunday School Rooms",
					inCharge: ['Ethan Walters', 'Emma Walters'],
					roles: {
						'Cubbies Game Leader': ['Emma Walters'],
						'Cubbies Check-in': ['Ethan Walters'],
						'Cubbies Helper': ['Jared Fullerton', 'Lydia Johnson', 'Kenzie McClymonds', 'Isaiah Parker'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Cheryl Zeigler'],
					roles: {
						Nursery: ['Cheryl Zeigler'],
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
						'Team Helper': [
							'Simon Parker',
							'Rocco Williamson',
							'Chip Crawford',
							'Niki McClymonds',
							'Tyler Quinn',
							'David Lugo',
							'Josh Larson',
							'Brad Parker',
							'Ethan Stoughton',
						],
						'Team Captain': ['Jimmy Williamson', 'Josh Porter', 'Levi Wetherald', 'Chris Butler', 'Hayden Stanislas'],
						'Game Helper': ['Grace Boardman', 'Rocco Williamson'],
						'Score Keeper': ['Baxter Williamson'],
					},
				},
				{
					title: 'Sparks Activity Setup',
					location: 'Foundations Room / Hallway',
					inCharge: ['Sonia Williamson'],
					roles: {
						'Sparks - Activity Setup': ['Sonia Williamson', 'Gavin Stoughton'],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					description: 'Track progress for T&T kids who completed sections.',
					inCharge: ['Sara Fox'],
					roles: {
						'Progress Tracking': ['Heather Fick', 'Sara Fox', 'Karly Crawford'],
					},
				},
				{
					title: 'Cubbies - Music',
					location: "Children's Sunday School Rooms",
					inCharge: ['Ethan Walters', 'Emma Walters'],
					roles: {
						'Music Leader - Cubbies': ['Emma Walters'],
						'Cubbies Director': ['Ethan Walters'],
						'Cubbies Music Helper': ['Jared Fullerton', 'Lydia Johnson', 'Kenzie McClymonds', 'Isaiah Parker'],
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
							'Chris Butler',
							'Chip Crawford',
							'Josh Porter',
							'Tyler Quinn',
							'Hayden Stanislas',
							'David Lugo',

							'Josh Larson',
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
						'Fast Track - Sparks': [
							'Simon Parker',
							'Levi Wetherald',
							'Rocco Williamson',
							'Grace Boardman',
							'Ethan Stoughton',
						],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					description: 'Track progress for Sparks who completed sections.',
					inCharge: ['Sara Fox'],
					roles: {
						'Progress Tracking': ['Heather Fick', 'Sara Fox', 'Karly Crawford'],
						Director: ['Keith McClymonds'],
					},
				},

				{
					title: 'Setup - During Club',
					location: 'Worship Center',
					inCharge: ['CJ North'],
					roles: {
						'Setup - During Club': ['CJ North', 'Baxter Williamson', 'Gavin Stoughton'],
					},
				},
				{
					title: 'Cubbies - Lesson',
					location: "Children's Sunday School Rooms",
					inCharge: ['Ethan Walters', 'Emma Walters'],
					roles: {
						'Cubbies Teacher': ['Ethan Walters'],
						'Cubbies Puppeteer': ['Emma Walters', 'Kenzie McClymonds'],
						'Cubbies Lesson Helper': ['Jared Fullerton', 'Lydia Johnson', 'Isaiah Parker'],
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
							'Sonia Williamson',
							'Jimmy Williamson',
							'Simon Parker',
							'Levi Wetherald',
							'Rocco Williamson',
							'Grace Boardman',
							'Ethan Stoughton',
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
							'Chip Crawford',
							'Niki McClymonds',
							'Josh Porter',
							'Tyler Quinn',
							'Hayden Stanislas',
							'David Lugo',
							'Josh Larson',
						],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					inCharge: ['Sara Fox'],
					roles: {
						'Progress Tracking': ['Heather Fick', 'Sara Fox', 'Karly Crawford'],
						Director: ['Keith McClymonds'],
					},
				},
				{
					title: 'Cubbies - Craft and Snack',
					location: "Children's Sunday School Rooms",
					inCharge: ['Ethan Walters', 'Emma Walters'],
					roles: {
						'Cubbies Director': ['Ethan Walters'],
						'Cubbies Snack and Craft Helper': [
							'Emma Walters',
							'Jared Fullerton',
							'Lydia Johnson',
							'Kenzie McClymonds',
							'Isaiah Parker',
						],
					},
				},
				{
					title: 'Setup - During Club',
					location: 'Worship Center',
					inCharge: ['CJ North'],
					roles: {
						'Setup - During Club': ['CJ North', 'Baxter Williamson', 'Gavin Stoughton'],
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
		{
			time: '7:25 pm',
			events: [
				{
					title: 'Closing Assembly',
					location: 'Worship Center',
					inCharge: ['Keith McClymonds'],
					roles: {
						'Check-Out': ['Sara Fox', 'Karly Crawford'],
						Director: ['Keith McClymonds'],
						'Leader - Closing Assembly': [
							'Chris Butler',
							'Simon Parker',
							'Levi Wetherald',
							'Jimmy Williamson',
							'Rocco Williamson',
							'Sonia Williamson',
							'Grace Boardman',
							'Chip Crawford',
							'Niki McClymonds',
							'Josh Porter',
							'Tyler Quinn',
							'Hayden Stanislas',
							'David Lugo',
							'Ethan Stoughton',
							'Brad Parker',
							'Josh Larson',
						],
					},
				},
				{
					title: 'Setup - After Club',
					location: 'Worship Center',
					inCharge: ['CJ North'],
					roles: {
						'Setup - After Club': ['CJ North', 'Baxter Williamson', 'Gavin Stoughton'],
					},
				},
				{
					title: 'Cubbies - Clean Up',
					location: "Children's Sunday School Rooms",
					inCharge: ['Ethan Walters', 'Emma Walters'],
					roles: {
						'Cubbies Setup - After Club': [
							'Ethan Walters',
							'Emma Walters',
							'Jared Fullerton',
							'Lydia Johnson',
							'Kenzie McClymonds',
							'Isaiah Parker',
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
