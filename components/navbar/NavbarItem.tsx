import { ReactNode } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

interface NavbarItemProps {
  text: string;
  icon: ReactNode;
}

export function NavbarItem({ text, icon }: NavbarItemProps) {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
