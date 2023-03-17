import React from "react";
import { memo,useState } from 'react'
import { router,usePage,useForm,Link } from '@inertiajs/react'

const CreateFirm  = memo(() => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    purpose: "",
    sitepate:""
});

function handleChange(e) {
  const key = e.target.id;
  const value = e.target.value
  setValues(values => ({
      ...values,
      [key]: value,
  }))
}
function handleSubmit(e) {
    e.preventDefault();
    router.post('/firmcreate', values)
}

  return (
    <main>
     <section className="pt-20 pb-48">
       <div className="w-full max-w-xl mx-auto">
       <form>
           <h1 className="text-2xl mb-2">Add new firm</h1>
            <div className="job-info border-b-2 py-2 mb-5">
             <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" for="job-title">Title</label>
               <input className="w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 " id="title" name="title" 
               value={values.title} onChange={handleChange} />
            </div>
          <div className="md:flex md:justify-between">
            <div className="w-full md:w-3/12 mb-4 md:mb-0">
                <label className="block text-gray-700 text-sm mb-2" for="job-type">
                  Purpose
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" name="purpose"
                  value={values.purpose} onChange={handleChange} >
                    <option>Defi</option>
                    <option>Dao On Chain</option>
                    <option>Dao Not on Chain</option>
                    <option>Game</option>
                  </select>
                </div>
            </div>
           </div> 

            <div>
            <label for="description" className="block text-gray-700 text-sm mb-2 w-full">Description</label>
            <textarea name="description" id="description"
                      value={values.description} onChange={handleChange}           
                      cols="" rows="8" className="block text-gray-700 text-sm mb-2 w-full"></textarea>
            </div>
            <div className="job-info border-b-2 py-2 mb-5">
             <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" for="job-title">Site Address</label>
               <input className="w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 " id="sitepage" name="sitepage" 
                                   value={values.sitepage} onChange={handleChange}  
                                  />
               </div>
           </div>  
           </div>
              
 
               <div>
                 <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded" type="submit"   
          onClick={handleSubmit}>Create Firm</button>
               </div>
          </form>
       </div>
     </section>  
    </main>    
  );
}
)
export default CreateFirm 