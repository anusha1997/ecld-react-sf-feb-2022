import { useState } from 'react';
import './counter.css';

function Counter(){
    const [value,setValue] = useState(0)
    return(
        <>
        <div>
            
            <h1>Counter App</h1>
            <h2>{value}</h2>
            <button className='btn' onClick={() => setValue(value + 1)}>
                Increase
            </button>
            <button className='btn' onClick={() => setValue(value - 1)}>
                Decrease
            </button>
            <button className='btn' onClick={() => setValue(0)}>
                Reset
            </button>
        </div>
        </>
    );
}
export default Counter;