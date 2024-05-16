/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
enum Project {
    Py= "python"
}
export default function MyWork() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100  s shadow">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                Featured Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my work
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I ve worked on a variety of projects, from web applications to
                mobile apps. Here are some of my featured projects.
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
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href={{
                    pathname: "/portfolio/pages/project",
                    query: { name: Project.Py },
                  }}
                  rel="ugc"
                >
                  View Project1
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
