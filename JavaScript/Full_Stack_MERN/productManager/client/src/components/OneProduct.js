import React, {useEffect, useState} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OneProduct = (props) => {


    const {id} = useParams();
    const [OneProduct, setOneProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch((err) => console.log(err))
    }, [id]);

    const deleteFilter = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h2>{OneProduct.title}</h2>
            <p>Price: ${OneProduct.price}</p>
            <p>Description: {OneProduct.description}</p>
            <Link to={"/"}>Home</Link>
            <button onClick={deleteFilter}>Delete</button>
        </div>
    )
}

export default OneProduct;