import * as React from "react";
import Home from "./src/screens/home";
import { QueryClient, QueryClientProvider } from "react-query";
import "@expo/match-media";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
