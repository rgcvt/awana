import type { Schedule } from '@/@types/global';

const schedule: Schedule = {
	date: '2026-10-16',
	out: [
		'Julia Larson',
		'Cheryl Zeigler',
		'Karen Johnson',
		'Heather Fick',
		'Amelia Munger',
		'Ethan Walters',
		'Jared Fullerton',
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
						'Cubbies Setup - Before Club': ['David Lugo', 'Emma Walters'],
						Nursery: ['Gabrielle Stoughton'],
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
						'Check-In': ['Chelsea Hale', 'Sara Fox', 'Karly Crawford'],
						Director: ['Andrew Hale'],
					},
				},
				{
					title: 'Music',
					location: 'Worship Center',
					description:
						'This is a loosely structured time that allows kids to jump in and participate as they arrive from Check-In or Fast Track. ',
					inCharge: ['Andrew Hale'],
					roles: {
						'Music Leader - Sparks + T&T': ['Andrew Hale', 'Grace Boardman', 'Lexi Boardman'],
						AV: ['Josh Larson'],
						'Music Helper': [
							'Chris Butler',
							'Simon Parker',
							'Levi Weatherald',
							'Jimmy Williamson',
							'Rocco Williamson',
							'Sonia Williamson',
							'Josh Porter',
							'Hayden Stanislas',
							'CJ North',
							'Caleb Munger',

							'Gavin Stoughton',
							'Baxter Williamson',
						],
					},
				},
				{
					title: 'T&T Fast Track',
					description: 'Fast Track is the time when kids recite scriptures they have memorized.',
					location: 'Foundations Room',
					inCharge: ['Keith McClymonds'],
					roles: {
						'Fast Track': [
							'Brad Parker',
							'Keith McClymonds',
							'Niki McClymonds',
							'Chip Crawford',
							'Tyler Quinn',

							'Nick Smith',
						],
					},
				},
				{
					title: 'Cubbies - Check-In',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Emma Walters'],
					roles: {
						'Cubbies Game Leader': ['Emma Walters'],
						'Cubbies Check-in': ['David Lugo'],
						'Cubbies Helper': ['Jared Fullerton', 'Ethan Stoughton', 'Kenzie McClymonds', 'Isaiah Parker'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Gabrielle Stoughton'],
					roles: {
						Nursery: ['Gabrielle Stoughton'],
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
							'Keith McClymonds',
							'Niki McClymonds',
							'Tyler Quinn',
							'Nick Smith',

							'Andrew Hale',
							'Josh Larson',
							'Brad Parker',
						],
						'Team Captain': ['Jimmy Williamson', 'Josh Porter', 'Levi Weatherald', 'Chris Butler', 'Hayden Stanislas'],
						'Game Helper': ['Grace Boardman', 'Rocco Williamson'],
						'Score Keeper': ['Baxter Williamson'],
					},
				},
				{
					title: 'Sparks Activity Setup',
					location: 'Foundations Room / Hallway',
					inCharge: ['Sonia Williamson'],
					roles: {
						'Sparks - Activity Setup': ['Sonia Williamson', 'Gavin Stoughton', 'Caleb Munger'],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					description: 'Track progress for T&T kids who completed sections.',
					inCharge: ['Chelsea Hale'],
					roles: {
						'Progress Tracking': ['Chelsea Hale', 'Sara Fox', 'Karly Crawford'],
					},
				},
				{
					title: 'Cubbies - Music',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Emma Walters'],
					roles: {
						'Music Leader - Cubbies': ['Emma Walters'],
						'Cubbies Director': ['David Lugo'],
						'Cubbies Music Helper': ['Jared Fullerton', 'Ethan Stoughton', 'Kenzie McClymonds', 'Isaiah Parker'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Gabrielle Stoughton'],
					roles: { Nursery: ['Gabrielle Stoughton', 'Lexi Boardman'] },
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
							'Niki McClymonds',
							'Chris Butler',
							'Chip Crawford',
							'Josh Porter',
							'Tyler Quinn',
							'Nick Smith',
							'Hayden Stanislas',

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
						'Fast Track - Sparks': ['Simon Parker', 'Levi Weatherald', 'Rocco Williamson', 'Grace Boardman'],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					description: 'Track progress for Sparks who completed sections.',
					inCharge: ['Chelsea Hale'],
					roles: {
						'Progress Tracking': ['Chelsea Hale', 'Sara Fox', 'Karly Crawford'],
						Director: ['Andrew Hale'],
					},
				},

				{
					title: 'Setup - During Club',
					location: 'Worship Center',
					inCharge: ['CJ North'],
					roles: {
						'Setup - During Club': ['CJ North', 'Baxter Williamson', 'Caleb Munger', 'Gavin Stoughton'],
					},
				},
				{
					title: 'Cubbies - Lesson',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Emma Walters'],
					roles: {
						'Cubbies Teacher': ['David Lugo'],
						'Cubbies Puppeteer': ['Emma Walters', 'Kenzie McClymonds'],
						'Cubbies Lesson Helper': ['Jared Fullerton', 'Ethan Stoughton', 'Isaiah Parker'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Gabrielle Stoughton'],
					roles: { Nursery: ['Gabrielle Stoughton', 'Lexi Boardman'] },
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
							'Levi Weatherald',
							'Rocco Williamson',
							'Grace Boardman',
						],
					},
				},
				{
					title: 'T&T Small Groups',
					location: 'Worship Center + Foundations Room',
					inCharge: ['Keith McClymonds', 'Niki McClymonds'],
					smallGroupQuestions: [],
					roles: {
						'Small Group Leader': [
							'Chris Butler',
							'Chip Crawford',
							'Keith McClymonds',
							'Niki McClymonds',
							'Josh Porter',
							'Tyler Quinn',
							'Nick Smith',
							'Hayden Stanislas',

							'Josh Larson',
						],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					inCharge: ['Chelsea Hale'],
					roles: {
						'Progress Tracking': ['Chelsea Hale', 'Sara Fox', 'Karly Crawford'],
						Director: ['Andrew Hale'],
					},
				},
				{
					title: 'Cubbies - Craft and Snack',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Emma Walters'],
					roles: {
						'Cubbies Director': ['David Lugo'],
						'Cubbies Snack and Craft Helper': [
							'Emma Walters',
							'Jared Fullerton',
							'Ethan Stoughton',
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
						'Setup - During Club': ['CJ North', 'Baxter Williamson', 'Caleb Munger', 'Gavin Stoughton'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Gabrielle Stoughton'],
					roles: { Nursery: ['Gabrielle Stoughton', 'Lexi Boardman'] },
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
						'Check-Out': ['Chelsea Hale', 'Sara Fox', 'Karly Crawford'],
						Director: ['Andrew Hale'],
						'Leader - Closing Assembly': [
							'Chris Butler',
							'Simon Parker',
							'Levi Weatherald',
							'Jimmy Williamson',
							'Rocco Williamson',
							'Sonia Williamson',
							'Grace Boardman',
							'Chip Crawford',
							'Keith McClymonds',
							'Niki McClymonds',
							'Josh Porter',
							'Tyler Quinn',
							'Nick Smith',
							'Hayden Stanislas',

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
						'Setup - After Club': ['CJ North', 'Baxter Williamson', 'Caleb Munger', 'Gavin Stoughton'],
					},
				},
				{
					title: 'Cubbies - Clean Up',
					location: "Children's Sunday School Rooms",
					inCharge: ['David Lugo', 'Emma Walters'],
					roles: {
						'Cubbies Setup - After Club': [
							'David Lugo',
							'Emma Walters',
							'Jared Fullerton',
							'Ethan Stoughton',
							'Kenzie McClymonds',
							'Isaiah Parker',
						],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Gabrielle Stoughton'],
					roles: { Nursery: ['Gabrielle Stoughton', 'Lexi Boardman'] },
				},
			],
		},
	],
};
export default schedule;
