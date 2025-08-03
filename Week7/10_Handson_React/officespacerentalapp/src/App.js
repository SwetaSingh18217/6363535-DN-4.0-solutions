import React from 'react';

function App() {
  // 3️⃣ Office object
  const office = {
    name: "Skyline Tower",
    rent: 55000,
    address: "Bangalore, India"
  };

  // 4️⃣ List of office objects
  const offices = [
    { name: "Skyline Tower", rent: 55000, address: "Bangalore, India" },
    { name: "Tech Park", rent: 75000, address: "Hyderabad, India" },
    { name: "Ocean View", rent: 65000, address: "Mumbai, India" },
    { name: "Green Valley", rent: 45000, address: "Pune, India" }
  ];

  // 1️⃣ & 2️⃣ JSX heading + image
  return (
    <div>
      <h1>Office Space Rental App</h1>
      <img
        src="https://via.placeholder.com/400x200"
        alt="Office Space"
        style={{ borderRadius: "8px", marginBottom: "20px" }}
      />

      {/* Display single office details */}
      <h2>{office.name}</h2>
      <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
        Rent: ₹{office.rent}
      </p>
      <p>Address: {office.address}</p>

      {/* Display multiple offices */}
      <h2>Available Offices</h2>
      <ul>
        {offices.map((o, index) => (
          <li key={index}>
            <strong>{o.name}</strong> - 
            <span style={{ color: o.rent < 60000 ? 'red' : 'green' }}>
              ₹{o.rent}
            </span>
            , {o.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
