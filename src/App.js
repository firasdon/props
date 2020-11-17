import React from 'react'
import './App.css';
import Profil from "./componenet/Profil"
import Image from './imge/magic.jpg'

function App() {
  return (
    <div className="App">
      <Profil 
       bio="Ministère de l'enseignement supérieur et de la recherche scientifique 
      1- ETAT CIVIL Nom: bechedli Prénom: firas"
       Profession="technologie interieure" > <img src={Image} className='imge' /> </Profil>
      
    </div>
  );
}

export default App;
