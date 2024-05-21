
import { useState ,useEffect } from "react";
import './App.css';

function App() {
  const[animalData, setAnimalData] = useState([]);

  useEffect(() => {
    const getAnimalData = async () => {
      try {
        const url = `http://34.22.99.244:8071/animals`;
        const response = await fetch(url);
        const jsonData = await response.json();
        setAnimalData(jsonData);
      } catch(error) {
        console.log("animal API fetch error", error);
      }
    }
    getAnimalData();
  }, []) 

  console.log(animalData);
  return (
    <div className="container">
      {animalData.length > 0 ? (
        <ul className="list">
          {animalData.map(animal => (
            <li key={animal.id} className="list-item">
              <img src={animal.imgUrl} alt={animal.name} className="image" />
              <h2>{animal.name}</h2>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Loading animal data...</h2>
      )}
    </div>
  );
}

export default App;
