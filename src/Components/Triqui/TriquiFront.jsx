import React, { useState, useRef } from 'react'

import './triqui.css'
import O from '../XO/circle.png'
import X from '../XO/cross.png'

let data = ["", "", "", "", "", "", "", "", ""];

export default function TriquiFront() {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let tituloRef = useRef(null);

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src=${X}>`;
            data[num] = "X";
            setCount(++count);
        }
        else {
            e.target.innerHTML = `<img src=${O}>`;
            data[num] = "O";
            setCount(++count);
        }
        win();
    }

    const win = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            ganador(data[2]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            ganador(data[5]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            ganador(data[8]);
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            ganador(data[6]);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            ganador(data[7]);
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            ganador(data[8]);
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            ganador(data[8]);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            ganador(data[6]);
        }
    }

    const ganador = (data) => {
        setLock(true);
        if (data === "X") {
            tituloRef.current.innerHTML = `Felicidades: <img src=${X}>`
        }
        else {
            tituloRef.current.innerHTML = `Felicidades: <img src=${O}>`
        }
    }

    const reset = () => {
        setLock(false);
        setCount(0);
        data = ["", "", "", "", "", "", "", "", ""];
        tituloRef.current.innerHTML = 'Triqui en <span>React</span>'
        const boxes = document.querySelectorAll(".boxes");
        boxes.forEach(box => {
            box.innerHTML = "";
        })
    }

    return (
        <div className='container'>

            <h1 className="title" ref={tituloRef}>Triqui en <span>React</span></h1>

            <div className="board">

                <div className="row1">
                    <div className="boxes" onClick={(e) => { toggle(e, 0) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
                </div>

                <div className="row2">
                    <div className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
                </div>

                <div className="row3">
                    <div className="boxes" onClick={(e) => { toggle(e, 6) }} ></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
                </div>

            </div>
            <button className="reset" onClick={() => { reset() }}>Reset</button>
        </div>
    )
}

