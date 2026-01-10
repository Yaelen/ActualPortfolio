import React from "react";

export default function TProjects() {
    const projects = [
        {
            title: "Hotspot App",
            image: "/src/assets/images/Hotspot.png",
            description:
                "An app showing parks in the Netherlands, with maps, favorites and offline support.",
            link: "https://example.com/hotspot",
            tech: ["React Native", "Tailwind"],
            role: "Front-end developer & UI designer",
            type: "code",
        },
        {
            title: "Gaia Park",
            image: "/assets/images/hotspot-app.png",
            description:
                "A concept website for a conceptual park with extinct and endangered animals.",
            link: "https://example.com/gaia",
            tech: ["React", "Tailwind"],
            role: "Front-end developer and content creator",
            type: "live",
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
        {
            title: "Open Hiring",
            image: "",
            description:
                "A new way for business to fed and hire new employees",
            link: "https://example.com/OpenHiring",
            tech: [],
            role: "",
            type: "",
        },
        {
            title: "Bird Landlord",
            image: "",
            description:
                "A platform for managing birdhouse listings and avian tenants.",
            link: "https://example.com/cloudstrike",
            tech: [],
            role: "",
            type: "",
        },
    ];

    return(
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-y-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass-shine border-4 border-black p-6 flex flex-col items-center gap-6 relative pt-12"
                        style={{borderRadius: '0 25px 0 25px'}}
                    >
                        {/* Project Icon (centered on top) */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-black/20 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-black/10">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain p-2"
                                />
                            ) : (
                                <span className="text-4xl" role="img" aria-label="project">📁</span>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 text-center">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-200 mb-4">{project.description}</p>

                            {project.tech && project.tech.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-3 py-1 bg-black/30 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {project.role && (
                                <p className="text-sm text-gray-300 mb-4">Role: {project.role}</p>
                            )}

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="custom-button-static inline-block"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
