import * as React from 'react';
import { useNavigate } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeProvider } from '@emotion/react';
import { ExpandMore } from '@mui/icons-material';

const pages = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'Courses',
		url: '/courses',
	},
	{
		name: 'About Us',
		url: '/about-us',
	},
];
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ResponsiveAppBar() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
	// const borderShow = true;
	let navigate = useNavigate();

	const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

	const goToPage = (e) => {
		navigate(e)
	};

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

	const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

	const theme = React.useMemo(
    () =>
      createTheme({
				palette: {
					mode,
					...(mode === 'light'
					? {
							// palette values for light mode
							primary: {
								dark: '#000',
								light: '#999',
								main: '#0000'
							},
							divider: '#000',
							background: {
								default: '#333',
								paper: '#fff',
							},
							text: {
								primary: '#000',
								secondary: "#333",
							},
						}
					: {
							// palette values for dark mode
							primary: {
								dark: '#000',
								light: '#999',
								main: '#0009'
							},
							divider: '#000',
							background: {
								default: '#333',
								paper: '#fff',
							},
							text: {
								primary: '#000',
								secondary: '#000',
							},
						}),
				},
			}),
    [mode],
  );

  return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<AppBar position="relative"
					sx={{
						// border: theme.palette.mode === "dark" ? '1px solid black' : '0',
						padding: {xs: '0', sm:'0 34px' , md: '0 69px', lg: '0 103px'},
					}}
					elevation = {theme.palette.mode === "dark" ? 4 : 0}
				>
					<Container maxWidth="xl">
						<Toolbar disableGutters>
							<Box
								sx={{
									width: { xs: '70px', sm: '105px', md: '141px' }
								}}
							>
								<img src='/images/applogo.png'
									style={{
										width: '100%',
									}}
								/>
							</Box>
							<Box
								sx={{
									flexGrow: 1,
									display: 'flex',
									paddingBottom: { xs: '0px', sm: '20px', md: '40px' },
									}}
								>
								<Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
								<Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
								<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
								<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
									{pages.map((page) => (
										<Button
											key={page.name}
											onClick={() => goToPage(page.url)}
											sx={{
												fontWeight: '800',
												textTransform: 'none',
												fontSize: '14px',
												my: 2,
												color: 'black',
												'&:hover' : {color: '#C6963F'},
												'&:active' : {color: '#C6963F'},
												'&:focus' : {color: '#C6963F'},
												display: 'block'
											}}
										>
											{page.name}
										</Button>
									))}
									<Button
										id="basic-button"
										sx={{
											textTransform: 'none',
											fontWeight: '800',
											fontSize: '14px',
											my: 2,
											color: 'black',
											display: 'flex'
										}}
										aria-controls={open ? 'basic-menu' : undefined}
										aria-haspopup="true"
										aria-expanded={open ? 'true' : undefined}
										onClick={handleClick}
										endIcon={<ExpandMore />}
									>
										Pages
									</Button>
								</Box>
								<Box>
									<Menu
										id="basic-menu"
										anchorEl={anchorEl}
										open={open}
										onClose={handleClose}
										MenuListProps={{
											'aria-labelledby': 'basic-button',
										}}
										sx={{
											'& p': {
												fontWeight: 800,
												fontFamily: 'Poppins',
												fontSize: 14
											}
										}}
									>
										<MenuItem onClick={() => goToPage('/contact-us')}>Contact Us</MenuItem>
										<MenuItem onClick={() => goToPage('/instructor')}>Instructor</MenuItem>
										<MenuItem onClick={() => goToPage('/student')}>Student</MenuItem>
										<MenuItem onClick={() => goToPage('/dashboard')}>Dashboard</MenuItem>
										<MenuItem onClick={() => goToPage('/dashboard/admin')}>Admin</MenuItem>
									</Menu>
								</Box>
								<Box sx={{ flexGrow: 0, display:'flex', alignItems: 'center' }}>
									<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
										<IconButton
											size="large"
											aria-label="account of current user"
											aria-controls="menu-appbar"
											aria-haspopup="true"
											onClick={handleOpenNavMenu}
											color="inherit"
											sx={{
												color: '#DEB972',
												boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.10)',
												marginRight: '10px'
											}}
										>
											<MenuIcon />
										</IconButton>
										<Menu
											id="menu-appbar"
											anchorEl={anchorElNav}
											anchorOrigin={{
												vertical: 'bottom',
												horizontal: 'left',
											}}
											keepMounted
											transformOrigin={{
												vertical: 'top',
												horizontal: 'left',
											}}
											open={Boolean(anchorElNav)}
											onClose={handleCloseNavMenu}
											sx={{
												display: { xs: 'block', md: 'none' },
												color: '#DEB972',
											}}
										>
											{pages.map((page) => (
												<MenuItem key={page.name} onClick={() => goToPage(page.url)}>
													<Typography textAlign="center">{page.name}</Typography>
												</MenuItem>
											))}
											<MenuItem
												aria-controls={open ? 'basic-menu' : undefined}
												aria-haspopup="true"
												aria-expanded={open ? 'true' : undefined}
												onClick={handleClick}
											>
												<Typography textAlign="center">Pages</Typography><ExpandMore />
											</MenuItem>
										</Menu>
									</Box>
									<Box
										mr={'14px'}
										sx={{
											borderRadius: '9px',
											width: '55px',
											height: '32px',
											background: theme.palette.mode === "dark" ? '#ccc' : '#000',
											padding: '5px 16px 4px 15px',
											'&:hover': {
												cursor: 'pointer',
												opacity: [0.9, 0.8, 0.7],
											},
										}}
										onClick={colorMode.toggleColorMode}
									>
										<Box sx={{ ml: 0 }} color="inherit">
											{theme.palette.mode === "dark" ? <Brightness7Icon /> : <img src='/images/darkMode.png' style={{width: '23px'}} />}
										</Box>
									</Box>
									<Button
										sx={{
											borderRadius: '9px',
											color: 'white',
											backgroundColor: '#D5A340',
											padding: ' 6px 15px 5px 14px',
											fontWeight: '700',
											fontSize: '14px',
											textTransform: 'none',
											'&:hover': {
												cursor: 'pointer',
												backgroundColor: '#D5A340',
												opacity: [0.9, 0.8, 0.7],
											},
										}}
									>
										Login Here!
									</Button>
								</Box>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
			</ThemeProvider>
		</ColorModeContext.Provider>
  );
}
export default ResponsiveAppBar;