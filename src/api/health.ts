import api from "./axios";
import type { HealthResponse } from "./types";

export async function fetchHealth(): Promise<HealthResponse> {
  const { data } = await api.get<HealthResponse>("/health");
  return data;
}
