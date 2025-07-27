import React from 'react';
import Header from './components/Header';
import PlanList from './components/PlantList';

function App() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #eee',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
    }}>
      <Header />
      <PlanList />
    </div>
  );
}

export default App;
