import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Tech from "./Components/Tech";

function App() {
  return (
    <>
      {/* Background Container */}
      <div className="relative min-h-screen w-full bg-slate-950">
        {/* Radial Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        {/* Main Content */}
        <main className="flex flex-col items-center px-4 md:px-8 lg:px-18 pt-24">
          <Navbar></Navbar>
          <Hero></Hero>
          <Tech></Tech>
          <Project></Project>
          <Contact></Contact>
        </main>
      </div>
    </>
  );
}

export default App;
