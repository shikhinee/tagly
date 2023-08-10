/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components";
import Card from "./components";
const queryClient = new QueryClient();

function App(): JSX.Element {

  return (
    <QueryClientProvider client={queryClient}>
      <Button className="bg-white text-black">test</Button>
      <Card className={"bg-black text-white"}/>
    </QueryClientProvider>
  );
}

export default App;
