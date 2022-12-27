import React from "react";
import Jobslist from "./Jobslist";

import {Inertia} from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Pagination from '../Shared/Pagination';


export function Landing(props) {
    const { jobs,firms } = usePage().props;
    console.log({jobs});
    console.log({firms});
    const {
      data,
      links,
    } = firms; 
  return (
    <main>
       <section className="pt-20 pb-48">
       {data.map((data) => 
        <Jobslist firm={data} />
        )}
        <Pagination links={links} />
        </section>  
    </main>    
  );
}
