import { SiFirebase, SiTailwindcss, SiReact, SiMongodb, SiGit, SiFigma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Tech = () => {
    return (
        <section id="tech" className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-black text-white px-6 py-20">
            <h1 className="text-4xl font-light text-center text-white md:text-5xl">
                Technologies <br />
                <span className="text-green-500 text-3xl">I Have Mastered</span>
            </h1>

            <div className="relative mt-12 w-full overflow-hidden">
                <div className="flex animate-marquee gap-16">
                    {/* Firebase */}
                    <div className="text-center transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-10px]">
                        <SiFirebase className="text-6xl text-sky-500" aria-label="Firebase" />
                        <p className="mt-3 text-lg">Firebase</p>
                    </div>

                    {/* JavaScript */}
                    <div className="text-center transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-10px]">
                        <IoLogoJavascript className="text-6xl text-yellow-500" aria-label="JavaScript" />
                        <p className="mt-3 text-lg">JavaScript</p>
                    </div>

                    {/* TailwindCSS */}
                    <div className="text-center transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-10px]">
                        <SiTailwindcss className="text-6xl text-cyan-400" aria-label="TailwindCSS" />
                        <p className="mt-3 text-lg">TailwindCSS</p>
                    </div>

                    {/* React */}
                    <div className="text-center transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-10px]">
                        <SiReact className="text-6xl text-cyan-500" aria-label="React" />
                        <p className="mt-3 text-lg">React</p>
                    </div>

                    {/* MongoDB */}
                    <div className="text-center transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-10px]">
                        <SiMongodb className="text-6xl text-green-600" aria-label="MongoDB" />
                        <p className="mt-3 text-lg">MongoDB</p>
                    </div>

                    {/* Git */}
                    <div className="text-center transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-10px]">
                        <SiGit className="text-6xl text-orange-500" aria-label="Git" />
                        <p className="mt-3 text-lg">Git</p>
                    </div>

                    {/* GitHub */}
                    <div className="text-center transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-10px]">
                        <FaGithub className="text-6xl text-purple-600" aria-label="GitHub" />
                        <p className="mt-3 text-lg">GitHub</p>
                    </div>

                    {/* Figma */}
                    <div className="text-center transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-10px]">
                        <SiFigma className="text-6xl text-purple-600" aria-label="Figma" />
                        <p className="mt-3 text-lg">Figma</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tech;
