import "react";
import HeroSection from "../components/HeroSection";
import ActBlogSection from "../components/BlogactSection";
import ApropoSection from "../components/ApropoSection";

function Home() {
  return (
    <>
      <HeroSection />
      <div id="actualite-blog">
        <ActBlogSection />
      </div>
       <div id="apropo">
        <ApropoSection />
      </div>
    </>
  );
}

export default Home;
