import React from "react";
import NavLink from 'react-router-dom'
const Register = () => {
  const [Input, setInput] = useState({
    name1:'',
    email: '',
    password:''
  });

  // to store value in local Storage

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(Input))
  }
  return (
    <>
      <div
        style={{ backgroundColor: "red", height: 10, width: 200 }}
        className="mainDiv"
      >
        <div className="h">
          <h1 className="h1"> Create Your Account </h1>
        </div>

        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="inpName">
            <label className="label" htmlFor="labelName">
              Your Name :
            </label>
            <div>
              <input
                style={{ backgroundColor: "red", height: 10, width: 200 }}
                type="text"
                id="labelName"
                name="name1"
                value={Input.name1}
                onChange={(e) =>
                  setInput({ ...Input, [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
          <div className="inpEmail">
            <label htmlFor="labelEmail">Your Email :</label>
            <div>
              <input
                type="email"
                id="labelEmail"
                name="email"
                value={Input.email}
                onChange={(e) =>
                  setInput({ ...Input, [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
          <div className="inpPass">
            <label htmlFor="labelPass">Your Pass :</label>
            <div>
              <input
                type="password"
                id="labelPass"
                name="password"
                value={Input.password}
                onChange={(e) =>
                  setInput({ ...Input, [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
          <div className="btn">
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
          </div>
          <p className="para">
            Have already an account?
            {/* <NavLink to = "/Login"><u>Login here</u> </NavLink> */}
            <NavLink to="/Login">
              <u>Login here</u>{" "}
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
