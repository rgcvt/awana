import type { Schedule } from '@/@types/global';

const schedule: Schedule = {
	date: '2025-10-24',
	out: [
		'Jacob Smith',
		'Ethan Walters',
		'Holly Raiche',
		'Chris Butler',
		'Jared Fullerton',
		'Julia Larson',
		'Cheryl Zeigler',
		'Heather Fick',
		'Naomi Lugo',
		'David Lugo',
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
						'Cubbies Setup - Before Club': ['Jared Fullerton'],
						Nursery: ['Karly Crawford'],
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
						'Music Leader - Sparks + T&T': ['CJ North', 'Evelyn Larson', 'Amelia Munger'],
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
						'Fast Track': ['Keith McClymonds', 'Niki McClymonds', 'Mike Criscolo', 'Nick Smith'],
					},
				},
				{
					title: 'Cubbies - Check-In',
					location: "Children's Sunday School Rooms",
					inCharge: ['Jared Fullerton'],
					roles: {
						'Cubbies Game Leader': ['Jared Fullerton'],
						'Cubbies Check-in': ['Allie Fullerton'],
						'Cubbies Helper': ['Chip Crawford', 'Kenzie McClymonds'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Karly Crawford'],
					roles: {
						Nursery: ['Karly Crawford', 'Lexi Boardman', 'Ella Albert'],
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
						'Team Helper': ['Amelia Munger', 'Corrine Thomas', 'Josh Thomas', 'Keith McClymonds'],
						'Team Captain': ['Josh Larson', 'Nick Smith', 'Jimmy Williamson', 'Niki McClymonds', 'Mike Criscolo'],
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
					inCharge: ['Jared Fullerton'],
					roles: {
						'Music Leader - Cubbies': ['Evelyn Larson'],
						'Cubbies Director': ['Jared Fullerton'],
						'Cubbies Music Helper': ['Allie Fullerton', 'Kenzie McClymonds', 'Chip Crawford'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Karly Crawford'],
					roles: { Nursery: ['Karly Crawford'] },
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
							'Mike Criscolo',
							'Nick Smith',
							'CJ North',
							'Evelyn Larson',
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
						'Progress Tracking': ['Chelsea Hale', 'Nikki Criscolo', 'Sarah Fox', 'Heather Fick'],
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
					inCharge: ['Jared Fullerton'],
					roles: {
						'Cubbies Teacher': ['Jared Fullerton'],
						'Cubbies Puppeteer': ['Allie Fullerton'],
						'Cubbies Lesson Helper': ['Chip Crawford', 'Kenzie McClymonds'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Karly Crawford'],
					roles: { Nursery: ['Karly Crawford'] },
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
							'Corrine Thomas',
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
					inCharge: ['Keith McClymonds', 'Niki McClymonds'],
					smallGroupQuestions: [],
					roles: {
						'Small Group Leader': [
							'Mike Criscolo',
							'Evelyn Larson',
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
					title: 'Cubbies - Craft and Snack',
					location: "Children's Sunday School Rooms",
					inCharge: ['Jared Fullerton'],
					roles: {
						'Cubbies Director': ['Jared Fullerton'],
						'Cubbies Snack and Craft Helper': ['Allie Fullerton', 'Chip Crawford', 'Kenzie McClymonds'],
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
					inCharge: ['Karly Crawford'],
					roles: { Nursery: ['Karly Crawford'] },
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
							'Mike Criscolo',
							'Evelyn Larson',
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
					title: 'Cubbies - Clean Up',
					location: "Children's Sunday School Rooms",
					inCharge: ['Jared Fullerton'],
					roles: {
						'Cubbies Setup - After Club': ['Jared Fullerton', 'Kenzie McClymonds', 'Allie Fullerton', 'Chip Crawford'],
					},
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Karly Crawford'],
					roles: { Nursery: ['Karly Crawford', 'Ella Albert', 'Lexi Boardman'] },
				},
			],
		},
	],
};
export default schedule;
