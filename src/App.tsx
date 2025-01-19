import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Links } from "./components/Links";
import { Home } from "./pages/Home";

export function App() {
  return (
    <div className="text-default flex flex-col min-h-screen">
      <Header />
      <Links />
      <main className="px-[150px] max-w-[1600px] mx-auto">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
