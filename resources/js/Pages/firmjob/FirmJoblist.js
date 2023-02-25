import React,{memo, setState} from "react";
import { Link,usePage,router } from '@inertiajs/react';
import moment from "moment";
import axios from "axios";
import Swal from 'sweetalert2';

const FirmJoblist = memo(({ job }) => {
  const { user } = usePage().props;
  function jobdelete(e) {
      router.delete(`/jobDelete/${e}`, {
        onBefore: () => confirm('Are you sure you want to delete this job?'),
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
  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("jobid", e);
    formData.append("userid", user.id);
    try {  
      // We will send formData object as a data to the API URL here.
      const response = await axios.post("/api/quicker", formData, {
        headers: {"Content-Type": "multipart/form-data"}
    }).then((res) => {
        if(res.data.status === 300){
          Swal.fire({
                    title: 'Request Successful',
                    text:  'You have pay 200 BBB for quicker the HR Process!',
                       }).then(function() {
                        window.location.reload(false);
                    });	
                       }
        if(res.data.status === 400){
          Swal.fire({
                    title: 'Request Successful',
                    text:  'You have used Your unlocked BBB for quicker the HR Process',
                        }).then(function() {
                          window.location.reload(false);
                    });	
                                     }
          if(res.data.status === 500){
            Swal.fire({
                      title: 'Request Failed',
                      text:  'You need more BBB for quicker the HR Process',
                         }).then(function() {
                            window.location.reload(false);
                    });	
                                      }
      }).catch((error) => {
          alert("Error")
      });
  } catch (error) {
      console.log(error)
  }
  }
   return (
 
    <tr>
    <td className="border px-8 py-4">{job.title}</td>
    <td  className="border px-8 py-4">{moment(job.pivot.created_at).format('YYYY-MM-DD HH:mm:ss')}</td>
    <td  className="border px-8 py-4">
    < button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
        onClick = {
            () => handleSubmit(job.id)
          } >
      Cost 200 BBB Requst
      </button>
      </td>
      <td>
       <Link
         tabIndex="1"
         className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
          href={route("jobedit", job.id)}>Edit</Link>
        <button className="h-8 px-5 m-2 text-blue-100 transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-700" onClick={()=>jobdelete(job.id)}>Delete</button>
      </td>
  </tr>
  )
})

export default FirmJoblist