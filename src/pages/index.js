import Head from "next/head";
import { Inter } from "next/font/google";
import { TodoProvider, useTodoContext } from "../context/todoContext";
import Login from "./login";
import Home from "./home";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  const { login } = useTodoContext();
  return (
    <>
    
      <TodoProvider>
        <Head>
          <title>Task tacker</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={` ${inter.className}`}>
          {!login ? <Login /> : <Home />}
        </main>
      </TodoProvider>
    </>
  );
}

// context
// login page
// register page
// home page
