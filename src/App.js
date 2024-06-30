import { useEffect } from 'react';
import './App.css';

function App() {


    useEffect(  () => {
    tg.ready();
    },[])


  return (
    <div className="App">
    <button onClick={onCLose}>Закрыть</button>
    </div>
  );
}

export default App;
