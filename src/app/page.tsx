import Image from "next/image";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <main>
        <h3>Cuerpo</h3>
      </main>
      <Footer />
    </div>
    
  );
}
