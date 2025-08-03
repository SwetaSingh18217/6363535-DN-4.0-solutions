import React, { useState } from 'react';


const CurrencyConverter = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = (e) => {
    const rupeesValue = parseFloat(rupees);
    if (!isNaN(rupeesValue)) {

      const euroValue = (rupeesValue / 90).toFixed(2);
      setEuros(euroValue);
    } else {
      setEuros('Invalid input');
    }
  };

  return (
    <div style={{ 
      border: '2px solid #007bff', 
      padding: '20px', 
      margin: '20px 0', 
      borderRadius: '8px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>Currency Converter (INR to EUR)</h3>
      <div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="rupees">Enter amount in Indian Rupees: </label>
          <input
            type="number"
            id="rupees"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            style={{ 
              padding: '8px', 
              marginLeft: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px' 
            }}
          />
        </div>
        <button 
          onClick={handleSubmit}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Convert
        </button>
      </div>
      {euros && (
        <div style={{ marginTop: '15px', fontSize: '18px', fontWeight: 'bold' }}>
          <p>Result: €{euros}</p>
        </div>
      )}
    </div>
  );
};


const App = () => {
  const [counter, setCounter] = useState(0);

  // Method to increment counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

 
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  
  const sayHello = () => {
    alert('Hello! This is a static message from React Event Handler!');
  };

  
  const handleIncrementWithMessage = () => {
    incrementCounter();
    sayHello();
  };

  
  const sayWelcome = (message) => {
    alert(`Say ${message}! Welcome to React Event Handling!`);
  };


  const handleOnPress = (e) => {
    e.preventDefault();
    alert('I was clicked');
    console.log('Synthetic Event Object:', e);
    console.log('Event Type:', e.type);
    console.log('Target Element:', e.target);
  };

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        React Event Handling 
      </h1>

      {/* Counter Section */}
      <div style={{ 
        border: '2px solid #28a745', 
        padding: '20px', 
        margin: '20px 0',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa'
      }}>
        <h2>Counter</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
          Counter Value: {counter}
        </p>
        
        <div style={{ marginBottom: '10px' }}>
          <button 
            onClick={handleIncrementWithMessage}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Increment (Multiple Actions)
          </button>
          
          <button 
            onClick={decrementCounter}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Decrement
          </button>
        </div>
        
        <p style={{ fontSize: '14px', color: '#666' }}>
        
        </p>
      </div>

      {/* Welcome Button Section */}
      <div style={{ 
        border: '2px solid #ffc107', 
        padding: '20px', 
        margin: '20px 0',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa'
      }}>
        <h2>Say Welcome</h2>
        <button 
          onClick={() => sayWelcome('Welcome')}
          style={{
            backgroundColor: '#ffc107',
            color: '#212529',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Welcome Button
        </button>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
         
        </p>
      </div>

      {/* Synthetic Event Section */}
      <div style={{ 
        border: '2px solid #6610f2', 
        padding: '20px', 
        margin: '20px 0',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa'
      }}>
        <h2>Synthetic Event </h2>
        <button 
          onClick={handleOnPress}
          style={{
            backgroundColor: '#6610f2',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          OnPress (Synthetic Event)
        </button>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          
        </p>
        <p style={{ fontSize: '12px', color: '#666' }}>
          
        </p>
      </div>

      {/* Currency Converter Section */}
      <CurrencyConverter />

      
    </div>
  );
};

export default App;