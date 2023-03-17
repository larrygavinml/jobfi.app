import React,{memo, setState} from "react";
import { Link,usePage,router } from '@inertiajs/react';
import Swal from 'sweetalert2';

const FirmJoblist = memo((firm) => {
  function firmdelete(e) {
      router.delete(`firmmgr.destroy`, e, {
        onBefore: () => confirm('Are you sure you want to delete this firm?'),
        onSuccess: () => {
          return Promise.all([
            Swal.fire({
              title: 'Delete Successful',
              text:  'You have used Your unlocked BBB for delete the certain Job',
                  }).then(function() {
                    window.location.reload(true);
              })
          ])
        }

    })
    }
   return (
 
    <tr>
    <td className="border px-8 py-4">{firm.firm.title}</td>
    <td  className="border px-8 py-4"></td>
    <td  className="border px-8 py-4" >

      </td>
      <td>
       <Link
         tabIndex="1"
         className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
         href={route("firmedit", firm)}>Edit</Link>
        <button className="h-8 px-5 m-2 text-blue-100 transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-700" onClick={()=>firmdelete(firm.id)}>Delete</button>
      </td>
  </tr>
  )
})

export default FirmJoblist