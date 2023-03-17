import React from 'react';
import { usePage } from '@inertiajs/react'
import Layout from '../../layouts/Layout';
import { Link } from '@inertiajs/react';
import Firmlist from './Firmlist';

const Index = (props) => {
  const { firms } = usePage().props 
  return (
    <div>
    <Layout>
        {/* check app.css for related css */}
        <div className="header">
            <h1 className="header-text">Firms Management</h1>
        </div>
        <>
    <Link  href={route("firmmgr.create")} className="block text-gray-200 hover:text-white">
      <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded">Add Firm</button>
     </Link> 
    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            
    <table className="shadow-lg bg-white border-separate table-auto">
<thead>
<tr>
  <th className="bg-blue-100 border text-left px-8 py-4">Firm Title</th>
  <th className="bg-blue-100 border text-left px-8 py-4">Posted Time</th>
  <th className="bg-blue-100 border text-left px-8 py-4">Actions</th>
</tr>
</thead>
<tbody>
    {firms.map((data) => (
              <Firmlist key={data.id} firm={data} />
               ))}
 </tbody>
</table>                
     </div>          
     </>
    </Layout>
</div>
  );
};

export default Index;