import React from 'react'

export default function WhCanDo() {
  return (
    <div>
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
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 ">
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
    </div>
  );
}
