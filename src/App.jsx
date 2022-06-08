import React, { useState } from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';

const ToDoApp = () => {
    const [ inputData, setInputData ] = useState('');
    const [ items, setItems ] = useState([]);

    const addItem = () => {
        if (inputData) {
            setItems([ inputData, ...items ]);
            setInputData('');
        } else {}
    }

    const deleteItem = id => {
        const updatedItems = items.filter((elem, ind) => ind != id);

        setItems(updatedItems);
    }

    const removeAll = () => {
        setItems([]);
    }

    return ( 
        <>
            <div className="container">
                <h1 className='todo'>To-do app</h1>
                <div>
                    <input 
                        type="text"  
                        className="input-items" 
                        placeholder='Add item...' 
                        value={inputData}
                        onChange={e => setInputData(e.target.value)}
                    />
                    <AiOutlinePlusSquare 
                        className='add-icon' 
                        onClick={addItem}
                    />
                </div>
                <div>
                    {items.map((elem, ind) => (
                            <div key={ind} className="show-item">
                                <h3 className='item'>{elem}</h3>
                                <AiOutlineDelete 
                                    className='delete-icon'
                                    onClick={() => deleteItem(ind)}
                                />
                            </div>
                        )
                    )}
                </div>
                <div>
                    <button 
                        className='btn-remove'
                        onClick={removeAll}
                    >
                        Remove All
                    </button>
                </div>
            </div>
        </>
    );
}
 
export default ToDoApp;