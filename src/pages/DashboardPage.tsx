import { useQuery } from "@tanstack/react-query";
import { fetchHealth } from "../api/health";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorMessage } from "../components/ErrorMessage";

export const DashboardPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["health"],
    queryFn: fetchHealth,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage message={(error as Error).message} />;

  return (
    <div>
      <p>Dashboard / Rooms (placeholder)</p>
      <p>Backend status: {data?.status}</p>
    </div>
  );
};
