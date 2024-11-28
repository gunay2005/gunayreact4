import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Göndərildi");
    console.log(`Ad: ${firstName}`);
    console.log(`Soyad: ${lastName}`);
    console.log(`Telefon: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Şərh: ${comment}`);

  };

  return (
    <div>
      <h1>Əlaqə Formu</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ad:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Soyad:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <label>Telefon:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>E-mail:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Şərh:</label>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
        </div>
        <button type="submit">Göndər</button>
      </form>
    </div>
  );
};

export default Form;