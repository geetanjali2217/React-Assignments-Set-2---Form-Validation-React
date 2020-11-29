import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  let [ErrorMessage, setErrorMessage] = useState("");
  const [input, setinput] = useState({
    Name: "",
    email: "",
    Gender: "",
    phone: "",
    password: ""
  });
  const handleclick = (e) => {
    e.preventDefault();
    let temp = input.Name;
    let address = input.email;
    let password = input.password;
    temp = temp.replace(/\s+/g, "");
    var RegEx = /^[a-z0-9]+$/i;
    if (
      input.email === "" ||
      input.Name === "" ||
      input.password === "" ||
      input.Gender === "" ||
      input.phone === ""
    ) {
      setErrorMessage("Error Message: All fields are mandatory");
      return;
    }
    if (!RegEx.test(temp)) {
      setErrorMessage("Error Message: Name is not alphanumeric");
      return;
    }
    if (!address.includes("@")) {
      setErrorMessage("Email must contain @");
      return;
    }

    if (isNaN(input.phone)) {
      setErrorMessage("Error Message: Phone Number must contain only numbers");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Error Message: Password must contain atleast 6 letters");
      return;
    }
    let info = input.email;
    info = info.substr(0, info.indexOf("@"));
    console.log(info);
    setErrorMessage("Hello " + info);
    console.log(RegEx.test(temp));
    console.log(input);
  };
  const handlechange = (e) => {
    setinput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div id="main">
      <div>{ErrorMessage}</div>
      <form>
        <label>Name:</label>
        <input data-testid="name" name="Name" onChange={handlechange} />
        <br />
        <label>Email address:</label>
        <input data-testid="email" name="email" onChange={handlechange} />
        <br />
        <label>Gender:</label>
        <select
          defaultValue="selectgender"
          name="Gender"
          onChange={handlechange}
        >
          <option defaultValue>Male</option>
          <option value="Female">Female</option>
          <option value="others">Others</option>
        </select>
        <br />
        <label>Phone number:</label>
        <input data-testid="phoneNumber" name="phone" onChange={handlechange} />
        <br />
        <label>Password:</label>
        <input
          data-testid="password"
          type="password"
          name="password"
          onChange={handlechange}
        />
        <br />
        <button data-testid="submit" onClick={handleclick}>
          Submit
        </button>
      </form>
    </div>
  );
};


export default App;
