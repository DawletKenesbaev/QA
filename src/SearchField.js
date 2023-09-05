import React, { useContext } from "react"
import { styled } from "styled-components"
import { MyContext } from "./MyContext"

function SearchField()  {
   const {setInputValue}=useContext(MyContext)

   return (
    <Search onChange={(e)=> setInputValue(e.target.value)} placeholder="Search question" />
   )
}
export const Search = styled.input`
    display:block;
    margin:40px 0;
    outline: none;
    padding:10px 20px;
    font-size:19px;
    border: none;
    border-radius: 5px;
    border: 3px solid white;
    background: white;   
    color: black;
    &:hover {
       transform:scale(1.01)
    }
`
export default SearchField