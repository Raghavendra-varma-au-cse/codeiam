import Link from 'next/link'
import { MapPin, Users, Calendar } from 'lucide-react'

const chapters = [
    {
        id: 1,
        name: 'CodeIAM Silicon Valley',
        location: 'San Francisco, CA',
        members: 500,
        nextEvent: '2023-07-15',
        image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
        id: 2,
        name: 'CodeIAM New York',
        location: 'New York, NY',
        members: 450,
        nextEvent: '2023-08-10',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
        id: 3,
        name: 'CodeIAM London',
        location: 'London, UK',
        members: 400,
        nextEvent: '2023-09-20',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
        id: 4,
        name: 'CodeIAM Tokyo',
        location: 'Tokyo, Japan',
        members: 350,
        nextEvent: '2023-10-05',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
        id: 5,
        name: 'CodeIAM Berlin',
        location: 'Berlin, Germany',
        members: 300,
        nextEvent: '2023-11-12',
        image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
        id: 6,
        name: 'CodeIAM Sydney',
        location: 'Sydney, Australia',
        members: 250,
        nextEvent: '2023-12-01',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
]

export default function Chapters() {
    return (
        <div>
            <div className="bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Our Global Chapters</h1>
                        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                            Join a CodeIAM chapter near you and become part of a global community of tech enthusiasts and innovators.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {chapters.map((chapter) => (
                            <div key={chapter.id} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                                <div className="relative h-48">
                                    <Image className="w-full h-full object-cover" src={chapter.image} alt={chapter.name} />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <h3 className="text-2xl font-bold text-white">{chapter.name}</h3>
                                    </div>
                                </div>
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                        <span>{chapter.location}</span>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <Users className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                        <span>{chapter.members} members</span>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                        <span>Next event: {chapter.nextEvent}</span>
                                    </div>
                                </div>
                                <div className="px-4 py-4 sm:px-6">
                                    <Link
                                        href={`/chapters/${chapter.id}`}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        View Chapter
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}