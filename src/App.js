import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;
function App() {


    useEffect(  () => {
    tg.ready();
    },[])

    const onCLose = () => {
        tg.coloe()
    }

  return (
    <div className="App">
    <button onClick={onCLose}>Закрыть</button>
    </div>
  );
}

export default App;
