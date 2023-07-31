import React from 'react'

import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import PremiumRemider from './pages/Premium Reminder/PremiumRemider';
import Newcustomer from './pages/New Customer/Newcustomer';
import Reports from './pages/Reports/ClientDetailReport';
import Managegstrates from './pages/Settings/Managegstrates';
import Changepassword from './pages/Settings/Changepassword';
import Sentintimations from './pages/Intimation/Sentintimations';
import Newjointpolicy from './pages/New Lic Policy/Newjointpolicy';
import Newindividualpolicy from './pages/New Lic Policy/Newindividualpolicy';
import Runningcustomers from './pages/Customers/Runningcustomers';
import Allcustomers from './pages/Customers/Allcustomers';
import Newgindividualpolicy from './pages/New Gic Policy/Newgindividualpolicy';
import Newgjointpolicy from './pages/New Gic Policy/Newgjointpolicy';
import Profile from './pages/Profile/Profile';
import ClientDetailReport from './pages/Reports/ClientDetailReport'
import LICPolicyReport from './pages/Reports/LICPolicyReport'
import GICPolicyReport from './pages/Reports/GICPolicyReport'
import PremiumRemiderReport from './pages/Reports/PremiumReminderReport'
import SelfAccountReport from './pages/Reports/SelfAccountReport'


const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/premiumreminderpage',
        element: <PremiumRemider />,
    },
    {
        path: '/runningcustomers',
        element: <Runningcustomers />,
    },
    {
        path: '/allcustomers',
        element: <Allcustomers />,
    },
    {
        path: '/newcustomer',
        element: <Newcustomer />,
    },
    {
        path: '/newgjointpolicy',
        element: <Newgjointpolicy />,
    },
    {
        path: '/newgindividualpolicy',
        element: <Newgindividualpolicy />,
    },
    {
        path: '/newjointpolicy',
        element: <Newjointpolicy />,
    },
    {
        path: '/newindividualpolicy',
        element: <Newindividualpolicy />,
    },
    {
        path: '/intimation',
        element: <Sentintimations />,
    },
    {
        path: '/managegstrates',
        element: <Managegstrates />,
    },
    {
        path: '/clientdetailreport',
        element: <ClientDetailReport />,
    },
    {
        path: '/licpolicyreport',
        element: <LICPolicyReport />,
    },
    {
        path: '/gicpolicyreport',
        element: <GICPolicyReport />,
    },
    {
        path: '/premiumreminderreport',
        element: <PremiumRemiderReport />,
    },
    {
        path: '/selfaccountreport',
        element: <SelfAccountReport />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path:'/changepassword',
        element:<Changepassword/>
    }
]

export default routes;


// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route exact path='/' element={< Home />}></Route>
//                 <Route exact path='/dashboard' element={< Dashboard />}></Route>
//                 <Route exact path='/premiumreminderpage' element={< PremiumRemider />}></Route>

//                 <Route exact path='/runningcustomers' element={<Runningcustomers />}></Route >
//                 <Route exact path='/allcustomers' element={<Allcustomers />}></Route >

//                 <Route exact path='/newcustomer' element={<Newcustomer />}></Route>

//                 <Route exact path='/newgjointpolicy' element={< Newgjointpolicy />}></Route >
//                 <Route exact path='/newgindividualpolicy' element={<Newgindividualpolicy />}></Route >

//                 <Route exact path='/newjointpolicy' element={< Newjointpolicy />}></Route >
//                 <Route exact path='/newindividualpolicy' element={<Newindividualpolicy />}></Route >


//                 <Route exact path='/intimation' element={< Sentintimations />}></Route >

//                 <Route exact path='/managegstrates' element={< Managegstrates />}></Route>
//                 <Route exact path='/changepassword' element={< Changepassword />}></Route>

//                 <Route exact path='/clientdetailreport' element={<ClientDetailReport />}></Route>
//                 <Route exact path='/licpolicyreport' element={<LICPolicyReport />}></Route>
//                 <Route exact path='/gicpolicyreport' element={<GICPolicyReport />}></Route>
//                 <Route exact path='/premiumreminderreport' element={<PremiumRemiderReport />}></Route>
//                 <Route exact path='/selfaccountreport' element={<SelfAccountReport />}></Route>


//                 <Route exact path='/profile' element={<Profile />}></Route>



//             </Routes>

//         </Router>
//     );
// }

// export default App;