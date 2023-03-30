import React, { memo } from 'react'
import { Link } from '@inertiajs/react';
import{usePage} from '@inertiajs/react';

const Jobpage = memo(({job}) => {
  const { user } = usePage().props;

  return (
    <div>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "20vh"
          }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url("https://jobfi-io.imgix.net/bg222.b2568a38.jpg")`
            }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
      </div>

      <div className="w-full py-20">
        <div className="lg:ml-80 mx-2">
          <div className="flex justify-start items-center font-bold block">
            <div className='text-3xl'>{job.title}</div>
            <span className=" h-8 lg:leading-8 lg:ml-10 px-2 rounded text-xs text-white bg-blue-500" >{job.worktype}</span>
          </div>
          <span className="my-5 text-base block">Worklocation - {job.worklocation}</span>
          <span className={`my-5 text-base block ${job.salaryrange ? '' : 'hidden'}`}>Salary : {job.salaryrange}</span>
          <span className="text-xl block">Description</span>
          <p className="lg:mr-64 pt-2 text-lg" dangerouslySetInnerHTML={{ __html: job.description }} />
          <button className="mt-5 rounded-md text-white text-base font-semibold bg-green-500 hover:bg-green-700">{
            user?
            <Link tabIndex="-1"  href={route('job.apply', job.hashid )} className="flex items-center px-14 py-3"> Apply </Link>:
            <Link href="/login" className="flex items-center px-14 py-3">Please Login First</Link>
          }
          </button>
        </div>
      </div>
    </div>    
  );
})

export default Jobpage