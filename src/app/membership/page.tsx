"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Info } from 'lucide-react'

export default function Membership() {
    const [donationType, setDonationType] = useState('one-time')
    const [supportAmount, setSupportAmount] = useState('')

    return (
            <div className="bg-white dark:bg-gray-900">
                <div className="max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Join CodeIAM</h1>
                        <p className="mt-5 text-xl text-gray-500 dark:text-gray-300">
                            Exclusively for Andhra University students. Join our community, learn, and grow together.
                        </p>
                    </div>

                    <div className="mt-12 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Student Registration</h2>
                            <div className="mt-5">
                                <form className="space-y-6">
                                    <div>
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input id="fullName" placeholder="John Doe" required />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" required />
                                    </div>
                                    <div>
                                        <Label htmlFor="studentId">Student ID</Label>
                                        <Input id="studentId" placeholder="AU12345678" required />
                                    </div>
                                    <div>
                                        <Label htmlFor="course">Course</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your course" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="btech">B.Tech</SelectItem>
                                                <SelectItem value="mtech">M.Tech</SelectItem>
                                                <SelectItem value="mca">MCA</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label htmlFor="year">Year of Study</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your year" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">1st Year</SelectItem>
                                                <SelectItem value="2">2nd Year</SelectItem>
                                                <SelectItem value="3">3rd Year</SelectItem>
                                                <SelectItem value="4">4th Year</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label>Interested Chapters</Label>
                                        <div className="mt-2 space-y-2">
                                            {[
                                                'AI & ML and Data Science',
                                                'Web/App, AR & VR',
                                                'Startup and Entrepreneurship',
                                                'Cybersecurity and DevOps',
                                                'Women Techies',
                                                'Industry 4.0 (IoT, Drone, & Robotics)',
                                                'DSA and Competitive Programming',
                                                'GATE Ignite',
                                            ].map((chapter) => (
                                                <div key={chapter} className="flex items-center">
                                                    <Checkbox id={chapter} />
                                                    <label htmlFor={chapter} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                                                        {chapter}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Register
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Support CodeIAM</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Your support helps us continue our mission of empowering students in technology.
                            </p>
                            <div className="mt-5">
                                <form className="space-y-6">
                                    <div>
                                        <Label>Donation Type</Label>
                                        <RadioGroup value={donationType} onValueChange={setDonationType} className="mt-2">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="one-time" id="one-time" />
                                                <Label htmlFor="one-time">One-time Donation</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="monthly" id="monthly" />
                                                <Label htmlFor="monthly">Monthly Support</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    <div>
                                        <Label htmlFor="amount">Amount (₹)</Label>
                                        <Input
                                            id="amount"
                                            type="number"
                                            placeholder="Enter amount"
                                            value={supportAmount}
                                            onChange={(e) => setSupportAmount(e.target.value)}
                                        />
                                    </div>
                                    {donationType === 'monthly' && (
                                        <div className="flex items-center">
                                            <Info className="h-5 w-5 text-blue-500 mr-2" />
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Monthly support will be charged every month until cancelled.
                                            </p>
                                        </div>
                                    )}
                                    <Button type="submit" className="w-full">
                                        {donationType === 'one-time' ? 'Make Donation' : 'Start Monthly Support'}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}