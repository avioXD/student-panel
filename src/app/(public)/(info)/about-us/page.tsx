import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import Chooseuscard from "./_components/chooseus";
import Meetourteam from "./_components/meetourteam";
import React from "react";
import { chooseus, ourteam } from "./content";
import { Enquiryform } from "@/components/common/enquiry-form";
import { ScrollAreaVerticalDemo } from "./_components/whatwedo";
import ContactUs from "../contact-us/page";

type Props = {
  // Add any props you need for the component here
};

const AboutUs: React.FC<Props> = () => {
  return (
    <div>
      <div>
        <MaxWidthWrapper>
          <section className="h-auto">
            <div className="justify-center text-center align-middle  flex pt-10 md:pt-20 ">
              <div className=" w-screen lg:max-w-[800px]">
                <p className="text-title text-black text-center mb-4 leading-10">
                  Expertise Empowering Learning
                </p>
                <p className="text-title text-black text-center mb-4 font-bold leading-10">
                  Meet Our Team
                </p>
                <p className=" text-subheading text-black text-center  ">
                  Empowering lifelong learners worldwide! 🌍 Revolutionizing
                  education through accessible, innovative e-learning solutions.
                  Join us in shaping the future of learning! 🚀
                </p>
                <div className="text-center flex justify-center p-5">
                  <Button>Join Our Team </Button>
                </div>
              </div>
            </div>
          </section>
        </MaxWidthWrapper>
        <MaxWidthWrapper>
          <section className="flex  py-3 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" p-8 ">
            <Image src="https://s3-alpha-sig.figma.com/img/694e/66b2/ba5bb1e7aef9b2a7127d29bd96e40c92?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mTgERiyDUsYp2i7~FoMWoTx1WkaJsJTfFu8Ei5ypjxpMhvCkic5rqnIa2sYOGfghnCV7MtH5USTRGeaAn6cPG3mP9GpQrjL07yypmDH0P7Ydb~x0ahjtNvmifUw8pJWV2WKPX57WDPJXapJJI74iGp60Bu~MRN3eMnIGEOS9xbWP25oNJXP0AknGVBj673T9CXKvg2hhzoq3AV3NI8S3AYncDKp6MU2jxb5t6OPkx1v~I5svksR94GifDH~599Jyl7fp6Dh4K-yLrHLLq7DiOcIm6Lg59RXE0qEyiY9-SFdUI77W~-UF5yeCC4vyhnhqrs0ZH39gbP91NEqMsLpXig__" alt="Description of the image" className="w-full h-full rounded-xl shadow-2xl" />
            </div>
            <div className="flex sm:items-center">
            <div className=" md:p-8 ">
              <p className=" text-heading text-black  ">Meet The Founder</p>
              <p className="text-subheading  text-black py-5 ">
                Hey there, I'm Samiran Santra, the visionary behind our mission.
                My passion for empowering lifelong learners fuels every step of
                our journey. I'm committed to revolutionizing education, making
                it accessible to all. I believe in a future where learning knows
                no bounds, where anyone, anywhere, can access knowledge and
                grow. Join me in this transformative e-learning journey.
                Together, let's break barriers, ignite curiosity, and shape a
                world where everyone has the opportunity to thrive.
              </p>
              <p className="text-black font-bold">- Samiran Santra</p>
              <p className="p-5 text-gray-700">Founder, CEO</p>
            </div>
            </div>

            </div>

          </section>
        </MaxWidthWrapper>
        <MaxWidthWrapper>
          {" "}
          <section className="my-20">
            <p className="text-center flex text-heading justify-center  mb-5">
              Why Choose Us?
            </p>
            <div className=" grid grid-cols-1  md:grid-cols-2 gap-4">
              {chooseus &&
                chooseus.map((data, index) => (
                  <div key={index}>
                    <Chooseuscard data={data} />
                  </div>
                ))}
            </div>

          </section>
        </MaxWidthWrapper>

        <MaxWidthWrapper>
          
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col">
              <p className="text-heading text-dark md:py-3">What we do? 🤔</p>
              <p className="text-subheading text-dark pb-2 md:pb-6">We believe in Empowering learners with personalized paths, diverse courses 📚, and engaging interaction. Shape your journey  at your pace ⏳.</p>
              <div className=" flex justify-start py-2 ">
                  <Button >Join Our Team </Button>
              </div>
            </div>
            <div>
                <ScrollAreaVerticalDemo/>    
            </div>
          </div>
          

        </MaxWidthWrapper>

        <MaxWidthWrapper>
          <section className="my-20">
            <p className="text-center flex text-heading justify-center  mb-10">
              Meet our Team        
            </p>
            <div className=" grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
              
              {
                ourteam && 
                  ourteam.map((data,index)=>(
                    <div key={index}>
                        <Meetourteam data={data}/>
                    </div>
                  ))
              }
            </div>
            <div className="text-center flex justify-center p-5">
                  <Button>Show More </Button>
            </div>  
            

          </section>          
        </MaxWidthWrapper>

        <Enquiryform/>
        <ContactUs/>
      </div>
    </div>
  );
};

export default AboutUs;
