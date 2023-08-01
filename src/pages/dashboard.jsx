import Layout from "../components/layouts";
import DashboardPanel from "../components/dashboard/dashboardPanel";


export default function Dashboard (props) {
  return (
    <Layout>
      <DashboardPanel url={props.url}/>
    </Layout>
  )
}