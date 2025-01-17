import devImg from '../../public/assest/Screenshot 2025-01-17 170729.png';

import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
            <div className="flex flex-col items-center justify-center gap-10 text-white">
                < motion.div

                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}


                    className="relative">
                    <img
                        className='cursor-pointer rounded-full w-[300px] md:w-[350px] object-cover shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600'
                        src={devImg}
                        alt="Developer"
                    />
                </ motion.div>
                <motion.div


                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}



                    className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
                    <h1 className="max-sm:text-4xl font-light bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent md:text-7xl transition-all duration-300 hover:opacity-100">
                        A<span className="text-gray-400">RA</span>
                        <span className="text-green-500">FAT</span>
                    </h1>
                    <h2 className='md:text-7xl text-4xl bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent'>
                        Web Developer
                    </h2>
                    <h3 className='md:text-base text-pretty text-sm text-gray-400'>
                        I'm a web developer skilled in React, Next.js, and Tailwind CSS,
                        HTML, JavaScript, Firebase Authentication, focused on building clean,
                        scalable applications. From front-end design to seamless database integration
                        with MongoDB, I create efficient solutions for dynamic user experience.
                        Let's build something great!
                    </h3>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
