"use client"
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import { Calendar, MapPin, Search } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const allEvents = [
    { id: 1, name: 'Introduction to Neural Networks', date: '2023-07-15', type: 'Workshop', chapter: 'AI & ML and Data Science', location: 'Online' },
    { id: 2, name: 'Data Science Hackathon', date: '2023-08-20', type: 'Hackathon', chapter: 'AI & ML and Data Science', location: 'Andhra University Campus' },
    { id: 3, name: 'AI Ethics Workshop', date: '2023-09-10', type: 'Workshop', chapter: 'AI & ML and Data Science', location: 'Online' },
    { id: 4, name: 'Machine Learning Bootcamp', date: '2023-05-20', type: 'Bootcamp', chapter: 'AI & ML and Data Science', location: 'Andhra University Campus' },
    { id: 5, name: 'Natural Language Processing Seminar', date: '2023-04-15', type: 'Seminar', chapter: 'AI & ML and Data Science', location: 'Online' },
    { id: 6, name: 'Web Development Workshop', date: '2023-07-25', type: 'Workshop', chapter: 'Web/App, AR & VR', location: 'Online' },
    { id: 7, name: 'AR/VR Showcase', date: '2023-08-05', type: 'Showcase', chapter: 'Web/App, AR & VR', location: 'Andhra University Campus' },
    { id: 8, name: 'Startup Pitch Competition', date: '2023-09-01', type: 'Competition', chapter: 'Startup and Entrepreneurship', location: 'Andhra University Campus' },
    { id: 9, name: 'Cybersecurity Awareness Week', date: '2023-10-01', type: 'Conference', chapter: 'Cybersecurity and DevOps', location: 'Online' },
    { id: 10, name: 'Women in Tech Panel Discussion', date: '2023-08-15', type: 'Panel', chapter: 'Women Techies', location: 'Andhra University Campus' },
]

const chapters = [...new Set(allEvents.map(event => event.chapter))]
const eventTypes = [...new Set(allEvents.map(event => event.type))]

export default function EventsPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedChapter, setSelectedChapter] = useState('all') // Set a default value
    const [selectedType, setSelectedType] = useState('all') // Set a default value
    const [activeTab, setActiveTab] = useState('upcoming')

    const filterEvents = (events) => {
        return events.filter(event =>
            event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedChapter === 'all' || event.chapter === selectedChapter) && // Adjust condition
            (selectedType === 'all' || event.type === selectedType) // Adjust condition
        )
    }

    const currentDate = new Date()
    const upcomingEvents = filterEvents(allEvents.filter(event => new Date(event.date) >= currentDate))
    const pastEvents = filterEvents(allEvents.filter(event => new Date(event.date) < currentDate))

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Events</h1>

                <Card className="mb-8">
                    <CardContent className="pt-6">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Search className="text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="Search events..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="flex-grow"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                <Select value={selectedChapter} onValueChange={setSelectedChapter}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Filter by Chapter" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Chapters</SelectItem> {/* Change value */}
                                        {chapters.map(chapter => (
                                            <SelectItem key={chapter} value={chapter}>{chapter}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select value={selectedType} onValueChange={setSelectedType}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Filter by Event Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Types</SelectItem> {/* Change value */}
                                        {eventTypes.map(type => (
                                            <SelectItem key={type} value={type}>{type}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                        <TabsTrigger value="past">Past Events</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upcoming">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {upcomingEvents.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                        {upcomingEvents.length === 0 && (
                            <p className="text-center text-gray-500 dark:text-gray-400 mt-8">No upcoming events found.</p>
                        )}
                    </TabsContent>
                    <TabsContent value="past">
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pastEvents.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                        {pastEvents.length === 0 && (
                            <p className="text-center text-gray-500 dark:text-gray-400 mt-8">No past events found.</p>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

function EventCard({ event }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{event.name}</CardTitle>
                <CardDescription>{event.chapter}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="mr-2 h-4 w-4" />
                        {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="mr-2 h-4 w-4" />
                        {event.location}
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {event.type}
                    </span>
                    <Button variant="outline" asChild>
                        <Link href={`/events/${event.id}`}>
                            View Details
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
