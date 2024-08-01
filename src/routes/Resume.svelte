<script lang="ts">
	import Header from './Header.svelte';

	type DetailedSegment = {
		header: string;
		description: string;
		dates: string;
		summary: string;
		points: string[];
	};

	type Segment = {
		header: string;
		sections: Pick<Partial<DetailedSegment>, 'header' | 'description' | 'dates'>[];
	};

	let employments: DetailedSegment[] = [
		{
			header: 'Lead Developer & Broadcast Designer',
			description: 'Technative Live',
			dates: 'Mar 2022 - Present',
			summary:
				'Full-stack engineer in the team responsible for everything from database design and API integrations through to designing and implementing HTML-based graphic packages for action sports.',
			points: [
				'Innovated an automated system for flow-based graphics sequences to simplify on-site operations, reducing staffing requirements.',
				'Introduced new revenue stream to the business through standalone, automated graphics packages.',
				'Improved viewing experience for many sports by creating graphics to simply and clearly display the impact of live scores despite complex and opaque scoring systems.',
				'Built reliable, flexible, easy to maintain, smooth graphics with cheap infrastructure which other broadcast graphics solutions had not been able to achieve.',
				'Created and maintained custom event management system with direct integration with our graphics packages to provide fine-grained detail and information for our team to make any kind of graphics we might need. Built with NodeJS, Typescript, MongoDB, GraphQL.',
				'Created custom build pipelines, VS Code extensions and browser extensions to optimise developer experience.',
				'Involved regularly in meetings with clients to promote our services and to explain operation of our standalone graphics packages.'
			]
		},
		{
			header: 'Climbing Coach',
			description: 'Freelance & Various Sheffield Climbing Walls',
			dates: 'Jan 2015 - Mar 2020',
			summary:
				'Coached grassroots through to national level freelance clients, alongside group sessions at multiple climbing walls across Sheffield. Provided coaching training to the staff at The Climbing Works to improve the level of coaching provided there as a whole.',
			points: [
				'Learned how to manage and connect with clients with a range of personalities and learning styles. Focused on clear instruction and precise feedback.',
				'Partnered with a GB Climbing Team coach to work with Sheffield Hallam University, providing weekly coaching for 3 years. We worked with up to international level athletes to compete In NUBS and BUCS each year, seeing improved results year on year.'
			]
		}
	];

	let sideSegments: Segment[] = [
		{
			header: 'Skills',
			sections: [
				{
					header: 'Programming Languages',
					description: 'Javascript, Typescript, HTML, CSS/Sass/Less/Tailwind, GraphQL, R'
				},
				{
					header: 'Libraries & Frameworks',
					description: 'React, Svelte, NextJS, Vitepress, Node.js, Fastify'
				},
				{
					header: 'Tools & Platforms',
					description:
						'Postgresql, Git, Vite, Vitest, Rollup, Webpack, AWS, Vercel, Netlify, Heroku, Stripe, Strapi, Docker'
				},
				{ header: 'Design', description: 'Figma, Photoshop, Illustrator, Affinity Designer' }
			]
		},
		{
			header: 'Education',
			sections: [
				{
					header: 'Newcastle University',
					dates: '2011 - 2014',
					description: 'Bachelor of Science in Mathematics, 2:1'
				}
			]
		},
		{
			header: 'Projects',
			sections: [
				{
					header: 'Diablo 4 Damage Calculator',
					description:
						'Web app built with NextJS, for visualizing itemization choices in the video game Diablo 4. Responsive, intuitive design using Jotai for optimized rendering. Utilizes dynamic OG Image generation.'
				},
				{
					header: 'Singularity Web extension for improving Singular.live DX',
					description:
						'Implements a snippet library and keybind editor over the top of a built-in code editor for the live web graphics platform Singular.live. Uses WXT.dev for cross-browser support'
				},
				{
					header: 'Inline Math',
					description:
						'VS Code editor extension that provides inline results of math expressions written in code'
				}
			]
		},
		{
			header: 'Interests',
			sections: [{ description: 'Bouldering, sport climbing, hiking and competitive gaming' }]
		}
	];
</script>

{#snippet detailedSegment({ header, description, dates, summary, points }: DetailedSegment)}
	<section class="detailed-segment">
		<div>
			<h3 class="text-primary font-bold text-lg">{header}</h3>
			<div class="flex justify-between items-end">
				<h4 class="font-bold italic text-text-impact">{description}</h4>
				<div class="font-mono text-sm">{dates}</div>
			</div>
			<p class="mt-3 border-l-4 border-text pl-4 mb-4">{summary}</p>
			<ul>
				{#each points as point}
					<li>{point}</li>
				{/each}
			</ul>
		</div>
	</section>
{/snippet}

{#snippet sideSegment({ header, sections }: Segment)}
	<section>
		<div>
			<h3 class="text-primary font-bold text-lg">{header}</h3>
			<ul>
				{#each sections as section}
					{#if section.dates}
						<div class="flex justify-between items-end">
							{#if section.header}
								<h4 class="font-bold italic text-text-impact">{section.header}</h4>
							{/if}
							<div class="font-mono text-sm">{section.dates}</div>
						</div>
					{:else if section.header}
						<h4 class="font-bold italic text-text-impact">{section.header}</h4>
					{/if}

					{#if section.description}
						<p class="mt-1 mb-4">{section.description}</p>
					{/if}
				{/each}
			</ul>
		</div>
	</section>
{/snippet}

<div class="resume">
	<div>
		{#each employments as employment}
			{@render detailedSegment(employment)}
		{/each}
	</div>
	<div class="text-sm">
		{#each sideSegments as segment}
			{@render sideSegment(segment)}
		{/each}
	</div>
</div>

<style>
	.resume {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 2rem;
	}

	.detailed-segment {
		margin-bottom: 3rem;
	}

	.detailed-segment ul {
		list-style-image: url('/bullet.png');
		margin-left: 0.75rem;
	}

	.detailed-segment ul li {
		padding-left: 0.5rem;
		margin-bottom: 1rem;
	}
</style>
