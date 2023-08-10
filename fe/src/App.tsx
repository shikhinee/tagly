import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const queryClient = new QueryClient();

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <div>test</div>
    </QueryClientProvider>
  );
}

export default App;
