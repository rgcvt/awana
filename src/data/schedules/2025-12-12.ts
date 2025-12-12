import type { Schedule } from '@/@types/global';

const schedule: Schedule = {
	date: '2025-12-12',
	out: [
		'Ethan Walters',
		'Holly Raiche',
		'Levi Walters',
		'Heather Fick',
		'CJ North',
		'Chip Crawford',
		'Karly Crawford',
		'Cheryl Zeigler',
		'Josh Thomas',
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
						'Setup - Before Store': ['Andrew Hale', 'Chelsea Hale'],
						'Cubbies Setup - Before Club': ['David Lugo', 'Naomi Lugo'],
						Nursery: ['Johnny Johnson', 'Karen Johnson'],
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
						'Check-In (Store Night)': ['Chelsea Hale', 'Nikki Criscolo', 'Sarah Fox'],
						Director: ['Andrew Hale'],
					},
				},
				{
					title: 'Music',
					location: 'Worship Center',
					description:
						'This is a loosely structured time that allows kids to jump in and participate as they arrive from Check-In or Fast Track. ',
					inCharge: ['Evelyn Larson'],
					roles: {
						'Music Leader - Sparks + T&T': ['Evelyn Larson', 'Julia Larson', 'Amelia Munger'],
						AV: ['Josh Larson'],
						'Music Helper': [
							'Chris Butler',
							'Isaiah Parker',
							'Gavin Sylvia',
							'Corrine Thomas',
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
						'Fast Track': ['Keith McClymonds', 'Niki McClymonds', 'Mike Criscolo', 'Nick Smith', 'Jacob Smith'],
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
					inCharge: ['Johnny Johnson'],
					roles: {
						Nursery: ['Johnny Johnson', 'Karen Johnson', 'Lexi Boardman', 'Ella Albert'],
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
						'Game Director': ['Andrew Hale'],
						'Team Helper': ['Julia Larson', 'Amelia Munger', 'Corrine Thomas', 'Keith McClymonds', 'Jacob Smith'],
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
					location: "Cheryl's Office / Hallway",
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
						'Progress Tracking': ['Chelsea Hale', 'Nikki Criscolo', 'Sarah Fox'],
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
					inCharge: ['Johnny Johnson'],
					roles: { Nursery: ['Johnny Johnson', 'Karen Johnson'] },
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
						'Store Clerk': ['Evelyn Larson', 'Julia Larson'],
						'Filler Games Leader': ['Andrew Hale'],
						'Filler Games Helper': [
							'Isaiah Parker',
							'Gavin Sylvia',
							'Baxter Williamson',
							'Nick Smith',
							'Mike Criscolo',
							'Chris Butler',
							'Josh Larson',
						],
					},
				},
				{
					title: 'Sparks Activity + Fast Track',
					location: "Cheryl's Office",
					description: 'Large group activity time with one-on-one time for reciting verses.',
					inCharge: ['Jimmy Williamson', 'Sonia Williamson'],
					roles: {
						'Sparks - Activities': ['Sonia Williamson', 'Jimmy Williamson', 'Corrine Thomas'],
						'Fast Track - Sparks': ['Jacob Smith', 'Amelia Munger', 'Ella Albert', 'Lexi Boardman'],
					},
				},
				{
					title: 'Admin',
					location: 'Foyer',
					description: 'Track progress for Sparks who completed sections.',
					inCharge: ['Chelsea Hale'],
					roles: {
						'Progress Tracking': ['Chelsea Hale', 'Nikki Criscolo', 'Sarah Fox'],
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
					inCharge: ['Johnny Johnson'],
					roles: { Nursery: ['Johnny Johnson', 'Karen Johnson'] },
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
						'Store Clerk': ['Evelyn Larson', 'Julia Larson', 'Lexi Boardman', 'Ella Albert'],
						'Store Helper': ['Amelia Munger', 'Corrine Thomas', 'Jacob Smith', 'Jimmy Williamson', 'Sonia Williamson'],
						'Filler Games Leader': ['Andrew Hale'],
						'Filler Games Helper': ['Isaiah Parker', 'Gavin Sylvia', 'Baxter Williamson', 'Josh Larson'],
					},
				},
				{
					title: 'T&T Lesson',
					location: "Cheryl's Office",
					inCharge: ['Brad Parker'],
					roles: {
						Teacher: ['Brad Parker'],
						'Lesson Helper': ['Chris Butler', 'Mike Criscolo', 'Nick Smith'],
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
						'Cubbies Snack and Craft Helper': ['Allie Fullerton', 'Jared Fullerton', 'Kenzie McClymonds', 'Naomi Lugo'],
					},
				},

				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Johnny Johnson'],
					roles: { Nursery: ['Johnny Johnson', 'Karen Johnson'] },
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
							'Mike Criscolo',
							'Evelyn Larson',
							'Julia Larson',
							'Niki McClymonds',
							'Keith McClymonds',

							'Corrine Thomas',
							'Jacob Smith',
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
						'Setup - During Club': ['Josh Larson', 'Isaiah Parker', 'Gavin Sylvia'],
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
					inCharge: ['Johnny Johnson'],
					roles: { Nursery: ['Johnny Johnson', 'Karen Johnson', 'Ella Albert', 'Lexi Boardman'] },
				},
			],
		},
	],
};
export default schedule;
