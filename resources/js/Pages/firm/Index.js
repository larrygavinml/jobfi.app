import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Firmpage from "./Firmpage";
import { Navbar }  from "../../layouts/components/Navbar";
import { Footer } from "../../layouts/components/Footer";

const Index = (props) => {
  const { firm } = usePage().props;
  return (
    <div>
    <Navbar transparent />
    <Firmpage firm={ firm[0] } />
    <Footer />
    </div>           
  );
};

export default Index;