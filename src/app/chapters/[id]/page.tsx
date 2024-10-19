"use client"
import { MapPin, Users, Calendar, Mail, Globe, Book, Award, Tool, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const chapterData = {
    1: {
        id: 1,
        name: 'AI & ML and Data Science',
        description: 'Explore the cutting-edge world of artificial intelligence, machine learning, and data science.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        leadName: 'Dr. Sarah Johnson',
        leadEmail: 'sarah.johnson@codeiam.org',
        leadImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        website: 'https://ai.codeiam.org',
        members: 500,
        location: 'Global (Virtual)',
        upcomingEvents: [
            { id: 1, name: 'Introduction to Neural Networks', date: '2023-07-15', type: 'Workshop' },
            { id: 2, name: 'Data Science Hackathon', date: '2023-08-20', type: 'Hackathon' },
            { id: 3, name: 'AI Ethics Workshop', date: '2023-09-10', type: 'Workshop' },
        ],
        pastEvents: [
            { id: 4, name: 'Machine Learning Bootcamp', date: '2023-05-20', type: 'Bootcamp' },
            { id: 5, name: 'Natural Language Processing Seminar', date: '2023-04-15', type: 'Seminar' },
        ],
        resources: [
            { name: 'AI/ML Learning Path', link: '#' },
            { name: 'Data Science Toolkit', link: '#' },
            { name: 'Ethics in AI Guide', link: '#' },
        ],
        projects: [
            { name: 'Predictive Analytics for Climate Change', description: 'Using ML models to predict climate patterns.' },
            { name: 'AI-powered Healthcare Diagnosis', description: 'Developing an AI system for early disease detection.' },
        ],
        achievements: [
            { name: 'Best AI Project Award', year: 2022 },
            { name: 'Data Science Challenge Winners', year: 2023 },
        ],
        coreTeam: [
            { name: 'John Doe', role: 'Technical Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
            { name: 'Jane Smith', role: 'Event Coordinator', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        ],
    },
    // Add more chapters here...
}

export default function ChapterPage({ params }: { params: { id: string } }) {
    const chapter = chapterData[params.id as keyof typeof chapterData]
    const [expandedSection, setExpandedSection] = useState<string | null>(null)

    if (!chapter) {
        return (
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Chapter Not Found</h1>
                    </div>
                </div>
        )
    }

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section)
    }

    return (
            <div className="bg-white dark:bg-gray-900">
                <div className="relative h-96">
                    <img className="w-full h-full object-cover" src={chapter.image} alt={chapter.name} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">{chapter.name}</h1>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">About Our Chapter</h2>
                            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">{chapter.description}</p>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center text-gray-500 dark:text-gray-400">
                                    <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                    <span>{chapter.location}</span>
                                </div>
                                <div className="flex items-center text-gray-500 dark:text-gray-400">
                                    <Users className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                    <span>{chapter.members} members</span>
                                </div>
                                <div className="flex items-center text-gray-500 dark:text-gray-400">
                                    <Globe className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                    <a href={chapter.website} className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                                        {chapter.website}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Chapter Lead</h3>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex items-center">
                                <Avatar className="h-16 w-16">
                                    <AvatarImage src={chapter.leadImage} alt={chapter.leadName} />
                                    <AvatarFallback>{chapter.leadName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{chapter.leadName}</h4>
                                    <p className="text-gray-500 dark:text-gray-400">{chapter.leadEmail}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Core Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {chapter.coreTeam.map((member) => (
                                <div key={member.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex items-center">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage src={member.image} alt={member.name} />
                                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">{member.name}</h4>
                                        <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Chapter Activities</h2>
                        <div className="space-y-4">
                            {[
                                { title: 'Upcoming Events', content: chapter.upcomingEvents, type: 'events' },
                                { title: 'Past Events', content: chapter.pastEvents, type: 'events' },
                                { title: 'Resources', content: chapter.resources, type: 'resources' },
                                { title: 'Projects', content: chapter.projects, type: 'projects' },
                                { title: 'Achievements', content: chapter.achievements, type: 'achievements' },
                            ].map((section) => (
                                <div key={section.title} className="bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <button
                                        onClick={() => toggleSection(section.title)}
                                        className="flex justify-between items-center w-full px-4 py-4 text-left"
                                    >
                                        <span className="text-lg font-medium text-gray-900 dark:text-white">{section.title}</span>
                                        {expandedSection === section.title ? (
                                            <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                        )}
                                    </button>
                                    {expandedSection === section.title && (
                                        <div className="px-4 pb-4">
                                            {section.type === 'events' && (
                                                <ul className="space-y-4">
                                                    {section.content.map((event) => (
                                                        <li key={event.id} className="bg-white dark:bg-gray-700 rounded-lg p-4">
                                                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{event.name}</h3>
                                                            <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                                <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                                                {event.date}
                                                            </p>
                                                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{event.type}</p>
                                                            <Link href={`/events/${event.id}`} className="mt-2 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                                                                View Details
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {section.type === 'resources' && (
                                                <ul className="space-y-4">
                                                    {section.content.map((resource) => (
                                                        <li key={resource.name}>
                                                            <a href={resource.link} className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                                                                {resource.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {section.type === 'projects' && (
                                                <ul className="space-y-4">
                                                    {section.content.map((project) => (
                                                        <li key={project.name} className="bg-white dark:bg-gray-700 rounded-lg p-4">
                                                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{project.name}</h3>
                                                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {section.type === 'achievements' && (
                                                <ul className="space-y-4">
                                                    {section.content.map((achievement) => (
                                                        <li key={achievement.name} className="bg-white dark:bg-gray-700 rounded-lg p-4">
                                                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{achievement.name}</h3>
                                                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Year: {achievement.year}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/membership">
                            <Button>Join This Chapter</Button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}