import React , {useState} from 'react'
import './style/formStyle.css'
//background-image: url(https://images.unsplash.com/photo-1576422558070-ae29d728947e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
const Form = () => {
    const [gift, setGift] = useState('')
    const [list, setList] = useState([])
    const submit = (e) => {
        e.preventDefault();
        console.log("get")
        setList([
            ...list,
            {gift}
        ])
        e.target.reset()
        setGift('')
    }
    return (
        <div>

            <form className="form" onSubmit={submit}>
                <div className="input-container">
                    <input type="text"
                     required="" 
                     onChange={e => setGift(e.target.value)}     
                     />
                    <label>Ingresa tu regalo</label>
                </div>
                <button type="button" class="btn" type="submit" >Guardar</button>
                
            <ul className="ul">
                {
                    list.map((item, index) =>(
                    <li key={index} className="li">
                    {item.gift}
                    </li>
                    ))
                }
            </ul>
            </form>
       </div>
        
    )
}

export default Form
