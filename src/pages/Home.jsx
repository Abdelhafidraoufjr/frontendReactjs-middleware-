import "react";
import HeroSection from "../components/HeroSection";
import ActBlogSection from "../components/BlogactSection";
import ApropoSection from "../components/ApropoSection";
import Faqs from "../components/FaqsSection"

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
            <div id="faqs">
                <Faqs />
            </div>
        </>
    );
}

export default Home;
