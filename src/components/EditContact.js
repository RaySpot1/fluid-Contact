import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from "react-toastify";

// The editContact function allows User edit and update existing contacts
const EditContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [company, setCompany] = useState("");
    const [group, setGroup] = useState("");

    const {id} = useParams()

    const contacts = useSelector((state)=>state);
    const dispatch = useDispatch();

    const history = useHistory();

    const currentContact = contacts.find((contact)=> contact.id === parseInt(id));

    useEffect(()=> {
        if(currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
            setCompany(currentContact.company);
            setGroup(currentContact.group);
        }
    }, [currentContact]);

    const handleSubmit = (e)=> {
        e.preventDefault();

        const checkEmail = contacts.find(
            (contact) => contact.id !== parseInt(id) && contact.email === email
        );
        const checkNumber = contacts.find(
            (contact) => contact.id !== parseInt(id) && contact.number === parseInt(number)
        );

        if(!email || !number || !name){
            return toast.warning("Please fill in Email, Number and Name!")
        }

        if(checkEmail){
            return toast.error("This email already Exist!")
        }
        if(checkNumber){
            return toast.error("This number already Exist!")
        }

        const data = {
            id: parseInt(id),
            name,
            email,
            number,
            company,
            group
            
        }
        dispatch({type: "UPDATE_CONTACT", payload: data});
        toast.success("Contact updated Successfully!!");
        history.push("/");
    };




  return (
    <div className="container">
        {currentContact? (
            <>
                <h1 className="display-3 my-5 text-center">Edit Contact</h1>
                <div className="row">
                    <div className="col-md-6 shadow mx-auto p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text" 
                                    placeholder="Name" 
                                    className="form-control"
                                    value={name} 
                                    onChange={e=> setName(e.target.value)}
                                />
                            </div>
                            <br/>
        
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="form-control"
                                    value={email} 
                                    onChange={e=> setEmail(e.target.value)}
                                />
                            </div>
                            <br/>
        
                            <div className="form-group">
                                <input 
                                    type="number" 
                                    placeholder="Phone number" 
                                    className="form-control"
                                    value={number} 
                                    onChange={e=> setNumber(e.target.value)}
                                />
                            </div>
                            <br/>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    placeholder="company" 
                                    className="form-control"
                                    value={company} 
                                    onChange={e=> setCompany(e.target.value)}
                                />
                            </div>
                            <br/>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    placeholder="Group" 
                                    className="form-control"
                                    value={group} 
                                    onChange={e=> setGroup(e.target.value)}
                                />
                            </div>
                            <br/>
        
                            <div className="form-group">
                                <input 
                                    type="submit" 
                                    value="Update Contact" 
                                    className="btn btn-dark"
                                />
                                {' '}
                                <Link to="/" className="btn btn-danger ml-3">
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        ):(
            <h1 className="display-3 my-5 text-center">
                Contact with id {id} does not Exist!!!
            </h1>
        )}
    </div>
  )
}

export default EditContact