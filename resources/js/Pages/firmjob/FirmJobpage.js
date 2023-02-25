import React,{memo, setState} from "react";
import {useDefaultPhoto} from '@/hooks/constants';
import { Link } from '@inertiajs/react';
import FirmJoblist from './FirmJoblist';
const FirmJobpage = memo(({ jobs}) => {
  return (
    <>
    <Link  href={route('postjob')} className="block text-gray-200 hover:text-white">
      <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded">Add job</button>
     </Link> 
    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            
    <table className="shadow-lg bg-white border-separate table-auto">
<thead>
<tr>
  <th className="bg-blue-100 border text-left px-8 py-4">Job Title</th>
  <th className="bg-blue-100 border text-left px-8 py-4">Posted Time</th>
  <th className="bg-blue-100 border text-left px-8 py-4">Fast Pass</th>
  <th className="bg-blue-100 border text-left px-8 py-4">Actions</th>
</tr>
</thead>
<tbody>
    {jobs.map((data) => (
              <FirmJoblist key={data.id} job={data} />
               ))}
 </tbody>
</table>                
     </div>          
     </>
  )
})

export default FirmJobpage