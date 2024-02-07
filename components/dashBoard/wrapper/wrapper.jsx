import SideNav from "../sideNav/sideNav";
import style from './wrapper.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  background: 'none',
  boxShadow: 'none',
}));

export default function DashboardWrapper({ children }) {

  return (
    <div className={style.main}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={6} md={2.3} s={2} >
            <Item style={{background: 'rgb(27, 27, 42)'}}>
              <SideNav />
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2} >
            <Item>
              {children}
            </Item>
          </Grid>

        </Grid>
      </Box>

    </div>
  )
}

