import Chart from 'react-google-charts';
import React , { useState } from 'react';
import './dashboard.css'

function Dashboard() {

  const [dados, setDados] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro']
  ])
  return (
  <h1>Dashboard</h1>
  );
}

export default Dashboard;
