import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const mentors = [
    {
        name: 'Dr. Rajesh Kumar',
        role: 'AI & Machine Learning Mentor',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Dr. Kumar is a renowned AI researcher with over 15 years of experience in the field. He has published numerous papers on machine learning algorithms and their applications.',
        github: 'https://github.com/rajeshkumar',
        linkedin: 'https://linkedin.com/in/rajeshkumar',
        twitter: 'https://twitter.com/rajeshkumar'
    },
    {
        name: 'Priya Patel',
        role: 'Web Development Mentor',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Priya is a full-stack developer with expertise in React and Node.js. She has worked on several high-profile web applications and is passionate about teaching web technologies.',
        github: 'https://github.com/priyapatel',
        linkedin: 'https://linkedin.com/in/priyapatel',
        twitter: 'https://twitter.com/priyapatel'
    },
    {
        name: 'Arun Verma',
        role: 'Cybersecurity Mentor',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Arun is a cybersecurity expert with a background in ethical hacking. He has helped numerous companies improve their security infrastructure and trains students in the latest security practices.',
        github: 'https://github.com/arunverma',
        linkedin: 'https://linkedin.com/in/arunverma',
        twitter: 'https://twitter.com/arunverma'
    },
    {
        name: 'Dr. Lakshmi Rao',
        role: 'Data Science Mentor',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Dr. Rao is a data scientist with a Ph.D. in Statistics. She has worked on big data projects for Fortune 500 companies and is an advocate for women in STEM fields.',
        github: 'https://github.com/lakshmirao',
        linkedin: 'https://linkedin.com/in/lakshmirao',
        twitter: 'https://twitter.com/lakshmirao'
    },
    {
        name: 'Vikram Singh',
        role: 'Entrepreneurship Mentor',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Vikram is a serial entrepreneur who has successfully launched and exited multiple tech startups. He mentors aspiring entrepreneurs on business strategy and fundraising.',
        github: 'https://github.com/vikramsingh',
        linkedin: 'https://linkedin.com/in/vikramsingh',
        twitter: 'https://twitter.com/vikramsingh'
    },
    {
        name: 'Anita Desai',
        role: 'UX/UI Design Mentor',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Anita is a UX/UI designer with a keen eye for creating intuitive and beautiful interfaces. She has worked with startups and established companies to improve their product designs.',
        github: 'https://github.com/anitadesai',
        linkedin: 'https://linkedin.com/in/anitadesai',
        twitter: 'https://twitter.com/anitadesai'
    },
]

export default function MentorsPage() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Our Mentors
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                        Meet the industry experts who guide and inspire our CodeIAM community
                    </p>
                </div>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {mentors.map((mentor) => (
                        <Card key={mentor.name} className="bg-white dark:bg-gray-800">
                            <CardHeader className="text-center">
                                <Avatar className="w-24 h-24 mx-auto">
                                    <AvatarImage src={mentor.image} alt={mentor.name} />
                                    <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <CardTitle className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{mentor.name}</CardTitle>
                                <CardDescription className="text-indigo-600 dark:text-indigo-400">{mentor.role}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">{mentor.bio}</p>
                                <div className="mt-4 flex justify-center space-x-4">
                                    <Link href={mentor.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                        <span className="sr-only">GitHub</span>
                                        <Github className="h-6 w-6" />
                                    </Link>
                                    <Link href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                        <span className="sr-only">LinkedIn</span>
                                        <Linkedin className="h-6 w-6" />
                                    </Link>
                                    <Link href={mentor.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                        <span className="sr-only">Twitter</span>
                                        <Twitter className="h-6 w-6" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl text-gray-500 dark:text-gray-300">
                        Interested in becoming a mentor?
                        <Link href="/contact" className="ml-2 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                            Contact us
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}