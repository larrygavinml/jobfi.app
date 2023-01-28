import React from 'react';
import { Submitpage } from "./Submitpage";
import { Navbar }  from "../../layouts/components/Navbar";
import { Footer } from "../../layouts/components/Footer";

function Post() {

    return (
        <div>
        <Navbar transparent />
        <Submitpage />
        <Footer />
        </div>          
    )
}

export default Post
