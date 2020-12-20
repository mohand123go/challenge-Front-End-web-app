import React from 'react';
import './PostDetails.css'

import PostHeader from '../challenge post/postHeader/postHeader';
import PostFooter from '../challenge post/postFooter/PostFooter';
import PostBody from '../challenge post/postBody/postBody';




const PostDetails = ()=>{
    return(
        <div className=" challengePost post">
            <PostHeader/>
            <PostBody />
            <PostFooter/>
            <div className='challengePost__aboutChallenge'>
                <div className='dum-space'></div>
                <div className='aboutChallenge__content'>
                <h4 className='aboutChallenge-title' >About Challange</h4>
                <p className='aboutChallenge-paragraph'>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                </div>
            </div>
          
        </div>
    )
}
export default PostDetails ;
