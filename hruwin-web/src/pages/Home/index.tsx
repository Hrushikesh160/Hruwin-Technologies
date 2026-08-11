import Hero from "../../components/sections/Hero";
import WhoWeAre from "../../components/sections/WhoWeAre";
import CompanyStory from "../../components/sections/CompanyStory";
function Home() {
  return (
    <div className="w-full">
      <Hero />
      <WhoWeAre />
      <CompanyStory />
    </div>
  );
}

export default Home;