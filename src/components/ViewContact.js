import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const ViewContact = () => {

    const contacts = useSelector((state) => state);
    const params = useParams()

   const {id} = params
    
  return (
      <React.Fragment>
        <section className="view-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-dark fw-bold"> View Contact</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="view-contact m-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img src="https://robohash.org/robot?set=set4" className="contact-img" alt=''/>
                    </div>
                    <div className="col-md-8">
                        <ul className="list-group-item list-group-action">
                            {
                                contacts.filter((contact)=> contact.id === +id).map(contact =>
                                    (<>
                                        <ul key={id}>
                                            <li className="list-group-item list-group-item-action">
                                                Name: {contact.name}
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Email: {contact.email}
                                            </li>
                                            <li className="list-group-item list-group-item-action">    
                                                Number: {contact.number}
                                            </li>
                                            <li className="list-group-item list-group-item-action">    
                                                Company: {contact.company}
                                            </li>
                                            <li className="list-group-item list-group-item-action">    
                                                Group: {contact.group}
                                            </li>
                                        </ul>
                                    </>) 
                                    
                            )}
                        </ul>
                    </div>
                    <div className="row p-3">
                        <div className="col">
                            <Link to="/" className="btn btn-dark">Back</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </React.Fragment>
  )
}

export default ViewContact