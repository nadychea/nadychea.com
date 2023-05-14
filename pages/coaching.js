import { OrbContainer, Orb } from "../components/Orb";
import CoachingCard from "../components/CoachingCard";
import { github, coaching } from "../metadata";

function S({ children }) {
	return (
		<strong className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-semibold text-transparent print:text-inherit">
			{children}
		</strong>
	);
}
export default function Coaching() {
	return (
		<>
			<OrbContainer>
				<Orb className="right-0 -top-20 bg-fuchsia-400/30 dark:bg-fuchsia-600/30" />
				<Orb className="right-86 top-40 bg-cyan-400/30 dark:bg-cyan-600/30" />
			</OrbContainer>

			<h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
				Coaching
			</h2>

		
			<p className="mb-4 max-w-2xl text-lg md:text-xl">
			As a coach, my approach is driven by my adventurous spirit and my willingness to take risks. I believe that stepping outside of your comfort zone and trying new things is essential for personal and professional growth. I bring this same sense of courage and freedom to my coaching practice, and it's something that my clients really appreciate.
			</p>
			<p className="mb-4 max-w-2xl text-lg md:text-xl">
			I approach coaching with the belief that my clients already have the answers within themselves. My role is to guide them towards discovering those answers and building the confidence to trust in their own abilities. I work to create a safe and supportive space where my clients can explore their thoughts and feelings without fear of judgment.
			</p>
			<p className="mb-4 max-w-2xl text-lg md:text-xl">
			One of my core values as a coach is kindness and self-love. I believe that true healing comes from treating ourselves with compassion and understanding. When we learn to love ourselves unconditionally, we are better equipped to navigate life's challenges with grace and resilience.
			</p>
			<p className="mb-4 max-w-2xl text-lg md:text-xl">
			In addition to kindness and self-love, I also value playfulness and laughter. Life is meant to be enjoyed, and coaching sessions with me often incorporate moments of joy and levity. I encourage my clients to approach their personal and professional lives with a sense of fun and playfulness.
			</p>
			<p className="mb-4 max-w-2xl text-lg md:text-xl">
			Ultimately, my coaching approach is focused on helping my clients connect with their true selves and live an adventurous life. I work to facilitate a journey of self-discovery and healing that brings my clients back to their core values and beliefs. With my support and guidance, my clients are able to step into their power and create the life they truly desire.
			</p>


			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{Object.entries(coaching).map(([name, data]) => (
					<CoachingCard key={name} name={name} {...data} />
				))}
			</div>

			<OrbContainer>
				<Orb className="-top-52 left-52 bg-emerald-400/30 dark:bg-emerald-600/30" />
			</OrbContainer>
			
			<br />

			<p className="mb-4 max-w-2xl text-lg md:text-xl">
				Checkout out the <S>Cambodia Coaching Institute</S>
			</p>

		</>
	);
}

export function getStaticProps() {
	return {
		props: {
			seo: {
				title: "Projects",
			},
		},
	};
}
