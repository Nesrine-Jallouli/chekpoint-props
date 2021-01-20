
import './App.css';
import { Profil } from './profil/Profil';
import picture from './NesrineProfil.jpg';
import picdefault from './default.jpg'

function App() {
  function handleName(on){
    alert(`your name is ${on}` )
  }

  return (
    <div className="App">
        <div className="container">
        <h2>Use of props with parametrs</h2>
          <Profil FullName='Nesrine Jallouli' Bio='Cité Hédi Nouira Borj Louzir Ariana' Profession='Student in GO MY CODE' handleName={handleName}>
              <img src={picture} alt='photo de profil' width="250px"/>  
          </Profil>
          
        </div>
          
          <hr/>
          <div className="container">
            <h2>Use of props with default parametrs</h2>
          <Profil handleName={handleName}>
          <img src={picdefault} alt='photo de profil' width="250px"/>
          </Profil>
          </div>      
    </div>
  );
}

export default App;
