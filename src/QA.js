import { styled } from "styled-components";
import { useContext, useState } from "react";
import { MyContext } from "./MyContext";
import React from "react";
function QA({data,randomNumber}) {
  const [isAsked,setIsAsked]= useState(false);
  const {inputValue}=useContext(MyContext)
    if (inputValue) {
    function Filtered(title) {
      if (!data.length) return [];
      return data.filter(item => 
        item?.question.toLowerCase().includes(title))
    }
    const newData= Filtered(inputValue)
    return ( <ParentBox>
      <span className="count">{newData.length? `${newData.length } results` : 'No result'} </span>
      {newData.map((item,index) => (
     <Box key={index} >
        <div className="questionBox">
          <h3 className="question">{item.question}</h3>
          <h4 onClick={()=>{setIsAsked(!isAsked)}} >{isAsked? 'Answer':'Close'}</h4>
        </div>
        <div className={isAsked? "answerBox active": "answerBox" }>
        <p  className="answer" >{item.answer}
        </p>
        <a target="_blank" className="resourse" href={item.url}>Resourse : </a>
        </div>
     </Box>
   ))}
      </ParentBox>)
     
  }
  else {
    return (
      <Box >
    <div className="questionBox">
      <h3 className="question">{data[randomNumber].question}</h3>
      <h4 onClick={()=>{setIsAsked(!isAsked)}} >{isAsked? 'Answer':'Close'}</h4>
    </div>
    <div className={isAsked? "answerBox active": "answerBox" }>
      <p  className="answer" >{data[randomNumber].answer}
      </p>
      <a target="_blank" className="resourse" href={data[randomNumber].url}>Resourse:</a>
    </div>
    </Box>
    )
    
  }
  
  // function Arr(params) {
  //   return (
 
  //   )
   
  // }
  // function Single(params) {
  //   return (   

       
  
  //     )
  // }
 
}
const ParentBox = styled.div`
 position: relative;
 margin-bottom:150px;
 .count {
  position:absolute;
  top: 15px;
  left: -20%;
  color:yellow;
  background-color:black;
  padding: 7px;
  border-radius: 20%;
 }
`
const Box = styled.div`
    @media only screen and (max-width: 600px) {
      width:300px;
    }
  background: white;
  width: 470px;
  margin: 20px 0;
  border-radius: 5px;
  .questionBox {
    position: relative;
    text-align  :center ;
    padding: 7px;
    h4 {
      position: absolute;
      top: 10px;
      right: 5px;
      cursor: pointer;
    }
  }
  .question {
    font-size: 22px;
    font-weight:600;
    width:90%;
  }
  .answerBox {
    padding:10px;
    min-width:300px;
  }
  .active {
    display: none;
  }
  .resourse {
   text-decoration:none;
   font-size:18px;
  }
  .resourse:hover {
    text-decoration:underline;
    font-size:19px;
    transition: 1s;
  }
  .answer {
    font-size:18px;
    font-weight:500;

  }
`
export default QA


