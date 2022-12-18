import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const EditPet = (props) => {

    const {id} = useParams();
    const [pet, setPet] = useState({});
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills1, setSkills1] = useState("");
    const [skills2, setSkills2] = useState("");
    const [skills3, setSkills3] = useState("");
    const navigate = useNavigate();
    const [errors,setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((response) => {
            console.log(response);
            console.log(response.data);
            setPet(response.data);
            setName(response.data.name);
            setType(response.data.type);
            setDescription(response.data.description);
            setSkills1(response.data.skills1);
            setSkills2(response.data.skills2);
            setSkills3(response.data.skills3);

        })
        .catch((err) => {
            console.log(err.response)
        })
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/pets/${id}/edit`, {
            name,
            type,
            description,
            skills1,
            skills2,
            skills3
        })
        .then((response) => {
            console.log(response);
            console.log(response.data);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors)
            setErrors(err.response.data.err.errors)
        });
    }

    return (
        <div>
            <h1>
                Pet Shelter
            </h1>
            <h2>
                Edit {pet.name}
            </h2>
            <p><Link to={`/`}>back to home</Link></p>
            <form onSubmit={onSubmitHandler}>
                <div className="container">
                    <div className="form-fields">
                        <label>Pet Name:</label>
                        <input type="text" value={name} name="name" onChange={e => setName(e.target.value)} />
                        {errors.name ? <p>{errors.name.message}</p>:null}
                    </div>

                    <div className="form-fields">
                        <label>Pet Type:</label>
                        <input type="text" value={type} name="type" onChange={e => setType(e.target.value)} />
                        {errors.type ? <p>{errors.type.message}</p>:null}
                    </div>

                    <div className="form-fields">
                        <label>Description:</label>
                        <input type="text" value={description} name="description" onChange={e => setDescription(e.target.value)} />
                        {errors.description ? <p>{errors.description.message}</p>:null}
                    </div>
                    <p>Skills:</p>
                    <div className="form-fields">
                        <label>Skill 1:</label>
                        <input type="text" value={skills1} name="skills1" onChange={e => setSkills1(e.target.value)} />
                        {errors.skills1 ? <p>{errors.skills1.message}</p>:null}
                    </div>

                    <div className="form-fields">
                        <label>Skill 2:</label>
                        <input type="text" value={skills2} name="skills2" onChange={e => setSkills2(e.target.value)} />
                        {errors.skills2 ? <p>{errors.skills2.message}</p>:null}
                    </div>

                    <div className="form-fields">
                        <label>Skill 3:</label>
                        <input type="text" value={skills3} name="skills3" onChange={e => setSkills3(e.target.value)} />
                        {errors.skills3 ? <p>{errors.skills3.message}</p>:null}
                    </div>
                    <button className="btn btn-primary" type='submit'>Edit {pet.name}</button>
                </div>
            </form>
        </div>
    )
}


export default EditPet;