/* eslint-disable @next/next/no-img-element */
import React from "react";

const data = {
  name: "Mohmed",
  work: "Software Engineer",
  description: `I'm a passionate software engineer with experience in building scalable and user-friendly web applications. I'm always eager to learn new technologies and tackle challenging projects.

John Doe`,

};
function Portfolio() {
  return (
    <div>
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <a className="flex items-center justify-center" href="#" rel="ugc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span className="sr-only">John Doe s Portfolio</span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
              rel="ugc"
            >
              Projects
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
              rel="ugc"
            >
              Skills
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
              rel="ugc"
            >
              Contact
            </a>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 md:h-24 md:w-24">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    JD
                  </span>
                </span>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    John Doe
                  </h1>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                    Software Engineer
                  </p>
                </div>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I m a passionate software engineer with experience in building
                  scalable and user-friendly web applications. I m always eager
                  to learn new technologies and tackle challenging projects.
                </p>
              </div>
              <div className="flex justify-end">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="400"
                  alt="John Doe"
                  className="aspect-square overflow-hidden rounded-full object-cover"
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                    Featured Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my work
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    I ve worked on a variety of projects, from web applications
                    to mobile apps. Here are some of my featured projects.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="Project 1"
                      className="aspect-video overflow-hidden rounded-t-lg object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold">Project 1</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      A web application that helps users manage their tasks and
                      projects.
                    </p>
                  </div>
                  <div className="flex items-center p-6">
                    <a
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                      rel="ugc"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="Project 2"
                      className="aspect-video overflow-hidden rounded-t-lg object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold">Project 2</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      A mobile app that helps users track their fitness goals
                      and progress.
                    </p>
                  </div>
                  <div className="flex items-center p-6">
                    <a
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                      rel="ugc"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="Project 3"
                      className="aspect-video overflow-hidden rounded-t-lg object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold">Project 3</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      A web-based dashboard that provides real-time insights and
                      analytics.
                    </p>
                  </div>
                  <div className="flex items-center p-6">
                    <a
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                      rel="ugc"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                    Skills
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    What I can do
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    I have a wide range of skills and experience in various
                    technologies and frameworks.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-10 w-10 text-gray-500 dark:text-gray-400"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  <h3 className="text-lg font-bold">JavaScript</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Proficient in modern JavaScript, including ES6 and beyond.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-10 w-10 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
                    <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
                    <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path>
                    <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                  </svg>
                  <h3 className="text-lg font-bold">React</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Experienced in building complex web applications with React.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-10 w-10 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path>
                    <path d="M7 16v6"></path>
                    <path d="M13 19v3"></path>
                    <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path>
                  </svg>
                  <h3 className="text-lg font-bold">Node.js</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Skilled in building server-side applications with Node.js.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-10 w-10 text-gray-500 dark:text-gray-400"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                  </svg>
                  <h3 className="text-lg font-bold">Databases</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Experienced in working with SQL and NoSQL databases.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                    Contact
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in touch
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    I m always open to new opportunities and collaborations.
                    Feel free to reach out to me.
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full max-w-md space-y-4">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="email"
                      placeholder="Your email"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 John Doe. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-xs hover:underline underline-offset-4"
              href="#"
              rel="ugc"
            >
              Privacy
            </a>
            <a
              className="text-xs hover:underline underline-offset-4"
              href="#"
              rel="ugc"
            >
              Terms of Service
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Portfolio;
