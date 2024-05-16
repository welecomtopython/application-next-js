/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Header() {
  return (
    <div>
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
    </div>
  );
}
