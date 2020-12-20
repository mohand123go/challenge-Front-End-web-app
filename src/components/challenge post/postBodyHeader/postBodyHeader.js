import React from 'react';
import './postBodyHeader.css'




const PostBodyHeader  =()=>{
    return(
      

    <div className='PostBodyHeader'>
            
        <p className='post__title'>learning React js , redux and hooks in 30 days </p>

        <div className='post__tags-holder'>
            <span className='post__tag'>#daysChallange</span>
            <span className='post__tag'>#FrontEndDeveloper</span>
            <span className='post__tag'>#Coding</span>
        </div>
    </div>       
    )
}

export default PostBodyHeader