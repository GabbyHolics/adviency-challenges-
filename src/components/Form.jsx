import React , {useState} from 'react'
import { nanoid } from 'nanoid'
import './style/formStyle.css'
//background-image: url(https://images.unsplash.com/photo-1576422558070-ae29d728947e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
const Form = () => {
    const [gift, setGift] = useState('');
    const [list, setList] = useState([]);
    const submit = (e) =>{
        e.preventDefault()
        setList([
            ...list,
            {id: nanoid(), 
            gift }
        ])
             e.target.reset()
        setGift('')
    }
    const remove = (id) => {
        console.log(`remove ${id}`)
        const arr = list.filter(item => item.id != id)
        setList(arr)
    }
    const clearGift = () => setList([]);
    return (
        <div>
            <div className="container-form">
                <form className="form border-radius" onSubmit={submit}>
                    <div className="input-container">
                    <label>Ingresa tu regalo</label>
                    <input 
                    type="text"
                    onChange={(e=> setGift(e.target.value))}   
                    />
                    </div>
                    <button className="btn" type="submit" > Agregar </button>
                </form>
                <ul className="ul border-radius">
                    {
                        list.map((item)=>(
                            <li className="li" key={item.id}>{item.gift}
                            <div className="button-end"> <button className="btn-delete" onClick={() => remove(item.id)} > Eliminar </button>
                            </div>
                            </li>
                        ))
                    }
                    <button className="btn-delet totally " onClick={() =>clearGift()}> Eliminar toda la lista  </button>
                </ul>
            </div>
       </div>
        
    )
}

export default Form
