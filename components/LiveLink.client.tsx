"use client"
import React from "react"
import { FaLocationArrow } from "react-icons/fa"

type LiveLinkProps = {
  // allow null since projects may provide null
  link?: string | null
  title: string
}

export default function LiveLink({ link, title }: LiveLinkProps) {
  const handleOpen = () => {
    if (!link) return
    window.open(link, "_blank")
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleOpen()
    }
  }

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={link ? `Open ${title} live site` : `No live site available`}
      className="flex justify-center items-center cursor-pointer focus:outline-none rounded px-3 py-1.5
                 border-2 border-white/[0.12] hover:bg-pink-500/8 hover:border-pink-400 hover:scale-105
                 transition-colors duration-150 ease-in-out
                 focus:ring-2 focus:ring-pink-400"
      onClick={handleOpen}
      onKeyDown={onKeyDown}
    >
      <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check live site</p>
      <FaLocationArrow className="ms-3" color="#CBACF9" />
    </div>
  )
}
