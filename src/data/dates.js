const schedules = import.meta.glob('./schedules/*.js', {
	import: 'default',
	eager: true,
});
const roles = [
	{
		title: 'Setup - Before Club',
		responsibilities: [
			'Worship Center - Stack Chairs: Stack all the chairs in the Worship Center. Leave the last 2 chairs on the outside of each row in place and stack the rest of the chairs from each row on top of these.',
			'Worship Center - Sparks Activity Tables: In the back of the Worship Center, set up 3 long tables. Bring in 30 chairs from the foundations room and stage them in the Worship center by the sound closet.',
			"Chery's Office - Lesson: Fold up all tables, stack any chairs, set up one chair by the whiteboard for Brad.",
			'Foundations Room - Fast Track Setup: 5 pairs of chairs',
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
		title: 'Photographer/Videographer',
		responsibilities: ['Capture photos/videos.'],
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
		title: 'Sparks - Activities',
		responsibilities: [
			'Immediately after Game Time, help Sparks take a short bathrooms/water break.',
			'Ensure everyone has a seat, a coloring sheet and access to crayons/colored pencils',
			'Direct semi-structured activity (eg sword drill, duck duck goose, Simon Says, red light green light) for kids who get restless coloring.',
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

export const dates = Object.values(schedules);

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
