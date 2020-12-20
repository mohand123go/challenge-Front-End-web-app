import React from 'react';
import './profile.css'
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

import NewsFeedChallengePost from './../newsFeedChallengePost/newsFeedChallengePost';

const Profile = ()=>{
    return(
        <div className='profile' >
            <div className='profile__header'>
                <div className='profile__header--control'>
                    <div className='profile__image-holder'>
                        <img src='avtar.jpg' className='profile__image'/>
                    </div>
                    <div className='profile__contactUser'>
                        <input type='button' value='FOLLOW' className='profile__followbtn btn'/>
                        <input type='button' value='MESSAGE'className='profile__messagebtn btn' />
                    </div>
                </div>
                    <div className='profile__userInfo'>
                        <h3 className='profile__userInfo--userName' >Mohand Mostafa</h3>
                        <span className='profile__userInfo--nickName'>Front End Developer</span>
                        <div className='profile__userInfo_rate'>
                            <BsStarFill className='profile__userInfo_rate--star'/>
                            <BsStarFill className='profile__userInfo_rate--star'/>
                            <BsStarFill className='profile__userInfo_rate--star'/>
                            <BsStarHalf className='profile__userInfo_rate--star'/>
                            <BsStar className='profile__userInfo_rate--star'/>
                        </div>
                        <p className='profile__userInfo_Bio'>
                        Hi! My name is John, I’m a creative geek from San Francisco, CA. Contact me at john@mail.com
                        </p>
                        <input  className='btn' type='button' value='More Info'/>
                        <hr/>
                    </div>
               

            </div>

            <div className='profile__body'>
               <NewsFeedChallengePost/>
               <NewsFeedChallengePost/>
               <NewsFeedChallengePost/>
            </div>
        </div>
    )
}

export default Profile