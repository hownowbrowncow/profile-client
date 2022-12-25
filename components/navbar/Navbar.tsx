import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import { NavbarItem } from './NavbarItem';

export function Navbar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        <NavbarItem text="first" icon={<InboxIcon />} />
        <NavbarItem text="second" icon={<InboxIcon />} />
      </List>
    </Drawer>
  );
}
