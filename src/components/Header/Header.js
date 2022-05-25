import React from 'react';
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import formimage from "../../images/google-forms.png";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import avatarimage from "../../images/profile.jpg";
import TemporaryDrawer from '../TemproraryDrawer/TemporaryDrawer';

function Header() {
    return (
        <div className='header'>
            <div className='header_info'>
                <TemporaryDrawer/>
                <img src={formimage} style={{height:'40px', width:'40px'}} alt="" />
                <div className="info">
                    Forms
                </div>
            </div>

            <div className='header_search'>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input type="text" name="search" placeholder='search' autoComplete='off'/>
            </div>

            <div className='header_right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar src={avatarimage} />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;