import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Add = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === number && contact
    );

    console.log(contacts.find((contact) => contact.number === number));

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields");
    }

    if (checkEmail) {
      return toast.error("This email already Exists");
    }

    if (checkNumber) {
      return toast.error("This number already Exists");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student add successfully!!");
    history.push("/");
  };

  return (
    <div className="container">
      <h1 className="display-3 my-5 text-center">Add Student</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Phone number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="Submit"
                value="Add Student"
                className="btn btn-block btn-dark "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Add;
