const roles = [
	{
		title: 'Setup - Before Club',
		responsibilities: [
			'Worship Center - Stack Chairs: Stack all the chairs in the Worship Center. Leave the last 2 chairs on the outside of each row in place and stack the rest of the chairs from each row on top of these.',
			'Worship Center - Sparks Activity Tables: In the back of the Worship Center, set up 3 long tables. Bring in 30 chairs from the foundations room and stage them in the Worship center by the sound closet.',
			"Chery's Office - Lesson: Fold up all tables, stack any chairs, set up one chair by the whiteboard for Brad.",
			'Foundations Room - Fast Track Setup: Ensure at least 2 tables set up with at least 10 chairs total.',
			'Foyer - Check-In: Set up 1 long table on the north side of Worship Center doors, 1 long table on the south side of the doors.',
		],
	},
	{
		title: 'Setup - During Club',
		responsibilities: [
			'Worship Center - Return Chairs to their usual position. 11 rows of 11 chairs on each side.  Plumb lines for aligning the chair rows are in the closet.',
		],
	},
	{
		title: 'Cubbies Director',
		responsibilities: ['Direct the Cubbies'],
	},
	{
		title: 'Cubbies Helper',
		responsibilities: ['Help the Cubbbies'],
	},
	{
		title: 'Director',
		responsibilities: [
			'Keep your eye on things and be ready to give direction as needed.',
		],
	},
	{
		title: 'AV',
		responsibilities: [
			'Provide support for audio and slides in the Worship Center.',
		],
	},
	{
		title: 'Music Leader - Sparks + T&T',
		responsibilities: ['Lead Music for Sparks and T&T'],
	},
	{
		title: 'Music Helper',
		responsibilities: [
			'Keep order in the room. Kids should be participating in the singing. If you see kids not participating, direct their focus back to the singing.',
			'Set a good example. Learn and sing the songs yourself. The kids will be looking to you for cues on how to behave.',
		],
	},
	{
		title: 'Music Leader - Cubbies',
		responsibilities: ['Lead Music for Cubbies'],
	},
	{
		title: 'Check-In',
		responsibilities: [
			'Mark attendance when a child arrives.',
			'Direct traffic: If a child is in T&T and they have verses to recite, direct them to Fast Track, Cubbies go down the hall to Cubbie Land, Everyone else goes to the Worship Center.',
			'Record progress when a child completes Fast Track.',
		],
	},
	{
		title: 'Fast Track',
		responsibilities: [
			"Listen to Verses: Kids will recite verses they have memorized. They get up to 2 helps per section (there may be more than one verse per section, a section is noted by the space for a leader's signature)",
			"Help with Comprehension: You don't need to do any deep interpretation, just help them learn any big words and understand the overal meaning of the verse.",
			'Sign off Sections and give Awana Bucks: After a kid recites the verses in a section with 2 helps or fewer, sign and date the section in their book. Give the kid $1 Awana buck per completed section. Awana Bucks can be found in the Awana cabinet in the foundations room. When they have completed all their sections, direct them to the Check-in Table.',
		],
	},
	{
		title: 'Score Keeper',
		responsibilities: [
			'For each round of each game, record the finishing order for of each team (1st, 2nd, 3rd 4th)',
			'If a player/team breaks the rules during one round, they are disqualified from that round. Note this with "DQ"',
			'Before the closing ceremony, calculate the results. 1st palce is worth 2 points, 2nd place is worth 1 point.',
		],
	},
	{
		title: 'Game Director',
		responsibilities: ['Plan and lead games during Game Time'],
	},
	{
		title: 'Team Captain',
		responsibilities: [
			'At the start of Game Time, and at the start of each game, make sure your team is lined up on your color line, tallest to shortest',
			'While the current round is going, find your next kid(s), make sure they know that they are next up, and that they know where to go when it is time for them to start.',
		],
	},
	{
		title: 'Team Helper',
		responsibilities: [
			"Keep the kids in order. We will start each game with your team lined up tallest->shortest. As players finish their round, help them find their way to the back of the line so that it's clear who has played, and who is up next.",
			'Reinforce the rules. Watch your kids as they play the game. If they break a rule in the game, help them understand the rule and how to follow it next time.',
		],
	},
	{
		title: 'Lesson Helper',
		responsibilities: ['Help keep order during the lesson.'],
	},
	{
		title: 'Sparks Director - Activities',
		responsibilities: [
			'Immediately after Game Time, help Sparks take a short bathrooms/water break.',
			'Ensure everyone has a seat, a coloring sheet and access to crayons/colored pencils',
		],
	},
	{
		title: 'Sparks Director - Fast Track',
		responsibilities: [
			'Immediately after Game Time, help Sparks take a short bathrooms/water break.',
			'Using the provided roster, determine who has verses to recite, and send those kids a few at a time to Fast Track. The goal is to always have 4-5 kids at Fast Track.',
		],
	},
	{
		title: 'Fast Track',
		responsibilities: [
			"Listen to Verses: Kids will recite verses they have memorized. They get up to 2 helps per section (there may be more than one verse per section, a section is noted by the space for a leader's signature)",
			"Help with Comprehension: You don't need to do any deep interpretation, just help them learn any big words and understand the overall meaning of the verse.",
			'Sign off Sections and give Awana Bucks: After a kid recites the verses in a section with 2 helps or fewer, sign and date the section in their book. Give the kid $1 Awana buck per completed section. Awana Bucks can be found in the Awana cabinet in the Foundations room. When they have completed all their sections, direct them to the Check-in Table.',
		],
	},
	{
		title: 'Fast Track - Sparks',
		responsibilities: [
			'Immediately after Game time, set up the kids chairs that are staged by the sound closet around the long tables in the back of the Worship Center. After setup, go to the Foundations room for Fast Track.',
			"Listen to Verses: Kids will recite verses they have memorized. They get up to 2 helps per section (there may be more than one verse per section, a section is noted by the space for a leader's signature)",
			"Help with Comprehension: You don't need to do any deep interpretation, just help them learn any big words and understand the overall meaning of the verse.",
			'Sign off Sections and give Awana Bucks: After a kid recites the verses in a section with 2 helps or fewer, sign and date the section in their book. Give the kid $1 Awana buck per completed section. Awana Bucks can be found in the Awana cabinet in the Foundations room. When they have completed all their sections, direct them to the Check-in Table.',
		],
	},
	{
		title: 'Small Group Leader',
		responsibilities: [
			'Lead Discussion: Read through the "Explore" section for each week, prompt the kids to share their answers and lead them through the discussion questions.',
		],
	},
	{
		title: 'Leader - Closing Assembly',
		responsibilities: ['Sit with kids and direct their attention to the front'],
	},
	{
		title: 'Teacher',
		responsibilities: ['Prepare and deliver lessons for T&T, and Sparks'],
	},
];

