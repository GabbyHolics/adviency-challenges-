import React , {useState} from 'react'
import { nanoid } from 'nanoid'
import './style/formStyle.css'
const Form = () => {
    const [gift, setGift] = useState('');
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);
    const [exit, setExit] = useState(false);
    const submit = (e) =>{
        e.preventDefault();
        if(gift.length === 0){
            return setError('Ingresa un regalo ')
        }
        setList([
            ...list,
            {id: nanoid, gift}
        ])
        setExit(true)
    }
    const remove = () => 
    setList([]);
    
    return (
      <div>
        <div className="container-form">
          <form className="form bg b-radius" onSubmit={submit}>
            {error && <span> {error}</span>}
            <div className="input-container">
              <label> Escribe tu regalo</label>
              <input
                type="text"
                placeholder="Iphone 13"
                onChange={(e) => setGift(e.target.value)}
              />
              <button className="btn-submit" type="submit">
                Agregar
              </button>
            </div>
          </form>
          <ul className="ul bg b-radius">
            {list.length === 0 ? (
              <p>No hay regalos 🤧😭</p>
            ) : ( 
              list.map((item) => (
                <li className="li" key={item.id}>
                  {item.gift}
                  <div className="button-end">
                    <button
                      className="btn-delete"
                      onClick={() => remove(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))
            )}
            {
            exit && 
            <button className="btn-delete" onClick={() => remove()}>Eliminar toda la lista</button>
            }
          </ul>
        </div>
      </div>
    );
}


export default Form
