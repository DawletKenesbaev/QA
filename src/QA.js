import { styled } from "styled-components"
import { useState } from "react"

function QA() {
  const [isAsked,setIsAsked]= useState(false);

    return (
        <Box>
           <div className="questionBox">
              <h3 className="question">What is it</h3>
              <h4 onClick={()=>{setIsAsked(!isAsked)}} >{isAsked? 'Answer':'Close'}</h4>
           </div>
           <div className={isAsked? "answerBox active": "answerBox" }>
            <p  className="answer" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quaerat nihil ducimus similique iusto, facere nobis excepturi suscipit quam facilis magni alias quibusdam corrupti.
            </p>
            <a target="_blank" className="resourse" href="http//youtube.com">Resourse : http//dsf</a>
           </div>
        </Box>
    )
}
const Box = styled.div`
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