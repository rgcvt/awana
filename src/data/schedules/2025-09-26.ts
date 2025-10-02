import type { Schedule } from '@/@types/global';

const schedule: Schedule = {
	date: '2025-09-26',
	out: [],
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
						'Cubbies Setup - Before Club': ['David Lugo', 'Naomi Lugo', 'Allie Fullerton', 'Jared Fullerton'],
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
						'Check-In': ['Chelsea Hale', 'Karly Crawford', 'Sarah Fox', 'Heather Fick'],
						Director: ['Andrew Hale'],
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
							'Isaiah Parker',
							'Gavin Sylvia',
							'Corrine Thomas',
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
					inCharge: ['Keith McClymonds'],
					roles: {
						'Fast Track': ['Keith McClymonds', 'Niki McClymonds', 'Chip Crawford', 'Nick Smith', 'Chris Butler'],
					},
				},
				{
					title: 'Cubbies - Check-In and Games',
					location: "Children's Sunday School Rooms",
					inCharge: ['Jared Fullerton', 'David Lugo'],
					roles: {
						'Cubbies Game Leader': ['Jared Fullerton', 'David Lugo'],
						'Cubbies Check-in': ['Allie Fullerton', 'Naomi Lugo'],
						'Cubbies Helper': ['Kenzie McClymonds'],
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
					inCharge: ['Andrew Hale'],
					roles: {
						'Game Director': ['Andrew Hale', 'CJ North'],
						'Team Helper': [
							'Julia Larson',
							'Amelia Munger',
							'Corrine Thomas',
							'Josh Thomas',
							'Chip Crawford',
							'Keith McClymonds',
						],
						'Team Captain': ['Josh Larson', 'Chris Butler', 'Nick Smith', 'Jimmy Williamson', 'Niki McClymonds'],
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
						'Progress Tracking': ['Chelsea Hale', 'Karly Crawford', 'Sarah Fox', 'Heather Fick'],
					},
				},
				{
					title: 'Cubbies - Music',
					location: "Children's Sunday School Rooms",
					inCharge: ['Jared Fullerton', 'David Lugo'],
					roles: {
						'Music Leader - Cubbies': ['Evelyn Larson'],
						'Cubbies Director': ['Jared Fullerton', 'David Lugo'],
						'Cubbies Music Helper': ['Allie Fullerton', 'Kenzie McClymonds', 'Naomi Lugo'],
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
							'Niki McClymonds',
							'Chip Crawford',
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
					inCharge: ['Chelsea Hale'],
					roles: {
						'Progress Tracking': ['Chelsea Hale', 'Karly Crawford', 'Sarah Fox', 'Heather Fick'],
						Director: ['Andrew Hale'],
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
					inCharge: ['Jared Fullerton', 'David Lugo'],
					roles: {
						'Cubbies Teacher': ['Jared Fullerton', 'David Lugo'],
						'Cubbies Puppeteer': ['Allie Fullerton', 'Naomi Lugo'],
						'Cubbies Lesson Helper': ['Kenzie McClymonds'],
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
						'Lesson Helper': ['Corrine Thomas', 'Josh Thomas', 'Amelia Munger', 'Sonia Williamson', 'Jimmy Williamson'],
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
							'Karly Crawford',
							'Evelyn Larson',
							'Julia Larson',
							'Niki McClymonds',
							'Keith McClymonds',
							'CJ North',
							'Nick Smith',
						],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					inCharge: ['Chelsea Hale'],
					roles: {
						'Progress Tracking': ['Chelsea Hale', 'Sarah Fox'],
						Director: ['Andrew Hale'],
					},
				},
				{
					title: 'Cubbies - Snack and Craft',
					location: "Children's Sunday School Rooms",
					inCharge: ['Jared Fullerton', 'David Lugo'],
					roles: {
						'Cubbies Director': ['Jared Fullerton', 'David Lugo'],
						'Cubbies Snack and Craft Helper': ['Allie Fullerton', 'Kenzie McClymonds', 'Naomi Lugo'],
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
					roles: { Nursery: ['Cheryl Zeigler', 'Ella Albert', 'Lexi Boardman'] },
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
							'Evelyn Larson',
							'Julia Larson',
							'Niki McClymonds',
							'Keith McClymonds',
							'CJ North',
							'Nick Smith',
							'Corrine Thomas',
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
					title: 'Cubbies - Cleanup',
					location: "Children's Sunday School Rooms",
					inCharge: ['Jared Fullerton', 'David Lugo'],
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
