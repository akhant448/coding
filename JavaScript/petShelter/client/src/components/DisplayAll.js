import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAll = () =>{

    const [petList, setPetList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setPetList(res.data);
            })
            .catch((err) => console.log(err.res))
    }, []);

    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <h2>These pets are looking for a good time</h2>
                <p><Link to={`/pets/new`}>add a pet to the shelter</Link></p>
                <div className="container ">
                    <div className="col-15">
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {petList.map((pet, index)=>{
                                    return (
                                        <tr key= {pet._id}>
                                            <td>{pet.name}</td>
                                            <td>{pet.type}</td>
                                            <td><Link to={`/pets/${pet._id}`}>details</Link>|<Link to={`/pets/${pet._id}/edit`}>edit</Link></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayAll;