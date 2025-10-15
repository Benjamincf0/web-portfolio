import React from 'react'
import { workExperience } from '@/data'
import ExperienceCard from './ui/ExperienceCard'

const Experience = () => (
    <div id="experience" className="w-full max-w-3xl mx-auto px-4 mb-20">
        <h1 className="heading">My {' '}
            <span className="text-purple">work experience</span>
        </h1>
        <div className="flex flex-col gap-4 mt-20">
            {workExperience.map(({id, title, desc, className, thumbnail, start, end})=>(
                <ExperienceCard
                    key={id}
                    title={title}
                    desc={desc}
                    className={className}
                    thumbnail={thumbnail}
                    start={start}
                    end={end}
                />
            ))}
        </div>
    </div>
)

export default Experience