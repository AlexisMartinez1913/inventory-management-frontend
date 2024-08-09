import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';

function AddProduct() {
    //var de react router para volver al inicio
    let navigation = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        stock:""
    })

    const{name, description, category, price, stock} = product;

    const onInputChange = (e) => {
        //spread operator.. expandir atributos
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const urlBase = "http://localhost:8081/fi-app/products";
            await axios.post(urlBase, product);
            navigation('/');
        } catch (error) {
            console.error("There was an error adding the product!", error);
        }
    };


    return (
        <div className='container'>
            <div className='row justify-content-center' style={{ marginTop: "30px" }}>
                <div className='col-md-8'>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <h3>Add Product</h3>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={(e) => onSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => onInputChange(e)} placeholder="Enter name" required />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" value={description} onChange={(e) => onInputChange(e)} id="description" name="description" placeholder="Enter description" required />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">category</label>
                                    <input type="text" className="form-control" value={category} onChange={(e) => onInputChange(e)} id="category" name="category" placeholder="Enter category" required />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input type="number" className="form-control" value={price} onChange={(e) => onInputChange(e)} id="price" name="price" placeholder="Enter price" required />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="stock" className="form-label">Stock</label>
                                    <input type="number" className="form-control" value={stock} onChange={(e) => onInputChange(e)} id="stock" name="stock" placeholder="Enter stock" required />

                                </div>
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-success btn-sm me-3">Add</button>
                                    <a href="/" className='btn btn-danger btn-sm'>Back</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AddProduct;
