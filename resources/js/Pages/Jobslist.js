import React,{setState} from "react";
import Listitem from "./Listitem";
import {useDefaultPhoto} from '@/hooks/constants';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Jobslist({ firm }) {
    return (
      <ul className="divide-y divide-slate-100">
        <div className="flex ...">
         <div className="w-1/6 md:w-auto">
         <img src={firm.avatar_name ? `/storage/firmphoto/${firm.avatar_name}` : useDefaultPhoto(firm.title)} alt="" className="object-cover w-12 h-12 rounded-full"/>
         </div>
        <h4 className="w-5/6 md:w-auto p-2 text-3xl text-left text-bold">
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
  }
  