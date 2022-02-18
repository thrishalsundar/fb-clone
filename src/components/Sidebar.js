import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TheatersIcon from '@mui/icons-material/Theaters';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {useStateValue} from '../StateProvider';


const Sidebar = () => {
  const [{user}, dispatch] = useStateValue();
  
  return (
    <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={PeopleAltIcon} title='Find Friends'/>
        <SidebarRow Icon={GroupsIcon} title='Groups' />
        <SidebarRow Icon={StorefrontIcon} title='MarketPlace' />
        <SidebarRow Icon={TheatersIcon} title='Watch' />
        <SidebarRow Icon={BookmarkIcon} title='Saved' />
    </div>
  )
}

export default Sidebar