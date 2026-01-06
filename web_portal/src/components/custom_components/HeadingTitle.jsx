import React from "react"

const HeadingTitle = ({title, type}) => {
    const Heading = type || "h1"
  return (
    <Heading className="flex w-full justify-center text-2xl font-semibold">{title}</Heading>
  )
}

export default HeadingTitle