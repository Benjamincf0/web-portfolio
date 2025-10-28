import { companies, projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import LiveLink from './LiveLink.client'
import MirrorEffect from './ui/MirrorEffect'
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero"
// // import RecentProjects from "@/components/RecentProjects";
// import Footer from "@/components/Footer";
// import Experience from "@/components/Experience";

const RecentProjects = () => {
  return (
    <div className='mt-40 py-20' id='projects'>
        <h1 className='heading'>
            Some of my {' '}
            <span className="text-purple"> projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-4 sm:gap-y-8 mt-10">
            {projects.map(({id, title, des, img, iconLists, link, livesite}) => (
                <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <div title={link? link.split('//')[1]: ''} className='p-4 rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden'>
                        <div className='relative flex justify-center items-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10'>
                            <div className='w-full relative h-full overflow-hidden rounded-2xl bg-[#13162d]'>
                                
                                {id == 0 ?
                                    <MirrorEffect/>
                                    : 
                                    <img 
                                        src={img? img : "/"}
                                        alt={title}
                                        
                                        className='z-10 absolute bottom-0 w-full'
                                    />
                                }
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
                            {link? <a
                                className='ml-5 border rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                href={link}
                                target={"_blank"}
                            >
                                <img src={companies['Github'].img} className='p-2'/>
                            </a>: <></>}
                        </div>

                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-21'>
                            {des}
                        </p>

                        {/* bottom section tech stack & live link  */}
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
                                <LiveLink link={livesite} title={title}/>
                            </div>: ''}
                        </div>
                    </div>
                </div>))}
        </div>
    </div>
  )
}

export default RecentProjects