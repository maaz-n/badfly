"use client"

import React from "react"
import { Skeleton } from "@/components/ui/skeleton" 

export default function URLListSkeleton() {
  const fakeItems = new Array(3).fill(null)

  return (
    <div className="min-h-[420px]">
      <ul>
        {fakeItems.map((_, index) => (
          <li
            key={index}
            className="group w-full border relative border-gray-300 rounded-lg my-5 px-3 py-5 animate-pulse"
          >
            <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
              <Skeleton className="h-4 w-[70%] md:w-[40%] bg-gray-300" />

              <div className="flex items-center gap-5">
                <Skeleton className="h-4 w-4 rounded bg-gray-300" />
                <div className="flex items-center gap-3">
                  <Skeleton className="h-4 w-4 rounded bg-gray-300" />
                  <Skeleton className="h-4 w-12 rounded bg-gray-300" />
                </div>
              </div>
            </div>

            <div className="absolute right-1 top-1">
              <Skeleton className="h-3 w-3 rounded-full bg-gray-300" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
