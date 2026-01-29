import { Github, Linkedin, Mail } from "lucide-react";
import Container from "../common/container.jsx";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: "Home", href: "/" },
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
        <footer className="bg-[#020617] border-t border-white/5 pt-12 pb-8">
            <Container>
                <div className="flex flex-col items-center">

                    {/* Brand Name - Responsive sizing */}
                    <div className="mb-10 h-10 md:h-12 flex items-center justify-center w-full max-w-[200px] md:max-w-[250px]">
                        
                    </div>

                    {/* Navigation - Stacked on mobile, row on desktop */}
                    <nav className="mb-10 w-full">
                        <ul className="flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-x-10">
                            {navLinks.map((link) => (
                                <li key={link.name} className="w-full md:w-auto text-center">
                                    <a
                                        href={link.href}
                                        className="text-white/70 hover:text-purple-400 font-medium tracking-[0.2em] transition-all duration-300 text-xs md:text-sm uppercase"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social Icons - Grid/Row adjustment */}
                    <div className="flex items-center justify-center gap-5 md:gap-8 mb-10">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 active:scale-95"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Divider - Gradient looks better on dark themes */}
                    <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                    {/* Bottom Credits */}
                    <div className="text-center px-6">
                        <p className="text-slate-500 text-[10px] md:text-xs tracking-widest leading-loose uppercase">
                            © {currentYear} <span className="text-white/80">Yadhul Jayakumar</span>
                            <span className="hidden md:inline mx-2">|</span> 
                            <br className="md:hidden" />
                            Built with React & Tailwind
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}