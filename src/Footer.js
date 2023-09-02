import { styled } from "styled-components"

import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
    return (
        <Foot>
            <h2>
                Created by <srong className='strong'>Dawlet Kenesbaev</srong>
            </h2>
            <div>
                <a target="_blank" href="https://www.instagram.com/dawlet_kenesbaev/"><InstagramIcon  className="icon"/></a>
                <a target="_blank" href="https://github.com/NUKUS777"><GitHubIcon  className="icon"/></a>
                <a target="_blank" href="https://t.me/username8168"><TelegramIcon  className="icon"/></a>
                <a target="_blank" href="https://www.linkedin.com/in/dawlet-kenesbaev-1744b028b/"><LinkedInIcon  className="icon"/></a>

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
 .icon {
    color: rgb(48, 119, 226);
    margin:5px;
 }


`
export default Footer