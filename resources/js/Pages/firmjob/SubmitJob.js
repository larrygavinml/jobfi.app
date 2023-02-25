import { memo,useState } from 'react'
import { router,usePage } from '@inertiajs/react'
import Swal from 'sweetalert2';
import axios from "axios";
const SubmitJob  = memo((user) => {
  const [values, setValues] = useState({
    title: "",
    jobtype: "Full-time",
    worklocation: "Beijing",
    worktype:"市场推广",
    description:"",
    salaryrange:"Negotiable",
    salarytype:"Cash",
    userid:"",
  })
  const auth = usePage().props;
  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

  const handleSubmit = async (e) => {
   
    console.log(auth.user.id);
    const formData = new FormData();
    formData.append("userid", auth.user.id);
    formData.append("title", values.title);
    formData.append("jobtype", values.jobtype);
    formData.append("worklocation", values.worklocation);
    formData.append("worktype", values.worktype);
    formData.append("salaryrange", values.salaryrange);
    formData.append("salarytype", values.salarytype);
    e.preventDefault()
    try {    
      // We will send formData object as a data to the API URL here.
      const res = await axios.post("/api/jobpost", formData, {
          headers: {"Content-Type": "multipart/form-data"}
      }).then((res) => {
        console.log(res);
        if(res.data.status === 300){
          Swal.fire({
                    title: 'Job Post Successful',
                    text:  'You have already post a new job without pay any fees!',
                       }).then(function() {
                        window.location.href = `/firmjobs/${auth.user.id}`
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
    <main>
     <section className="pt-20 pb-48">
       <div className="w-full max-w-xl mx-auto">
       <form>
         <h1 className="text-2xl mb-2">Post new job</h1>
          <div className="job-info border-b-2 py-2 mb-5">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" for="job-title">Title</label>
            <input className="w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 " id="title" name="title" defaultValue={values.title} onChange={handleChange} />
          </div>
          <div className="md:flex md:justify-between">
            <div className="w-full md:w-3/12 mb-4 md:mb-0">
                <label className="block text-gray-700 text-sm mb-2" for="job-type">
                  Job Type
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="jobtype" name="jobtype" value={values.jobtype} onChange={handleChange}>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Freelance</option>
                    <option>Contract</option>
                  </select>
                </div>
            </div>

            <div className="w-full md:w-8/12 mb-4 md:mb-0">
              <label for="location" className="block text-gray-700 text-sm mb-2">Location</label>
              <input type="text" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="worklocation" name="worklocation" defaultValue={values.worklocation} onChange={handleChange} />
            </div>
          </div> 

            <div>
            <label for="description" className="block text-gray-700 text-sm mb-2 w-full">Description</label>
            <textarea name="description" id="description" value={values.description} onChange={handleChange} cols="" rows="8" className="block text-gray-700 text-sm mb-2 w-full"></textarea>
            </div>

           </div>  
             <div className="w-full md:w-3/12 mb-4 md:mb-0">
                <label className="block text-gray-700 text-sm mb-2" for="job-type">
                  Work Type
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="worktype" name="worktype" value={values.worktype} onChange={handleChange}>
                    <option>市场推广</option>
                    <option>合约开发</option>
                    <option>社群运营</option>
                    <option>项目推广</option>
                    <option>市场推广</option>
                    <option>Web3游戏开发</option>
                    <option>金融投资</option>
                  </select>

                </div>
               </div> 
              <div className="payment mb-6">
          
               <h4 className="mb-2">Salary Range</h4>
               <p className="bg-gray-200 py-3 text-center text-sm">
                 <select className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="salaryrange" name="salaryrange" value={values.salaryrange} onChange={handleChange}>
                   <option>2000-5000</option>
                   <option>5000-10000</option>
                   <option>Negotiable</option>
                 </select>
                </p>
          
              </div>
              <div className="payment mb-6">
          
          <h4 className="mb-2">Salary Type</h4>
          <p className="bg-gray-200 py-3 text-center text-sm">
            <select className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="salaryrange" name="salaryrange" value={values.salaryrange} onChange={handleChange}>
              <option>Cash</option>
              <option>Bank Transfer</option>
              <option>Crypto Currency</option>
            </select>
           </p>
     
         </div>
               <div>
                 <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded" type="submit"   
          onClick={handleSubmit}>Create job</button>
               </div>
          </form>
       </div>
     </section>  
    </main>    
  );
}
)
export default SubmitJob 