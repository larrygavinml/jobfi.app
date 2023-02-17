import React,{memo, useState, useEffect, useRef} from 'react';
import{usePage, useForm } from '@inertiajs/inertia-react';
import {Inertia} from '@inertiajs/inertia';
import Swal from 'sweetalert2';
import axios from "axios";

const Applyjobpage  = memo(() => {
  const [nameForm, setNameForm] = useState()
  const [emailForm, setEmailForm] = useState()
  const initialName = useRef();
  const initialEmail = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
    const { data, setData, errors, post, progress } = useForm({
        userid: "",
        jobid: "",
        cv: null,
    });
  const auth = usePage().props;
  const job = usePage().props;
  function selectNewCV(e){
    e.preventDefault();
    setSelectedFile(e.target.files[0]);
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(job);
    const formData = new FormData();
    formData.append("userid", auth.user.id);
    formData.append("jobid", job.job.id);
    formData.append("cv", selectedFile);
    try {
 
      console.log(job.job.id);
      // We will send formData object as a data to the API URL here.
      const response = await axios.post("/api/jobapply", formData, {
          headers: {"Content-Type": "multipart/form-data"}
      }).then((res) => {
        if(res.data.status === 300){
          Swal.fire({
                    title: 'Applied Successful',
                    text:  'Please be patient and wait for the HR department to contact you!',
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

  useEffect(() => {
    if(auth){
      initialName.current.value = auth.user.name;
      setNameForm(auth.user.name);
      initialEmail.current.value = auth.user.email;
      setEmailForm(auth.user.email); 
    }
    else{
      initialName.current.value =  "Your Name";
      setNameForm("Your Name");
      initialEmail.current.value = "Your Email"
      setEmailForm("Your Email");  
    }
   
  }, [])

  return (
    <main>
       <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "20vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url("https://jobfi-io.imgix.net/bg222.b2568a38.jpg")`
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
        </div>

       <section className="pt-20 pb-48">
       <div className="p-6 border border-gray-300 sm:rounded-md">
    <form>
      <label className="block mb-6">
        <span className="text-gray-700">Your name</span>
            <input id="name" type="text"
                        ref={initialName}
                        onChange={(e) => setNameForm(e.target.value)}
                        className="block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                      />
                      {errors.applyjob &&
                       <div className="text-sm text-red-500">{ errors.applyjob.name }</div>
                      }
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Email address</span>
        <input id="email" type="email"
                        ref={initialEmail}
                        onChange={(e) => setEmailForm(e.target.value)}
                        className="block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                      />
                      {errors.applyjob &&
                       <div className="text-sm text-red-500">{ errors.applyjob.email }</div>
                      }
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Years of experience</span>
        <select
          required
          name="experience"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-green-300
            focus:ring
            focus:ring-green-200
            focus:ring-opacity-50
          "
        >
          <option>Less than a year</option>
          <option>1 - 2 years</option>
          <option>2 - 4 years</option>
          <option>4 - 7 years</option>
          <option>7 - 10 years</option>
          <option>10+ years</option>
        </select>
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Tell us more about yourself</span>
        <textarea
          name="message"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-green-300
            focus:ring
            focus:ring-green-200
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="What motivates you?"
        ></textarea>
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Your CV</span>
        <input
          required
          name="cv"
          type="file"
          onChange={selectNewCV}
          className="
            block
            w-full
            mt-1
            focus:border-green-300
            focus:ring
            focus:ring-green-200
            focus:ring-opacity-50
          "
        />
      </label>

      <div className="mb-6">
        <div className="mt-2">
          <div>
            <label className="inline-flex items-center">
              <input
                name="remote"
                value="yes"
                type="radio"
                className="
                  text-green-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-green-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-green-200
                  focus:ring-opacity-50
                "
                checked
              />
              <span className="ml-2">You'd like to work remotely</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                name="re"
                value="no"
                type="radio"
                className="
                  text-green-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-green-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-green-200
                  focus:ring-opacity-50
                "
              />
              <span className="ml-2">You'd prefer to work onsite</span>
            </label>
          </div>
        </div>
      </div>

      {
         auth.userjob === "true"?
         <div className="mb-6">
        <button
          className="
            h-10
            px-5
            text-green-100
            bg-green-500
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-green-700 "
          disabled
        >
          You have applied this job
        </button>
      </div> 
    : <div className="mb-6">
        <button
          type="submit"
          onClick={handleSubmit}
          className="
            h-10
            px-5
            text-green-100
            bg-green-500
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-green-700
          "
        >
          Apply
        </button>
      </div>
       }
      <div>
      </div>
    </form>
  </div>
       </section>  
    </main>    
  );
})

export default Applyjobpage
