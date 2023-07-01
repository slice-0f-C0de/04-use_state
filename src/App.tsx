import React, {useState} from 'react';
import './App.css';

function App() {

    let [a, setA] = useState(1)

    const counterPlus = () => {
        setA(++a)
    }

    const counterZero = () => {
        setA(0)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={counterPlus}>+ 1</button>
            <button onClick={counterZero}>zero</button>
        </div>
    );
}

export default App;
