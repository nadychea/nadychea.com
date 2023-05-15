import { allPosts } from ".contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import React from 'react';
import YouTube from '@u-wave/react-youtube';
import { IconArrowRight } from "@tabler/icons-react";
import PostCard from "../components/PostCard.js";
import NewsletterForm from "../components/NewsletterForm.js";
import { OrbContainer, Orb } from "../components/Orb.js";
import { email } from "../metadata.js";

function S({ children }) {
	return (
		<strong className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-semibold text-transparent print:text-inherit">
			{children}
		</strong>
	);
}

export default function Home({ posts }) {
	return (
		<>
			<OrbContainer>
				<Orb className="right-0 bg-blue-400/30 dark:bg-blue-600/30" />
				<Orb className="right-36 top-28 bg-cyan-400/30 dark:bg-cyan-600/30" />
			</OrbContainer>

			<div className="max-w-3xl space-y-4 text-xl md:text-2xl">
				
					<Image
						alt="Nady Chea"
						src="/images/projects/nadychea.jpg"
						width={700}
						height={300}
					/>
				<p>
				<S>Hello! I&apos;m Nady</S>
				</p>
				<p>
					I am the Head of Operations at the Cambodia Coaching Institute, where I also serve as a Facilitator and Associate Coach. Being a proud graduate of the inaugural cohort of the Cambodia Coaching Institute, I hold the distinction of being the youngest professionally trained coach in Cambodia. I strictly adhere to the code of ethics and competencies set by the <S>International Coach Federation (ICF)</S>.
				</p>
				<p>
					My passion lies in working with individuals, particularly young people, fellow changemakers, and aspiring pioneers. I am dedicated to helping them unlock their full potential, make meaningful contributions, and embark on a journey of personal and professional growth. By discovering their unique talents and capacities, I strive to empower them to become catalysts for positive change in Cambodia. It is my honor to guide them in navigating their stories, overcoming self-doubt, and making impactful transformations in their creative pursuits and professional lives.
				</p>
				
				<p>
					Check out {" "}
					<Link href="/projects"> <S>my projects page</S> </Link>
					to see work and activities I am involving. 
					
					If you&apos;d like to get in touch, email me at{" "}
					<a className="font-semibold" href={`mailto:${email}`}>
						chea.sovannady [at] gmail.com.
					</a>
					.
				</p>
			</div>
			
			
			{/* Blog section */}
			<br />
			<div className="my-4 flex items-baseline justify-between">
				<h2 className="text-2xl font-bold">Blog Posts</h2>

				<Link
					href="/blog"
					className="group ml-8 transition-colors hover:text-slate-600 dark:hover:text-slate-400"
				>
					View All{" "}
					<IconArrowRight className="inline-block transition-transform ease-in-out group-hover:translate-x-0.5" />
				</Link>
			</div>
			<br />

			<div className="mx-auto mb-4 grid grid-cols-2 gap-4 md:grid-cols-3">
				{posts.map((post) => (
					<PostCard {...post} key={post.url} />
				))}
			</div>

			<br />
			
			<OrbContainer>
				<Orb className="bg-emerald-400/30 dark:bg-emerald-600/30" />
				<Orb className="left-72 top-16 bg-cyan-400/30 dark:bg-cyan-600/30" />
			</OrbContainer>

			{/* <h2 className="my-4 text-2xl font-bold">Newsletter</h2>
			<p className="mx-auto my-4 max-w-2xl text-xl">
				Occasionally, I send out a newsletter to share my thoughts about
				the latest tech news and other things I find interesting &mdash;
				I won&apos;t spam you, promise!
			</p>
			<NewsletterForm /> */}
		</>
	);
}

export function getStaticProps() {
	return {
		props: {
			posts: allPosts
				.sort((a, b) =>
					a.date > b.date ? -1 : a.date < b.date ? 1 : 0
				)
				.slice(0, 5)
				// Only include fields needed for rendering PostCard on client
				.map((post) => ({
					url: post.url,
					cover: post.cover,
					coverAlt: post.coverAlt,
					formattedDate: post.formattedDate,
					readingTime: post.readingTime,
					title: post.title,
				})),
		},
	};
}
