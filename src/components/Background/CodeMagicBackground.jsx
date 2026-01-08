import { motion } from "framer-motion";
import { useState } from "react";

const codeSnippets = [
	// HTML & Structure
	"<div>",
	"</div>",
	"<section>",
	"</section>",
	"<main>",
	"<header>",
	"<footer>",
	"<nav>",
	"<ul>",
	"<li>",
	"<a>",
	"<img>",
	"<span>",
	"<button>",
	"<form>",
	"<input>",
	"<label>",
	"<canvas>",
	"<svg>",
	"<iframe>",
	"<video>",
	"<audio>",
	"<!DOCTYPE html>",
	"<meta>",
	"<link>",
	"<script>",
	"<style>",
	"<title>",
	'id=""',
	'class=""',
	'src=""',
	'href=""',
	'alt=""',
	'type=""',
	'placeholder=""',

	// CSS & Styling
	".class",
	"#id",
	"display: flex",
	"display: grid",
	"position: absolute",
	"position: relative",
	"z-index: 99",
	"opacity: 0",
	"color: #fff",
	"background: #000",
	"margin: 0",
	"padding: 0",
	"border: 1px solid",
	"border-radius: 8px",
	"box-shadow:",
	"transform: translate",
	"transition: all",
	"animation:",
	"@media",
	":hover",
	":active",
	":focus",
	"::before",
	"::after",
	"!important",
	"rem",
	"em",
	"px",
	"vh",
	"vw",
	"calc()",
	"var()",

	// JavaScript & React
	"const",
	"let",
	"var",
	"function",
	"return",
	"import",
	"export",
	"from",
	"async",
	"await",
	"try",
	"catch",
	"throw",
	"if",
	"else",
	"switch",
	"case",
	"for",
	"while",
	"do",
	"break",
	"continue",
	"default",
	"new",
	"this",
	"=>",
	"...",
	"${}",
	"typeof",
	"instanceof",
	"void",
	"delete",
	"null",
	"undefined",
	"console.log()",
	"document.querySelector",
	"window.addEventListener",
	"JSON.stringify",
	"JSON.parse",
	"localStorage",
	"fetch()",
	"Promise",
	"map()",
	"filter()",
	"reduce()",
	"forEach()",
	"find()",
	"push()",
	"pop()",
	"useState",
	"useEffect",
	"useRef",
	"useContext",
	"useReducer",
	"useCallback",
	"useMemo",
	"<Component />",
	"props",
	"state",
	"render",
	"fragment",

	// PHP & WordPress
	"<?php",
	"?>",
	"echo",
	"print",
	"$variable",
	"array()",
	"foreach",
	"include",
	"require",
	"namespace",
	"use",
	"class",
	"public",
	"private",
	"protected",
	"construct",
	"extends",
	"implements",
	"interface",
	"trait",
	"static",
	"final",
	"wp_head()",
	"wp_footer()",
	"the_content()",
	"the_title()",
	"get_header()",
	"get_footer()",
	"add_action",
	"add_filter",
	"do_shortcode",
	"WP_Query",
	"$wpdb",
	"get_template_part",
	"register_post_type",
	"wp_enqueue_script",

	// Node.js & Backend
	"require()",
	"module.exports",
	"process.env",
	"__dirname",
	"__filename",
	"npm install",
	"npm run dev",
	"npm build",
	"npm start",
	"package.json",
	"node_modules",
	"express",
	"router",
	"middleware",
	"req",
	"res",
	"next",
	"mongoose",
	"Schema",
	"model",
	"connect",
	"async/await",
	"API",
	"REST",
	"GraphQL",
	"query",
	"mutation",
	"resolver",
	"JWT",
	"token",
	"auth",

	// Tools & DevOps & Concepts
	"git init",
	"git add .",
	"git commit",
	"git push",
	"git pull",
	"git status",
	"git checkout",
	"git merge",
	"git branch",
	"docker-compose",
	"Dockerfile",
	"kubectl",
	"aws",
	"s3",
	"lambda",
	"ec2",
	"firebase",
	"vercel",
	"netlify",
	"heroku",
	"linux",
	"bash",
	"sudo",
	"cd",
	"ls",
	"mkdir",
	"rm -rf",
	"HTTP",
	"HTTPS",
	"GET",
	"POST",
	"PUT",
	"DELETE",
	"200 OK",
	"404 Not Found",
	"500 Server Error",
	"DNS",
	"IP",
	"SSH",
	"SSL/TLS",
	"database",
	"SQL",
	"NoSQL",
	"MongoDB",
	"PostgreSQL",
	"MySQL",
	"Redis",
	"cache",
	"cookies",

	// Fun & Misc
	"Hello World",
	"Bug",
	"Feature",
	"TODO",
	"FIXME",
	"HACK",
	"DEBUG",
	"Stack Overflow",
	"Google",
	"AI",
	"Machine Learning",
	"Data Science",
	"Algorithm",
	"Structure",
	"Logic",
	"Syntax",
	"Compile",
	"Runtime",
	"Infinity",
	"NaN",
	"undefined",
	"null",
	"true",
	"false",
];

const CodeParticle = ({ text, x, y, duration, delay, scale, color }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: y + 20, scale: 0 }}
			animate={{
				opacity: [0, 0.3, 0], // Kept low opacity (0.3) to not affect UI
				y: y - 150, // Floating higher
				scale: [scale, scale * 1.2, scale],
			}}
			transition={{
				duration: duration,
				repeat: Infinity,
				delay: delay,
				ease: "linear",
			}}
			className="absolute font-mono whitespace-nowrap pointer-events-none select-none blur-[0.5px]"
			style={{
				left: `${x}%`,
				top: `${y}%`,
				fontSize: `${scale * 14}px`,
				color: color,
				zIndex: -1, // Explicitly low z-index
			}}
		>
			{text}
		</motion.div>
	);
};

const CodeMagicBackground = () => {
	// Use lazy state initialization to generate particles once on mount
	const [particles] = useState(() => {
		const particleCount = 60; // Increased count for "too many things"
		const newParticles = [];

		for (let i = 0; i < particleCount; i++) {
			newParticles.push({
				id: i,
				// Randomly select from the massive list
				text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
				x: Math.random() * 100, // Random horizontal pos
				y: Math.random() * 100, // Random vertical pos
				duration: Math.random() * 15 + 15, // Slower float (15-30s)
				delay: Math.random() * 20, // Random start delays
				scale: Math.random() * 0.6 + 0.4, // varied sizes
				color: Math.random() > 0.5 ? "#b9f244" : "#61dafb", // Neon Green or React Blue
			});
		}
		return newParticles;
	});

	return (
		<div
			className="fixed inset-0 overflow-hidden pointer-events-none"
			style={{ zIndex: 0 }}
		>
			{/* Dark Gradient Overlay for Depth */}
			<div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg opacity-80" />

			{/* Floating Code Particles */}
			{particles.map((particle) => (
				<CodeParticle key={particle.id} {...particle} />
			))}
		</div>
	);
};

export default CodeMagicBackground;
