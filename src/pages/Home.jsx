import React from "react";

function Home() {
    const techStack = [
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "Blade",
        "React",
        "Tailwind",
    ];

    return (
        <section className="flex justify-center py-16 px-4">
            <div
                className="max-w-4xl w-full glass-shine border-4 border-black p-10 text-center float-slow"
                style={{ borderRadius: "0 32px 0 32px" }}
            >
                {/* Intro */}
                <p className="text-2xl md:text-3xl leading-relaxed mb-10 text-gray-100">
                    I’m{" "}
                    <span className="font-bold text-white">Yaelen</span>, a{" "}
                    <span className="font-semibold text-white">
                        full-stack software developer
                    </span>{" "}
                    originally from{" "}
                    <span className="text-white font-medium">
                        Suriname
                    </span>{" "}
                    with{" "}
                    <span className="text-white font-medium">
                        Indonesian roots
                    </span>.
                </p>

                {/* Tech Stack */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 tracking-wide">
                        Tech Stack
                    </h2>

                    <ul className="flex flex-wrap justify-center gap-4">
                        {techStack.map((tech) => (
                            <li
                                key={tech}
                                className="
                                    px-5 py-2
                                    rounded-2xl
                                    border border-white/20
                                    bg-white/10
                                    backdrop-blur-md
                                    text-white
                                    text-sm
                                    font-medium
                                    transition-all duration-300
                                    hover:bg-white/20
                                    hover:scale-105
                                    hover:shadow-lg
                                "
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Home;
