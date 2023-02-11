import React from 'react';
import Layout from '../layouts/Layout';
import{usePage} from '@inertiajs/inertia-react';

function Home() {
    const auth = usePage().props;
    return (
        <div>
            <Layout>
                {/* check app.css for related css */}
                <div className="header">
                    <h1 className="header-text">Dashboard</h1>
                </div>

                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        You have {auth.user.initbalance } Blue Bird Coin locked!
                    </div>
                    <div className="p-6 bg-white border-b border-gray-200">
                        You have {auth.user.unlockedcoin } Blue Bird Coin unlocked!
                    </div>
                    <div className="p-6 bg-white border-b border-gray-200">
                        Your invitation code is { auth.user.codeforinvite } 
                    </div>
                    <div className="p-6 bg-white border-b border-gray-200">
                       Please share this invitation code for unlock you blocked coin!
                    </div>
                    <div className="p-6 bg-white border-b border-gray-200">
                        Join our Telgram group to know the latest news!!<a href="https://t.me/+YFsrZFFzbys4ZGM1">Jobfi.ETH</a>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Home
