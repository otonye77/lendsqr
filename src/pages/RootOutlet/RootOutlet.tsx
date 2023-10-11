import { Outlet } from "react-router-dom";

const RootOutlet = () => {
    return (
        <>
          <div>
            <Outlet />
          </div>
        </>
    )
}

export default RootOutlet;