"use client"
import { useState } from 'react'
import { X } from 'lucide-react'

const team = [
    {
        name: 'Jane Doe',
        role: 'Founder & CEO',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Jane is a visionary leader with over 15 years of experience in the tech industry. She founded CodeIAM with the mission to empower the next generation of tech innovators.',
    },
    {
        name: 'John Smith',
        role: 'CTO',
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'John is a tech enthusiast and software architect with a passion for building scalable systems. He leads the technical direction of CodeIAM.',
    },
    {
        name: 'Emily Chen',
        role: 'Head of Education',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Emily is an experienced educator with a background in computer science. She designs and oversees all educational programs at CodeIAM.',
    },
    {
        name: 'Michael Johnson',
        role: 'Community Manager',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Michael is passionate about building and nurturing tech communities. He manages all CodeIAM chapters and ensures a vibrant community experience.',
    },
    {
        name: 'Sarah Williams',
        role: 'Head of Partnerships',
        image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Sarah brings years of experience in business development. She leads CodeIAM\'s efforts in building strategic partnerships with tech companies and educational institutions.',
    },
    {
        name: 'David Lee',
        role: 'Head of Events',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'David is an expert event organizer with a knack for creating memorable experiences. He oversees all CodeIAM events, from local meetups to international conferences.',
    },
]

export default function Team() {
    const [selectedMember, setSelectedMember] = useState(null)

    return (
        <div>
            <div className="bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12">
                        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-900 dark:text-white">Meet Our Team</h2>
                            <p className="text-xl text-gray-500 dark:text-gray-300">
                                The passionate individuals behind CodeIAM, working together to empower the next generation of tech innovators.
                            </p>
                        </div>
                        <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
                            {team.map((member) => (
                                <li key={member.name}>
                                    <div className="space-y-6">
                                        <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={member.image} alt={member.name} />
                                        <div className="space-y-2">
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <h3 className="text-gray-900 dark:text-white">{member.name}</h3>
                                                <p className="text-indigo-600 dark:text-indigo-400">{member.role}</p>
                                            </div>
                                            <button
                                                onClick={() => setSelectedMember(member)}
                                                className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                                            >
                                                View Bio
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {selectedMember && (
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                                            {selectedMember.name}
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500 dark:text-gray-300">
                                                {selectedMember.bio}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setSelectedMember(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}