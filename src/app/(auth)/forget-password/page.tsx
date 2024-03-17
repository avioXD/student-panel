import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
interface Props {}

const Page: React.FC<Props> = () => {
  // Your code here
  return (
    <section className="bg-white h-screen   ">
      <div className="h-1/2 bg-black  ">
        <div className="absolute backdrop-blur-sm left-0 right-0 top-0 bottom-0 h-1/2 overflow-hidden">
          <div className=" absolute bottom-[10%] left-[20%]  w-[400px] h-[300px] rotate-30 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
          <div className=" absolute top-[10%] right-[35%]  w-[500px] h-[80%] bg-green-500  mix-blend-multiply filter blur-[100px] opacity-25 "></div>
          <div className=" absolute top-[10%] right-[10%] w-[500px] h-[80%] bg-violet-500  mix-blend-multiply filter blur-[100px] opacity-25 "></div>
        </div>
        <MaxWidthWrapper className="relative">
          <div className="justify-center align-middle flex items-center h-screen">
            <div className=" w-screen lg:max-w-[400px]">
              <div className="text-heading text-white text-center mb-4">
                Forget your Password?
              </div>
              <div className=" text-subheading text-white text-center">
                Regain Access to Your Account with Ease
              </div>

              <div className="justify-center align-middle flex items-center  pt-5">
                <div className="block mx-auto md:max-w-[600px] lg:max-w-[500px] w-full 3xl:!max-w-[655px] px-8 py-5 bg-white shadow-2xl rounded-lg  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                  <h2 className="text-center mb-4">
                    Please provide the email or phone number associated with
                    your account
                  </h2>
                  <div className="pt-2 gap-y-2 mb-4">
                    <div className="w-full pb-3 ">
                      <Input type="tel" placeholder="Email Address" />
                    </div>
                    <p className="text-xs text-center text-gray-500">
                      An email/message will be sent to the provided email or
                      phone number{" "}
                    </p>
                  </div>
                  <Button className="w-full ">Send Link</Button>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Page;
