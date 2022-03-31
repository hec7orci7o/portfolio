import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main className="container mx-auto scroll-smooth">{children}</main>
    </div>
  );
}
