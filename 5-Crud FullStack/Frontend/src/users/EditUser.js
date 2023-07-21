import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate,Link, useParams } from 'react-router-dom';

function EditUser() {

    let navigate = useNavigate();

    const {id}=useParams()


    const [user,setUsers]= useState({
        name:"",
        username:"",
        email:""
    });

    const{name,username,email}=user;

    const onInputChange=(e) =>{
        setUsers({...user,[e.target.name]:e.target.value})
    }

    useEffect(() =>{
        loadUser()
    }, []);

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user);
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUsers(result.data)
    }
    
    const deleteUser= async (id) =>{
        await axios.delete(`http://localhost:8080/user/`)
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Editar usuario</h2>
                 <form onSubmit={(e)=> onSubmit(e)}>
                
                <div className='mb-3'>
                    <label htmlFor="Name" className="form-label">
                        Nombre:
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="Username" className="form-label">
                        Apellido:
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder="Ingrese su apellido"
                    name="username"
                    value={username}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="Email" className="form-label">
                        Email:
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder="Ingrese su correo electronico"
                    name="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                    Enviar
                </button>

                <Link  className="btn btn-outline-danger mx-2" to="/">
                    Cancelar
                </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditUser