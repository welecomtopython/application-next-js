"use client";
import React from 'react'
import data from "./db.json";
import NavBar_Right from './components/NavBar-Right';
import { usePathname } from 'next/navigation';
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import QueryClientProvider from './QueryClientProvider';

export default function page() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   
  data.name; // => "bun"
  data.version; // => "1.0.0"
  
  return (
    <div>
      <NavBar_Right/>
      <QueryClientProvider/>
      <Component/>
    </div>
  );
}
console.log(page())



/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qbB26dVueqI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/app/components/ui/accordion"

 function Component() {
  return (
    <section className="w-full max-w-3xl mx-auto py-8 md:py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Known Issues</h2>
          <p className="text-gray-500 dark:text-gray-400">Here are the current issues we re working on.</p>
        </div>
        <Accordion collapsible type="single">
          <AccordionItem value="issue-1">
            <AccordionTrigger className="flex items-center justify-between">
              <div className="font-medium">Login issues on mobile</div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Some users are reporting issues logging in on their mobile devices. We re investigating the root cause
                and will have a fix deployed soon.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="issue-2">
            <AccordionTrigger className="flex items-center justify-between">
              <div className="font-medium">Slow API response times</div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                We re seeing increased API response times during peak usage hours. Our engineering team is working to
                optimize the backend infrastructure to improve performance.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="issue-3">
            <AccordionTrigger className="flex items-center justify-between">
              <div className="font-medium">Compatibility issues with Safari</div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                We ve identified some minor compatibility issues with the latest version of Safari. Our team is working
                on a patch to resolve these problems.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="issue-4">
            <AccordionTrigger className="flex items-center justify-between">
              <div className="font-medium">Incorrect pricing on product pages</div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                We ve discovered a bug in our pricing engine that is causing incorrect prices to be displayed on some
                product pages. This issue has been escalated and will be resolved in the next release.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}