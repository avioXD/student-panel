
import * as React from "react"


import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Artwork {
  heading: string
  text: string
}

export const works: Artwork[] = [
  {
    heading: "01. Tailored Learning Paths",
    text: "We customize learning experiences to match individual preferences and pace, ensuring every learner maximizes their potential.",
  },
  {
    heading: "02. Tailored Learning Paths",
    text: "We customize learning experiences to match individual preferences and pace, ensuring every learner maximizes their potential.",
  },
  {
    heading: "03. Tailored Learning Paths",
    text: "We customize learning experiences to match individual preferences and pace, ensuring every learner maximizes their potential.",
  },
  {
    heading: "04. Tailored Learning Paths",
    text: "We customize learning experiences to match individual preferences and pace, ensuring every learner maximizes their potential.",
  },
]

export function ScrollAreaVerticalDemo() {
  return (
    <ScrollArea className="w-full md:w-[520px] h-48 overflow-y-auto   border-b-4 "hideScrollbar={true}>
      <div className="flex flex-col space-y-14 p-1 md:p-4 ">
        {works.map((artwork) => (
          <div key={artwork.heading} className=" ">
            <div className=" rounded-md">
              <span className="text-heading">
              {artwork.heading}
              </span>
                
              
            </div>
            <figcaption className="pt-2 ">
              
              <span className=" text-subheading">
                {artwork.text}
              </span>
            </figcaption>
          </div>
        ))}
      </div>
      
    </ScrollArea>
  )
}
