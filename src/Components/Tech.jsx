import { SiFirebase, SiTailwindcss, SiReact, SiMongodb,  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive2 } from "react-icons/im";

const Tech = () => {
    return (
        <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 bg-black px-8 py-16">
            <h1 className="text-4xl font-light text-white md:text-6xl">
                Technologies
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-10 p-5">
                {/* Firebase */}
                <div className="text-center">
                    <SiFirebase 
                        className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 hover:scale-110 max-sm:text-[100px] md:text-[120px]" 
                        aria-label="Firebase"
                    />
                    <p className="mt-2 text-white">Firebase</p>
                </div>

                {/* JavaScript */}
                <div className="text-center">
                    <IoLogoJavascript 
                        className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 hover:scale-110 max-sm:text-[100px] md:text-[120px]" 
                        aria-label="JavaScript"
                    />
                    <p className="mt-2 text-white">JavaScript</p>
                </div>

                
                {/* html */}
                <div className="text-center">
                    <ImHtmlFive2 
                        className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 hover:scale-110 max-sm:text-[100px] md:text-[120px]" 
                        aria-label="JavaScript"
                    />
                    <p className="mt-2 text-white">HTML</p>
                </div>

                {/* TailwindCSS */}
                <div className="text-center">
                    <SiTailwindcss 
                        className="cursor-pointer text-[80px] text-cyan-400 transition-all duration-300 hover:-translate-y-5 hover:scale-110 max-sm:text-[100px] md:text-[120px]" 
                        aria-label="Tailwind CSS"
                    />
                    <p className="mt-2 text-white">TailwindCSS</p>
                </div>

                {/* React */}
                <div className="text-center">
                    <SiReact 
                        className="cursor-pointer text-[80px] text-cyan-500 transition-all duration-300 hover:-translate-y-5 hover:scale-110 max-sm:text-[100px] md:text-[120px]" 
                        aria-label="React"
                    />
                    <p className="mt-2 text-white">React</p>
                </div>

                {/* MongoDB */}
                <div className="text-center">
                    <SiMongodb 
                        className="cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:-translate-y-5 hover:scale-110 max-sm:text-[100px] md:text-[120px]" 
                        aria-label="MongoDB"
                    />
                    <p className="mt-2 text-white">MongoDB</p>
                </div>
            </div>
        </div>
    );
};

export default Tech;
