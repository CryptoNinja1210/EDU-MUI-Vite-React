import Layout from "../components/layouts"
import StudentForm from "../components/student/studentForm"
import StudentSignUp from "../components/student/studentSignUp"


export default function Instructor () {
  return (
    <Layout>
      <StudentSignUp />
      <StudentForm />
    </Layout>
  )
}