import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";

// The AddContact function returns an input form for Users to provide name, email and
// phone number for contact registration
const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [company, setCompany] = useState("");
    const [group, setGroup] = useState("");

    const contacts = useSelector((state) => state);
    // react-redux useDispatch sends data as payload to the reducers(store)
    const dispatch = useDispatch();

    // useHistory hook gives you access to the history instance to navigate the app
    const history = useHistory();

    // An handleSubmit function to ensure that users fill in all fields and also
    // check that the email and password provided doesn't match any in the existing contacts
    const handleSubmit = (e)=> {
        e.preventDefault();

        const checkEmail = contacts.find(
            (contact) => contact.email === email && contact
        );
        const checkNumber = contacts.find(
            (contact) => contact.number === parseInt(number)
        );

        if(!email || !number || !name){
            return toast.warning("Please fill in all fields!")
        }

        if(checkEmail){
            return toast.error("This email already Exist!")
        }
        if(checkNumber){
            return toast.error("This number already Exist!")
        }

        // creating a data object that contains contacts details
        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number,
            company,
            group

        }
        // dispatches the data object to the add new created contacts to the contact reducers(store)
        dispatch({type: "ADD_CONTACT", payload: data});
        // toasfiy is a notification package in react
        toast.success("Contact added Successfully!!");
        // pushes back to homepage after adding contact successfully
        history.push("/");
    };

  return (
    <div className="container">
        <h1 className="display-3 ms-right">Add Contact</h1>
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
                            value={email} onChange={e=> setEmail(e.target.value)}
                        />
                    </div>
                    <br/>

                    <div className="form-group">
                        <input 
                            type="number" 
                            placeholder="Phone number" 
                            className="form-control"
                            value={number} onChange={e=> setNumber(e.target.value)}
                        />
                    </div>
                    <br/>

                    <div className="form-group">
                        <input 
                            type="submit" 
                            value="Add Contact" 
                            className="btn btn-block btn-dark"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddContact