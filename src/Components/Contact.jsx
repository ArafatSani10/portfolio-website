import { div } from "framer-motion/client";

const Contact = () => {
    return (
        <div className="hero bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen w-full">
            <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
                <div className="card bg-white w-full max-w-md p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                    <form className="card-body">
                        <div className="form-control mb-6">
                            <label className="label text-lg font-semibold text-gray-700">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered text-lg py-3 px-5 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                                required
                            />
                        </div>
                        <div className="form-control mb-6">
                            <label className="label text-lg font-semibold text-gray-700">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea
                                placeholder="Enter your message"
                                className="input input-bordered text-lg py-3 px-5 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <button className="btn bg-blue-600 text-white text-lg py-3 px-8 rounded-full shadow-lg transform transition-all hover:bg-blue-700 hover:scale-105 focus:outline-none">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
