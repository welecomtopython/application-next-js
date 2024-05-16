import React from 'react'

export default function Nav() {
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
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
    </div>
  );
}
