import React, { useState } from "react";
import shortid from 'shortid';

function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const updateTarefa = event => {
     event.preventDefault()
     
     if(tarefa.trim()){
          console.log(tarefa);
          setTarefas([
            ...tarefas,
            {id: shortid.generate(), nomeTarefa:tarefa}
          ])
     }else {
       console.log("Elemento Vazio");
       return
     }
  }

  const deletarTarefa = id => {
    const arrayFiltrado = tarefas.filter(item => item.id !== id )
    setTarefas(arrayFiltrado)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD SIMPLES</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tarefas</h4>
          <ul className="list-group">
           {
             tarefas.map(item => (
               <li className="list-group-item" key={item.id}>
              <span className="lead">{item.nomeTarefa}</span>
              <button
               
               className="btn btn-warning btn-sm float-end mx-2">
                Editar
              </button>

              <button 
              onClick={() => deletarTarefa(item.id)}
              className="btn btn-danger btn-sm float-end ">
                Deletar
              </button>

            </li>
             ))
           }
            


          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={updateTarefa}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Incrementar tarefa"
              onChange={ event => setTarefa(event.target.value)}
              value={tarefa}
            />
            <div class="d-grid gap-2">
              <button class="btn btn-dark" type="submit">
                Acrescentar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
