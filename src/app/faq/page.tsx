"use client"
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
    {
        question: "What is CodeIAM?",
        answer: "CodeIAM is a student-led tech community at Andhra University, focused on bridging the gap between academic learning and industry needs. We provide a platform for students to develop practical skills, innovate, and build a strong professional network in the tech industry."
    },
    {
        question: "Who can join CodeIAM?",
        answer: "CodeIAM is exclusively for students of Andhra University. If you're currently enrolled at Andhra University, you're eligible to join our community."
    },
    {
        question: "How can I join CodeIAM?",
        answer: "You can join CodeIAM by visiting our Membership page and filling out the registration form. Once your application is reviewed and approved, you'll receive an email with further instructions."
    },
    {
        question: "Are there any membership fees?",
        answer: "No, CodeIAM membership is free for all Andhra University students. However, we welcome donations and monthly support to help us continue our mission and improve our offerings."
    },
    {
        question: "What kind of events does CodeIAM organize?",
        answer: "CodeIAM organizes a wide range of events including workshops, hackathons, seminars, coding competitions, tech talks, and networking sessions. These events cover various areas of technology such as AI/ML, Web Development, Cybersecurity, and more."
    },
    {
        question: "How can I participate in CodeIAM events?",
        answer: "As a CodeIAM member, you'll receive regular updates about upcoming events. You can register for events through our website or the links provided in the event announcements."
    },
    {
        question: "Can I join multiple chapters?",
        answer: "Yes, you can join multiple chapters based on your interests. We encourage members to explore different areas of technology."
    },
    {
        question: "How can I contribute to CodeIAM?",
        answer: "There are many ways to contribute! You can volunteer to help organize events, lead workshops, contribute to our open-source projects, or even start your own initiative within the community. Reach out to your chapter lead to discuss how you can get more involved."
    },
    {
        question: "Does CodeIAM offer internship or job opportunities?",
        answer: "While CodeIAM doesn't directly offer internships or jobs, we do have partnerships with various tech companies. We often share internship and job opportunities with our members, and our events and projects can help you build the skills and network needed to secure great opportunities."
    },
    {
        question: "How can I stay updated with CodeIAM activities?",
        answer: "You can stay updated by regularly checking our website, following our social media channels, and keeping an eye on your email for our newsletters. We also recommend joining our Discord server for real-time updates and community discussions."
    }
]

export default function FAQPage() {
    const [openItem, setOpenItem] = useState<number | null>(null)

    const toggleItem = (index: number) => {
        if (openItem === index) {
            setOpenItem(null)
        } else {
            setOpenItem(index)
        }
    }

    return (
            <div className="bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-8">Frequently Asked Questions</h1>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                <button
                                    className="flex justify-between items-center w-full text-left"
                                    onClick={() => toggleItem(index)}
                                >
                                    <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
                                    {openItem === index ? (
                                        <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                    )}
                                </button>
                                {openItem === index && (
                                    <p className="mt-2 text-gray-500 dark:text-gray-300">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}