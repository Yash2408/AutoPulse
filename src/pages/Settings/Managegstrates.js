import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { FiEdit } from 'react-icons/fi'
import { Modal, Button } from 'rsuite';
import { Input } from '@mui/material';
import Box from '@mui/material/Box';
import Navbar from '../../Navbar/Navbar'

const Managegstrates = () => {

    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const [isEditing, setIsEditing] = useState(false);
    const [percentage, setPercentage] = useState(50);
    //for first premium
    const [editedFirstPercentage, setEditedFirstPercentage] = useState(50);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedFirstPercentage(percentage);
    };

    const handleDialogClose = () => {
        setIsEditing(false);
    };

    const handleInputChange = (event) => {
        setEditedFirstPercentage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPercentage(editedFirstPercentage);
        setIsEditing(false);
        handleEditClick();
        handleClose();
    };

    //first premium ends

    const handleOpen = value => {
        setSize(value);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const fp = "First Premium"
    const sp = "Second Premium"
    const tp = "Term Plan"

    return (
        <>
            <Navbar />
            <Box height={40} />
            <Box sx={{ display: 'flex' }}>
                {/* new sidebar start */}
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h2>Manage GST Rates</h2>
                <div style={{ width: '40%', Height: '500px', float: 'left' }}>
                    <div style={{
                        marginTop: '18vh',
                        width: '40%'
                    }}>
                        <div>
                            <h4>LIC Rates</h4>
                            <br />
                            <table>
                                <tr>
                                    {fp}
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="number"
                                            min="0"
                                            max="100"
                                            value={percentage}
                                            disabled
                                            style={{ height: '40px', width: '80px' }}
                                            placeholder='in %'
                                        />
                                    </td>
                                    <td>
                                        <Button size="sm" onClick={() => handleOpen('sm')} >
                                            <FiEdit style={{ height: '30px', width: '30px' }} />
                                        </Button>
                                        <Modal size={size} open={open} onClose={handleClose}>
                                            <Modal.Header>
                                                <Modal.Title>Would you like to change the GST rates of First Premium!</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div>
                                                    <label>Original Rate : </label>
                                                    <Input
                                                        type="number"
                                                        min="0"
                                                        max="100"
                                                        value={percentage}
                                                        disabled
                                                    />
                                                </div>
                                                <br/>
                                                <div>
                                                    <label>Edited Rate : </label>
                                                    <Input
                                                        type="number"
                                                        min="0"
                                                        max="100"
                                                        value={editedFirstPercentage}
                                                        onChange={handleInputChange}
                                                        step="0.01"
                                                    />
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button onClick={handleClose} appearance="subtle">
                                                    Cancel
                                                </Button>
                                                <Button onClick={handleSubmit} appearance="primary">
                                                    Yes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </td>
                                </tr>
                               </table>  
                </div>
            </div>
        </div>
        </Box>
        </Box>
        </>
    )
}

export default Managegstrates