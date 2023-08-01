import Layout from "../components/layouts"
import InstructorForm from "../components/instructor/instructorForm"
import InstructorSignUp from "../components/instructor/instructorSignUp"
import { Box } from "@mui/material"


export default function Instructor () {
  return (
    <Layout>
      <Box sx={{margin: '40px'}}></Box>
      <InstructorSignUp />
      <InstructorForm />
    </Layout>
  )
}