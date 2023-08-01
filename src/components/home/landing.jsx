import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import Grid from '@mui/joy/Grid';


const dataes = [
	{
		title: 'IT',
		imageName: 'img_photo149805010.png'
	},
	{
		title: 'HEALTH',
		imageName: 'img_untitled31.png'
	},
	{
		title: 'BUSINESS',
		imageName: 'img_untitled41.png'
	}
]

export default function Landing() {
	return (
		<Box
			pt= '153px'
			backgroundColor= '#FAFBF6'
			mt= {{xs: '-80px', sm: '-116px', md: '-152px'}}
			boxShadow= '0px 0px 14px 7px rgba(185, 185, 185, 0.40)'
			p= {{xs: '70px 20px 35px 20px', sm: '103px 51px 55px 51px', md: '133px 51px 55px 51px', lg: '153px 91px 55px 91px'}}
		>
			<Grid container
				columns={60}
				flexGrow ={1}
				spacing={{xl: 0, lg: 2}}
				// flowDirection={{sm: 'row', xs: 'column'}}
			>
				<Grid xs={60} md ={60} lg={35} xl={40}
					zIndex= {9}
					position= 'relative'
					display= {{md: 'grid'}}
				>
					<Box textAlign= {{sm: 'start',xs: 'center'}}>
						<Box>
						<Typography
								fontWeight={700}
								color= '#BB8427'
								mt= {{lg: 0, xs: 2}}
								fontSize= {{ xl: 70, md: 65, sm: 55, xs: 30}}
							>Expolore 1,000+ <br/>Free Online Courses</Typography>
							<Typography color={'red'}>Dear client.<br/> Did you review about my work<br/>
								Contact me please.<br/>
								https://t.me/MERNDEV1101<br/>
							</Typography>
						</Box>
						<Box>
							{/* <Typography variant='h6' fontWeight={700}>
								Lorem ipsum dolor sit amet,<br/>
								consectetur adipiscing elit. Ut elit tellus....
							</Typography> */}
						</Box>
					</Box>
					<Stack
						direction={{sm: 'row', xs: 'column'}}
						justifyContent={'start'}
						alignItems= 'center'
						spacing={3}
						m= '1em 0em'
						sx={{
							"& button": {
								width: {sm: '191px', xs: '80%'},
								height: '45px',
								fontSize: '18px',
								fontWeight: '700',
								borderRadius: '9px',
								display: 'flex',
                textTransform: 'none',
							}
						}}
					>
						<Button
							sx={{
								background: 'linear-gradient(89.7deg, #BA8328 0.23%, #D5A340 99.74%)',
								color: 'white',
								py: 2
							}}
						>Contact Us</Button>
						<Button
							sx={{
								border: '1.5px solid',
								color:'black',
							}}
						>Contact Us</Button>
					</Stack>
					<Box sx={{
						display: {sm: 'flex', xs: 'block'},
						justifyContent: 'space-between',
						padding: {xs: '30px', sm: '0'},
					}}>
						{dataes.map((data, i) => (
							<Box
								p='10px'
								textAlign='center'
								key={data.title + '_' + i}
							>
								<Box
									alt={data.title}
									component="img"
									borderRadius= '15px'
									src={'/images/'+ data.imageName}
									width={{xs: '100%' , sm: '135px' , md: '205px'}}
								>
								</Box>
								<Box fontWeight={700}>{data.title}</Box>
							</Box>
						))}
					</Box>
				</Grid>
				<Grid sm={60} md={60} lg={25} xl={20}>
					<Box sx={{
						height: {sm: '100%',md: '100%', lg: '563px', xl: '563px'},
						position: 'relative',
						marginTop: {lg: '-30px', xl: '-30px'},
						marginLeft: {md: '-4%', lg: '30%', xl: '60px'},
						display: '-webkit-box',
						justifyContent: 'center',
						width: {xs: '100%', sm: '100%', md: '100%', lg: '563px', xl: '563px'},
						overflowX: 'show',
					}}>
						<Box sx={{
							width: {xs: '100%', sm: '100%', md: '716px'},
							height: {lg: '716px'},
							position: {lg: 'absolute'},
							paddingBottom: '0',
							backgroundImage: 'url("images/img_ellipse1.png")',
						}}>
							<Box component="img"
								position= 'absolute'
								marginTop= '20px'
								height= '20%'
								src="/images/img_untitled101.png"
							>
							</Box>
							<Box component="img"
								ml= '30px'
								mt= "10px"
								width= '70%'
								src="/images/img_untitled13.png"
							></Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}

