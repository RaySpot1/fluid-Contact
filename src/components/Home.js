import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

// Home function returns all available contacts in the app
const Home = () => {

    // useSelector extracts data from reducers(store)
    const contacts = useSelector(state=>state);
    let history = useHistory()

    const dispatch = useDispatch();



    // deleteContact function deletes contacts by id
    const deleteContact = (id)=>{
        dispatch({type:"DELETE_CONCTACT", payload:id});
        toast.success("Contact deleted successfully!")
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 my-5 text-left">
                <Link to="/add" className="btn btn-outline-dark">
                    Add Contact
                </Link>
            </div>
            <div className="col-md-10 mx-auto">
                <table className="table table-hover">
                    <tbody>
                        {
                            contacts.map((contact, id)=>(
                                <tr key={id}>   
                                    <td><img src="https://robohash.org/robot?set=set5" width={50} height={40}/></td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.number}</td>
                                    <td>
                                        <button onClick={()=>history.push(`/view/${contact.id}`)} className="btn btn-small 
                                        btn-primary mr-2">View</button> 
                                        {" "}        
                                        <Link to={`/edit/${contact.id}`} className="btn btn-small 
                                        btn-primary mr-2">Edit</Link>
                                        {" "}
                                        <button type="button" onClick={()=> deleteContact(contact.id)} className="btn btn-small btn-danger">
                                              Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Home