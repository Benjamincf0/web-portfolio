import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import LiveLink from './LiveLink.client'

const RecentProjects = () => {
  return (
    <div className='mt-40 py-20' id='projects'>
        <h1 className='heading'>
            Some of my {' '}
            <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-4 sm:gap-y-8 mt-10">
            {projects.map(({id, title, des, img, iconLists, link, livesite}) => (
                <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link? link.split('//')[1]: ''} href={link? link: ''}>
                        <div className='relative flex justify-center items-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10'>
                            <div className='w-full relative h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src='/bg.png' />
                                <img src={img} />
                            </div>
                            <img 
                                src={img}
                                alt={title}
                                className='z-10 absolute bottom-0'
                            />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>

                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-21'>
                            {des}
                        </p>

                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} 
                                        className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                        style={{transform: `translateX(-${10 * index}px)`}}
                                    >
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>

                            {livesite? <div className='flex justify-center items-center'>
                                <LiveLink link={link} title={title} />
                            </div>: ''}
                        </div>
                    </PinContainer>
                </div>))}
        </div>
    </div>
  )
}

export default RecentProjects