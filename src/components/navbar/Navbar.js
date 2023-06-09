import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineSearch ,AiFillHome, AiOutlineShop,AiFillBell} from 'react-icons/ai';
import {MdOndemandVideo} from 'react-icons/md';
import {CiShop} from 'react-icons/ci';
import {HiUserGroup} from 'react-icons/hi';
import {SiFacebookgaming} from 'react-icons/si';
import {IoMdAdd, IoMdArrowDropdown} from 'react-icons/io';
import {FaFacebookMessenger} from 'react-icons/fa';
import profileOri from '../../assets/profile_ori.jpg';
import {CgGames} from 'react-icons/cg'

import './Navbar.css'

const Navbar = () => {
  return (
<div className='navbar'>
   <div className='navbar-fir'>
        <BsFacebook size={40} color="#0d8cf1"/>
        <div className='srch-box'>
          <AiOutlineSearch className='srch-icon'/>
        <input type="text" className='navbar-fa-search' placeholder="Facebook Search"/>
        </div>
   </div>
<div className='navbar-mid'>
    <span className='middle-icon'>
        <AiFillHome className='middle-img' />
    </span>
    <span className='middle-icon'>
        <MdOndemandVideo className='middle-img'  />
    </span>
    <span className='middle-icon'>
        <AiOutlineShop className='middle-img'  />
    </span>
    <span className='middle-icon'>
        <HiUserGroup className='middle-img' />
    </span>
    <span className='middle-icon'>
        <CgGames className='middle-img' />
    </span>
</div>
<div className='navbar-las'>
   
<span><IoMdAdd className='navbar-las-icon bs'/></span>
<span><FaFacebookMessenger className='navbar-las-icon bs'/></span>
<span><AiFillBell className='navbar-las-icon bs'/></span>
<span className='navbar-las-profile bs'><img src={profileOri}/></span>
</div>
</div>
  )
}

export default Navbar