import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Links } from "./components/Links";
import { Home } from "./pages/Home";

export function App() {
  return (
    <div className="antialiased text-default flex flex-col w-screen min-h-screen overflow-x-hidden">
      <Header />
      <main className="lg:px-[150px] max-w-[1600px] mx-auto">
        <Home />
      </main>
      <Links />
      <Footer />
    </div>
  );
}
