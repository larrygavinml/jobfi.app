import React,{memo, setState} from "react";
import Listitem from "./Listitem";
import {useDefaultPhoto} from '@/hooks/constants';
import { InertiaLink } from '@inertiajs/inertia-react';

const Jobslist = memo(({ firm }) => {
  return (
    <ul className="">
    {/* <ul className="divide-y divide-slate-100"> */}
        <div className="flex items-center ...">
         <div className="w-1/6 md:w-auto">
        
         <img src={firm.avatar_name ? `/storage/firmphoto/${firm.avatar_name}` : useDefaultPhoto(firm.title)} alt="" className={`object-cover w-12 h-12 ml-1 rounded-full ${firm.avatar_name ? '' : 'hidden'}`}/>

         </div>
        <h4 className="ml-52 w-5/6 md:w-auto p-2 text-3xl text-left text-bold">
        <InertiaLink
                      tabIndex="-1"
                      href={route('firm.show', firm.hashid)}
                      className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                    >
                      {firm.title}
                    </InertiaLink>
        </h4>
        </div>
                 {firm.jobs.map((data) => (
                  <Listitem key={data.id} job={data} />
                   ))}
      </ul>
  )
})

export default Jobslist