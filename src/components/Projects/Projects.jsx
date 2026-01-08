import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
	{
		id: 1,
		number: "_01.",
		title: "LuxeShop E-commerce",
		tags: ["Next.js", "Stripe", "Tailwind CSS"],
		link: "#",
		image: "/images/ecommerce.png",
	},
	{
		id: 2,
		number: "_02.",
		title: "FocusFlow Task Manager",
		tags: ["React", "Redux", "Firebase"],
		link: "#",
		image: "/images/taskwrapper.png",
	},
	{
		id: 3,
		number: "_03.",
		title: "Neon Portfolio",
		tags: ["React", "Framer Motion", "GSAP"],
		link: "#",
		image: "/images/portfolio.png",
	},
	{
		id: 4,
		number: "_04.",
		title: "Editorial Thread",
		tags: ["WordPress", "PHP", "Custom Theme"],
		link: "#",
		image: "/images/blog.png",
	},
	{
		id: 5,
		number: "_05.",
		title: "TropicExplore",
		tags: ["React", "Mapbox", "Node.js"],
		link: "#",
		image: "/images/travel.png",
	},
	{
		id: 6,
		number: "_06.",
		title: "Le Rêve Doré",
		tags: ["HTML", "CSS", "JavaScript"],
		link: "#",
		image: "/images/restaurant.png",
	},
];

const Projects = () => {
	const [hoveredId, setHoveredId] = useState(null);

	return (
		<section id="projects" className="py-32 relative overflow-hidden">
			{/* Background Image Preview */}
			{hoveredId && (
				<motion.div
					key={hoveredId}
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.15 }}
					exit={{ opacity: 0 }}
					className="absolute inset-0 z-0 pointer-events-none"
					style={{
						backgroundImage: `url(${projects.find((p) => p.id === hoveredId)?.image})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						filter: "blur(30px)",
					}}
				/>
			)}

			<div className="container mx-auto px-6 lg:px-12 relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="flex items-center gap-4 mb-16"
				>
					<span className="text-accent text-2xl">✦</span>
					<h2 className="text-sm uppercase tracking-widest font-semibold text-text-secondary">
						Selected Projects
					</h2>
				</motion.div>

				{/* Projects List */}
				<div className="space-y-0 border-t border-border">
					{projects.map((project, index) => (
						<motion.a
							key={project.id}
							href={project.link}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.05 }}
							onMouseEnter={() => setHoveredId(project.id)}
							onMouseLeave={() => setHoveredId(null)}
							className={`group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border transition-all duration-300 ${
								hoveredId && hoveredId !== project.id
									? "opacity-30"
									: "opacity-100"
							}`}
						>
							{/* Left: Number + Title */}
							<div className="flex items-baseline gap-4 mb-4 md:mb-0">
								<span className="text-accent text-sm font-mono">
									{project.number}
								</span>
								<h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-accent transition-colors">
									{project.title}
								</h3>
							</div>

							{/* Right: Tags + Arrow */}
							<div className="flex items-center gap-6">
								<div className="hidden md:flex items-center gap-2">
									{project.tags.map((tag, i) => (
										<span
											key={i}
											className="px-3 py-1 text-xs text-text-muted border border-border rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
								<div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
									<ArrowUpRight
										size={18}
										className="text-text-secondary group-hover:text-bg transition-colors"
									/>
								</div>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
