import React,{memo, setState} from "react";
import {useDefaultPhoto} from '@/hooks/constants';
import { InertiaLink,usePage } from '@inertiajs/inertia-react';
import moment from "moment";
import axios from "axios";
import Swal from 'sweetalert2';

const Userjoblist = memo(({ job }) => {
  const { user } = usePage().props;
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
    < button onClick = {
            () => handleSubmit(job.id)
          } >
      Cost 200 BBB Quicker
      </button>
      </td>
  </tr>
  )
})

export default Userjoblist