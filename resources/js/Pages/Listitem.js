import { InertiaLink } from '@inertiajs/inertia-react';
import React, { memo } from 'react'

const Listitem = memo(({ job }) => {
  // console.log('item',job)
  return (
    <div className="flex flex-col justify-between lg:mx-60 lg:h-28 p-2 my-2 rounded border hover:shadow-md">
      {/* <div className="min-w-0 relative flex-auto"> */}
      <div className="flex lg:flex-row lg:justify-between flex-col justify-start text-gray-600 pl-1 py-2">
        {/* <h2 className="font-semibold text-slate-900 truncate pr-20 bg-green-900"> */}
        <InertiaLink
                    tabIndex="-1"
                    href={route('job.show', job.hashid)}
                    // className="flex px-6 py-4 focus:text-indigo focus:outline-none bg-blue-300"
                    className="lg:text-2xl text-lg"
                  >
                    {job.title}
                  </InertiaLink>

                  <div className={`flex justify-start items-center ${job.salaryrange ? '' : 'hidden'}`}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" focusable="false" class="chakra-icon css-18t35oq" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    <span className="px-1">{job.salaryrange}</span>
                  </div>

      </div>

      <div className="flex justify-between items-center pl-1 py-2">
        <div className='flex justify-start items-center text-gray-400'>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" focusable="false" class="chakra-icon css-szur2g" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span className='px-1'>{job.worklocation}</span>
        </div>
        <span className='pr-2 text-blue-500'>{job.worktype}</span>
      </div>

    </div>
  )
})

export default Listitem