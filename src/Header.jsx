import React from "react"
import activity from './img/activity_icon.svg'
import { LuSettings2 } from "react-icons/lu"
import dots from './img/top-button.svg'

const Header = ({ selectedTab, setSelectedTab }) => {
  return (

    <div className="main-header">
      <div className="heading">
        <img className='dots' alt='dots' src={dots} width="80" />
        <span className="activity">Aircall Phone</span>
      </div>

      <header>
        <ul>
          <li>
            <span className="icon">
              <span><img className='activity' alt='activity' src={activity} width="30" height="30" /></span>
              <span className='activity-text' >Activity</span>
            </span>
          </li>
          <li>
            <span className={`${selectedTab === 0 && 'inbox-tab'}`} onClick={() => setSelectedTab(0)} >All Calls</span>
          </li>
          <li>
            <span className={`${selectedTab === 1 && 'inbox-tab'}`} onClick={() => setSelectedTab(1)}>Archived calls</span>
          </li>
          <li>
            <span><LuSettings2 size={20} style={{ transform: 'rotate(90deg)', marginTop: '-4px' }} /></span>
          </li>
        </ul>
      </header>
    </div>

  )
}

export default Header;
