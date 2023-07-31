import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from '../../Navbar/Navbar'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';


const Allcustomers = () => {

    const navigate = useNavigate();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [data, runningData] = useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        const fetchReminderData = async () => {
            try {
                const response = await axios.get(
                    'https://autopulse.arksoftai.com/users/runningCustomer?clientId=9lmFTSAKFTd2E7OJZY2RGYCpHlb2'
                );
                console.log(response.data);
                runningData(response.data);
            } catch (error) {
                console.log('Error fetching reminder data:', error);
            }
        };

        fetchReminderData();
    }, []);


    return (
        <>
            <Navbar />
            <Box height={40} />
            <Box sx={{ display: 'flex' }}>
                {/* new sidebar start */}
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Grid xs={8} padding={3}>
                        <h3>Customers / <span style={{color:'#3bd615'}}>All Customers</span></h3>
                        <Box height={20} />
                        {/* table start */}
                        <Paper sx={{ padding: '2%', width: '90%', overflow: 'hidden', border: '1px solid #d9d9d9', boxShadow: 'none' }}>
                            <Box height={50}>
                                <Stack direction="row">
                                    <div style={{ width: '50%' }}>
                                        <input placeholder='Search by Name' style={{ height: '2rem', width: '100%', border: '1px solid #d9d9d9', borderRadius: '5px' }} />
                                    </div>
                                </Stack>
                            </Box>
                            <Box height={10} />

                            <TableContainer sx={{ maxHeight: 418 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <table style={{ border: '1px solid #d9d9d9', width: '100%' }}>
                                        <thead>
                                            <tr style={{ height: '50px', backgroundColor: '#f9f9f9' }}>
                                                <th style={{ textAlign: 'center' }}>UID</th>
                                                <th style={{ textAlign: 'center' }}>Name</th>
                                                <th style={{ textAlign: 'center' }}>Mobile Number</th>
                                                <th style={{ textAlign: 'center' }}>Email</th>
                                                <th style={{ textAlign: 'center' }}>Address</th>
                                                <th style={{ textAlign: 'center' }}>Documents</th>
                                                <th style={{ textAlign: 'center' }}>LIC</th>
                                                <th style={{ textAlign: 'center' }}>GIC</th>
                                                <th style={{ textAlign: 'center' }}>All</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse' }}>
                                            {data
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((data) => {
                                                    return (
                                                        <tr style={{ height: '45px' }}>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.uid}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.personal.name}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.personal.mobile}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.personal.email}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.personal.address}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.noplic}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.nopgic}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.nopgic}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.nopgic}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                        <tfoot></tfoot>
                                    </table>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                        {/* table ends */}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Allcustomers

// import React, { useState } from 'react'
// import Sidebar from '../../components/Sidebar'
// import { useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import Navbar from '../../Navbar/Navbar'

// const Allcustomers = () => {

//     const navigate = useNavigate();

