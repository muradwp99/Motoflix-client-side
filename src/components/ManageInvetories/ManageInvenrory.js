import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal/lib/components/Modal';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const ManageInvenrory = () => {
    const [user] = useAuthState(auth)
    const [inventories, setInventories] = useState([])

    useEffect(() => {
        axios.get('https://limitless-springs-08702.herokuapp.com/inventories')
            .then(response => setInventories(response.data))

    }, [inventories])

    const handleDelete = async id => {
        await axios.delete(`https://limitless-springs-08702.herokuapp.com/inventory/${id}`)
        toast('Item deleted')

        // i will do this after assignment



        // if (deleteUserEmail === user.email) {

        // else {
        //     toast('You cant delete this. Because you did not add this item. PLease add first')
        // }
    }

    const navigate = useNavigate()
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [saved, setSaved] = useState(false)
    const [id, setId] = useState('')
    const [deleteUserEmail, setDeleteUserEmail] = useState('')
    if (saved) {
        handleDelete(id, deleteUserEmail)
        setSaved(false)

    }


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='row  justify-content-center'>


            <div className='container '>
                <div className='text-center mt-3'>
                    <button onClick={() => navigate("/add-inventory-item")} className='btn about-btn'>Add New item</button>
                </div>
                <table className="table table-striped w-50 container">
                    <thead style={{ border: '1px solid #f9b300!important' }}>
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Quantity</th>

                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventories?.map(product => <tr key={product._id}>

                                <td style={{ fontSize: "18px", fontWeight: 500 }}>{product.name}</td>
                                <td><img className='img-fluid' src={product.img} alt="" /></td>
                                <td>{product.quantity}</td>


                                <td> <Button variant="danger" onClick={() => {

                                    openModal()
                                    setId(product._id)
                                    setDeleteUserEmail(product?.email)

                                }}>
                                    Delete
                                </Button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>


            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Alert</h2>
                <div>Are You sure You want to delete</div>
                <div className='d-flex justify-content-around'>
                    <button className='mt-4 btn btn-success' onClick={closeModal}>close</button>
                    <button className='mt-4 btn btn-danger' onClick={() => {
                        closeModal()
                        setSaved(true)
                    }}>Delete</button>
                </div>



            </Modal>

        </div>
    );
};

export default ManageInvenrory;