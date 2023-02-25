import React from 'react';
import { Link, usePage } from '@inertiajs/react'
import Jobpage from "./Jobpage";
import { Navbar }  from "../../layouts/components/Navbar";
import { Footer } from "../../layouts/components/Footer";


const Index = (props) => {
  const { job } = usePage().props;
  return (
    <div>
    <Navbar transparent />
    <Jobpage job={ job[0] } />
    <Footer />
    </div>           
  );
};

export default Index;