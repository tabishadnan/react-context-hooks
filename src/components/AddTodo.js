import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const AddTodo = () => {

    const {value, handleChange, addTodo} = useContext(ThemeContext);

    return ( 
        <div>
            <p>
                <input type="text" value={value} onChange={handleChange} />
                <button onClick={addTodo}>Add Todo</button>
            </p>
        </div>
     );
}
 
export default AddTodo;