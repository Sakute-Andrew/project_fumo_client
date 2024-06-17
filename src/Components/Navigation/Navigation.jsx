import React from 'react'
import { navigationPane } from './NavigationPane'
import logo from '/assets/logo.svg'
import { Navigate, useNavigate } from 'react-router-dom'
import '/src/index.scss'

const Navigation = () => {

    const navigate = useNavigate();

  return (
    <header className='main-header'>
        <div className='main-header__top'>
            <div className='main-header__top-menu'>
               <img src={logo} alt='logo'  />
               <div>
                    <input type="text" name="search" class="search-box form-control" 
                    autocomplete="off" 
                    data-full-placeholder="Search" placeholder="Search"/>
                </div>
                <div class="col-4 d-flex justify-content-end pr-0">
                    <span class="d-inline-block"><a href="https://www.iam-media.com/login" class="register">
                        <svg class="svg-inline--fa fa-user d-inline-block mr-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path></svg>
                        Login</a>
                    </span>
                    <span class="d-inline-block mx-2 register-pipe">|</span>
                    <span class="d-inline-block"><a href="/register" class="register">Register</a></span>
                </div>
            </div>
        </div>
        <div className='main-header__menu'>
            <nav className='main-header__navbar'>
                {navigationPane.map((item, index) => <div key={index}  className='main-header__navbar-item' 
                onClick={()=> item.title === "Profile"?navigate(`/profile/${5}`):navigate(item.path)}>
                        <p className='text-xl'>{item.title}</p>
                    </div>)}
            </nav>
            
                <a href='/subscribe' className='button button-subscribe'>Subcribe today</a>
            
        </div>
    </header>
  )
}

export default Navigation