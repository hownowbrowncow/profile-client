import { useQuery } from '@tanstack/react-query';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

import { fetchBio } from '@app/api/bio/fetchBio';

export default function Home() {
  const { data: bio, isLoading } = useQuery({
    queryKey: ['bio'],
    queryFn: fetchBio,
  });

  return (
    <Grid2 container spacing={1}>
      {isLoading && <div>Loading</div>}
      {bio && (
        <>
          <Grid2 xs={4}>
            <Paper>{bio.info}</Paper>
          </Grid2>
          <Grid2 xs={4}>
            <Image src={bio.picture} alt="Profile picture" layout="fill" />
          </Grid2>
          <Grid2 xs={4}>
            <Paper>Test 4</Paper>
          </Grid2>
        </>
      )}
    </Grid2>
  );
}
