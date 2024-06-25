import { useState } from "react";

const Subscribe = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const hanldeFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const hanldeLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const hanldeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const logInfo = () => {
    console.log(firstName, lastName, email);
  };
  return (
    <div className="card">
      <header>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive new and updates</p>
      </header>
      <body>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={hanldeFirstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={hanldeLastName}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={hanldeEmail}
        />
      </body>
      <button onClick={logInfo}>Subscribe</button>
    </div>
  );
};
export default Subscribe;

/*another way use object instead
const [data, setData] = useState({ firstName: "", lastName: "", email: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    e.preventDefault();
    
  };*/
