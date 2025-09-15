import Link from "next/link";
import { FaCloudDownloadAlt, FaRegPaperPlane } from "react-icons/fa";

const Hire = () => {
    return (
        <div className="bg-black">
            <section className="container text-center mx-auto px-4 py-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text  bg-gradient-to-r from-primary to-primary/80 text-white">
                    Let's <span className="text-primary">Work</span> Together
                </h2>
                <p className="text-base md:text-lg text-white">I am available for your company projects.
                </p>
                <div className="mt-8">
                    <Link
                        href="https://www.linkedin.com/in/monaimmukul/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary border border-cyan-50 p-4 rounded-lg  justify-center"
                    >
                        <FaRegPaperPlane className="w-6 h-6" />
                        <span className="text-base font-medium">Hire Me</span>
                    </Link>

                    <Link
                        href="https://drive.google.com/file/d/1u1s_tqmcC4ZCWAZN1r_WPIYE_w-j_UhP/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary border border-cyan-50 p-4 rounded-lg  justify-center ml-4"
                    >
                        <FaCloudDownloadAlt
                        className="w-6 h-6" />
                        <span className="text-base font-medium">Download CV</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Hire;