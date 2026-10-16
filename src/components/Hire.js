import Link from "next/link";
import { FaCloudDownloadAlt, FaRegPaperPlane } from "react-icons/fa";

const Hire = () => {
  return (
    <section className="bg-black">
      <div className="container text-center mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Let's <span className="text-primary">Work</span> Together
        </h2>
        <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
          Have a project in mind or an open frontend role? I'm available for
          full-time positions and freelance work — let's talk.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <FaRegPaperPlane className="w-5 h-5" />
            Hire Me
          </Link>
          <Link
            href="https://drive.google.com/file/d/1u1s_tqmcC4ZCWAZN1r_WPIYE_w-j_UhP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            <FaCloudDownloadAlt className="w-5 h-5" />
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hire;
