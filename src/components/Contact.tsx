import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

/**
 * Contact Section - Premium Cosmic Design
 * Perfectly aligned with the portfolio's visual language.
 */
const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // EmailJS configuration from environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            // Validate that environment variables are present
            if (!serviceId || !templateId || !publicKey) {
                console.error('Missing EmailJS environment variables');
                throw new Error('Email service configuration error');
            }

            // Initialize EmailJS with your public key
            emailjs.init(publicKey);

            // Send the email
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current as HTMLFormElement
            );

            toast({
                title: "Message Sent! 🚀",
                description: "Thanks for reaching out, Tisha will get back to you soon.",
            });

            formRef.current?.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast({
                title: "Failed to send message",
                description: "Please try again or contact me directly via email.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const socials = [
        {
            icon: Mail,
            href: "mailto:jaintisha2530@gmail.com",
            label: "Email",
            value: "jaintisha2530@gmail.com",
            color: "from-teal-500 to-emerald-500"
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/tisha-jain25",
            label: "LinkedIn",
            value: "linkedin.com/in/tisha-jain25",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Github,
            href: "https://github.com/tishajain25",
            label: "GitHub",
            value: "github.com/tishajain25",
            color: "from-purple-500 to-violet-500"
        }
    ];

    return (
        <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background Decorative Elements - Cosmic Theme */}
            <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full" />

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Uniform Section Header - Matches About & Experience */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                        Get in <span className="text-teal-400">Touch</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full mb-8" />

                    <div className="space-y-1.5">
                        <p className="text-gray-400 text-lg sm:text-xl font-medium leading-relaxed">
                            I'm always open to discussing new projects,
                        </p>
                        <p className="text-gray-400 text-lg sm:text-xl font-medium leading-relaxed">
                            creative ideas or opportunities to be part of your visions.
                        </p>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Left - Connect Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col h-full"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-12 w-2 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full" />
                            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Let's start a conversation</h3>
                        </div>

                        <div className="space-y-6 flex-grow">
                            {socials.map((social, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-6 p-6 bg-gray-950/40 border border-gray-800/60 rounded-3xl backdrop-blur-sm"
                                >
                                    <div className="p-4 rounded-2xl bg-gray-900 border border-gray-800">
                                        <social.icon className="w-6 h-6 text-gray-400" strokeWidth={2} />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">{social.label}</p>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base sm:text-lg text-white font-semibold truncate block"
                                        >
                                            {social.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Premium Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-full"
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="h-full p-8 sm:p-10 bg-gray-950/60 border border-gray-800/60 rounded-[2.5rem] space-y-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
                        >
                            {/* Form Accent Glow */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Name"
                                        className="w-full px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-2xl text-white focus:border-teal-500/50 focus:outline-none transition-all placeholder:text-gray-600 font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="email@example.com"
                                        className="w-full px-4 py-4 bg-gray-900/50 border border-gray-800 rounded-2xl text-white focus:border-teal-500/50 focus:outline-none transition-all placeholder:text-gray-600 font-medium text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project or just say hi..."
                                    className="w-full px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-2xl text-white focus:border-teal-500/50 focus:outline-none resize-none transition-all placeholder:text-gray-600 font-medium"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-3 py-5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-gray-950 font-black rounded-2xl transition-all shadow-[0_10px_30px_rgba(45,212,191,0.15)] uppercase tracking-widest text-sm"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-gray-950 border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : (
                                    <>
                                        <Send size={18} strokeWidth={3} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
