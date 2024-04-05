import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { Input,  } from "../ui/input";
import { Button } from "../ui/button";

interface Props {}

export const Enquiryform: React.FC<Props> = () => {
    return (
        <section className="pb-10">
            <MaxWidthWrapper>
                <div className="bg-black rounded-2xl ">
                    <div className="p-3  md:p-5 grid grid-cols-1 md:grid-cols-2 ">
                        <div className="flex flex-col p-1 md:p-16 justify-center">
                            <p className="text-heading text-white md:py-3">Ready to Get Started?</p>
                            <p className="text-subheading text-white pb-2 md:pb-6">Join us, make a difference globally. Apply to become a trainer and share your expertise! 🌍✨</p>
                            <div className="  overflow-hidden bg-white   items-middle justify-end  flex rounded-md">
                                <video
                                autoPlay={false}
                                loop
                                muted
                                mediaGroup="hero-video"
                                controlsList="nodownload"
                                className="overflow-hidden rounded-md aspect-video bg-black  w-[600px]"
                                poster="/assets/images/hero-video-poster.png"
                                >
                                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="flex flex-col p-1  md:p-16 lg:mx-9  justify-center">
                            <div className="py-2  ">
                                <div className="w-full  pb-3 md:pb-5  ">
                                <Input
                                    type="text"
                                    placeholder="Full Name"
                                    className="bg-transparent  text-white"
                                />
                                </div>
                                <div className="w-full pb-3 md:pb-5 ">
                                <Input
                                    type="number"
                                    placeholder="Phone Number"
                                    className="bg-transparent  text-white"
                                   
                                />
                                </div>
                                <div className="w-full pb-3 md:pb-5 ">
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-transparent text-white"
                                />
                                </div>
                                <p className="text-gray-500 pb-3 md:pb-5">Select a domain you are experienced in</p>
                                <div className="w-full pb-3 md:pb-5">
                                <Input type="text" placeholder="Select Domain" className="bg-transparent  text-white" />
                                </div>
                                <div className=" flex justify-start py-2 ">
                                  <Button variant={"offset"}>Apply Now </Button>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                
            </MaxWidthWrapper>
        </section>
    )
}