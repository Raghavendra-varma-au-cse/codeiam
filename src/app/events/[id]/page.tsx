'use client'; // Ensures this component is treated as a Client Component

import { Calendar, MapPin, Clock, Users, Link as LinkIcon, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation"; // Update to use useRouter for client-side navigation

const eventData = {
    1: {
        id: 1,
        name: 'Introduction to Neural Networks',
        date: '2023-07-15',
        time: '10:00 AM - 12:00 PM',
        type: 'Workshop',
        chapter: 'AI & ML and Data Science',
        location: 'Online',
        description: 'Join us for an introductory workshop on Neural Networks...',
        speaker: 'Dr. Jane Smith',
        speakerBio: 'Dr. Jane Smith is a renowned AI researcher...',
        speakerImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330...',
        poster: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485...',
        registrationLink: 'https://example.com/register',
        capacity: 100,
        prerequisites: ['Basic understanding of Python', 'Familiarity with linear algebra and calculus'],
        agenda: [
            { time: '10:00 AM - 10:15 AM', activity: 'Introduction and Welcome' },
            { time: '10:15 AM - 11:00 AM', activity: 'Neural Network Fundamentals' },
            { time: '11:00 AM - 11:45 AM', activity: 'Hands-on Coding Session' },
            { time: '11:45 AM - 12:00 PM', activity: 'Q&A and Closing Remarks' },
        ],
    },
    // Add more events here...
}

export default function EventPage({ params }: { params: { id: string } }) {
    const event = eventData[params.id as keyof typeof eventData];
    const router = useRouter(); // Use client-side navigation hook

    if (!event) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <Card>
                    <CardHeader>
                        <CardTitle>Event Not Found</CardTitle>
                        <CardDescription>The event you're looking for doesn't exist.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button onClick={() => router.push('/events')}>Back to Events</Button> {/* Use router.push for client-side navigation */}
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Button variant="ghost" onClick={() => router.push('/events')}>
                        <ChevronRight className="mr-2 h-4 w-4" />
                        Back to Events
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>{event.name}</CardTitle>
                                <CardDescription>{event.chapter}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img src={event.poster} alt={event.name} className="w-full h-64 object-cover rounded-lg mb-6" />
                                <div className="space-y-4">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <Calendar className="mr-2 h-5 w-5" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <Clock className="mr-2 h-5 w-5" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <MapPin className="mr-2 h-5 w-5" />
                                        {event.location}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <Users className="mr-2 h-5 w-5" />
                                        Capacity: {event.capacity} attendees
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-lg font-semibold mb-2">Event Description</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                                        {event.prerequisites.map((prereq, index) => (
                                            <li key={index}>{prereq}</li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Speaker</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-4">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage src={event.speakerImage} alt={event.speaker} />
                                        <AvatarFallback>{event.speaker.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-lg font-semibold">{event.speaker}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{event.speakerBio}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Agenda</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {event.agenda.map((item, index) => (
                                        <li key={index} className="flex space-x-4">
                                            <div className="flex-shrink-0 w-24 text-sm text-gray-500 dark:text-gray-400">{item.time}</div>
                                            <div className="flex-grow">{item.activity}</div>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <Button className="w-full" asChild>
                                    <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                                        Register Now
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
