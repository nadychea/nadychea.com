import Link from "next/link";
import {
	IconMail,
	IconBrandGithub,
	IconBrandFacebook,
	IconNotebook,
	IconCode,
	IconHome,
	IconBat,
	IconBrandInstagram,
	IconBrandTelegram,
} from "@tabler/icons-react";

export const name = "Nady Chea";

export const github = "https://github.com/nadichea";
export const blogSource = github + "/blog";

export const email = "chea.sovannady@gmail.com";

export const navLinks = [
	{ title: "Home", href: "/", Icon: IconHome },
	{ title: "Coaching", href: "/coaching", Icon: IconBat },
	{ title: "Projects", href: "/projects", Icon: IconCode },
	{ title: "Blog", href: "/blog", Icon: IconNotebook },
];

export const social = [
	{
		Icon: IconBrandFacebook,
		label: `Visit ${name} on Facebook`,
		href: "https://facebook.com/sovannadychea",
	},
	{
		Icon: IconBrandInstagram,
		label: `Visit ${name} on Instagram`,
		href: "https://instagram.com/nady_chea",
	},
	{
		Icon: IconBrandTelegram,
		label: `Visit ${name} on Telegram`,
		href: "https://instagram.com/sovannadychea",
	},
	{
		Icon: IconBrandGithub,
		label: `Visit ${name} on GitHub`,
		href: github,
	},
	{
		Icon: IconMail,
		label: `Email ${name}`,
		href: `mailto:${email}`,
	},
];

export const projects = {
	NadyChea: {
		cover: "/images/projects/nadychea.jpg",
		coverAlt:
			"Nady's personal website and online coaching guide",
		description:
			"Personal website to present coaching style and guide for...",
		links: {
			Website: "https://nadychea.com",
		},
	},
	CCI: {
		cover: "/images/projects/cci.png",
		coverAlt:
			"Cambodia Coaching Institute",
		description:
			"Cambodia Coaching Institute is Cambodia's only provider of professional coaching training.",
		links: {
			Website: "https://www.cambodiacoachinginstitute.com/",
		},
	},
	ThriveKH: {
		cover: "/images/projects/thrive-kh.png",
		coverAlt:
			"Cambodia Coaching Institute",
		description:
			"Cambodia Coaching Institute is Cambodia's only provider of professional coaching training.",
		links: {
			Website: "https://www.cambodiacoachinginstitute.com/",
		},
	},
	WomenCircle: {
		cover: "/images/projects/women-circle.png",
		coverAlt:
			"Cambodia Coaching Institute",
		description:
			"Cambodia Coaching Institute is Cambodia's only provider of professional coaching training.",
		links: {
			Website: "https://www.cambodiacoachinginstitute.com/our-community",
		},
	},
};

export const coaching = {
	CCI: {
		cover: "/images/projects/cci.png",
		coverAlt:
			"Cambodia Coaching Institute",
		description:
			"Cambodia Coaching Institute is Cambodia's only provider of professional coaching training.",
		links: {
			Website: "https://www.cambodiacoachinginstitute.com/",
		},
	},
};
