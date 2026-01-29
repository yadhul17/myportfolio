import React, { useState } from "react"
import Section from "../component/common/sectioin";
import Container from "../component/common/container";
import emailjs from "@emailjs/browser";
import { Send, Loader2 } from "lucide-react"

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

<<<<<<< HEAD
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
=======
        const serviceID = "";
        const templateID = "";
        const publicKey = "";
>>>>>>> 3b2a3b09dd3ed6a18c72f6d0af52edad30d7a99b

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then(() => {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            })
            .catch((err) => {
                alert("Failed to send message.");
                console.error(err);
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <Section id="contact" className="relative bg-black py-24 overflow-hidden">
            {/* Background Glows to match Hero */}
            
            

            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">
                        Get In <span className="text-cyan-400">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-md mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Form Container with Glassmorphism */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/40 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/40 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/40 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none"
                                />
                            </div>

                            <div className="flex justify-center pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative px-12 py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-2xl flex items-center gap-3 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-95 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="animate-spin" size={20} />
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
