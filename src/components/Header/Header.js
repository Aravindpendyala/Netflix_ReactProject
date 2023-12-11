import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='showcase'>
          <div className='showcase-top'>
               <img src="http://i.ibb.co/r5krrdz/logo.png" alt="image"/>
               <Link to='/'  className="btn">
                  Sign In
               </Link>
          </div>
           
           <div className='showcase-content'>
              <h1>Unlimited movies, TV shows and more</h1>
              <p>Watch anywhere. cancel Anytimes</p>
              <Link to="/netflix-show" className="btn-header btn-xl">
                 Watch Free For 30 Days
                 <i className="fas fa-chevron-right btn-icon"></i>
              </Link>
            
           </div>


    </header>
  )
}

export default Header