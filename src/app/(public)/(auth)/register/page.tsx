import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Input, PasswordInput } from "@/components/ui/input";
interface Props {}

const RegisterPage: React.FC<Props> = () => {
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
                Welcome Back!
              </div>
              <div className=" text-subheading text-white text-center">
                Unlock a world of knowledge and begin your learning journey by
                creating your account
              </div>

              <div className="justify-center align-middle flex items-center  pt-5">
                <div className="block mx-auto md:max-w-[600px] lg:max-w-[500px] w-full 3xl:!max-w-[655px] px-8 py-5 bg-white shadow-2xl rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 w-100 gap-2 pt-3">
                    <div className="cursor-pointer ">
                      <Button
                        size={"sm"}
                        variant={"outline"}
                        className="gap-x-2 flex w-full   "
                      >
                        <Image src="/assets/icons/google.svg" width={22} />
                        Register With Google
                      </Button>
                    </div>
                    <div className=" cursor-pointer  ">
                      <Button
                        size={"sm"}
                        variant={"outline"}
                        className="gap-x-2 flex  w-full   "
                      >
                        <Image src="/assets/icons/github.svg" width={22} />
                        Register With GitHub
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 items-center">
                    <div className="md:w-1/4 flex justify-end">
                      <div className="h-px bg-gray-400 w-full mr-2"></div>
                    </div>
                    <div className="w-2/4 flex justify-center flex-1 md:flex-0">
                      {" "}
                      Or Register with
                    </div>
                    <div className="md:w-1/4 flex justify-start">
                      <div className="h-px bg-gray-400 w-full mr-2"></div>
                    </div>
                  </div>

                  <div className="pt-2 gap-y-2 ">
                    <div className="w-full pb-3 ">
                      <Input
                        type="tel"
                        placeholder="Phone Number/Email Address"
                      />
                    </div>
                    <div className="w-full">
                      <PasswordInput placeholder="Password" />
                    </div>
                  </div>

                  <Button className="w-full mt-5">Register Now</Button>
                  <div className="text-dark flex justify-center py-5 text-sm">
                    Already have an account?{" "}
                    <span className="text-sky-600 cursor-pointer pl-1">
                      Login now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default RegisterPage;
