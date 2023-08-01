import { useState } from 'react';
import { useNavigate } from 'react-router';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { list1 } from '../../const/routes';
import { Box } from '@mui/material';

const ITEM_HEIGHT = 48;

export default function App() {
  const [anchorElR, setAnchorElR] = useState(null);
  const open = Boolean(anchorElR);
	let navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorElR(event.currentTarget);
  };
	const handleClose = () => {
    setAnchorElR(null);
  };
  return(
    <Box
      sx={{
        position: 'fixed',
        zIndex: '1000',
        bottom: '100px',
        right: '50px',
        boxShadow: '0px 0px 20px 20px rgba(0, 0, 0, 0.10)',
      }}
    >
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorElR}
        open={open}
        onClose={handleClose}
        paper={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {list1.map((option, i) => (
          <MenuItem key={i} onClick={() => navigate(option.url)}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}