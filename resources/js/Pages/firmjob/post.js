import React from 'react';
import { Link, usePage } from '@inertiajs/react'
import SubmitJob from "./SubmitJob";
import Layout from '../../layouts/Layout';

function Post() {

    return (
        <div>
        <Layout>
        <SubmitJob />
        </Layout>
        </div>          
    )
}

export default Post
