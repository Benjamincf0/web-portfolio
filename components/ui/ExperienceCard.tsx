import React from 'react'

const ExperienceCard = (
    {
      title,
      desc,
      className,
      thumbnail,
      start,
      end }:
    {
      title: string; 
      desc: string; 
      className: string; 
      thumbnail: string; 
      start: string; 
      end: string }
) => {
  return (
        <div
            className={`relative rounded-xl p-6 shadow-sm hover:shadow-md transition-colors ${className}`}
        >
            <h3 className="text-lg font-semibold">{title}</h3>
            <h4 className=" hidden sm:block absolute right-[24px] top-[24px] text-base text-gray-300">{start} - {end}</h4>
            <div className="mt-4 flex items-start gap-4">
                <img src={thumbnail} alt="" className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                <p className="text-sm text-gray-200">{desc}</p>
            </div>
        </div>
  )
}

export default ExperienceCard