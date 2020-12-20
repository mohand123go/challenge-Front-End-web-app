import React from 'react';
import './postFooter.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { FaRegComment } from "react-icons/fa";

const PostFooter =()=>{
    return(
        <footer className='post__footer'>
        <div className='dum-space'>

        </div>
           <div className='post__footer-holder'>
           <div className='post__likesAndComment'>
                <div className='Post__likesAndComment--left'>
                    <FavoriteBorderIcon/>
                    <span>609</span>
                </div>
                <div className='Post__likesAndComment--right'>
                    <FaRegComment size='1.30em'/>
                    <span>609</span>
                </div>
            </div>
           
            <button className="post__followUp-btn">Follow Up</button>
           </div>
        </footer>
    
    )
}

export default PostFooter