const SearchList = ({contacts}) => {
    return(
        <div className="container">
            <div className="col-md-5 mx-auto">
                <ul className="table table-hover">
                    {
                        contacts.map((contact, id)=>(
                            <li key={id}>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SearchList