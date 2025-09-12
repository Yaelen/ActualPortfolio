import React from "react";
import "../index.css";

export default function Projects() {
    const projects = [
        {
            title: "Hotspot App",
            image: "/src/assets/images/Hotspot.png",
            description:
                "An app showing parks in the Netherlands, with maps, favorites and offline support.",
            link: "https://example.com/hotspot",
            tech: ["React Native", "Tailwind"],
            role: "Front-end developer & UI designer",
            type: "code", // code only
        },
        {
            title: "Gaia Park",
            image: "/assets/images/hotspot-app.png",
            description:
                "A concept website for a conceptual park with extinct and endangered animals.",
            link: "https://example.com/gaia",
            tech: ["React", "Tailwind"],
            role: "Front-end developer and content creator",
            type: "live", // live website
        },
        {
            title: "CloudStrike",
            image: "src/assets/images/cloudstrike.png",
            description:
                "A social media website for posting pictures of clouds with a working back-end.",
            link: "https://example.com/cloudstrike",
            tech: ["React", "Laravel", "Tailwind"],
            role: "Full-stack developer",
            type: "code",
        },
    ];

    return (
        <section id="projects" className="p-12 flex flex-col items-center gap-12">

            <div className="flex flex-col w-full max-w-5xl gap-10">
                {projects.map((p) => (
                    <div
                        key={p.title}
                        className="glass-shine relative z-10 rounded-3xl border border-white/30 bg-white/20 backdrop-blur-lg shadow-xl
                                   flex flex-col md:flex-row items-center md:items-stretch p-6
                                   transition-transform duration-300 hover:scale-[1.02]"
                    >
                        {/* Left image slab */}
                        <div className="w-full md:w-1/3 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                            <img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-48 md:h-full object-cover rounded-xl"
                            />
                        </div>

                        {/* Right content slab */}
                        <div className="flex flex-col justify-between text-center md:text-left w-full">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
                                <p className="text-white mb-4">{p.description}</p>
                            </div>

                            {/* Tech + Role Section */}
                            <div className="bg-black/70 rounded-xl p-4 mb-4">
                                <h3 className="font-bold text-lg mb-2 text-white">Tech & Role</h3>

                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-2 mb-2 justify-center md:justify-start">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 bg-gray-300 rounded-full border border-black text-sm text-black font-semibold"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Role text */}
                                <p className="text-white text-sm">{p.role}</p>
                            </div>

                            {/* Type badge */}
                            <div className="mb-3">
                                {p.type === "live" ? (
                                    <span className="px-3 py-1 rounded-full bg-green-500 text-white font-semibold">
                                        Live Site
                                    </span>
                                ) : (
                                    <span className="px-3 py-1 rounded-full bg-yellow-500 text-black font-semibold">
                                        Code Only
                                    </span>
                                )}
                            </div>

                            {/* Button changes text depending on type */}
                            <a
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="custom-button self-center md:self-start"
                            >
                                {p.type === "live" ? "View Website" : "View Code"}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
