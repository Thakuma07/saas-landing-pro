"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        q: "How does the free plan work?",
        a: "The free plan gives you full access to core features for up to 5 project members with 2GB of storage. There's no credit card required — just sign up and start building.",
    },
    {
        q: "Can I upgrade or downgrade at any time?",
        a: "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your account settings. Changes take effect at the start of your next billing cycle.",
    },
    {
        q: "Is my data secure?",
        a: "Yes. All data is encrypted at rest with AES-256 and in transit with TLS 1.3. We're SOC 2 Type II certified and conduct regular third-party security audits.",
    },
    {
        q: "Do you offer a free trial for paid plans?",
        a: "Yes! Every paid plan comes with a 14-day free trial — no credit card needed. You get full access to all Pro or Business features during the trial period.",
    },
    {
        q: "What integrations are supported?",
        a: "We integrate with 100+ tools including Slack, GitHub, GitLab, Figma, Notion, Google Workspace, Jira, Zapier, and many more. New integrations are added every month.",
    },
    {
        q: "How does billing work for teams?",
        a: "Billing is per seat. You'll only be charged for active members. You can add or remove team members at any time, and we'll automatically prorate any changes.",
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-[#EAEEFE]">
            <div className="container">
                <div className="section-heading">
                    <div className="flex justify-center">
                        <div className="tag">FAQ</div>
                    </div>
                    <h2 className="section-title mt-5">Frequently asked questions</h2>
                    <p className="section-des mt-5">
                        Can't find the answer you're looking for? Reach out to our support team.
                    </p>
                </div>

                <div className="mt-14 max-w-2xl mx-auto flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
                            className={`rounded-2xl border bg-white overflow-hidden transition-colors duration-200 ${openIndex === i ? "border-[#183EC2]/30 shadow-[0_4px_20px_rgba(24,62,194,0.08)]" : "border-[#E2E8F0]"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 cursor-pointer"
                            >
                                <span className="font-semibold text-black tracking-tight">{faq.q}</span>
                                <motion.span
                                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-lg leading-none"
                                >
                                    +
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <p className="px-6 pb-5 text-[#010D3E]/60 leading-relaxed text-sm">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
