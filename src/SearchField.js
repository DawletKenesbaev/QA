import React from "react"
import { styled } from "styled-components"

function SearchField()  {
   return (
    <Search placeholder="Search question" />
   )
}
const Search = styled.input`
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
       transform:scale(1.03)
    }
`
export default SearchField