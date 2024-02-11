import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import style from './header.module.css'
import { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import StateContext from '@/lib/context';

import Badge from '@mui/material/Badge';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function Header() {

  const { data: session } = useSession()
  const user = session && session.user.email

  const router = useRouter()
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { theme, setTheme } = StateContext()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [qtyData, setQtyData] = useState([])
  // const [ profileImg, setProfileImg ] = useState(null)

  useEffect(() => {
    fetch(`/api/cart/getCartItems?user=${user && user[0]}`)
      .then(res => res.json())
      .then(data => setQtyData(data.results))
  })

  const qty = []
  qtyData && qtyData.map((items) => (
    qty.push(items.qty)
  ))

  // useEffect(() => {
  //   fetch(`/api/auth/getProfileImg?userEmail=${user && user[0]}`)
  //     .then(res => res.json())
  //     .then(data => setProfileImg(data.img[0] ? data.img[0].image : ''))
  // }, [profileImg])

  return (
    <header>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" >
          <Toolbar>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Link href='/' >
                4Real
              </Link>
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >

            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            {user
              ? <Box sx={{ flexGrow: 0 }} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                <Tooltip title="Open settings">

                  <Badge
                    onClick={handleOpenUserMenu}
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                      // <SmallAvatar alt={user.name} src={user.image} />
                      <p className={style.cartItemsNo}>{qty.reduce((a, b) => a + b, 0)}</p>
                    }
                  >
                    <Avatar alt={user[1]} src={''/* profileImg */} />
                  </Badge>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu} className={style.menuItem}>
                    <Link href={`/profile`}>{user[1]}</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu} className={style.menuItem}>
                    <Link href={`/cart`}>Cart</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu} className={style.menuItem}>
                    <Link href={`/`}>Home</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu} className={style.menuItem}>
                    <p onClick={() => signOut()} >Sign Out</p>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu} className={style.menuItem}>
                    <p onClick={() => setTheme(!theme)}>{theme ? 'Light theme' : 'Dark theme'}</p>
                  </MenuItem>
                </Menu>
              </Box>
              : <p
                className={style.signIn}
                onClick={() => {
                  router.push('/auth')
                }}
              >Sign In</p>}
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}

