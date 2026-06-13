import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getPastOrders from "../api/getPastOrder";

export const Route = createLazyFileRoute("/past")({
  component: PastOrdersRoute,
});

function PastOrdersRoute() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
    staleTime: 30000, // 30 seconds
  });

  if (isLoading) {
    return (
      <div className="past-orders">
        <h2>Loading ...</h2>
      </div>
    );
  }
  if (isError) return <div>Error occurred while fetching past orders.</div>;

  return (
    <div className="past-orders">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pages">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={data?.length === 0 || data?.length < 10}
        >
          Next
        </button>
      </div>
    </div>
  );
}
