import React from 'react';
import { Link, usePage } from '@inertiajs/react'
import FirmJobpage from "./FirmJobpage";
import Layout from '../../layouts/Layout';


const Index = (props) => {
  const { jobs } = usePage().props;
  return (
    <div>
    <Layout>
        {/* check app.css for related css */}
        <div className="header">
            <h1 className="header-text">What I Have Posted Jobs</h1>
        </div>
        {   jobs === "nojobs"?
          <div>
          <p>Jobfi limit time no cost for Post a Job! </p>
          <p>You can post jobs you supplied  without any cost!</p>
           <Link  href={route('postjob')} className="block text-gray-200 hover:text-white">
            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded">Add job</button>
           </Link> 
          </div>
          :<FirmJobpage jobs={jobs }/>
      
        }
   
    </Layout>
</div>
  );
};

export default Index;