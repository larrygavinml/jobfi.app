import React,{useState, useEffect, useRef} from 'react';
import{usePage} from '@inertiajs/react';
import { router } from '@inertiajs/react';

function UserWallet() {
  const [balanceForm, setbalanceForm] = useState()
  const initialbalance= useRef();

  const auth = usePage().props;
  const errors = usePage().props.errors;


  function handleSubmit(e) {
    e.preventDefault()
    router.post('withdrawcoin', {
        _method: 'put',
        balance: balanceIntForm
    })
  }

    return (
        <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
            {/* left side */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium text-gray-900"> User Wallet </h3>
              <p className="mt-1 text-sm text-gray-600">Show your wallet account . </p>
            </div>
            {/* right side */}
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form>
                <div className="px-4 py-5 bg-white shadow sm:p-6 sm:rounded-tl-md sm:rounded-tr-md">
                  <div className="grid grid-cols-6 gap-6">

                    {/* Wallet account */}
                    <div className="col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                        <span>Blocked Wallet Account</span>
                      </label>
                      <p>{ auth.user.unlockedcoin } Blue Bird Coin</p> 
                      {errors.updateProfileInformation &&
                       <div className="text-sm text-red-500">{ errors.updateProfileInformation.balance }</div>
                      }
                    </div>
                    {/* Wallet address */}
                    <div className="col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                        <span>Wallet Account Polygon Address</span>
                      </label>
                      <p>{ auth.user.walletaddress }</p> 
                      {errors.updateProfileInformation &&
                       <div className="text-sm text-red-500">{ errors.updateProfileInformation.balance }</div>
                      }
                    </div>
                  

                  </div>
                </div>
                {/* actions */}
                <div className="flex items-center justify-end px-4 py-3 text-right border-t shadow bg-gray-50 sm:px-6 sm:rounded-bl-md sm:rounded-br-md">
                    <button type="submit"
                      onClick={handleSubmit}
                      className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 border border-transparent rounded-md hover:bg-gray-700">
                      withdraw
                    </button>
                </div>
              </form>
            </div>
          </div>

        </div>
    )
}

export default UserWallet

