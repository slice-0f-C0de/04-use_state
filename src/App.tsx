import React, {useState} from 'react';
import './App.css';

function App() {

    let [a, setA] = useState(1) // 1. Объявляем хук с переменной и его изменяемым состоянием, задаём начальное значение

    const counterPlus = () => {
        setA(++a) // 2. Сетаем состояние и указываем новое значение переменной
    }

    const counterZero = () => {
        setA(0)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={counterPlus}>+ 1</button> {/* 3. Передаём функцию с сетом в событие */}
            <button onClick={counterZero}>zero</button>
        </div>
    );
}

export default App;
