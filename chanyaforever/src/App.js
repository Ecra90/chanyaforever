import Navbar from "./components/Navbar";
import AnimatedStars from "./components/AnimatedStars";
import FloatingParticles from "./components/FloatingParticles";
import Hero from "./components/Hero";
import FriendshipCounter from "./components/FriendshipCounter";
import MemoryCarousel from "./components/MemoryCarousel";
import PhotoGallery from "./components/PhotoGallery";
import DestinySection from "./components/DestinySection";
import MusicPlayer from "./components/MusicPlayer";
import Letter from "./components/Letter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AnimatedStars />
      <FloatingParticles />
      <Navbar />

      <Hero />
      <FriendshipCounter />
      <MemoryCarousel />
      <PhotoGallery />
      <DestinySection />
      <MusicPlayer />
      <Letter />
      <Footer />
    </>
  );
}

export default App;
