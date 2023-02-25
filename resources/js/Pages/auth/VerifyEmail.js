import React, {useState} from 'react'
import backgroundImage from './assets/images/auth-image.jpg';
import { router } from '@inertiajs/react';
import{Link, usePage} from '@inertiajs/react';
import Swal from 'sweetalert2';
import axios from "axios";

function VeryfyEmail() {
    const [form, setForm] = useState({
        'email': "",
      })
    const auth = usePage().props;
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setForm(form => ({
            ...form,
            [key]: value,
            'email':auth.user.email,
        }));
      }

  
      const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("email", auth.user.email);
        try {
          // We will send formData object as a data to the API URL here.
          const res = await axios.post("/resend", formData)
          .then((res) => {
            if(res.data.includes('300')){
              Swal.fire({
                        title: 'Resend Mail Successful',
                        text:  'Please check your mailbox to active your account!',
                        type: 'success',
                           }).then(function() {
                            window.location.reload(true);
                        });	
                           }
          }).catch((error) => {
              alert("Error")
          });
      } catch (error) {
          console.log(error)
      }
      }
      const errors = usePage().props.errors;
    return (
        <div>
            <div className="flex flex-wrap w-full">

                {/* Login Section  */}
                <div className="flex flex-col w-full md:w-1/2">

                    <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                        <Link href="/" className="p-4 text-xl font-bold text-white bg-black">JobFi</Link>
                    </div>

                    <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                        <p className="text-3xl text-center">Verify e-mail address.</p>
                        <p className="text-3xl text-center">You must verify your email address to access Jobfi.</p>
                        <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
                        <button type="submit" class="btn btn-primary">Resend verification email</button>   
                        </form>
                    </div>

                </div>

                {/* Image Section */}
                <div className="w-1/2 shadow-2xl">
                    <img className="hidden object-cover w-full h-screen md:block" src={backgroundImage} />
                </div>
            </div>
        </div>
    )
}

export default VeryfyEmail
