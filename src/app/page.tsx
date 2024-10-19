import Link from 'next/link'
import { ArrowRight, Calendar, Users, Lightbulb, BookOpen, Globe, Code, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
        <div className="bg-white dark:bg-gray-900">
          {/* Hero Section */}
          <div className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">Welcome to CodeIAM</span>{' '}
                      <span className="block text-indigo-600 xl:inline">Innovate. Achieve. Mentor.</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Join the community of tech enthusiasts, innovators, and future leaders at Andhra University. Discover opportunities, learn, and grow with CodeIAM.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <Link href="/membership" passHref>
                          <Button size="lg">Join Us</Button>
                        </Link>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link href="/events" passHref>
                          <Button variant="outline" size="lg">Upcoming Events</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  alt="Team collaborating on a project"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="py-12 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why CodeIAM?</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Empowering the next generation of tech leaders
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                  CodeIAM provides a platform for Andhra University students to learn, innovate, and grow in the world of technology.
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <Users className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Community</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                      Connect with like-minded individuals and build lasting relationships in the tech community.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <Calendar className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Events</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                      Participate in workshops, hackathons, and tech talks to enhance your skills and knowledge.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <Lightbulb className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Innovation</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                      Work on real-world projects and develop innovative solutions to complex problems.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <ArrowRight className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Growth</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                      Develop leadership skills, build your portfolio, and prepare for a successful career in tech.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Chapters Section */}
          <div className="py-12 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Chapters</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Explore Our Specialized Tech Chapters
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                  Join one or more of our specialized chapters to dive deep into your areas of interest.
                </p>
              </div>

              <div className="mt-10">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  {[
                    { name: 'AI & ML and Data Science', icon: BookOpen },
                    { name: 'Web/App, AR & VR', icon: Globe },
                    { name: 'Startup and Entrepreneurship', icon: Lightbulb },
                    { name: 'Cybersecurity and DevOps', icon: Code },
                    { name: 'Women Techies', icon: Users },
                    { name: 'Industry 4.0 (IoT, Drone, & Robotics)', icon: Code },
                  ].map((chapter, index) => (
                      <div key={chapter.name} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <chapter.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{chapter.name}</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                          <Link href={`/chapters/${index + 1}`} className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                            Learn more <span aria-hidden="true">&rarr;</span>
                          </Link>
                        </dd>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div className="py-12 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Upcoming Events</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Join Our Next Tech Adventure
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                  Don't miss out on our exciting upcoming events. Learn, network, and grow with CodeIAM.
                </p>
              </div>

              <div className="mt-10">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  {[
                    { name: 'AI Workshop', date: '2023-07-15', type: 'Workshop' },
                    { name: 'Web Dev Hackathon', date: '2023-08-01', type: 'Hackathon' },
                    { name: 'Cybersecurity Seminar', date: '2023-08-15', type: 'Seminar' },
                    { name: 'StartUp Pitch Competition', date: '2023-09-01', type: 'Competition' },
                  ].map((event, index) => (
                      <div key={event.name} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <Calendar className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{event.name}</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                          {event.date} - {event.type}
                        </dd>
                      </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 text-center">
                <Link href="/events" passHref>
                  <Button>View All Events</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-12 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  What Our Members Say
                </p>
              </div>

              <div className="mt-10">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  {[
                    { name: 'Aarav Patel', quote: 'CodeIAM has been instrumental in my growth as a developer. The workshops and projects have given me practical skills that I use in my internships.', role: '3rd Year, Computer Science' },
                    { name: 'Zara Khan', quote: 'Being part of the Women Techies chapter has been empowering. Ive found mentors and friends who support my journey in tech.', role: '4th Year, Information Technology' },
                    { name: 'Vikram Singh', quote: 'The Startup and Entrepreneurship chapter helped me transform my idea into a viable business. The mentorship and resources are invaluable.', role: 'Recent Graduate, Electrical Engineering' },
                    { name: 'Ananya Reddy', quote: 'CodeIAMs hackathons are challenging and fun. Theyve helped me improve my problem-solving skills and work effectively in teams.', role: '2nd Year, Computer Science' },
                  ].map((testimonial) => (
                      <div key={testimonial.name} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <MessageCircle className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                          "{testimonial.quote}"
                        </dd>
                        <dd className="mt-2 ml-16 text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </dd>
                      </div>
                  ))}
                    </div>
                    </div>
                    </div>
                    </div>

                  {/* FAQ Section */}
                  <div className="py-12 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">FAQs</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                          Common Questions
                        </p>
                      </div>

                      <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                          {[
                            { question: "Who can join CodeIAM?", answer: "CodeIAM is exclusively for students of Andhra University." },
                            { question: "How can I join CodeIAM?", answer: "Visit our Membership page and fill out the registration form." },
                            { question: "Are there any membership fees?", answer: "No, CodeIAM membership is free for all Andhra University students." },
                            { question: "Can I join multiple chapters?", answer: "Yes, you can join multiple chapters based on your interests." },
                          ].map((faq) => (
                              <div key={faq.question} className="relative">
                                <dt>
                                  <p className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{faq.question}</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">{faq.answer}</dd>
                              </div>
                          ))}
                        </dl>
                      </div>

                      <div className="mt-10 text-center">
                        <Link href="/faq" passHref>
                          <Button variant="outline">View All FAQs</Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="bg-indigo-700">
                    <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block">Join CodeIAM today.</span>
                      </h2>
                      <p className="mt-4 text-lg leading-6 text-indigo-200">
                        Become a part of our vibrant community and take your first step towards a bright future in technology.
                      </p>
                      <Link href="/membership" passHref>
                        <Button size="lg" variant="secondary" className="mt-8">
                          Sign up for free
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
  )
}