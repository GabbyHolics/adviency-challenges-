import './App.css';
import Form from './components/Form';
function App() {
  return (
    <div>
    <div className="container">
      <header>
        <h1 className="h1">
            Regalos
        </h1>
        <main>
          <Form/>
        </main>
      </header>
    </div>
    
      {/* <div className="container">
        <header>
          <h1 className="h1"> Regalos </h1>
        </header>
        <main>
          <Form/>
        </main>
      </div> */}
    </div>
  );
}

export default App;
