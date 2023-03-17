import React,{memo, setState} from "react";
import Listitem from "./Listitem";
import Pagination from '../Shared/Pagination';
import { usePage } from '@inertiajs/react';
import { Navbar }  from "../layouts/components/Navbar";
import { Footer } from "../layouts/components/Footer";


const Jobsindex = memo(() => {
  const { jobs } = usePage().props;
  const {
    data,
    links,
  } = jobs; 
  return (
    <>
    <Navbar transparent />
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

      <div className="w-full py-20">
       <ul className="">
                 {data.map((data) => (
                  <Listitem key={data.id} job={data} />
                   ))}
                      <Pagination links={links} />
      </ul>
      </div>
    <Footer />
    </>
  )
})

export default Jobsindex