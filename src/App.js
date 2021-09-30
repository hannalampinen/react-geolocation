import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false);
      }, (error) => {
        alert(error);
      })
    } else {
      setIsLoading(false);
      alert ('Geolocation not supported')
    }
  }, [])

  if (isLoading) {
    return <p>Retrieving position...</p>
  } else {
    return (
      <p>
        Position: &nbsp; 
        {lat.toFixed(3)}, &nbsp; 
        {lng.toFixed(3)}
      </p>
    );
  }
}

export default App;
