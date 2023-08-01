import { Box, Typography } from "@mui/material";

export default function Header (prop) {
  const {title} = prop
  return (
    <Typography
      px= '30px'
      pb= '40px'
      fontSize= {20}
      fontWeight= {600}
      letterSpacing= '-0.8px'
    >{title}
    </Typography>
  )
}