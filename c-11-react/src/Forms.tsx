import { useState } from "react";

const Forms = () => {
  //   const [name, setName] = useState("");
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [track, setTrack] = useState("");

  const [studentInfo, setStudentInfo] = useState({
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    track: "",
  });

  console.log(studentInfo, "studentInfo");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setStudentInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <p>Forms</p>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <label>Name</label>
        <input
          type='text'
          value={studentInfo.name}
          name='name'
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          value={studentInfo.firstName}
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={studentInfo.lastName}
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <label>Email</label>
        <input
          type='email'
          value={studentInfo.email}
          name='email'
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <label>Country</label>
        <input
          type='text'
          name='country'
          value={studentInfo.country}
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <label>Track</label>
        <input
          type='text'
          name='track'
          value={studentInfo.track}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export { Forms };

// ASSESSMENT
// Create an input element for firstName, lastName, email, country and track. Let each be handled using different states.
