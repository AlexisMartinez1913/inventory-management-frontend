import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

function ProductList() {
    const urlBase = 'http://localhost:8081/fi-app/products';
    const [products, setProducts] = useState([]);

    //useEfect, se llama cuando se carga la pag
    useEffect(() => {
        getAllProducts();

    }, []);

    const getAllProducts = async () => {
        const result = await axios.get(urlBase);
        //console.log("Resultado de cargar empleados");
        //console.log(result.data);
        setProducts(result.data);
    }

    const deleteProduct = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete? ");
        if (confirmDelete) {
            await axios.delete(`${urlBase}/${id}`);
            getAllProducts();
        }
        
    }


    return (
        <div className='container'>
            <div className='container text-center' style={{ margin: "30px" }}>
                <h3>Inventory Management</h3>
            </div>
            <table className='table table-striped table-hover align-middle'>
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        //iteramos el array de productos
                        products.map((product, index) => (
                            <tr key={index}>
                                <th scope='row'>{product.id}</th>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td>
                                    <NumericFormat
                                        value={product.price}
                                        displayType={'text'}
                                        thousandSeparator=","
                                        prefix={'$'}
                                        decimalScale={2}
                                        fixedDecimalScale
                                    />


                                </td>
                                <td>{product.stock}</td>
                                <td className="text-center">
                                    <div>
                                        <Link to={`/edit/${product.id}`}
                                            className="btn btn-warning btn-sm me-3">Edit

                                        </Link>
                                        <button onClick={() => deleteProduct(product.id)}
                                            className='btn btn-danger btn-sm'>
                                            Delete</button>

                                    </div>

                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    )
}

export default ProductList
