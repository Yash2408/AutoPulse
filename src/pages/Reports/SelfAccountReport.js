import React from 'react'
import Sidebar from '../../components/Sidebar'
import Box from '@mui/material/Box';
import Navbar from '../../Navbar/Navbar'

const SelfAccountReport = () => {
    return (
        <>
            <Navbar />
            <Box height={40} />
            <Box sx={{ display: 'flex' }}>
                {/* new sidebar start */}
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h2>Self Account Report</h2>
                </Box>
            </Box>
        </>
    )
}

export default SelfAccountReport