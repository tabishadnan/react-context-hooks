import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [todo, setTodo] = useState([]);

    const [value, setVlue] = useState("");

    const handleChange = (e) => {
        setVlue(e.target.value);
    };

    const addTodo = () => {
        let addTodoObj = {
            value : value,
            isShowInput: false
        };
        console.log(addTodoObj);

        let todoArr = todo;

        let addTodo = todoArr.concat(addTodoObj);

        setTodo(addTodo);

        setVlue("")

    }

    return ( 
        <ThemeContext.Provider value={{value, handleChange, addTodo}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;