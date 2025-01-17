import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


type Props = {
    // Add any props you need for the component here
  };
  
  const ContactUs: React.FC<Props> = () => {
    return(
        <div className="flex justify-center items-center h-screen">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2  ">
                    <div className="flex flex-col justify-center  md:pr-10">
                        <p className="text-title">Contact Us</p>
                        <p className="text-subheading py-10">We're here to help! Whether you have questions, feedback, or inquiries, don't hesitate to reach out to us. Here's how you can get in touch:</p>
                    </div>
                    <div className="bg-black rounded-2xl ">
                    <div className="flex flex-col p-4   md:p-12 lg:mx-9  justify-center">
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
                                <p className="text-gray-500 pb-3 md:pb-5">Message (If Any) </p>
                                <div className="w-full  pb-3 md:pb-5">
                                <Input type="text" placeholder="Have any doubt about any program? feel free to ask!" className="bg-transparent h-20  text-white" />
                                </div>
                                <div className=" flex justify-start py-2 ">
                                  <Button variant={"offset"}>Submit </Button>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
  }
  export default ContactUs;