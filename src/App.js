import React from "react";
import { styled } from "styled-components";
import SearchField from "./SearchField";
import Modal from "./Modal";
import QA from "./QA";
import './App.css'
import Footer from "./Footer";
import { useState } from "react";
function App() {
  const [modal,setModal]= useState(true);
  return (
    <>
     {modal?  <Divv>
       <SearchField />
       <div className="btnContainer">
         <Btn>
          Random question
         </Btn>
         <Btn onClick={()=>{setModal(!modal)}}>
           Add your question
         </Btn>
       </div>
       <QA />
       <Footer />
    </Divv> :  <Modal modal={modal} setModal={setModal} />}

    </>
   
  ) 
}

const Divv = styled.div`
  background: rgb(48, 119, 226);
  margin:0 auto;
  padding:0;
  max-width: 1200px;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
`
const Btn = styled.button`
 width:180px;
 padding:14px;
 border:3px solid transparent;
 border-radius: 6px;
 font-size:17px;
 color: rgba(37, 36, 36, 0.682);
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