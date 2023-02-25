import React,{memo, setState} from "react";
import Listitem from "./Listitem";
import {useDefaultPhoto} from '@/hooks/constants';
import { Link } from '@inertiajs/react';

const Jobslist = memo(({ firm }) => {
  return (
    <ul className="">
        <div className="">
         <div className="w-1/6 md:w-auto">
        
         <img src={firm.avatar_name ? `/storage/firmphoto/${firm.avatar_name}` : useDefaultPhoto(firm.title)} alt="" className={`object-cover w-12 h-12 ml-1 rounded-full ${firm.avatar_name ? '' : 'hidden'}`}/>

         </div>
        <h4 className="lg:ml-60 my-2 ml-0 lg:text-3xl text-2xl text-left text-bold">
        <Link
                      tabIndex="-1"
                      href={route('firm.show', firm.hashid)}
                      className=""
                    >
                      {firm.title}
                    </Link>
        </h4>
        </div>
                 {firm.jobs.map((data) => (
                  <Listitem key={data.id} job={data} />
                   ))}
      </ul>
  )
})

export default Jobslist