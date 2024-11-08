import { Schedule } from '../../@types/global';

const schedule: Schedule = {
	date: '2024-11-08',
	schedule: [
		{
			time: '5:35 pm',
			events: [
				{
					title: 'Setup',
					location: 'Worship Center',
					inCharge: ['Andrew Hale'],
					staff: [
						{
							name: 'Andrew Hale',
							role: 'Setup - Before Club',
						},
						{
							name: 'Chelsea Hale',
							role: 'Setup - Before Club',
						},
					],
				},
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Nick Smith', 'Ashley Smith'],
					staff: [
						{
							name: 'Nick Smith',
							role: 'Nursery',
						},
						{
							name: 'Ashley Smith',
							role: 'Nursery',
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
					inCharge: ['Chelsea Hale'],
					staff: [
						{
							name: 'Chelsea Hale',
							role: 'Check-In',
						},
						{
							name: 'Mike / Nikki Criscolo',
							role: 'Check-In',
						},
						{
							name: 'Heather Fick',
							role: 'Check-In',
						},
						{
							name: 'Niki McClymonds',
							role: 'Director',
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
							name: 'Amelia Munger',
							role: 'Music Leader - Sparks + T&T',
						},
						{
							name: 'Lexi Boardman',
							role: 'Music Helper',
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
							name: 'Jimmy Williamson',
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
					],
				},
				{
					title: 'T&T Fast Track',
					description: 'Fast Track is the time when kids recite scriptures they have memorized.',
					location: 'Foundations Room',
					inCharge: ['Keith McClymonds'],
					staff: [
						{
							name: 'Keith McClymonds',
							role: 'Fast Track',
						},
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
							name: 'Jacob Smith',
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
							name: 'Sarah Norton',
							role: 'Cubbies Snack Setup',
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
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Nick Smith', 'Ashley Smith'],
					staff: [
						{
							name: 'Nick Smith',
							role: 'Nursery',
						},
						{
							name: 'Ashley Smith',
							role: 'Nursery',
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
					inCharge: ['Andrew Hale'],
					staff: [
						{
							name: 'Brenda Saunders',
							role: 'Team Helper',
						},
						{
							name: 'Amelia Munger',
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
							name: 'Jimmy Williamson',
							role: 'Team Captain',
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
							name: 'Keith McClymonds',
							role: 'Team Captain',
						},
						{
							name: 'Niki McClymonds',
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
							name: 'Jacob Smith',
							role: 'Team Helper',
						},
						{
							name: 'Chip Crawford',
							role: 'Team Helper',
						},
						{
							name: 'Karly Crawford',
							role: 'Team Helper',
						},
					],
				},
				{
					title: 'Sparks Activity Setup',
					location: 'Worship Center',
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
					inCharge: ['Chelsea Hale'],
					staff: [
						{
							name: 'Chelsea Hale',
							role: 'Check-In',
						},
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
							name: 'Sarah Norton',
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
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Nick Smith', 'Ashley Smith'],
					staff: [
						{
							name: 'Nick Smith',
							role: 'Nursery',
						},
						{
							name: 'Ashley Smith',
							role: 'Nursery',
						},
					],
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
					staff: [
						{
							name: 'Brad Parker',
							role: 'Teacher',
						},
						{
							name: 'Keith McClymonds',
							role: 'Lesson Helper',
						},
						{
							name: 'Niki McClymonds',
							role: 'Lesson Helper',
						},
						{
							name: 'Ben Ashline',
							role: 'Lesson Helper',
						},
						{
							name: 'Sandra Ashline',
							role: 'Lesson Helper',
						},
						{
							name: 'Chip Crawford',
							role: 'Lesson Helper',
						},
						{
							name: 'Karly Crawford',
							role: 'Lesson Helper',
						},
					],
				},
				{
					title: 'Sparks Activity + Fast Track',
					location: 'Worship Center',
					description: 'Large group activity time with one-on-one time for reciting verses.',
					inCharge: ['Jimmy Williamson', 'Sonia Williamson'],
					staff: [
						{
							name: 'Jimmy Williamson',
							role: 'Sparks Director - Fast Track',
						},
						{
							name: 'Sonia Williamson',
							role: 'Sparks Director - Fast Track',
						},
						{
							name: 'Lexi Boardman',
							role: 'Sparks - Activities',
						},
						{
							name: 'Ella Albert',
							role: 'Sparks - Activities',
						},
						{
							name: 'Brenda Saunders',
							role: 'Sparks - Activities',
						},
						{
							name: 'Amelia Munger',
							role: 'Sparks - Activities',
						},
						{
							name: 'Julia Larson',
							role: 'Fast Track - Sparks',
						},

						{
							name: 'Jacob Smith',
							role: 'Fast Track - Sparks',
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
					inCharge: ['Chelsea Hale'],
					staff: [
						{
							name: 'Chelsea Hale',
							role: 'Check-In',
						},
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
							name: 'Sarah Norton',
							role: 'Cubbies Lesson Helper',
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
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Nick Smith', 'Ashley Smith'],
					staff: [
						{
							name: 'Nick Smith',
							role: 'Nursery',
						},
						{
							name: 'Ashley Smith',
							role: 'Nursery',
						},
					],
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
					staff: [
						{
							name: 'Brad Parker',
							role: 'Teacher',
						},
						{
							name: 'Jimmy Williamson',
							role: 'Lesson Helper',
						},
						{
							name: 'Lexi Boardman',
							role: 'Lesson Helper',
						},

						{
							name: 'Brenda Saunders',
							role: 'Lesson Helper',
						},
						{
							name: 'Heather Fick',
							role: 'Lesson Helper',
						},
						{
							name: 'Carol Parker',
							role: 'Lesson Helper',
						},
						{
							name: 'Amelia Munger',
							role: 'Lesson Helper',
						},
						{
							name: 'Julia Larson',
							role: 'Lesson Helper',
						},
					],
				},
				{
					title: 'T&T Small Groups',
					location: 'Worship Center + Foundations Room',
					inCharge: ['Keith McClymonds', 'Niki McClymonds'],
					smallGroupQuestions: [
						'Read Psalm 2 together.',
						"What do the peoples think about being under God's authority?",
						'What are some ways people try to "break free" from God\'s authority?',
						'From this Psalm, what are some of the ways God responds when people rebel against his authority?',
						'What does God promise Jesus in this Psalm? (and how do you know this is about Jesus?)',
						'What warnings and promises does God give YOU in this Psalm?',
					],
					staff: [
						{
							name: 'Keith McClymonds',
							role: 'Small Group Leader',
						},
						{
							name: 'Niki McClymonds',
							role: 'Director',
						},
						{
							name: 'Chris Kolar',
							role: 'Small Group Leader',
						},
						{
							name: 'Amy Kolar',
							role: 'Small Group Leader',
						},
						{
							name: 'Ben Ashline',
							role: 'Small Group Leader',
						},
						{
							name: 'Sandra Ashline',
							role: 'Small Group Leader',
						},

						{
							name: 'Chris Butler',
							role: 'Small Group Leader',
						},

						{
							name: 'Evelyn Larson',
							role: 'Small Group Leader',
						},
						{
							name: 'Chip Crawford',
							role: 'Small Group Leader',
						},
						{
							name: 'Karly Crawford',
							role: 'Small Group Leader',
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
							name: 'Sarah Norton',
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

				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Nick Smith', 'Ashley Smith'],
					staff: [
						{
							name: 'Nick Smith',
							role: 'Nursery',
						},
						{
							name: 'Ashley Smith',
							role: 'Nursery',
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
					inCharge: ['Andrew Hale'],
					staff: [
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
							name: 'Jacob Smith',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Jimmy Williamson',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Sonia Williamson',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Amelia Munger',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Julia Larson',
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
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Niki McClymonds',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Chip Crawford',
							role: 'Leader - Closing Assembly',
						},
						{
							name: 'Karly Crawford',
							role: 'Leader - Closing Assembly',
						},

						{
							name: 'Evelyn Larson',
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
							name: 'Sarah Norton',
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
				{
					title: 'Nursery',
					location: 'Nursery',
					inCharge: ['Nick Smith', 'Ashley Smith'],
					staff: [
						{
							name: 'Nick Smith',
							role: 'Nursery',
						},
						{
							name: 'Ashley Smith',
							role: 'Nursery',
						},
					],
				},
			],
		},
	],
};
export default schedule;
