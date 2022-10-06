const initialState = [
  {
    id: 0,
    name: "Do Trung Kien",
    number: "0396052828",
    email: "Kien@gmail.com",
  },
  {
    id: 1,
    name: "Nguyen Van Quang",
    number: "0123456789",
    email: "Quang@gmail.com",
  },
];

const contactReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContacts;
      return state;
    default:
      return state;
  }
};

export default contactReducers;
