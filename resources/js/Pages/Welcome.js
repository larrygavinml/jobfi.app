import React from 'react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import PropTypes from 'prop-types'
import { Navbar }  from "../layouts/components/Navbar";
import { Footer } from "../layouts/components/Footer";
import { Landing } from "./Landing";

function Welcome({canLogin, canRegister, laravelVersion, phpVersion}) {
    return (
        <div>
            <Navbar transparent hiddenBreadcrumbs />
            <Landing/>           
            <Footer />
        </div>
    )
}

Welcome.propTypes = {
    canLogin: PropTypes.bool,
    canRegister: PropTypes.bool
  }

export default Welcome
