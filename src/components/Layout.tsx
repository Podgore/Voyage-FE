import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  return (
    <div>
      <nav className="layout-nav">
        <Link to="/">Home</Link>
        {" | "}
        <span>Room switcher (placeholder)</span>
      </nav>
      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  );
};
