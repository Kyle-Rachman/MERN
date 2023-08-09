import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Home = (props) => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState("");
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }, [products]);
    const createProduct = productParam => {
        axios.post('http://localhost:8000/api/products/new', productParam)
            .then(res => {
                if (res.data.errors) {
                    let errorString = ""
                    for (var key in res.data.errors) {
                        errorString += " " + JSON.stringify(res.data.errors[key].message).replace(/['"]+/g, '')
                    }
                    setErrors(errorString)
                } else if (typeof res.data == "string") {
                    setErrors("This product already exists!")
                } else {
                    setErrors("");
                    setProducts([...products, res.data])
                };
            })
            .catch(err => console.log(err));
    }
    const removeFromDOM = productId => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => setProducts(products.filter(product => product._id != productId)))
            .catch(err => console.log(err));
    };
    return (
        <>
            <h2>Product Manager</h2>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <div className="errors">
                <p>{errors}</p>
            </div>
            <hr/>
            <ProductList products={products} removeFromDOM={removeFromDOM}/>
        </>
    );
};

export default Home;