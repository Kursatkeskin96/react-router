import { Outlet } from "react-router-dom"

export default function CitiesLayout() {
  return (
    <div>
      <h2>Cities</h2>
      <Outlet />
    </div>
  )
}
