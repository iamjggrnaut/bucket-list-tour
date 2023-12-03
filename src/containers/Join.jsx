import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Join = () => {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const reset = () => {
        setEmail()
        setPhone()
        setFirstName()
        setLastName()
        let elements = document.getElementsByTagName("input");
        for (let i = 0; i < elements.length; i++) {
            elements[i].value = "";
        }
    }

    return (
        <div id='join'>
            <div className="container join">
                <p className="mb-4 mt-3 text-center">
                    Embark on this extraordinary journey with us! Secure your spot now and become part of an adventure that promises unforgettable experiences and global exploration. Don't miss out—join the tour today and let the world be your canvas!
                </p>
                <div className="form-wrapper">
                    <div className="join-form">
                        <div className="join-col">
                            <div>
                                <label htmlFor="">First Name</label>
                                <input type="text" defaultValue={firstName} onChange={e => setFirstName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input type="text" defaultValue={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="join-col">
                            <div>
                                <label htmlFor="">Last Name</label>
                                <input type="text" defaultValue={lastName} onChange={e => setLastName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="">Phone</label>
                                <input type="text" defaultValue={phone} onChange={e => setPhone(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button type='button' className='prime-btn' style={{ border: 'none' }}
                            onClick={() => handleShow()}
                        >
                            JOIN
                        </button>
                    </div>

                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {
                            firstName && lastName && email && phone ?
                                <span style={{ color: 'black' }}>Congratulations!</span>
                                :
                                <span style={{ color: 'black' }}>Oops!</span>
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        firstName && lastName && email && phone ?
                            <p style={{ color: 'black' }}>
                                You have just joined our amazing tour! <br />
                                Our team will get in touch with you soon.
                            </p>
                            :
                            <p style={{ color: 'black' }}>
                                Please, fill in the form to join our tour.
                            </p>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { handleClose(); reset() }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Join