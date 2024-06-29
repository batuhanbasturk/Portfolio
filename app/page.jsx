import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
//Components
import Socials from "@/components/home/Socials";
import Photo from "@/components/home/Photo";
import Stats from "@/components/home/Stats";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*Photo*/}
          <Photo />
          {/*Text*/}
          <div className="xl:text-justify text-center mt-4">
            <div className="mb-8">
              <h3 className="text-tab dark:text-tertiary mb-2">
                Software Developer
              </h3>
              <h1>Batuhan Baştürk</h1>
            </div>
            <p className="max-w-[600px] mb-8">
              Newly graduated computer engineering student with a passion for
              frontend development. Seeking opportunities to improve skills in
              HTML-CSS-JS, Typescript, React and frameworks such as Next.js,
              Tailwind. Interested in an entry-level role as a frontend
              developer to continue learning and growth.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6 mb-8">
              <Button size="lg" className="flex items-center gap-2">
                <FaDownload />
                Download CV
              </Button>
              <Socials />
            </div>
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
