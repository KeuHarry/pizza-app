import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="index">
      <div className="index-brand">
        <h1>Padre Gino's</h1>
        <p>The best pizza in town!</p>
      </div>
      <ul>
        <li>
          <Link to="/order">Create Order</Link>
        </li>
        <li>
          <Link to="/past">View Past Orders</Link>
        </li>
      </ul>
    </div>
  );
}
