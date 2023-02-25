import React from 'react';
import { Link, usePage } from '@inertiajs/react'
import Jobpage from "./UserJobpage";
import Layout from '../../layouts/Layout';


const Index = (props) => {
  const { jobs } = usePage().props;
  return (
    <div>
    <Layout>
        {/* check app.css for related css */}
        <div className="header">
            <h1 className="header-text">What I Have Applied Jobs</h1>
        </div>
        {   jobs === "nojobs"?
          <div>
          <p>Jobfi limit time no cost for Job Apply! </p>
          <p>You can apply all the jobs you are intrested without any cost!</p>
          </div>
          :<Jobpage jobs={jobs }/>
      
        }
   
    </Layout>
</div>
  );
};

export default Index;