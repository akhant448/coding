import {useEffect, useState} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OnePet =() =>{

    const {id} = useParams();
    const [onePet,setOnePet] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((response) => {       
            console.log(response);
            console.log(response.data);
            setOnePet(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        })
    }, [id]);

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then((response) => {
            console.log(response.data);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response);
        })
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h2>Details about: {onePet.name}</h2>
            <Link to={`/`}>back to home</Link>
            <p className="fields">Pet Type: {onePet.type} </p>
            <p className="fields">Description: {onePet.description}</p>
            <div>
                Skills: 
                <p className="fields">{onePet.skills1}</p>
                <p className="fields">{onePet.skills2}</p>
                <p className="fields">{onePet.skills3} </p>
            </div>
        <button className="btn btn-primary" onClick={deletePet}>Adopt {onePet.name}</button>
        </div>
    )
}

export default OnePet;