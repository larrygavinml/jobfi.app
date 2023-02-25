import React from "react";
import Jobslist from "./Jobslist";
import { Link, usePage } from '@inertiajs/react'
import Pagination from '../Shared/Pagination';


export function Landing(props) {
    const { jobs,firms } = usePage().props;
    // console.log('jobs',{jobs});
    // console.log('firms',{firms});
    const {
      data,
      links,
    } = firms; 
  return (
    <main>
       <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url("https://jobfi-io.imgix.net/bg222.b2568a38.jpg")`
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Web3 is Hiring.
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                    JobFi One new human & Intellectual resources marketplace.
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

       <section className="pt-20 pb-48">
       {data.map((data) => 
        <Jobslist firm={data} />
        )}
        <Pagination links={links} />
        </section>  
    </main>    
  );
}