export const roleByTitle = (title) => {
	return roles.find((r) => r.title == title);
};

export const dates = [
	{
		date: '2023-09-22',
		schedule: [
			{
				time: '5:15 pm',
				events: [
					{
						title: 'Setup',
						location: 'Worship Center',
						description: null,
						inCharge: ['Andrew Hale'],
						staff: [
							{
								name: 'Andrew Hale',
								role: 'Setup - Before Club',
							},
							{
								name: 'Kenny Grey',
								role: 'Setup - Before Club',
							},
							{
								name: 'Colin Vandorn',
								role: 'Setup - Before Club',
							},
						],
					},
				],
			},
			{
				time: '5:45 pm',
				events: [
					{
						title: 'Check-In',
						location: 'Foyer',
						description:
							'Parents check their kids in at a table outside the Worship Center.',
						inCharge: ['Chelsea Hale'],
						staff: [
							{
								name: 'Chelsea Hale',
								role: 'Check-In',
							},
							{
								name: 'Nikki Criscolo',
								role: 'Check-In',
							},
						],
					},
					{
						title: 'Music',
						location: 'Worship Center',
						description:
							'This is a loosely structured time that allows kids to jump in and participate as they arrive from Check-In or Fast Track. ',
						inCharge: ['Evelyn Larson'],
						staff: [
							{
								name: 'Chris Butler',
								role: 'AV',
							},
							{
								name: 'Kenny Grey',
								role: 'Music Helper',
							},
							{
								name: 'Andrew Hale',
								role: 'Director',
							},
							{
								name: 'Evelyn Larson',
								role: 'Music Leader - Sparks + T&T',
							},
							{
								name: 'Julia Larson',
								role: 'Music Leader - Sparks + T&T',
							},
							{
								name: 'Peter Larson',
								role: 'Music Helper',
							},
							{
								name: 'Karly Merchant',
								role: 'Music Helper',
							},
							{
								name: 'Amelia Munger',
								role: 'Music Leader - Sparks + T&T',
							},
							{
								name: 'Jimmy Williamson',
								role: 'Music Helper',
							},
							{
								name: 'Sonia Williamson',
								role: 'Music Helper',
							},
						],
					},
					{
						title: 'T&T Fast Track',
						description:
							'Fast Track is the time when kids recite scriptures they have memorized.',
						location: 'Foundations Room',
						inCharge: ['Keith McClymonds', 'Niki McClymonds'],
						staff: [
							{
								name: 'Ben Ashline',
								role: 'Fast Track',
							},
							{
								name: 'Sandra Ashline',
								role: 'Fast Track',
							},
							{
								name: 'Keith McClymonds',
								role: 'Fast Track',
							},
							{
								name: 'Niki McClymonds',
								role: 'Fast Track',
							},
							{
								name: 'Brad Parker',
								role: 'Fast Track',
							},
							{
								name: 'Colin Vandorn',
								role: 'Fast Track',
							},
						],
					},
					{
						title: 'Cubbies',
						description: null,
						location: 'Cubbie Land',
						inCharge: ['Jared Fullerton', 'Allie Fullerton'],
						staff: [
							{
								name: 'Allie Fullerton',
								role: 'Cubbies Director',
							},
							{
								name: 'Jared Fullerton',
								role: 'Cubbies Director',
							},
							{
								name: 'CJ North',
								role: 'Cubbies Helper',
							},
							{
								name: 'Carol Parker',
								role: 'Cubbies Helper',
							},
						],
					},
				],
			},
			{
				time: '6:05 pm',
				events: [
					{
						title: 'Game Time',
						location: 'Worship Center',
						description:
							'Game time is purposeful. We teach teamwork, sportsmanship, learning and following rules, and healthy competitiveness.',
						inCharge: ['Andrew Hale'],
						staff: [
							{
								name: 'Ben Ashline',
								role: 'Team Captain',
							},
							{
								name: 'Sandra Ashline',
								role: 'Team Helper',
							},
							{
								name: 'Chris Butler',
								role: 'Team Helper',
							},
							{
								name: 'Kenny Grey',
								role: 'Score Keeper',
							},
							{
								name: 'Andrew Hale',
								role: 'Game Director',
							},
							{
								name: 'Julia Larson',
								role: 'Score Keeper',
							},
							{
								name: 'Peter Larson',
								role: 'Team Captain',
							},
							{
								name: 'Keith McClymonds',
								role: 'Team Helper',
							},
							{
								name: 'Niki McClymonds',
								role: 'Team Helper',
							},
							{
								name: 'Karly Merchant',
								role: 'Team Helper',
							},
							{
								name: 'Amelia Munger',
								role: 'Team Helper',
							},
							{
								name: 'Brad Parker',
								role: 'Team Helper',
							},
							{
								name: 'Colin Vandorn',
								role: 'Team Helper',
							},
							{
								name: 'Jimmy Williamson',
								role: 'Team Captain',
							},
							{
								name: 'Sonia Williamson',
								role: 'Team Captain',
							},
						],
					},
					{
						title: 'Check-In',
						location: 'Foyer',
						description:
							'Record sections completed during T&T Fast Track in the spreadsheet.',
						inCharge: ['Chelsea Hale'],
						staff: [
							{
								name: 'Chelsea Hale',
								role: 'Check-In',
							},
							{
								name: 'Nikki Criscolo',
								role: 'Check-In',
							},
						],
					},
					{
						title: 'Cubbies',
						description: null,
						location: 'Cubbie Land',
						inCharge: ['Jared Fullerton', 'Allie Fullerton'],
						staff: [
							{
								name: 'Allie Fullerton',
								role: 'Cubbies Director',
							},
							{
								name: 'Jared Fullerton',
								role: 'Cubbies Director',
							},
							{
								name: 'CJ North',
								role: 'Cubbies Helper',
							},
							{
								name: 'Carol Parker',
								role: 'Cubbies Helper',
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
						title: 'T&T Lesson',
						location: "Cheryl's Office",
						description: null,
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
								name: 'Karly Merchant',
								role: 'Lesson Helper',
							},
							{
								name: 'Evelyn Larson',
								role: 'Lesson Helper',
							},
						],
					},
					{
						title: 'Sparks Activity + Fast Track',
						location: 'Worship Center',
						description:
							'Large group activity time with one-on-one time for reciting verses.',
						inCharge: ['Jimmy Williamson, Sonia Williamson'],
						staff: [
							{
								name: 'Jimmy Williamson',
								role: 'Sparks Director - Fast Track',
							},
							{
								name: 'Sonia Williamson',
								role: 'Sparks Director - Activities',
							},
							{
								name: 'Amelia Munger',
								role: 'Fast Track - Sparks',
							},
							{
								name: 'Julia Larson',
								role: 'Fast Track - Sparks',
							},
							{
								name: 'Ben Ashline',
								role: 'Fast Track - Sparks',
							},
							{
								name: 'Sandra Ashline',
								role: 'Fast Track - Sparks',
							},
						],
					},
					{
						title: 'Check-In',
						location: 'Foyer',
						description:
							'Record sections completed during Sparks Fast Track in the spreadsheet.',
						inCharge: ['Chelsea Hale'],
						staff: [
							{
								name: 'Andrew Hale',
								role: 'Director',
							},
							{
								name: 'Chelsea Hale',
								role: 'Check-In',
							},
							{
								name: 'Nikki Criscolo',
								role: 'Check-In',
							},
						],
					},
					{
						title: 'Setup',
						description: null,
						location: 'Worship Center',
						inCharge: ['Kenny Grey'],
						staff: [
							{
								name: 'Kenny Grey',
								role: 'Setup - During Club',
							},
							{
								name: 'Chris Butler',
								role: 'Setup - During Club',
							},
							{
								name: 'Peter Larson',
								role: 'Setup - During Club',
							},
							{
								name: 'Colin Vandorn',
								role: 'Setup - During Club',
							},
						],
					},
					{
						title: 'Cubbies',
						description: null,
						location: 'Cubbie Land',
						inCharge: ['Jared Fullerton', 'Allie Fullerton'],
						staff: [
							{
								name: 'Allie Fullerton',
								role: 'Cubbies Director',
							},
							{
								name: 'Jared Fullerton',
								role: 'Cubbies Director',
							},
							{
								name: 'CJ North',
								role: 'Cubbies Helper',
							},
							{
								name: 'Carol Parker',
								role: 'Cubbies Helper',
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
						description: null,
						inCharge: ['Brad Parker'],
						staff: [
							{
								name: 'Andrew Hale',
								role: 'Director',
							},
							{
								name: 'Brad Parker',
								role: 'Teacher',
							},
							{
								name: 'Jimmy Williamson',
								role: 'Lesson Helper',
							},
							{
								name: 'Sonia Williamson',
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
							{
								name: 'Ben Ashline',
								role: 'Lesson Helper',
							},
							{
								name: 'Sandra Ashline',
								role: 'Lesson Helper',
							},
						],
					},
					{
						title: 'T&T Small Groups',
						location: 'Worship Center + Foundations Room',
						inCharge: ['Keith McClymonds, Niki McClymonds'],
						notes: `<a href="https://s3.amazonaws.com/churchplantmedia-cms/z2_3938_redeeming_grace_church_georgia_vt_1679686462/awana_tt_dog_1-1_1-2.pdf">Discussion Guide</a>`,
						staff: [
							{
								name: 'Keith McClymonds',
								role: 'Small Group Leader',
							},
							{
								name: 'Niki McClymonds',
								role: 'Small Group Leader',
							},
							{
								name: 'Karly Merchant',
								role: 'Small Group Leader',
							},
							{
								name: 'Evelyn Larson',
								role: 'Small Group Leader',
							},
							{
								name: 'Peter Larson',
								role: 'Small Group Leader',
							},
							{
								name: 'Colin Vandorn',
								role: 'Small Group Leader',
							},
							{
								name: 'Chris Butler',
								role: 'Small Group Leader',
							},
						],
					},
					{
						title: 'Cubbies',
						description: null,
						location: 'Cubbie Land',
						inCharge: ['Jared Fullerton', 'Allie Fullerton'],
						staff: [
							{
								name: 'Allie Fullerton',
								role: 'Cubbies Director',
							},
							{
								name: 'Jared Fullerton',
								role: 'Cubbies Director',
							},
							{
								name: 'CJ North',
								role: 'Cubbies Helper',
							},
							{
								name: 'Carol Parker',
								role: 'Cubbies Helper',
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
								name: 'Ben Ashline',
								role: 'Leader - Closing Assembly',
							},
							{
								name: 'Sandra Ashline',
								role: 'Leader - Closing Assembly',
							},
							{
								name: 'Chris Butler',
								role: 'Leader - Closing Assembly',
							},
							{
								name: 'Mike Criscolo',
								role: 'Leader - Closing Assembly',
							},

							{
								name: 'Kenny Grey',
								role: 'Leader - Closing Assembly',
							},
							{
								name: 'Andrew Hale',
								role: 'Director',
							},
							{
								name: 'Chelsea Hale',
								role: 'Leader - Closing Assembly',
							},
							{
								name: 'Evelyn Larson',
								role: 'Leader - Closing Assembly',
							},
							{
								name: 'Julia Larson',
								role: 'Leader - Closing Assembly',
							},
							{
								name: 'Peter Larson',
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
								name: 'Karly Merchant',
								role: 'Leader - Closing Assembly',
							},
							{
								name: 'Amelia Munger',
								role: 'Leader - Closing Assembly',
							},
							{
								name: 'Brad Parker',
								role: 'Leader - Closing Assembly',
							},
							{
								name: 'Colin Vandorn',
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
						],
					},
					{
						title: 'Cubbies',
						description: null,
						location: 'Cubbie Land',
						inCharge: ['Jared Fullerton', 'Allie Fullerton'],
						staff: [
							{
								name: 'Allie Fullerton',
								role: 'Cubbies Director',
							},
							{
								name: 'Jared Fullerton',
								role: 'Cubbies Director',
							},
							{
								name: 'CJ North',
								role: 'Cubbies Helper',
							},
							{
								name: 'Carol Parker',
								role: 'Cubbies Helper',
							},
						],
					},
				],
			},
		],
	},
];

export const scheduleByDateAndName = (date, name) => {
	const clubDate = dates.find((d) => d.date == date);

	if (clubDate) {
		return clubDate.schedule.map((t) => {
			let event = null;
			let role = null;
			t.events.forEach((e) => {
				if (!role) {
					const personRole = e.staff.find((s) => s.name == name);

					if (personRole) {
						const newEvent = { ...e };
						delete newEvent.staff;

						role = roleByTitle(personRole.role);
						event = e;
					}
				}
			});

			return {
				time: t.time,
				event: event,
				role: role,
			};
		});
	}
};
