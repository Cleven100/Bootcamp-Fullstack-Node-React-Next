import React, { useState } from 'react'
import './dashboard.css'
import Chart from 'react-google-charts';

const Dashboard = () => {
 
    const TITULO = 'Quantidade de cadastros primeiro semestre';


   const [dados, setDados] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
   ])

  return (
    <div>
       <h1>Dashboard</h1>
       <div className="piechart">
        <Chart 
           width={'400px'}
           height={'300px'}
           chartType={'PieChart'}
           data={dados}
           options={{
            title: TITULO
           }} />

            <Chart 
           width={'400px'}
           height={'300px'}
           chartType={'PieChart'}
           data={dados}
           options={{
            title: TITULO,
            is3D: true
           }} />

           <Chart 
           width={'400px'}
           height={'300px'}
           chartType={'PieChart'}
           data={dados}
           options={{
            title: TITULO,
            pieHole: 0.4
           }} />
       </div>

       <div className="barchart">
          <Chart 
           width={'400px'}
           height={'300px'}
           chartType={'BarChart'}
           data={dados}
           options={{
            title: TITULO,
            chartArea: {width: '50%'},
            hAxis: { title: 'Quantidade'},
            vAxis: { title: 'Mês'},
            animation: { duration: 1000, easing: 'out', startup: true}
           }} />

           <Chart 
           width={'400px'}
           height={'300px'}
           chartType={'LineChart'}
           data={dados}
           options={{
            title: TITULO,
            chartArea: {width: '50%'},
            hAxis: { title: 'Quantidade'},
            vAxis: { title: 'Mês'},
            animation: { duration: 1000, easing: 'out', startup: true}
           }} />  

           <Chart 
           width={'400px'}
           height={'300px'}
           chartType={'AreaChart'}
           data={dados}
           options={{
            title: TITULO,
            chartArea: {width: '50%'},
            hAxis: { title: 'Quantidade'},
            vAxis: { title: 'Mês'},
            animation: { duration: 1000, easing: 'out', startup: true}
           }} />  

       
      </div>

       
        
        
    </div>
  )
}

export default Dashboard