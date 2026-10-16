import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#project" },
  { name: "Contact", href: "/#contact" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com/monaim69.mukul", Icon: FaFacebookF },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/monaimmukul/", Icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/monaim3", Icon: FaGithub },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <nav className="flex flex-wrap justify-center gap-6 text-gray-400">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="bg-[#1e1e1e] rounded-full p-2.5 hover:bg-primary transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a href="#" aria-label="Back to top" className="bg-[#1e1e1e] rounded-full p-2.5 hover:bg-primary transition-colors">
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm pb-8">
        © {new Date().getFullYear()} Monaim Mukul. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
