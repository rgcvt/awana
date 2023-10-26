const dates = [
	{
		date: '2023-10-26',
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
								name: 'CJ North',
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
								name: 'Nikki/Mike Criscolo',
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
								name: 'Kenny Grey',
								role: 'Photographer/Videographer',
							},
							{
								name: 'Andrew Hale',
								role: 'Music Leader - Sparks + T&T',
							},
							{
								name: 'Evelyn Larson',
								role: 'Music Helper',
							},
							{
								name: 'Julia Larson',
								role: 'Music Helper',
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
								name: 'Kenny Grey',
								role: 'Photographer/Videographer',
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
								name: 'Nikki/Mike Criscolo',
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
								role: 'Sparks - Activities',
							},
							{
								name: 'Amelia Munger',
								role: 'Sparks - Activities',
							},
							{
								name: 'Julia Larson',
								role: 'Sparks - Activities',
							},
							{
								name: 'Ben Ashline',
								role: 'Fast Track - Sparks',
							},
							{
								name: 'Sandra Ashline',
								role: 'Fast Track - Sparks',
							},
							{
								name: 'Kenny Grey',
								role: 'Photographer/Videographer',
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
								name: 'Nikki/Mike Criscolo',
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
						notes: `<a href="https://s3.amazonaws.com/churchplantmedia-cms/z2_3938_redeeming_grace_church_georgia_vt_1679686462/awana_tt_dog_1-5_1-6.pdf">Discussion Guide</a>`,
						staff: [
							{
								name: 'Kenny Grey',
								role: 'Photographer/Videographer',
							},
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
								name: 'Andrew Hale',
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
								name: 'Kenny Grey',
								role: 'Photographer/Videographer',
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
			{
				time: '7:35 pm',
				events: [
					{
						title: 'Setup - During Club',
						location: 'Worship Center',
						inCharge: ['Kenny Gray'],
						staff: [
							{
								name: 'Ben Ashline',
								role: 'Setup - During Club',
							},
							{
								name: 'Sandra Ashline',
								role: 'Setup - During Club',
							},
							{
								name: 'Kenny Grey',
								role: 'Setup - During Club',
							},
							{
								name: 'Andrew Hale',
								role: 'Setup - During Club',
							},
							{
								name: 'Keith McClymonds',
								role: 'Setup - During Cluby',
							},
							{
								name: 'Karly Merchant',
								role: 'Setup - During Club',
							},
							{
								name: 'Amelia Munger',
								role: 'Setup - During Club',
							},
							{
								name: 'CJ North',
								role: 'Setup - During Club',
							},
						],
					},
				],
			},
		],
	},
];
