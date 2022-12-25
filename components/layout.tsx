import { ReactNode } from 'react';
import Box from '@mui/material/Box';

import { Navbar } from './navbar/Navbar';

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
}
