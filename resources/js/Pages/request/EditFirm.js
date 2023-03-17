import { memo,useState } from 'react'
import { useForm,usePage,router } from '@inertiajs/react'
 
const EditFirm  = memo(() => {
  const { firm } = usePage().props;
  const { data, setData, put, errors } = useForm({
      firmid: firm.id || "",
      title: firm.title || "",
      description: firm.description || "",
      purpose: firm.purpose || "",
      sitepage: firm.sitepage || "",
  });

  function handleSubmit(e) {
      e.preventDefault();
      router.put('/firmupdate', data);
  }
  return (
    <main>
    <section className="pt-20 pb-48">
      <div className="w-full max-w-xl mx-auto">
      <form>
          <h1 className="text-2xl mb-2">Edit firm</h1>
           <div className="job-info border-b-2 py-2 mb-5">
            <div className="mb-4">
             <label className="block text-gray-700 text-sm mb-2" for="job-title">Title</label>
              <input className="w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 " id="title" name="title" defaultvalue={firm.title} value={data.title}
                                   onChange={(e) =>
                                       setData("title", e.target.value)
                                   }/>
           </div>
         <div className="md:flex md:justify-between">
           <div className="w-full md:w-3/12 mb-4 md:mb-0">
               <label className="block text-gray-700 text-sm mb-2" for="job-type">
                 Purpose
               </label>
               <div className="relative">
                 <select className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" name="purpose"  defaultvalue={firm.purpose}  value={data.purpose}  
                                   onChange={(e) =>
                                       setData("purpose", e.target.value)
                                   }>
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
           <textarea name="description" id="description" value={data.description}  defaultvalue={firm.description} 
                                   onChange={(e) =>
                                       setData("description", e.target.value)
                                   } cols="" rows="8" className="block text-gray-700 text-sm mb-2 w-full"></textarea>
           </div>
           <div className="job-info border-b-2 py-2 mb-5">
            <div className="mb-4">
             <label className="block text-gray-700 text-sm mb-2" for="job-title">Site Address</label>
              <input className="w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 " id="sitepage" name="sitepage" value={data.sitepage}  defaultvalue={firm.sitepage} 
                                   onChange={(e) =>
                                       setData("sitepage", e.target.value)
                                   }/>
              </div>
          </div>  
          </div>
             

              <div>
                <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded" type="submit"   
         onClick={handleSubmit}>Edit Firm</button>
              </div>
         </form>
      </div>
    </section>  
   </main>    
  );
}
)
export default EditFirm 