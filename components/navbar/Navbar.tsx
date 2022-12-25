import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import { NavbarItem } from './NavbarItem';

export function Navbar() {
  return (
    <Drawer open>
      <Box sx={{ width: 250 }}>
        <List>
          <NavbarItem text="first" icon={<InboxIcon />} />
          <NavbarItem text="second" icon={<InboxIcon />} />
        </List>
      </Box>
    </Drawer>
  );
}
