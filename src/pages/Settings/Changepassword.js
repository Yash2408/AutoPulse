import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Form, ButtonToolbar, Button, Input } from 'rsuite';
import Box from '@mui/material/Box';
import Navbar from '../../Navbar/Navbar'

const Changepassword = () => {
    return (
        <>
            <Navbar />
            <Box height={40} />
            <Box sx={{ display: 'flex' }}>
                {/* new sidebar start */}
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h2>Change Password</h2>
                    <Form>
                        <Form.Group controlId="oldpassword">
                            <Form.ControlLabel style={{ color: 'black' }}>Old Password</Form.ControlLabel>
                            <Form.Control name="oldpassword" type="oldpassword" />
                        </Form.Group>
                        <Form.Group controlId="newpassword">
                            <Form.ControlLabel style={{ color: 'black' }}>New Password</Form.ControlLabel>
                            <Form.Control name="newpassword" type="newpassword" autoComplete="off" />
                        </Form.Group>
                        <Form.Group controlId="confirmnewpassword">
                            <Form.ControlLabel style={{ color: 'black' }}>Confirm New Password</Form.ControlLabel>
                            <Form.Control name="confirmnewpassword" type="confirmnewpassword" autoComplete="off" />
                            <a href='#'>
                                <Form.HelpText style={{ marginLeft: '28vh' }}>Forgot Password?</Form.HelpText>
                            </a>
                        </Form.Group>
                        <Form.Group>
                            <ButtonToolbar>
                                <Button style={{ width: "40vh" }} size="lg" appearance="primary">Change Password</Button>
                            </ButtonToolbar>
                        </Form.Group>
                    </Form>
                </Box>
            </Box>
        </>
    )
}

export default Changepassword