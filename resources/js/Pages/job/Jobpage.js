import React from "react";


export function Jobpage({job}) {
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
       <form className="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
         <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24 tails-selected-element">
              <h4 className="w-full text-3xl font-bold md:flex-row">{job.title}</h4>
                <label>Description</label>
                <h3>{job.location}</h3>
                 <p className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8">{job.description}</p>
                 <label>{job.applytype}</label>
                <div className="flex justify-center my-6">
                  <input className="rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " type="submit" value="Apply" />
                </div>
          </div>
        </form>
        </section>  
    </main>    
  );
}
