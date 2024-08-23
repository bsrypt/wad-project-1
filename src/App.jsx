import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Topbar from "./Topbar";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dash");
    }
  });

  return (
    <>
      <div>
        {/* <h1>React Router Contacts</h1> */}
        <Topbar />
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
