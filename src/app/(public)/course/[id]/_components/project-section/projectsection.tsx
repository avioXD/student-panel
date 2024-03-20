import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "@/components/ui/image";

import { Button } from "@/components/ui/button";




export const ProjectSection = () => {
    return (
        <section>
            <MaxWidthWrapper className="relative">
                <div className="text-heading text-black text-center mb-10">
                    Projects in this Program 
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  mx-auto">
                    <div className=" rounded-lg overflow-hidden border-[1px] shadow-sm hover:shadow-lg max-w-[600px]">
                        <div className="p-7">
                            <div>
                                <Image 
                                src="/assets/svgs/projects-icon.svg"
                                className="w-10"
                                />
                            </div>
                            <div className="text-subheading text-xl py-3 font-bold">Gopher It</div>
                            <p>Gopher It: A GoLang project streamlining task management with simplicity and efficiency, perfect for agile teams and individual productivity.</p>
                        </div>
                    </div>
                    <div className=" rounded-lg overflow-hidden border-[1px] shadow-sm hover:shadow-lg  max-w-[600px]">
                        <div className="p-7">
                            <div>
                                <Image 
                                src="/assets/svgs/projects-icon.svg"
                                className="w-10"
                                />
                            </div>
                            <div className="text-subheading text-xl py-3 font-bold">Gopher It</div>
                            <p>Gopher It: A GoLang project streamlining task management with simplicity and efficiency, perfect for agile teams and individual productivity.</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden border-[1px] shadow-sm hover:shadow-lg  max-w-[600px]">
                        <div className="p-7">
                            <div>
                                <Image 
                                src="/assets/svgs/projects-icon.svg"
                                className="w-10"
                                />
                            </div>
                            <div className="text-subheading text-xl py-3 font-bold">Gopher It</div>
                            <p>Gopher It: A GoLang project streamlining task management with simplicity and efficiency, perfect for agile teams and individual productivity.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-20 pb-10 gap-10">
                    <div className="  overflow-hidden bg-white  items-middle justify-end flex">
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
                    <div className="flex flex-col justify-center h-full ">
                        <div className="text-heading  pt-3 ">Live Practice Lab</div>
                        <div className="py-7">🚀 Dive into live coding on our interactive platform! Receive AI-driven recommendations for targeted review 🎯, ensuring you stay on track while mastering coding skills. 💻</div>
                        <Button className="w-full sm:w-full md:w-1/2 lg:w-1/2" >
                            Subscribe Plan
                        </Button>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default ProjectSection;