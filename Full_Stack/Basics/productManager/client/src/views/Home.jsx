import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Home = (props) => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }, [products]);
    const createProduct = productParam => {
        axios.post('http://localhost:8000/api/products/new', productParam)
            .then(res => {
                    setErrors([]);
                    setProducts([...products, res.data]);
            })
            .catch(err => {
                if (typeof err.response.data == "string") {
                    setErrors(["This product already exists!"]);
                } else{
                    let errorArr = []
                    for (var key in err.response.data.errors) {
                        errorArr.push(err.response.data.errors[key].message);
                    }
                    setErrors(errorArr);
                };
            });
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
                {errors.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
            </div>
            <hr/>
            <ProductList products={products} removeFromDOM={removeFromDOM}/>
        </>
    );
};

export default Home;