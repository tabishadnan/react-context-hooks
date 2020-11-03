import React from 'react';
import './App.css';
import TodoApp from './components/TodoApp';
import ThemeContextProvider from './context/ThemeContext';

const App = () => {
    return (
        <div className="App">
            <ThemeContextProvider>
                <TodoApp />
            </ThemeContextProvider>
        </div>
    );
}

export default App;