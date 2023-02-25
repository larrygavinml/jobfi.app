import React from 'react'
import SectionBorder from '@/layouts/partials/SectionBorder'
import DeleteUserForm from './DeleteUserForm'
import UpdatePasswordForm from './UpdatePasswordForm'
import UpdateProfileInformationForm from './UpdateProfileInformationForm'
import Layout from '@/layouts/Layout'
import UpdateProfilePhoto from './UpdateProfilePhoto'
import UserWallet from './UserWallet'
import Updatewallet from './Updatewallet'
import {usePage} from '@inertiajs/react'

function Show() {
  const auth = usePage().props;
  let wallet;
  if (auth.user.walletaddress) {
    wallet = <UserWallet/>;
  } else {
    wallet =  <Updatewallet/>;
  }
    return (
        <div>
          <Layout>
            <div className="header">
              <h1 className="header-text">
                Profile
              </h1>
            </div>

            <div className="mx-auto max-w-7xl">
              <UpdateProfilePhoto/>
                <SectionBorder/>
              <UpdateProfileInformationForm/>
                <SectionBorder/>
              <UpdatePasswordForm/>
                <SectionBorder/>
               { wallet } 
                <SectionBorder/>  
              <DeleteUserForm />
            </div>
          </Layout>
        </div>
    )
}

export default Show
