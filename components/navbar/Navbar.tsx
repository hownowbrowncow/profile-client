import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { NavbarItem } from './NavbarItem';

export function Navbar() {
  return (
    <Drawer open>
      <Box sx={{ width: 250 }}>
        <List>
          <NavbarItem text="first" />
          <NavbarItem text="second" />
        </List>
      </Box>
    </Drawer>
  );
}
