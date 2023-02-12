import { InertiaLink } from '@inertiajs/inertia-react';
import React, { memo } from 'react'

const Listitem = memo(({ job }) => {
  // console.log('item',job)
  return (
    <div className="flex flex-col justify-between h-24 mx-60 py-2 my-2 rounded border hover:shadow-md">
      {/* <div className="min-w-0 relative flex-auto"> */}
      <div className="flex justify-between text-gray-600 pl-1">
        {/* <h2 className="font-semibold text-slate-900 truncate pr-20 bg-green-900"> */}
        <InertiaLink
                    tabIndex="-1"
                    href={route('job.show', job.hashid)}
                    // className="flex px-6 py-4 focus:text-indigo focus:outline-none bg-blue-300"
                    className="text-2xl"
                  >
                    {job.title}
                  </InertiaLink>

                  <div className={`flex justify-between items-center ${job.salaryrange ? '' : 'hidden'}`}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" focusable="false" class="chakra-icon css-18t35oq" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    <span className="px-1">{job.salaryrange}</span>
                  </div>

        {/* <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="absolute top-0 right-0 flex items-center space-x-1">
            <dt className="text-sky-500">
              <span className="sr-only">Star rating</span>
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
            </dt>
            <dd>{job.firmname}</dd>
          </div>
          <div>
            <dt className="sr-only">Rating</dt>
            <dd className="px-1.5 ring-1 ring-slate-200 rounded">{job.range}</dd>
          </div>
          <div>
            <dt className="sr-only">Genre</dt>
            <dd className="flex items-center">
              <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                <circle cx="1" cy="1" r="1" />
              </svg>
              {job.type}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Runtime</dt>
            <dd className="flex items-center">
              <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                <circle cx="1" cy="1" r="1" />
              </svg>
              {job.type}
            </dd>
          </div>
          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">Cast</dt>
            <dd className="text-slate-400">{job.location}</dd>
          </div>
        </dl> */}
      </div>

      <div className="flex justify-between items-center pl-1">
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