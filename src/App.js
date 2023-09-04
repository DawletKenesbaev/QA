import React, { useContext } from "react";
import { styled } from "styled-components";
import SearchField from "./SearchField";
import Modal from "./Modal";
import QA from "./QA";
import './App.css'
import Footer from "./Footer";
import { useState } from "react";
import {data} from './data'
import MyProvider, { MyContext } from "./MyContext";
function App() {
  const [randomNumber,setRandomNumber]=useState(1);
  const {setInputValue}=useContext(MyContext)
  const Random = () => {
    setRandomNumber( Math.floor(Math.random()*(data.length)));
    setInputValue('')
  }
 
  const [modal,setModal]= useState(true);
  return (
    <Divv>
     <h1 className="logo">QA</h1>
      <SearchField />
      <div className="btnContainer">
        <Btn onClick={Random}>
         Random question
        </Btn>
        <Btn onClick={()=>{setModal(!modal)}}>
          Add your question
        </Btn>
      </div>
      <QA data={data} randomNumber={randomNumber}/>
      <Modal modal={modal} setModal={setModal}/>
      <Footer />
   </Divv>
  ) 
}

const Divv = styled.div`
  background: rgb(48, 119, 226);
  margin:0 auto;
  padding:0;
  max-width: 100%;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  position: relative;
  overflow-x:hidden;
`
export const Btn = styled.button`
 width:180px;
 padding:14px;
 border:3px solid transparent;
 border-radius: 6px;
 font-size:17px;
 color: black;
 cursor: pointer;
 &:hover {
  transition:1s ;
  transform:scale(1.05);
  color: yellow;
  background: #000;
  border:3px solid yellow;
 }
 
`
export default App;