//     const dummyData = [{ "UID": 1, "Name": "Francklin Ridd", "Mobile": "+86 656 748 0960", "Email": "fridd0@jalbum.net", "Address": "Room 472", "Documents": "image/jpeg", "LIC": "false", "GIC": "true", "All": "true" },
//     { "UID": 2, "Name": "Oriana Woolward", "Mobile": "+86 149 738 8238", "Email": "owoolward1@noaa.gov", "Address": "PO Box 17159", "Documents": "image/x-tiff", "LIC": "true", "GIC": "false", "All": "false" },
//     { "UID": 3, "Name": "Sharon Knotte", "Mobile": "+66 590 732 3864", "Email": "sknotte2@bloomberg.com", "Address": "2nd Floor", "Documents": "video/avi", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 4, "Name": "Ilyse Noble", "Mobile": "+47 410 777 9849", "Email": "inoble3@lulu.com", "Address": "PO Box 80563", "Documents": "image/x-tiff", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 5, "Name": "Krissy Piccard", "Mobile": "+595 998 575 0718", "Email": "kpiccard4@jimdo.com", "Address": "Apt 940", "Documents": "video/mpeg", "LIC": "false", "GIC": "true", "All": "true" },
//     { "UID": 6, "Name": "Theressa Schlagman", "Mobile": "+62 676 172 1377", "Email": "tschlagman5@cdc.gov", "Address": "Room 1954", "Documents": "video/x-msvideo", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 7, "Name": "Caroline Emm", "Mobile": "+7 683 840 4572", "Email": "cemm6@berkeley.edu", "Address": "Apt 243", "Documents": "image/png", "LIC": "false", "GIC": "true", "All": "true" },
//     { "UID": 8, "Name": "Marleah Ingyon", "Mobile": "+1 414 331 9602", "Email": "mingyon7@multiply.com", "Address": "Apt 1849", "Documents": "image/jpeg", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 9, "Name": "Anders Bridgewood", "Mobile": "+86 182 292 7774", "Email": "abridgewood8@mit.edu", "Address": "PO Box 25713", "Documents": "video/mpeg", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 10, "Name": "Alberik Draxford", "Mobile": "+381 232 764 4267", "Email": "adraxford9@unesco.org", "Address": "13th Floor", "Documents": "video/mpeg", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 11, "Name": "Jacquette Glendinning", "Mobile": "+57 609 350 4117", "Email": "jglendinninga@princeton.edu", "Address": "PO Box 4705", "Documents": "application/pdf", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 12, "Name": "Cinda Pedican", "Mobile": "+62 495 416 9548", "Email": "cpedicanb@comsenz.com", "Address": "Apt 1892", "Documents": "video/quicktime", "LIC": "false", "GIC": "true", "All": "true" },
//     { "UID": 13, "Name": "Casar O' Sullivan", "Mobile": "+86 886 744 8776", "Email": "coc@imgur.com", "Address": "Room 994", "Documents": "application/x-troff-msvideo", "LIC": "false", "GIC": "true", "All": "true" },
//     { "UID": 14, "Name": "Minna Randerson", "Mobile": "+358 404 159 7016", "Email": "mrandersond@printfriendly.com", "Address": "Room 472", "Documents": "audio/mpeg3", "LIC": "false", "GIC": "true", "All": "false" },
//     { "UID": 15, "Name": "Raye Tharme", "Mobile": "+380 616 918 3395", "Email": "rtharmee@spiegel.de", "Address": "15th Floor", "Documents": "application/excel", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 16, "Name": "Koral Gahan", "Mobile": "+46 899 300 5384", "Email": "kgahanf@europa.eu", "Address": "PO Box 5696", "Documents": "image/x-tiff", "LIC": "true", "GIC": "false", "All": "true" },
//     { "UID": 17, "Name": "L;urette Kiessel", "Mobile": "+51 934 575 0298", "Email": "lkiesselg@stanford.edu", "Address": "Room 1256", "Documents": "video/msvideo", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 18, "Name": "Felice Chirm", "Mobile": "+55 660 176 8136", "Email": "fchirmh@hexun.com", "Address": "11th Floor", "Documents": "application/x-mspowerpoint", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 19, "Name": "Beltran Janczyk", "Mobile": "+55 827 551 9623", "Email": "bjanczyki@goo.ne.jp", "Address": "Suite 14", "Documents": "application/vnd.ms-excel", "LIC": "true", "GIC": "false", "All": "false" },
//     { "UID": 20, "Name": "Ethelin Lerway", "Mobile": "+7 516 298 2411", "Email": "elerwayj@vinaora.com", "Address": "2nd Floor", "Documents": "application/mspowerpoint", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 21, "Name": "Dyane Adamec", "Mobile": "+86 816 921 9174", "Email": "dadameck@senate.gov", "Address": "3rd Floor", "Documents": "application/powerpoint", "LIC": "false", "GIC": "true", "All": "false" },
//     { "UID": 22, "Name": "Edee Bamell", "Mobile": "+33 268 968 2669", "Email": "ebamelll@moonfruit.com", "Address": "Room 1080", "Documents": "application/msword", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 23, "Name": "Tulley Jobke", "Mobile": "+86 648 832 5267", "Email": "tjobkem@mysql.com", "Address": "2nd Floor", "Documents": "image/jpeg", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 24, "Name": "Buiron Crux", "Mobile": "+86 710 348 7082", "Email": "bcruxn@toplist.cz", "Address": "10th Floor", "Documents": "video/x-msvideo", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 25, "Name": "Brose Mallabon", "Mobile": "+593 961 189 4601", "Email": "bmallabono@europa.eu", "Address": "PO Box 5454", "Documents": "audio/x-mpeg-3", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 26, "Name": "Flss Upstell", "Mobile": "+598 305 418 5457", "Email": "fupstellp@addtoany.com", "Address": "Apt 1886", "Documents": "image/png", "LIC": "true", "GIC": "false", "All": "false" },
//     { "UID": 27, "Name": "Archaimbaud Lidgertwood", "Mobile": "+64 108 574 7195", "Email": "alidgertwoodq@etsy.com", "Address": "PO Box 43029", "Documents": "audio/x-mpeg-3", "LIC": "false", "GIC": "false", "All": "false" },
//     { "UID": 28, "Name": "Kleon Stace", "Mobile": "+230 717 515 7857", "Email": "kstacer@moonfruit.com", "Address": "Apt 1735", "Documents": "image/x-tiff", "LIC": "true", "GIC": "false", "All": "true" },
//     { "UID": 29, "Name": "Robina Oldfield-Cherry", "Mobile": "+46 998 166 4250", "Email": "roldfieldcherrys@ebay.co.uk", "Address": "Apt 895", "Documents": "application/msword", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 30, "Name": "Annamaria Garnsey", "Mobile": "+62 969 444 2037", "Email": "agarnseyt@squarespace.com", "Address": "PO Box 43541", "Documents": "video/x-msvideo", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 31, "Name": "Farrand Myring", "Mobile": "+374 372 538 2178", "Email": "fmyringu@google.it", "Address": "PO Box 98211", "Documents": "video/quicktime", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 32, "Name": "Florencia Babst", "Mobile": "+62 945 170 9117", "Email": "fbabstv@google.cn", "Address": "Room 827", "Documents": "audio/x-mpeg-3", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 33, "Name": "Hetty Lidstone", "Mobile": "+46 202 481 4017", "Email": "hlidstonew@about.com", "Address": "PO Box 34443", "Documents": "image/gif", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 34, "Name": "Koressa Tuffrey", "Mobile": "+355 660 314 2442", "Email": "ktuffreyx@indiatimes.com", "Address": "Room 1669", "Documents": "video/avi", "LIC": "true", "GIC": "false", "All": "false" },
//     { "UID": 35, "Name": "Roze Haking", "Mobile": "+7 143 172 0222", "Email": "rhakingy@photobucket.com", "Address": "Apt 833", "Documents": "video/mpeg", "LIC": "true", "GIC": "false", "All": "false" },
//     { "UID": 36, "Name": "Silva Wansbury", "Mobile": "+51 197 616 6930", "Email": "swansburyz@bloomberg.com", "Address": "Suite 57", "Documents": "application/vnd.ms-powerpoint", "LIC": "true", "GIC": "false", "All": "true" },
//     { "UID": 37, "Name": "Birdie Arni", "Mobile": "+62 918 891 7804", "Email": "barni10@boston.com", "Address": "Room 207", "Documents": "application/vnd.ms-excel", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 38, "Name": "Simonne Costerd", "Mobile": "+86 843 966 3988", "Email": "scosterd11@examiner.com", "Address": "Suite 24", "Documents": "audio/x-mpeg-3", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 39, "Name": "Kristien Lightbourne", "Mobile": "+81 294 851 6952", "Email": "klightbourne12@free.fr", "Address": "Suite 65", "Documents": "image/jpeg", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 40, "Name": "Jae Roseburgh", "Mobile": "+30 761 155 0805", "Email": "jroseburgh13@nyu.edu", "Address": "Room 910", "Documents": "video/quicktime", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 41, "Name": "Marika Eldrid", "Mobile": "+963 590 192 9648", "Email": "meldrid14@auda.org.au", "Address": "PO Box 67086", "Documents": "application/x-msexcel", "LIC": "false", "GIC": "true", "All": "false" },
//     { "UID": 42, "Name": "Saree De Gowe", "Mobile": "+7 406 443 4330", "Email": "sde15@rakuten.co.jp", "Address": "7th Floor", "Documents": "application/x-mspowerpoint", "LIC": "false", "GIC": "true", "All": "false" },
//     { "UID": 43, "Name": "Fayina Stallion", "Mobile": "+46 757 322 9390", "Email": "fstallion16@gnu.org", "Address": "PO Box 1104", "Documents": "video/x-msvideo", "LIC": "false", "GIC": "true", "All": "true" },
//     { "UID": 44, "Name": "Denys Ivanishin", "Mobile": "+55 261 809 5116", "Email": "divanishin17@g.co", "Address": "PO Box 29836", "Documents": "application/x-mspowerpoint", "LIC": "false", "GIC": "true", "All": "false" },
//     { "UID": 45, "Name": "Isabeau Heatly", "Mobile": "+7 169 336 0802", "Email": "iheatly18@thetimes.co.uk", "Address": "Apt 340", "Documents": "application/vnd.ms-powerpoint", "LIC": "false", "GIC": "true", "All": "true" },
//     { "UID": 46, "Name": "Reamonn Skinley", "Mobile": "+385 815 858 8099", "Email": "rskinley19@whitehouse.gov", "Address": "PO Box 11090", "Documents": "application/msword", "LIC": "true", "GIC": "false", "All": "false" },
//     { "UID": 47, "Name": "Troy Klauber", "Mobile": "+62 778 401 9475", "Email": "tklauber1a@unicef.org", "Address": "Room 766", "Documents": "application/msword", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 48, "Name": "Svend Vyse", "Mobile": "+7 967 139 8562", "Email": "svyse1b@ca.gov", "Address": "Room 627", "Documents": "text/plain", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 49, "Name": "Beatrice Hogbin", "Mobile": "+86 379 890 0931", "Email": "bhogbin1c@vimeo.com", "Address": "17th Floor", "Documents": "image/x-tiff", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 50, "Name": "Dietrich Solomon", "Mobile": "+506 443 522 9959", "Email": "dsolomon1d@accuweather.com", "Address": "7th Floor", "Documents": "application/x-troff-msvideo", "LIC": "false", "GIC": "true", "All": "true" },
//     { "UID": 51, "Name": "Orv Stallwood", "Mobile": "+48 483 871 4301", "Email": "ostallwood1e@wikia.com", "Address": "Apt 1556", "Documents": "application/excel", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 52, "Name": "Coleen Jery", "Mobile": "+420 783 157 8028", "Email": "cjery1f@google.nl", "Address": "PO Box 93704", "Documents": "video/x-msvideo", "LIC": "false", "GIC": "false", "All": "false" },
//     { "UID": 53, "Name": "Jennilee Gowler", "Mobile": "+7 592 450 5564", "Email": "jgowler1g@ning.com", "Address": "Suite 65", "Documents": "video/avi", "LIC": "false", "GIC": "true", "All": "false" },
//     { "UID": 54, "Name": "Maurine Durkin", "Mobile": "+30 134 117 9632", "Email": "mdurkin1h@acquirethisname.com", "Address": "Room 1491", "Documents": "image/pjpeg", "LIC": "false", "GIC": "true", "All": "false" },
//     { "UID": 55, "Name": "Suzann Downing", "Mobile": "+372 485 501 9784", "Email": "sdowning1i@digg.com", "Address": "4th Floor", "Documents": "application/vnd.ms-powerpoint", "LIC": "false", "GIC": "false", "All": "false" },
//     { "UID": 56, "Name": "Riki Mathet", "Mobile": "+234 400 216 8594", "Email": "rmathet1j@springer.com", "Address": "Apt 1745", "Documents": "application/x-msexcel", "LIC": "true", "GIC": "false", "All": "true" },
//     { "UID": 57, "Name": "Kynthia Helleker", "Mobile": "+33 582 975 4511", "Email": "khelleker1k@stanford.edu", "Address": "Apt 1248", "Documents": "application/pdf", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 58, "Name": "Prudy Fruser", "Mobile": "+86 843 504 4602", "Email": "pfruser1l@sun.com", "Address": "5th Floor", "Documents": "audio/x-mpeg-3", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 59, "Name": "Willette Stears", "Mobile": "+82 228 577 1136", "Email": "wstears1m@freewebs.com", "Address": "Room 616", "Documents": "application/pdf", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 60, "Name": "Cecil Took", "Mobile": "+7 278 555 3480", "Email": "ctook1n@vistaprint.com", "Address": "Suite 34", "Documents": "video/msvideo", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 61, "Name": "Mohammed Reddecliffe", "Mobile": "+62 115 948 5538", "Email": "mreddecliffe1o@about.me", "Address": "1st Floor", "Documents": "video/mpeg", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 62, "Name": "Immanuel Scutts", "Mobile": "+380 315 199 7151", "Email": "iscutts1p@loc.gov", "Address": "Room 656", "Documents": "image/gif", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 63, "Name": "Luciano Davidou", "Mobile": "+86 370 580 3376", "Email": "ldavidou1q@cpanel.net", "Address": "Apt 1123", "Documents": "application/pdf", "LIC": "true", "GIC": "false", "All": "true" },
//     { "UID": 64, "Name": "Tamarra Gymlett", "Mobile": "+48 934 624 6235", "Email": "tgymlett1r@whitehouse.gov", "Address": "PO Box 3369", "Documents": "application/pdf", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 65, "Name": "Franklyn Stapylton", "Mobile": "+86 809 947 8532", "Email": "fstapylton1s@unicef.org", "Address": "Room 1816", "Documents": "image/x-tiff", "LIC": "true", "GIC": "false", "All": "true" },
//     { "UID": 66, "Name": "Simone Battey", "Mobile": "+86 363 804 4631", "Email": "sbattey1t@goo.ne.jp", "Address": "PO Box 21980", "Documents": "application/mspowerpoint", "LIC": "false", "GIC": "true", "All": "true" },
//     { "UID": 67, "Name": "Ingemar St. Quintin", "Mobile": "+502 674 301 8088", "Email": "ist1u@barnesandnoble.com", "Address": "Suite 22", "Documents": "image/gif", "LIC": "false", "GIC": "true", "All": "true" },
//     { "UID": 68, "Name": "Dulciana O'Sirin", "Mobile": "+86 487 693 0312", "Email": "dosirin1v@amazon.de", "Address": "PO Box 53709", "Documents": "image/png", "LIC": "true", "GIC": "false", "All": "true" },
//     { "UID": 69, "Name": "Cinderella Jouanny", "Mobile": "+33 115 578 7372", "Email": "cjouanny1w@thetimes.co.uk", "Address": "13th Floor", "Documents": "video/quicktime", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 70, "Name": "Randee Swanborough", "Mobile": "+86 690 430 9857", "Email": "rswanborough1x@discuz.net", "Address": "Room 688", "Documents": "application/x-mspowerpoint", "LIC": "true", "GIC": "false", "All": "false" },
//     { "UID": 71, "Name": "Odella Whenman", "Mobile": "+30 121 515 4072", "Email": "owhenman1y@ed.gov", "Address": "16th Floor", "Documents": "application/msword", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 72, "Name": "Annmarie Lewson", "Mobile": "+54 503 933 4312", "Email": "alewson1z@woothemes.com", "Address": "PO Box 20391", "Documents": "application/vnd.ms-powerpoint", "LIC": "true", "GIC": "false", "All": "false" },
//     { "UID": 73, "Name": "Larisa Bastie", "Mobile": "+33 916 433 2884", "Email": "lbastie20@army.mil", "Address": "PO Box 87388", "Documents": "application/pdf", "LIC": "true", "GIC": "false", "All": "true" },
//     { "UID": 74, "Name": "Israel Vivash", "Mobile": "+351 935 300 8393", "Email": "ivivash21@wunderground.com", "Address": "14th Floor", "Documents": "application/pdf", "LIC": "false", "GIC": "true", "All": "true" },
//     { "UID": 75, "Name": "Gareth Issac", "Mobile": "+54 307 604 3756", "Email": "gissac22@devhub.com", "Address": "Apt 1257", "Documents": "video/quicktime", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 76, "Name": "Agosto Waterstone", "Mobile": "+86 484 139 9249", "Email": "awaterstone23@utexas.edu", "Address": "PO Box 86793", "Documents": "image/png", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 77, "Name": "Tami Kabsch", "Mobile": "+351 139 151 5749", "Email": "tkabsch24@arizona.edu", "Address": "5th Floor", "Documents": "video/mpeg", "LIC": "true", "GIC": "false", "All": "false" },
//     { "UID": 78, "Name": "Ivett Foote", "Mobile": "+7 920 551 9156", "Email": "ifoote25@i2i.jp", "Address": "Apt 968", "Documents": "image/png", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 79, "Name": "Marion Dinsell", "Mobile": "+355 744 402 3517", "Email": "mdinsell26@jigsy.com", "Address": "Room 1516", "Documents": "application/mspowerpoint", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 80, "Name": "Scotty Records", "Mobile": "+7 243 118 1462", "Email": "srecords27@epa.gov", "Address": "Suite 62", "Documents": "application/x-msexcel", "LIC": "false", "GIC": "true", "All": "false" },
//     { "UID": 81, "Name": "Walton Cuttler", "Mobile": "+1 406 129 2314", "Email": "wcuttler28@networksolutions.com", "Address": "Apt 420", "Documents": "application/x-troff-msvideo", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 82, "Name": "Rudy Carver", "Mobile": "+62 914 700 7487", "Email": "rcarver29@google.nl", "Address": "Room 1803", "Documents": "application/x-mspowerpoint", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 83, "Name": "Gardiner Surplice", "Mobile": "+245 600 601 7018", "Email": "gsurplice2a@cbsnews.com", "Address": "Suite 80", "Documents": "text/plain", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 84, "Name": "Evey Buckby", "Mobile": "+54 808 824 2435", "Email": "ebuckby2b@de.vu", "Address": "Apt 1984", "Documents": "video/avi", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 85, "Name": "Fallon Glentz", "Mobile": "+86 463 360 3636", "Email": "fglentz2c@fastcompany.com", "Address": "PO Box 31775", "Documents": "video/avi", "LIC": "false", "GIC": "false", "All": "false" },
//     { "UID": 86, "Name": "Tamas Wards", "Mobile": "+256 342 842 8015", "Email": "twards2d@joomla.org", "Address": "Room 1394", "Documents": "video/x-mpeg", "LIC": "true", "GIC": "false", "All": "true" },
//     { "UID": 87, "Name": "Olwen Domke", "Mobile": "+86 759 958 1781", "Email": "odomke2e@dedecms.com", "Address": "17th Floor", "Documents": "image/gif", "LIC": "false", "GIC": "true", "All": "false" },
//     { "UID": 88, "Name": "Meggie Mirams", "Mobile": "+967 754 123 0583", "Email": "mmirams2f@i2i.jp", "Address": "Suite 90", "Documents": "video/x-msvideo", "LIC": "true", "GIC": "false", "All": "true" },
//     { "UID": 89, "Name": "Michale Risdale", "Mobile": "+356 298 472 8442", "Email": "mrisdale2g@weebly.com", "Address": "Apt 1743", "Documents": "image/tiff", "LIC": "false", "GIC": "false", "All": "true" },
//     { "UID": 90, "Name": "Waly Tooting", "Mobile": "+216 810 623 1695", "Email": "wtooting2h@va.gov", "Address": "PO Box 47093", "Documents": "image/png", "LIC": "true", "GIC": "false", "All": "false" },
//     { "UID": 91, "Name": "Pace Jeannesson", "Mobile": "+1 562 705 9620", "Email": "pjeannesson2i@studiopress.com", "Address": "Apt 696", "Documents": "application/powerpoint", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 92, "Name": "Fredelia Cosins", "Mobile": "+63 401 211 4329", "Email": "fcosins2j@t.co", "Address": "Room 971", "Documents": "image/jpeg", "LIC": "true", "GIC": "false", "All": "false" },
//     { "UID": 93, "Name": "Jeana MacIver", "Mobile": "+46 153 941 3563", "Email": "jmaciver2k@bloglines.com", "Address": "Room 1723", "Documents": "video/mpeg", "LIC": "false", "GIC": "false", "All": "false" },
//     { "UID": 94, "Name": "Egor Pettifer", "Mobile": "+7 916 807 3700", "Email": "epettifer2l@amazon.co.uk", "Address": "14th Floor", "Documents": "application/excel", "LIC": "false", "GIC": "false", "All": "false" },
//     { "UID": 95, "Name": "Madalena Trow", "Mobile": "+63 451 320 6480", "Email": "mtrow2m@wired.com", "Address": "Room 1818", "Documents": "video/x-mpeg", "LIC": "true", "GIC": "false", "All": "false" },
//     { "UID": 96, "Name": "Storm Foddy", "Mobile": "+1 707 185 7715", "Email": "sfoddy2n@symantec.com", "Address": "16th Floor", "Documents": "application/powerpoint", "LIC": "true", "GIC": "true", "All": "false" },
//     { "UID": 97, "Name": "Meryl Pavier", "Mobile": "+86 891 556 0149", "Email": "mpavier2o@unblog.fr", "Address": "PO Box 47360", "Documents": "application/msword", "LIC": "true", "GIC": "true", "All": "true" },
//     { "UID": 98, "Name": "Anselm Ellerington", "Mobile": "+86 773 252 6261", "Email": "aellerington2p@howstuffworks.com", "Address": "Room 1491", "Documents": "video/x-msvideo", "LIC": "true", "GIC": "false", "All": "true" },
//     { "UID": 99, "Name": "Evangelin Sabate", "Mobile": "+86 489 389 7809", "Email": "esabate2q@examiner.com", "Address": "Room 1336", "Documents": "image/tiff", "LIC": "false", "GIC": "true", "All": "true" },
//     { "UID": 100, "Name": "Urbano Spurrett", "Mobile": "+7 300 297 0588", "Email": "uspurrett2r@weibo.com", "Address": "Room 871", "Documents": "video/quicktime", "LIC": "true", "GIC": "false", "All": "true" }]

