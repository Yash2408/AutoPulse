import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Button } from 'rsuite';
import { Input, InputGroup, Col } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { Loader, Table } from 'rsuite';
import { Modal, Placeholder } from 'rsuite';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsPencilFill } from 'react-icons/bs'
import { TagPicker } from 'rsuite';
import Box from '@mui/material/Box';
import Navbar from '../../Navbar/Navbar'

const { Column, HeaderCell, Cell } = Table;

const CustomInputGroupWidthButton = ({ placeholder, ...props }) => (
    <InputGroup {...props} inside>
        <Input type='text' size='medium' placeholder={placeholder} />
        <InputGroup.Button>
            <SearchIcon />
        </InputGroup.Button>
    </InputGroup>
);

const FixedLoader = () => (
    <Loader
        content="Loading..."
        style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '0',
            background: '#f5f5f5',
            width: '100%',
            padding: '4px 0'
        }}
    />
);

const fetchData = (start, length) => {
    return Array.from({ length }).map((_, index) => {
        return {
            index: 1,
            texts: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        };
    });
};

const Sentintimations = () => {

    const [data, setData] = React.useState(fetchData(0, 50));
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const [settingSize, setSettingSize] = React.useState();
    const [settingOpen, setSettingOpen] = React.useState(false);

    const handleOpen = value => {
        setSize(value);
        setOpen(true);
    };
    const handleSetting = value => {
        setSettingSize(value);
        setSettingOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleSettingClose = () => setSettingOpen(false);

    const form = useRef()

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setData([...data, ...fetchData(data.length, 50)]);
            setLoading(false);
        }, 1000);
    };

    const tableHeight = 600;

    const handleScroll = (x, y) => {
        const contextHeight = data.length * 46;
        const top = Math.abs(y);

        if (contextHeight - top - tableHeight < 300) {
            loadMore();
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j5mjc9t', 'template_o33gu6g', form.current, '2ek511PURvnJxfOkk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };  

    const data1 = ['CYBER', 'Health', 'MOTOR', 'SME'].map(
        item => ({
            label: item,
            value: item,
            role: Math.random() > 0.5 ? 'Owner' : 'Guest'
        })
    );

    return (
         <>
                <Navbar />
                <Box height={40} />
                <Box sx={{ display: 'flex' }}>
                    {/* new sidebar start */}
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <h1>Dashboard</h1>
                <table style={{ marginTop: '10px' }}>
                    <tr>
                        <td>
                            <Col style={{ width: '140vh' }}>
                                <CustomInputGroupWidthButton size="lg" placeholder="Search" />
                            </Col>

                        </td>
                        &emsp;&emsp;
                        <td>
                            <Button onClick={() => handleSetting('xs')} style={{ backgroundColor: '#2090ee', color: 'black', width: '25vh' }} variant='contained' size='lg'>Settings</Button>
                            <Modal size={size} open={settingOpen} onClose={handleSettingClose} >
                                <Modal.Header>
                                    <Modal.Title style={{ backgroundColor: '#eeeeee' }}>Setting</Modal.Title>
                                </Modal.Header>
                                <hr />
                                <form>
                                    <Modal.Body>
                                        <div>
                                            <TagPicker
                                                creatable
                                                data={data1}
                                                style={{ width: 400 }}
                                                menuStyle={{ width: 400 }}
                                                onCreate={(value, item) => {
                                                    console.log(value, item);
                                                }}
                                            />
                                            <hr/>
                                            <textarea rows={10} cols={80}/>
                                        </div>
                                        
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button appearance='primary' type="submit">Send</Button>
                                    </Modal.Footer>
                                </form>
                            </Modal>
                        </td>
                    </tr>
                </table>
                <div style={{ position: 'relative' }}>
                    <Table
                        virtualized
                        shouldUpdateScroll={false}
                        height={tableHeight}
                        data={data}
                        onScroll={handleScroll}
                        style={{ width: '95%' }}
                    >
                        <Column width={200} flexGrow={1}>
                            <HeaderCell></HeaderCell>
                            <Cell dataKey="texts" />
                        </Column>
                        <Column width={70}>
                            <HeaderCell></HeaderCell>
                            <Cell dataKey="index" />
                        </Column>
                    </Table>
                    {loading && <FixedLoader />}
                    <Button size="lg" style={{ marginLeft: '77%', width: '25vh' }} onClick={() => handleOpen('sm')}> 
                        <BsPencilFill />
                        &emsp;
                        Compose
                    </Button>
                    <Modal size={size} open={open} onClose={handleClose} style={{ marginLeft: '17vh', marginTop: '15vh' }}>
                        <Modal.Header>
                            <Modal.Title style={{ backgroundColor: '#eeeeee' }}>New Message</Modal.Title>
                        </Modal.Header>
                        <hr />
                        <form ref={form} onSubmit={sendEmail}>
                            <Modal.Body>
                                <p>To</p>
                                <input type="email" name="user_email" style={{ width: '73vh',height:'5vh' }} />
                                <br />
                                <p>Subject</p>
                                <input type="text" name="subject" style={{ width: '73vh', height: '5vh' }} />
                                <br /><br />
                                <textarea style={{ height: '20vh', width: '73vh' }} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button appearance='primary' type="submit">Send</Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </div>
            </Box>
            </Box>
            </>
    )
}

export default Sentintimations