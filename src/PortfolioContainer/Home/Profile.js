import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from "react-icons/bs"
import {BsGoogle} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'




export default function Profile() {
    return (
        <div >
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div  id="scroll" className='profile-details-name'>
                        
                        <span className='primary-text'>
                        {" "}
                        Hi, I'm <span className='highlighted-text'>Ali Kachef</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <div className='primary-text'>
 
                            <div className='typical'>
                                <Typical
                                    font = "Times New Roman, Times, serif"
                                    loop= {Infinity}
                                    
                                    steps = {[
                                        "Graphic Designer", 1000,
                                        "Software Developer", 1000,
                                        "FrontEnd", 1000,
                                        "BackEnd", 1000,
                                        "Java", 1000,
                                        "Spring/Spring Boot", 1000,
                                        "AWS", 1000

                                ]}
    
                                />
                            </div>
                            <div className='profile-role-tagline'>
                             Knack of building applications with front and back end operations.
                            </div>
                            
                        </div>
                    </div>
                    <div className='profile-options'>
                            <button href="" className='btn1 primary-btn1'>
                                Hire me 
                            </button>
                            <a href='Ali Kachef Resume.docx' download={'AliKachef(CV).docx'}>
                                <button className='btn1 highlighted-btn1'>Get Resume</button>
                            </a>
                            <div className='cloz'>
                        <div className='cloz-icon'>
                            <a href='https://twitter.com/ClassicsPS'>
                                <i className='fa fa-twitter'><BsTwitter color="white"/></i>
                            </a>
                            <a href='https://www.linkedin.com/in/ali-kachef-199370201/'>
                                <i className='fa fa-Linkdin-sqaure'><BsLinkedin color="white"/></i>
                            </a>
                            <a href='alikachef1997@gmail.com'>
                                <i className='fa fa-google-sqaure'><BsGoogle color="white"/></i>
                            </a>
                            <a href='https://github.com/alikachef'>
                                <i className='fa fa-github-sqaure'><BsGithub color="white"/></i>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
