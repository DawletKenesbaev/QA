import styled from "@emotion/styled";
import Footer from "./Footer";
import { Btn } from "./App";
import { Search } from "./SearchField";
import { useContext, useState } from "react";
import { MyContext } from "./MyContext";
function Modal({modal,setModal}) {
    const modulClick = ()=>{
        setModal(!modal)
    }
    const {setUserData}=useContext(MyContext);
    const [name,setName]=useState('');
    const [year,setYear]=useState('');
    const [family,setFamily]=useState('');

    // const name = prompt("Enter your name:");
    // const year = prompt("Enter your birth year:");
    // const family = prompt("Enter your family name:");
    const userObj = {
    name: name,
    year: parseInt(year),
    family: family
    };
    let usersArray = [];
    if (localStorage.getItem("users")) {
    usersArray = JSON.parse(localStorage.getItem("users"));
    }
    usersArray.push(userObj);
    function SubmitFunction() {
        localStorage.setItem("users", JSON.stringify(usersArray));
        const usersString = localStorage.getItem("users");
        const usersArray2 = JSON.parse(usersString);
        console.log(usersArray);
        modulClick()
    
    }
   
   

    return (
        <>
            <div className={modal? 'modul modulactive' : 'modul'}>
                <h2>Add you question please</h2>
               <Textarea onChange={(e)=> setName(e.target.value)} />
               <h2>Enter your answer</h2>
               <Textarea onChange={(e)=> setFamily(e.target.value)} />
               <Search placeholder="Any source?" onChange={(e)=> setYear(e.target.value)} />
               <div className="btnContainer">
               <Btn onClick={modulClick}>Cancel</Btn>
               <Btn onClick={SubmitFunction}>Save</Btn>
               </div> 
            </div>
            <Footer />
       </>
       
    )
}
const Textarea= styled.textarea`
 width: 300px;
 padding: 5px;
 min-height: 80px;
 font-size:17px;
 outline:none;
 border-radius: 5px;

 border:4px solid transparent;

 &:focus {
    border:4px solid yellow;
 }

`

export default Modal;