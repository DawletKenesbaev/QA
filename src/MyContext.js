import { useState } from "react";
import React from "react";
export const MyContext = React.createContext();

function MyProvider(props) {
    const [userData,setUserData]=useState([]);
    const [value,setValue]=useState('Hii');
    const [inputValue,setInputValue]=useState(false);
    return (
        <MyContext.Provider value={{userData,setUserData, value,setValue,setInputValue,inputValue}}>
            {props.children}
        </MyContext.Provider>
    )
}
export default MyProvider