import { useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
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
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/dash`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`/highlight`}>Highlight</Link>
            </li>
          </ul>
        </nav>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
