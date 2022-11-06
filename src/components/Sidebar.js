//import {SidebarHeader,SidebarContent, ProSidebar, Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideBar = () => {
	return(
		<div>
		<Sidebar>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>;
		</div>
	)
}

export default SideBar;
