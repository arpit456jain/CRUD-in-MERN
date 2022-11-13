import React from 'react'
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/ToolBar';

import { styled } from "@mui/system";
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background:#111111;
`;
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;
export default function NavBar() {
  return (
    <Header position="static">
        <ToolBar>
            <Tabs to="/">Codesmashers</Tabs>
            <Tabs to="all">All Users</Tabs>
            <Tabs to="add">Add User</Tabs>
        </ToolBar>
    </Header>
  )
}
