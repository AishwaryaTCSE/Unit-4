import React from 'react';

const PlanCard = ({ name, price, features, highlight }) => {
  const buttonStyle = {
    backgroundColor: highlight ? '#a78bfa' : '#e5e7eb',
    color: highlight ? 'white' : '#374151',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #ccc',
      padding: '20px 0',
    }}>
      <div>
        <h3>{name}</h3>
        <ul>
          {features.map((f, idx) => (
            <li key={idx} style={{ marginTop: '6px' }}>✅ {f}</li>
          ))}
        </ul>
      </div>
      <div style={{ textAlign: 'right' }}>
        <h2>{price}</h2>
        <button style={buttonStyle}>Get Started</button>
      </div>
    </div>
  );
};

export default PlanCard;
