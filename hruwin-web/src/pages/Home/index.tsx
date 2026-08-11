import Hero from "../../components/sections/Hero";
import WhoWeAre from "../../components/sections/WhoWeAre";
import CompanyStory from "../../components/sections/CompanyStory";
import Ecosystem from "../../components/sections/Ecosystem";
import Vision from "../../components/sections/Vision";
import CommunityCTA from "../../components/sections/CommunityCTA";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <WhoWeAre />
      <CompanyStory />
      <Ecosystem />
      <Vision />
      <CommunityCTA />
    </div>
  );
}

export default Home;