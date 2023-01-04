import React, {useState} from 'react'

export default function CustomerForm({onSubmit}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

const hendleSubmit = (e) => {
    e.preventDefault();


    console.log('dados', {name, email})
    
    onSubmit({name, email})
}

  return (
    <form onSubmit={hendleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />

        <button type="submit">Enviar</button>
    </form>
  )
}
