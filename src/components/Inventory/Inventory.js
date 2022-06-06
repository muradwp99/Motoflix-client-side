import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Inventory/Inventory.css'


const Inventory = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://limitless-springs-08702.herokuapp.com/inventories')
            .then(response => setProducts(response.data))
    }, [])
    const sliceProducts = products.slice(0, 6)

    return (
        <div className='inventory-section'>

            <div id="inventory">
                <h1 className='text-center pt-5 mt-4 mb-4'>Latest Collection</h1>
                <div className="inventory-container">
                    {
                        sliceProducts.map(product => <div key={product._id} className='justify-content-center'>
                            <div className="" style={{ width: " 18rem" }}>
                                <div className="img-container">
                                    <img src={product.img} className="img-inventory" alt="..." />
                                    <div className="middle">
                                        <button onClick={() => navigate(`/manage-inventories/${product._id}`)} className="text">Manage Item</button>
                                    </div>
                                </div>
                                <div className="inventory-details">
                                    <div className='below-line'></div>
                                    <div className="upper-details">
                                        <h5 className="product-title">{product.name}</h5>
                                        <p className="description" >{product.description.slice(0, 80)}<button data-bs-toggle="tooltip" data-bs-placement="top" className='btn dotbtn' title={product.description}>...</button></p>
                                        <div className="update">
                                            <p>Price : ${product.price}</p>
                                            <button onClick={() => navigate(`/inventory/${product._id}`)} className="btn">Update</button>
                                        </div>

                                    </div>
                                    <div className="stocks">
                                        <p>Quantity : {product.quantity}</p>
                                        <p className=''>Supplier : {product.supplier}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div >
        </div>
    );
};

export default Inventory;