import * as React from 'react';

export const CalcApp = props => {

    let operand;

    return <div>
        <form>
            <label>Operand:</label>
            <input type="number" defaultValue="0" ref={input => operand = input}  />
            <button type="button" onClick={() => props.add(Number(operand.value))}>+</button>
            <button type="button" onClick={() => props.subtract(Number(operand.value))}>-</button>
            <button type="button" onClick={() => props.multiply(Number(operand.value))}>*</button>
            <button type="button" onClick={() => props.divide(Number(operand.value))}>/</button>
        </form>
        <div>
            <span>Result:</span>
            {props.result}
        </div>
    </div>;
};