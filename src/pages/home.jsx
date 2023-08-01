/* eslint-disable no-dupe-keys */
import Layout from '../components/layouts';
import Landing from '../components/home/landing';
import Explore from '../components/home/explore';
import CoursesBoard from '../components/home/coursesBoard';
import SpecialOffer from '../components/home/specialOffer';
import { Box } from '@mui/material';


export default function Aham () {
  return (
    <Layout>
      <Landing />
      <Box p= "35px" />
      <CoursesBoard />
      <Explore />
      <SpecialOffer/>
		</Layout>
  );
}