//     const [value, setValue] = useState('');
//     const [dataSource, setDataSource] = useState(dummyData)
//     const [tableFilter, settableFilter] = useState([])

//     const filterData = (e) => {
//         if (e.target.value != "") {
//             setValue(e.target.value);
//             const filterTable = dataSource.filter(o => Object.keys(o).some(k =>
//                 String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
//             ));
//             settableFilter([...filterTable])
//         } else {
//             setValue(e.target.value);
//             setDataSource([...dataSource])
//         }
//     }

//     return (
//         <>
//             <Navbar />
//             <Box height={40} />
//             <Box sx={{ display: 'flex' }}>
//                 {/* new sidebar start */}
//                 <Sidebar />
//                 <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//                     <h1>All Customers</h1>
//                     <table>
//                         <tr>
//                             <td>
//                                 <input style={{ width: '40vh' }} type="text" value={value} placeholder='Search' onChange={filterData} />
//                             </td>

//                         </tr>
//                     </table>
//                     <br />
//                     <table style={{ width: '90%' }} class="table table-success table-striped">
//                         <thead>
//                             <tr>
//                                 <th scope="col">UID</th>
//                                 <th scope="col">Name</th>
//                                 <th scope="col">Mobile No.</th>
//                                 <th scope="col">Email</th>
//                                 <th scope="col">Address</th>
//                                 <th scope="col">Documents</th>
//                                 <th scope="col">LIC</th>
//                                 <th scope="col">GIC</th>
//                                 <th scope="col">All</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {value.length > 0 ? tableFilter.map((data) => {
//                                 return (
//                                     <tr>
//                                         <td scope="col">{data.UID}</td>
//                                         <td scope="col" onClick={() => {
//                                             navigate("/profile")
//                                         }}>{data.Name}</td>
//                                         <td scope="col">{data.Mobile}</td>
//                                         <td scope="col">{data.Email}</td>
//                                         <td scope="col">{data.Address}</td>
//                                         <td scope="col">{data.Documents}</td>
//                                         <td scope="col">{data.LIC}</td>
//                                         <td scope="col">{data.GIC}</td>
//                                         <td scope="col">{data.All}</td>
//                                     </tr>
//                                 )
//                             })
//                                 :
//                                 dataSource.map((data) => {
//                                     return (
//                                         <tr>
//                                             <td scope="col">{data.UID}</td>
//                                             <td scope="col" onClick={() => {
//                                                 navigate("/profile")
//                                             }}>{data.Name}</td>
//                                             <td scope="col">{data.Mobile}</td>
//                                             <td scope="col">{data.Email}</td>
//                                             <td scope="col">{data.Address}</td>
//                                             <td scope="col">{data.Documents}</td>
//                                             <td scope="col">{data.LIC}</td>
//                                             <td scope="col">{data.GIC}</td>
//                                             <td scope="col">{data.All}</td>
//                                         </tr>
//                                     )
//                                 })
//                             }
//                         </tbody>
//                     </table>
//                 </Box>
//             </Box>
//         </>
//     )
// }

// export default Allcustomers