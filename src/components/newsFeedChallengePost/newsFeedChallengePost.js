import React from 'react';
import './newsFeedChallengePost.css'




import PostHeader from '../challenge post/postHeader/postHeader';

import PostFooter from '../challenge post/postFooter/PostFooter';
import PostBody from '../challenge post/postBody/postBody';



const NewsFeedChallengePost = ()=>{
    return(
        
            <div className=" challengePost post">
                <PostHeader/>
                <PostBody />
                <PostFooter/>
        </div>
        

        
    )
}

export default NewsFeedChallengePost