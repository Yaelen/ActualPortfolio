import React from "react";

export default function TProjects() {
    const projects = [
        {
            title: "Gaia Park",
            image: "src/assets/images/Gaia.png",
            description:
                "Gaia Park is an innovative environmental restoration concept where visitors use the Gaia Seed device to plant bio-engineered seeds and contribute to reforestation, blending technology with nature to promote sustainability.",
            link: "https://project.hosted.hr.nl/2024_2025/tle1_exp_t10/TLE-1-T10/",
            hub: "https://github.com/Yaelen/TLE-1-T10",
            tech: ["PHP", "HTML", "CSS", "JavaScript"],
            type: "live",
        },
        {
            title: "Open Hiring",
            image: "src/assets/images/OpenHiring.png",
            description:
                "A website concept for Open Hiring that promotes fair job applications by keeping applicants anonymous and letting the first to sign up get the job. No bias, just opportunity.",
            link: "",
            hub: "https://github.com/silvangemeren/werkendTLE2project",
            tech: ["HTML", "CSS", "JavaScript", "PHP", "Blade"],
            type: "concept",
        },
        {
            title: "Gebaren Bij Intake",
            image: "src/assets/images/Work.png",
            description:
                "A concept application for a digitalized version of a sign language workbook for practice and learning, focused on medical care with practice videos and a built-in dictionary.",
            link: "",
            hub: "https://github.com/MLY-Creates/TLE-3-Front-End/",
            tech: ["React", "JavaScript", "Tailwind"],
            type: "code",
        },
        {
            title: "CloudStrike",
            image: "src/assets/images/Clouds.png",
            description:
                "A social media website for posting and sharing cloud photography, supported by a functional back-end.",
            link: "",
            hub: "https://github.com/Yaelen/cloud_strike",
            tech: ["React", "Laravel", "Tailwind"],
            type: "code",
        },
        {
            title: "MadoRijschool",
            image: "src/assets/images/Mado.png",
            description:
                "A concept for a driving school website focused on faster reservations and clearer access to essential UI features.",
            link: "",
            hub: "https://github.com/DavisKarper/CLE-2-team-9",
            tech: ["HTML", "CSS", "PHP", "MySQL"],
            type: "concept",
        },
        {
            title: "Bird Landlord",
            image: "src/assets/images/Bird.png",
            description:
                "A playful platform concept for managing birdhouse listings and their avian tenants.",
            link: "",
            hub: "https://github.com/surelynobody161/vogelhuisje",
            tech: ["TypeScript", "React", "React Native","Expo"],
            type: "concept",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass-shine border-4 border-black overflow-hidden transition-transform duration-300 hover:-translate-y-1 flex flex-col"
                        style={{ borderRadius: "0 25px 0 25px" }}
                    >
                        {/* Image */}
                        {project.image && (
                            <div className="relative h-40 w-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        )}

                        {/* Content */}
                        <div className="p-6 text-center flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-200 mb-4">
                                {project.description}
                            </p>

                            {project.tech?.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-black/30 rounded-full text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Buttons – always bottom */}
                            <div className="mt-auto flex gap-3 justify-center">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 text-xs rounded-md bg-blue-500 hover:bg-blue-600 transition"
                                    >
                                        Live Demo
                                    </a>
                                )}

                                {project.hub && (
                                    <a
                                        href={project.hub}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 text-xs rounded-md bg-gray-800 hover:bg-gray-700 transition"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
