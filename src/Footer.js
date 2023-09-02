import { styled } from "styled-components"

function Footer() {
    return (
        <Foot>
            <h2>
                Created by <srong className='strong'>Dawlet Kenesbaev</srong>
            </h2>
            <div>
                <a href=""><img src=""/></a>
                <a href=""><img src=""/></a>
                <a href=""><img src=""/></a>
                <a href=""><img src=""/></a>

            </div>
        </Foot>
    )
}
const Foot = styled.div`
 position: absolute;
 height: 100px;
 background: #000;
 width: 100%;
 bottom: 0;
 left: 0;
 color: white;
 display: flex;
 align-items: center;
 flex-direction:column;
 padding:20px 0;
 .strong {
    color: yellow;
 }
 a {
    text-decoration:none;
 }
 li {
    list-style:none;
 }


`
export default Footer