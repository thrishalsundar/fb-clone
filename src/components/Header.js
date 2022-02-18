import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StoreIcon from '@mui/icons-material/Store';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useStateValue } from '../StateProvider';

const Header = () => {
    const [{user}, dispatch] = useStateValue();


    return (
        <div className='header'>
            <div className="header-left">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt='crap nw'/>
                <div className="header-input">
                    <SearchIcon />
                    <input type="text" placeholder='Search Fakebook' />
                </div>
            </div>

            <div className="header-middle ">
                <div className="header-option header-option--active">
                    <HomeIcon fontSize='large'/>
                </div>
                <div className="header-option">
                    <FlagCircleIcon fontSize='large'/>
                </div>
                <div className="header-option">
                    <OndemandVideoIcon fontSize='large'/>
                </div>
                <div className="header-option">
                    <StoreIcon fontSize='large'/>
                </div>
                <div className="header-option">
                    <SettingsInputComponentIcon fontSize='large'/>
                </div>
            </div>
            
            <div className="header-right">
                <div className="header-info">
                    <Avatar src={user.photoURL}/><h4>{user.displayName}</h4>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                </div>
            </div>
        </div>
  )
}

export default Header