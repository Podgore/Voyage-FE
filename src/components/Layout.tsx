import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link>
        {" | "}
        <span>Room switcher (placeholder)</span>
      </nav>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
