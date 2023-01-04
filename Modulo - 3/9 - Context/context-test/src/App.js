import { useState } from 'react';

import CustomerForm from './components/CustomerForm';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  const handleSubmit = ({name, email}) => {
    console.log("dados app", {name, email} )
    setName(name)
    setEmail(email)
  }

  return (
    <CustomerForm onSubmit={handleSubmit}/>
  );
}

export default App;
