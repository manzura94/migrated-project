import AboutSection from "./components/AboutSection";
import Download from "./components/Download";
// import Favorite from "./components/Favourite";
import Homepage from "./components/HomePage";

export default function Home() {
  return (
    <main className="mainpage">
      <Homepage />
      {/* <Favorite/> */}
      <AboutSection />
      <Download />
    </main>
  );
}
