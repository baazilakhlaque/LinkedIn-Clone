import React from 'react'
import { Avatar } from '@mui/material'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser)
    console.log(user.photoUrl)
    console.log(user.displayName)

    function RecentItem(topic){
        return (
            <div className='sidebar__recentItem'>
                <span className='sidebar__hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://media.licdn.com/dms/image/C4D16AQHjfN443uhgrA/profile-displaybackgroundimage-shrink_350_1400/0/1662350175545?e=1695859200&v=beta&t=-oKLTvxIrUIiN48eLJOkiUL9gwmKO7Qd4nzZVBhqubk' alt='' />
            <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0].toUpperCase()}</Avatar>
            <h2 className='name'>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed your profile</p>
                <p className='sidebar__statNumber'>2474</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views of your post</p>
                <p className='sidebar__statNumber'>1374</p>
            </div>
        </div>
        
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {RecentItem('Reactjs')}
            {RecentItem('Programming')}
            {RecentItem('Software-Engineering')}
            {RecentItem('Software-Development')}
            {RecentItem('Software-Design')}
            
        </div>
    </div>
  )
}

export default Sidebar
