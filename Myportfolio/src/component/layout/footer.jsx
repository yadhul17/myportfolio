import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Container from "../common/Container.jsx";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Skills", href: "#skills" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/yadhul-jayakumar-0212552b8/", label: "LinkedIn" },
        { icon: <Mail size={20} />, href: "mailto:yadhuljayakumar@email.com", label: "Email" },
    ];

    return (
        <footer className="bg-black border-t border-slate-900 pt-10 pb-5">
            <Container>
                <div className="flex flex-col items-center">
                    
                    {/* Brand Name matching Logo style */}
                    <h2 className="text-2xl font-bold tracking-tighter text-white mb-8">
                        PORT<span className="text-cyan-400">FOLIO</span>
                    </h2>

                    {/* Navigation Headings */}
                    <nav className="mb-10">
                        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href} 
                                        className="text-slate-400 hover:text-cyan-400 font-medium tracking-wide transition-colors duration-300"
                                    >
                                        {link.name.toUpperCase()}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social Icons */}
                    <div className="flex gap-6 mb-12">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Divider line */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8" />

                    {/* Bottom Credits */}
                    <div className="text-center">
                        <p className="text-slate-500 text-sm tracking-wide">
                            © {currentYear} <span className="text-white font-medium">Yadhul Jayakumar</span>. 
                            Built with React & Tailwind.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}