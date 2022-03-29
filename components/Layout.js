import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="h-screen container mx-auto scroll-smooth">
        {children}
      </main>
    </div>
  );
}
