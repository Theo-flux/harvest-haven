import { useState, useEffect, useRef } from 'react'
import havestHavenLogo from '../../images/hh_logo.svg'
import './nav.css'

const navItems = [
  {
    id: 0,
    item: 'Home',
  },

  {
    id: 0,
    item: 'Farm Blog',
  },

  {
    id: 0,
    item: 'Farm Event',
  },

  {
    id: 0,
    item: 'Gift Shop',
  },
]

function Nav() {
  const navItemRef = useRef()
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    const navItemEl = navItemRef.current
    openNav ? navItemEl.style.left = '0px' : navItemEl.style.left = '-900px'
  }, [openNav])

  return (
    <div className='nav-section'>
      <nav className='nav'>
        <i onClick={() => setOpenNav(!openNav)} className={`nav-menu ${openNav ? `ri-close-line` : `ri-menu-line`}`}></i>
        <figure className='nav-logo'>
            <img src={havestHavenLogo} height='50px' alt="harvest-haven logo"/>
        </figure>

        <div className='nav-inner'>
          <div ref={navItemRef} className='nav-items'>
              {
                navItems.map((navItem, index) => {
                  const {item} = navItem;
                  return(
                    <a key={index} href="#">
                      {item}
                    </a>
                  )
                })
              }
              <button className='sign-in'>Sign up</button>
          </div>
          <button className='sign-up'>Sign in</button>
        </div>
      </nav>
    </div>
  )
}

export default Nav