import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
    return (
        <div>
            <div className="bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Contact Us</h1>
                        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                            We'd love to hear from you! Get in touch with the CodeIAM team for any questions, suggestions, or collaboration opportunities.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center">
                            <Mail className="h-10 w-10 text-indigo-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Email Us</h2>
                            <p className="text-gray-500 dark:text-gray-300 text-center">
                                For general inquiries:<br />
                                <a href="mailto:info@codeiam.org" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">info@codeiam.org</a>
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center">
                            <Phone className="h-10 w-10 text-indigo-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Call Us</h2>
                            <p className="text-gray-500 dark:text-gray-300 text-center">
                                Mon-Fri, 9am-5pm (PST)<br />
                                <a href="tel:+1234567890" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">+1 (234) 567-890</a>
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center sm:col-span-2 lg:col-span-1">
                            <MapPin className="h-10 w-10 text-indigo-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Visit Us</h2>
                            <p className="text-gray-500 dark:text-gray-300 text-center">
                                CodeIAM Headquarters<br />
                                123 Tech Street<br />
                                San Francisco, CA 94105<br />
                                United States
                            </p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Send Us a Message</h2>
                        <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    First name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Last name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Message
                                </label>
                                <div className="mt-1">
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}