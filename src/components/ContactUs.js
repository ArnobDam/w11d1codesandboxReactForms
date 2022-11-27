import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const contactUsInformation = {
      name: name,
      email: email,
      phone: phone,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);
    setName("");
    setEmail("");
    setPhone("");
  };

  console.log(name);
  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="joe@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            placeholder="XXX-XXX-XXXX"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          ></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
