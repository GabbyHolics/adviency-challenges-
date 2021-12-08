import React , {useState} from 'react'
import { nanoid } from 'nanoid'
import './style/formStyle.css'
const Form = () => {
  const [gift, setGift] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [hideBtn, setHideBtn] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (gift.length === 0) {
      return setError(" Agrega un regalo ");
    } else if (list.some((g) => g.gift === gift)) {
      return setError("Agrega un regalo diferente ");
    }
    addGift();
    setGift("");
    e.target.reset();
  };

  const addGift = () => {
    setHideBtn(true);
    setList([...list, { id: nanoid, gift }]);
  };

  const remove = id =>{
   const arr = list.filter(item => item.id !== id)
  setList(arr)
  } 
  return (
    <div>
      {error && <div className="error"> {error}</div>}
      <div className="container-form">
        <form className="form p-m bg b-radius" onSubmit={submit}>
          <label className="form-label">¿Que quieres para navidad?</label>
          <input
            type="text"
            placeholder="Iphone 13"
            className="input-form"
            onChange={(e) => setGift(e.target.value)}
          />
          <button className="btn-submit" type="submit">
            {" "}
            Agregar{" "}
          </button>
        </form>

        <ul className="ul-form bg b-radius">
          {list.length === 0 ? (
            <p> Agrega un regalo </p>
          ) : (
            list.map((item) => (
              <li className="li-form" key={item.id}>
                {item.gift}
                <button className="btn-delete " onClick={() => remove(item.id)}> x </button>
              </li>
            ))
          )}
          {hideBtn && (
            <button className="btn-delete" onClick={() => setList([])}>
              {" "}
              Eliminar todo
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};




















  {/* <div className="container-form">
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
</div> */}




































  // const [gift, setGift] = useState('');
  // const [list, setList] = useState([]);
  // const [error, setError] = useState(null);
  // const [exit, setExit] = useState(false);
  // const submit = (e) =>{
  //     e.preventDefault();
  //     if(gift.length === 0){
  //         return setError('Ingresa un regalo ')
  //     }
  //     else if 
  //       (list.some(g => g.gift === gift)){
  //         return setError('ingresa un regalo diferente')
  //       }
      
  //     setList([
  //         ...list,
  //         {id: nanoid, gift}
  //     ])
  //     setExit(true)
  // }
  // const remove = () => 
  // setList([]);
  
  
export default Form
