const initialState = [
    {
        id:0,
        name:"John Doe",
        number: 1234567890,
        email: "jd@g.com",
        company: "microsoft",
        group: "friend"

    },
    {
        id:1,
        name:"test Name",
        number: 987654321,
        email: "test@g.com",
        company: "instagram",
        group: "engineer"
    }
]

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload]
            return state
        case "UPDATE_CONTACT":
            const updateState = state.map(contact=> contact.id === action.payload.id? action.payload: contact);
            state = updateState;
            return state;
        case "DELETE_CONCTACT":
            const filterContacts = state.filter(contact=> contact.id !== action.payload && contact);
            state = filterContacts;
            return state;
        default: 
            return state;
    }
};

export default contactReducer;