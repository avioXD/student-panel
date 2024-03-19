import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection: React.FC<any> = () => {
  return (
    <div>
      <section className="relative  min-h-[80vh]  pb-10  flex items-center bg-white">
        <MaxWidthWrapper className="">
          <div className="lg:w-1/2 md:w-2/3 sm:text-center lg:text-start md:text-left text-center">
            <div className="text-5xl leading-[60px]">
              Step Into <span className="font-bold">Success</span> with Curated Learning Paths
            </div>
            <div className="lg:text-start text-lg pt-8 leading-[30px] md:text-left sm:text-center">
              Start your journey with our curated paths 🚀. Achieve your goals and advance your career with expert guidance and flexible learning options. Explore, learn, succeed! 📚💡
            </div>
            
          </div>
          <div className="lg:text-start mx-auto md:mx-0 pt-8 sm:text-center md:text-left text-center">
              <Link href="all-programs">
                <Button>Explore Program</Button>
              </Link>
            </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default HeroSection;
