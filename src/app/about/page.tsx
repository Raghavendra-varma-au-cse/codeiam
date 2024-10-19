"use client"
import { Users, Lightbulb, Globe, Award, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function About() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null)

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section)
    }

    const milestones = [
        { year: 2020, event: 'CodeIAM founded by a group of tech enthusiasts' },
        { year: 2021, event: 'Launched first international chapter' },
        { year: 2022, event: 'Reached 10,000 members globally' },
        { year: 2023, event: 'Introduced specialized tech chapters' },
        { year: 2024, event: 'Launched CodeIAM Mentorship Program' },
    ]

    const team = [
        { name: 'Jane Doe', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { name: 'John Smith', role: 'CTO', image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { name: 'Emily Chen', role: 'Head of Education', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { name: 'Michael Johnson', role: 'Community Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    ]

    return (
        <div>
            <div className="bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">About CodeIAM</h1>
                        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                            Empowering the next generation of tech innovators through community, education, and real-world experience.
                        </p>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Mission</h2>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                            CodeIAM mission is to bridge the gap between academic learning and industry needs by providing a platform for students to develop practical skills, innovate, and build a strong professional network in the tech industry.
                        </p>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Vision</h2>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                            We envision a world where every aspiring tech professional has access to the resources, mentorship, and opportunities they need to succeed in the rapidly evolving tech landscape.
                        </p>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Values</h2>
                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                                    <Users className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Community</h3>
                                <p className="text-gray-500 dark:text-gray-300">We believe in the power of collaboration and peer-to-peer learning.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                                    <Lightbulb className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Innovation</h3>
                                <p className="text-gray-500 dark:text-gray-300">We encourage creative problem-solving and out-of-the-box thinking.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                                    <Globe className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Inclusivity</h3>
                                <p className="text-gray-500 dark:text-gray-300">We welcome diversity and promote equal opportunities for all.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Story</h2>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                            CodeIAM was founded in 2020 by a group of passionate tech professionals who recognized the need for a more practical, hands-on approach to tech education. What started as a small meetup group has now grown into a global community with chapters in major tech hubs around the world.
                        </p>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                            Today, CodeIAM continues to grow and evolve, always staying true to our core mission of empowering the next generation of tech innovators.
                        </p>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Our Milestones</h2>
                        <div className="relative">
                            <div className="absolute h-full w-0.5 bg-gray-200 dark:bg-gray-700 left-8 top-0"></div>
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative pl-20 pb-8">
                                    <div className="absolute left-6 -ml-0.5 mt-1.5 h-5 w-5 rounded-full border-2 border-indigo-500 bg-white dark:bg-gray-900"></div>
                                    <div className="flex flex-wrap items-center">
                                        <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mr-4">{milestone.year}</span>
                                        <p className="text-gray-700 dark:text-gray-300">{milestone.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Our Team</h2>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {team.map((member) => (
                                <div key={member.name} className="text-center">
                                    <img className="mx-auto h-32 w-32 rounded-full" src={member.image} alt={member.name} />
                                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{member.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Our Chapters</h2>
                        <div className="space-y-4">
                            {[
                                { name: 'AI & ML and Data Science', description: 'Explore the cutting-edge world of artificial intelligence, machine learning, and data science.' },
                                { name: 'Web/App, AR & VR', description: 'Dive into web and app development, augmented reality, and virtual reality technologies.' },
                                { name: 'Startup and Entrepreneurship', description: 'Learn the ins and outs of launching and growing successful tech startups.' },
                                { name: 'Cybersecurity and DevOps', description: 'Discover the latest in cybersecurity practices and DevOps methodologies.' },
                                { name: 'Women Techies', description: 'Empowering and supporting women in technology through mentorship and skill development.' },
                                { name: 'CodeIAM International Innovators', description: 'Connect with tech enthusiasts from around the globe and work on international projects.' },
                                { name: 'Industry 4.0 (IoT, Drone, & Robotics)', description: 'Explore the future of industry with Internet of Things, drone technology, and robotics.' },
                                { name: 'DSA and Competitive Programming', description: 'Sharpen your data structures, algorithms, and competitive programming skills.' },
                                { name: 'GATE Ignite', description: 'Prepare for the Graduate Aptitude Test in Engineering with expert guidance and resources.' },
                            ].map((chapter) => (
                                <div key={chapter.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <button
                                        onClick={() => toggleSection(chapter.name)}
                                        className="flex justify-between items-center w-full px-4 py-4 text-left"
                                    >
                                        <span className="text-lg font-medium text-gray-900 dark:text-white">{chapter.name}</span>
                                        {expandedSection === chapter.name ? (
                                            <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                        )}
                                    </button>
                                    {expandedSection === chapter.name && (
                                        <div className="px-4 pb-4">
                                            <p className="text-gray-700 dark:text-gray-300">{chapter.description}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Awards and Recognition</h2>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                { name: 'Best Tech Community 2023', organization: 'TechWorld Magazine' },
                                { name: 'Innovation in Education Award', organization: 'Global EdTech Summit' },
                                { name: 'Community Impact Award', organization: 'Tech for Good Foundation' },
                            ].map((award) => (
                                <div key={award.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                    <Award className="h-8 w-8 text-indigo-500 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{award.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{award.organization}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}