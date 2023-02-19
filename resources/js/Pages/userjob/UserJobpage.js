import React,{memo, setState} from "react";
import {useDefaultPhoto} from '@/hooks/constants';
import { InertiaLink } from '@inertiajs/inertia-react';
import Joblist from './Userjoblist';
const UserJobpage = memo(({ jobs}) => {
  return (
    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
    <table className="shadow-lg bg-white border-separate table-auto">
<thead>
<tr>
  <th className="bg-blue-100 border text-left px-8 py-4">Job Title</th>
  <th className="bg-blue-100 border text-left px-8 py-4">Applied Time</th>
  <th className="bg-blue-100 border text-left px-8 py-4">Fast Pass</th>
</tr>
</thead>
<tbody>
    {jobs.map((data) => (
              <Joblist key={data.id} job={data} />
               ))}
 </tbody>
</table>                
     </div>          

  )
})

export default UserJobpage