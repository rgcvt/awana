import { Schedule } from '../../@types/global';

const schedule: Schedule = {
	date: '2024-12-13',
	schedule: [
		{
			time: '5:30 pm',
			events: [
				{
					title: 'Setup',
					location: 'Worship Center',
					inCharge: ['Nick Smith'],
					staff: [
						{
							name: 'Nick Smith',
							role: 'Setup - Before Store',
						},
						{
							name: 'Brad Parker',
							role: 'Setup - Before Store',
						},
					],
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
					inCharge: ['Mike / Nikki Criscolo'],
					staff: [
						{
							name: 'Mike / Nikki Criscolo',
							role: 'Check-In',
						},
						{
							name: 'Heather Fick',
							role: 'Check-In',
						},
						{
							name: 'Keith McClymonds',
							role: 'Director',
						},
						{
							name: 'Niki McClymonds',
							role: 'Store Facilitator',
						},
					],
				},
				{
					title: 'Music',
					location: 'Worship Center',
					description:
						'This is a loosely structured time that allows kids to jump in and participate as they arrive from Check-In or Fast Track. ',
					inCharge: ['Evelyn Larson', 'Julia Larson'],
					staff: [
						{
							name: 'Evelyn Larson',
							role: 'Music Leader - Sparks + T&T',
						},
						{
							name: 'Julia Larson',
							role: 'Music Leader - Sparks + T&T',
						},
						{
							name: 'Ella Albert',
							role: 'Music Helper',
						},
						{
							name: 'Chris Butler',
							role: 'Music Helper',
						},
						{
							name: 'Brenda Saunders',
							role: 'Music Helper',
						},
						{
							name: 'Sonia Williamson',
							role: 'Music Helper',
						},
						{
							name: 'Chris Kolar',
							role: 'Music Helper',
						},
						{
							name: 'Amy Kolar',
							role: 'Music Helper',
						},
						{
							name: 'Naomi Lugo',
							role: 'Music Helper',
						},
						{
							name: 'David Lugo',
							role: 'Music Helper',
						},
						{
							name: 'Nick Smith',
							role: 'Music Helper',
						},
					],
				},
				{
					title: 'T&T Fast Track',
					description: 'Fast Track is the time when kids recite scriptures they have memorized.',
					location: "Cheryl's Office",
					inCharge: ['Ben Ashline'],
					staff: [
						{ name: 'Brad Parker', role: 'Fast Track' },
						{
							name: 'Ben Ashline',
							role: 'Fast Track',
						},
						{
							name: 'Sandra Ashline',
							role: 'Fast Track',
						},
						{
							name: 'Carol Parker',
							role: 'Fast Track',
						},
						{
							name: 'Lexi Boardman',
							role: 'Fast Track',
						},
					],
				},
				{
					title: 'Cubbies',
					location: "Children's Sunday School Rooms",
					inCharge: ['Jared Fullerton', 'Allie Fullerton'],
					staff: [
						{
							name: 'Jared Fullerton',
							role: 'Cubbies Game Leader',
						},
						{
							name: 'Matt Boardman',
							role: 'Cubbies Game Leader',
						},
						{
							name: 'Allie Fullerton',
							role: 'Cubbies Check-in',
						},
						{
							name: 'Chelsea Boardman',
							role: 'Cubbies Check-in',
						},

						{
							name: 'Chapin Bond',
							role: 'Cubbies Helper',
						},
						{
							name: 'Lindsey Bond',
							role: 'Cubbies Helper',
						},
					],
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
					inCharge: ['Brad Parker'],
					staff: [
						{
							name: 'Brad Parker',
							role: 'Game Director',
						},
						{
							name: 'Brenda Saunders',
							role: 'Team Helper',
						},
						{
							name: 'Julia Larson',
							role: 'Team Helper',
						},
						{
							name: 'Bear Grey',
							role: 'Score Keeper',
						},
						{
							name: 'Chris Kolar',
							role: 'Team Captain',
						},
						{
							name: 'Amy Kolar',
							role: 'Team Captain',
						},
						{
							name: 'Chris Butler',
							role: 'Team Helper',
						},

						{
							name: 'Ben Ashline',
							role: 'Team Helper',
						},
						{
							name: 'Sandra Ashline',
							role: 'Team Helper',
						},
						{
							name: 'Nick Smith',
							role: 'Team Helper',
						},
						{
							name: 'Naomi Lugo',
							role: 'Team Helper',
						},
						{
							name: 'David Lugo',
							role: 'Team Helper',
						},
					],
				},
				{
					title: 'Sparks Activity Setup',
					location: "Cheryl's Office / Entry Hallway",
					inCharge: ['Sonia Williamson'],
					staff: [
						{
							name: 'Sonia Williamson',
							role: 'Sparks - Activity Setup',
						},
						{
							name: 'Lexi Boardman',
							role: 'Sparks - Activity Setup',
						},
						{
							name: 'Ella Albert',
							role: 'Sparks - Activity Setup',
						},
					],
				},
				{
					title: 'Check-In',
					location: 'Foyer',
					description: 'Record sections completed during T&T Fast Track in the spreadsheet.',
					inCharge: ['Mike / Nikki Criscolo'],
					staff: [
						{
							name: 'Mike / Nikki Criscolo',
							role: 'Check-In',
						},
						{
							name: 'Heather Fick',
							role: 'Check-In',
						},
						{
							name: 'Keith McClymonds',
							role: 'Director',
						},
						{
							name: 'Niki McClymonds',
							role: 'Store Facilitator',
						},
					],
				},
				{
					title: 'Cubbies',
					location: "Children's Sunday School Rooms",
					inCharge: ['Jared Fullerton', 'Allie Fullerton'],
					staff: [
						{
							name: 'Jared Fullerton',
							role: 'Cubbies Director',
						},
						{
							name: 'Matt Boardman',
							role: 'Cubbies Director',
						},
						{
							name: 'Allie Fullerton',
							role: 'Cubbies Music Helper',
						},
						{
							name: 'Chelsea Boardman',
							role: 'Cubbies Music Helper',
						},

						{
							name: 'Chapin Bond',
							role: 'Cubbies Music Helper',
						},
						{
							name: 'Lindsey Bond',
							role: 'Cubbies Music Helper',
						},
						{
							name: 'Evelyn Larson',
							role: 'Music Leader - Cubbies',
						},
					],
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
					staff: [
						{
							name: 'Keith McClymonds',
							role: 'Director',
						},
						{
							name: 'Niki McClymonds',
							role: 'Store Facilitator',
						},
						{
							name: 'Julia Larson',
							role: 'Store Clerk',
						},
						{
							name: 'Evelyn Larson',
							role: 'Store Clerk',
						},
						{
							name: 'Ben Ashline',
							role: 'Store Clerk',
						},
						{
							name: 'Sandra Ashline',
							role: 'Store Clerk',
						},
						{
							name: 'David Lugo',
							role: 'Filler Games Leader',
						},
						{
							name: 'Naomi Lugo',
							role: 'Filler Games Leader',
						},
						{
							name: 'Chris Kolar',
							role: 'Filler Games Helper',
						},
						{
							name: 'Amy Kolar',
							role: 'Filler Games Helper',
						},
						{
							name: 'Nick Smith',
							role: 'Filler Games Helper',
						},
						{
							name: 'Bear Grey',
							role: 'Filler Games Helper',
						},
						{
							name: 'Chris Butler',
							role: 'Filler Games Helper',
						},
					],
				},
				{
					title: 'Sparks Activity + Fast Track',
					location: "Cheryl's Office / Entry Hallway",
					description: 'Large group activity time with one-on-one time for reciting verses.',
					inCharge: ['Sonia Williamson'],
					staff: [
						{
							name: 'Sonia Williamson',
							role: 'Sparks Director - Fast Track',
						},
						{
							name: 'Lexi Boardman',
							role: 'Fast Track - Sparks',
						},
						{
							name: 'Ella Albert',
							role: 'Fast Track - Sparks',
						},
						{
							name: 'Brenda Saunders',
							role: 'Sparks - Activities',
						},
						{
							name: 'Carol Parker',
							role: 'Fast Track - Sparks',
						},
					],
				},
				{
					title: 'Check-In',
					location: 'Foyer',
					description: 'Record sections completed during Sparks Fast Track in the spreadsheet.',
					inCharge: ['Mike / Nikki Criscolo'],
					staff: [
						{
							name: 'Mike / Nikki Criscolo',
							role: 'Check-In',
						},
						{
							name: 'Heather Fick',
							role: 'Check-In',
						},
					],
				},
				{
					title: 'Cubbies',
					location: "Children's Sunday School Rooms",
					inCharge: ['Jared Fullerton', 'Allie Fullerton'],
					staff: [
						{
							name: 'Jared Fullerton',
							role: 'Cubbies Teacher',
						},
						{
							name: 'Matt Boardman',
							role: 'Cubbies Teacher',
						},
						{
							name: 'Allie Fullerton',
							role: 'Cubbies Puppeteer',
						},
						{
							name: 'Chelsea Boardman',
							role: 'Cubbies Puppeteer',
						},

						{
							name: 'Chapin Bond',
							role: 'Cubbies Lesson Helper',
						},
						{
							name: 'Lindsey Bond',
							role: 'Cubbies Lesson Helper',
						},
					],
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
					staff: [
						{
							name: 'Keith McClymonds',
							role: 'Director',
						},
						{
							name: 'Niki McClymonds',
							role: 'Store Facilitator',
						},
						{
							name: 'Julia Larson',
							role: 'Store Clerk',
						},
						{
							name: 'Evelyn Larson',
							role: 'Store Clerk',
						},
						{
							name: 'Ben Ashline',
							role: 'Store Clerk',
						},
						{
							name: 'Sandra Ashline',
							role: 'Store Clerk',
						},
						{
							name: 'David Lugo',
							role: 'Filler Games Leader',
						},
						{
							name: 'Naomi Lugo',
							role: 'Filler Games Leader',
						},
						{
							name: 'Lexi Boardman',
							role: 'Filler Games Helper',
						},
						{
							name: 'Ella Albert',
							role: 'Filler Games Helper',
						},
						{
							name: 'Bear Grey',
							role: 'Filler Games Helper',
						},
						{
							name: 'Brenda Saunders',
							role: 'Store Helper',
						},
					],
				},
				{
					title: 'T&T Lesson',
					location: "Cheryl's Office",

					inCharge: ['Brad Parker'],
					staff: [
						{
							name: 'Brad Parker',
							role: 'Teacher',
						},
						{
							name: 'Chris Kolar',
							role: 'Lesson Helper',
						},
						{
							name: 'Amy Kolar',
							role: 'Lesson Helper',
						},
						{
							name: 'Nick Smith',
							role: 'Lesson Helper',
						},
					],
				},
				{
					title: 'Cubbies',
					location: "Children's Sunday School Rooms",
					inCharge: ['Jared Fullerton', 'Allie Fullerton'],
					staff: [
						{
							name: 'Jared Fullerton',
							role: 'Cubbies Director',
						},
						{
							name: 'Matt Boardman',
							role: 'Cubbies Director',
						},
						{
							name: 'Allie Fullerton',
							role: 'Cubbies Snack and Craft Helper',
						},
						{
							name: 'Chelsea Boardman',
							role: 'Cubbies Snack and Craft Helper',
						},
						{
							name: 'Chapin Bond',
							role: 'Cubbies Snack and Craft Helper',
						},
						{
							name: 'Lindsey Bond',
							role: 'Cubbies Snack and Craft Helper',
						},
					],
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
					staff: [
						{
							name: 'Keith McClymonds',
							role: 'Director',
						},
						{
							name: 'Bear Grey',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Lexi Boardman',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Ella Albert',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Chris Butler',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Brenda Saunders',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Ben Ashline',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Sandra Ashline',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Chris Kolar',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Amy Kolar',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Keith McClymonds',
							role: 'Director',
						},
						{
							name: 'Niki McClymonds',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Naomi Lugo',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'David Lugo',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Evelyn Larson',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Sonia Williamson',
							role: 'Leader - Closing Assembly',
						},
					],
				},
				{
					title: 'Cubbies',
					location: "Children's Sunday School Rooms",
					inCharge: ['Jared Fullerton', 'Allie Fullerton'],
					staff: [
						{
							name: 'Jared Fullerton',
							role: 'Cubbies Setup - After Club',
						},
						{
							name: 'Matt Boardman',
							role: 'Cubbies Setup - After Club',
						},
						{
							name: 'Allie Fullerton',
							role: 'Cubbies Setup - After Club',
						},
						{
							name: 'Chelsea Boardman',
							role: 'Cubbies Setup - After Club',
						},
						{
							name: 'Chapin Bond',
							role: 'Cubbies Setup - After Club',
						},
						{
							name: 'Lindsey Bond',
							role: 'Cubbies Setup - After Club',
						},
					],
				},
			],
		},
		{
			time: '7:30 pm',
			events: [
				{
					title: 'Setup - During Club',
					location: 'Worship Center',
					inCharge: ['Nick Smith'],
					staff: [
						{
							name: 'Nick Smith',
							role: 'Setup - During Club',
						},
						{
							name: 'Bear Grey',
							role: 'Setup - During Club',
						},
						{
							name: 'Lexi Boardman',
							role: 'Setup - During Club',
						},
						{
							name: 'Ella Albert',
							role: 'Setup - During Club',
						},
						{
							name: 'Chris Butler',
							role: 'Setup - During Club',
						},
						{
							name: 'Ben Ashline',
							role: 'Setup - During Club',
						},
						{
							name: 'Sandra Ashline',
							role: 'Setup - During Club',
						},
						{
							name: 'Chris Kolar',
							role: 'Setup - During Club',
						},
						{
							name: 'Amy Kolar',
							role: 'Setup - During Club',
						},
						{
							name: 'Naomi Lugo',
							role: 'Setup - During Club',
						},
						{
							name: 'David Lugo',
							role: 'Setup - During Club',
						},
						{
							name: 'Evelyn Larson',
							role: 'Setup - During Club',
						},
					],
				},
			],
		},
	],
};
export default schedule;
