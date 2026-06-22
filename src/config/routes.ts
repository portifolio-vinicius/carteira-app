import { API_BASE_URL } from "./apiConfig";

export const routes = {
  users: {
    list: `${API_BASE_URL}/users`,
    byEmail: (email: string) =>
      `${API_BASE_URL}/users?email=${encodeURIComponent(email)}`,
    byId: (id: string) => `${API_BASE_URL}/users/${id}`,
  },
} as const;
