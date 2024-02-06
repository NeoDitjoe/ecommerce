import SideNav from "../sideNav/sideNav";


export default function DashboardWrapper({children}) {

  return(
    <div>

      <div>
        <SideNav />
      </div>

      <div>
        {children}
      </div>

    </div>
  )
}