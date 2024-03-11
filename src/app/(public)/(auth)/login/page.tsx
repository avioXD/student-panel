import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
interface Props {}

const LoginPage: React.FC<Props> = () => {
  // Your code here
  return (
    <section className="bg-white h-screen  ">
        <div className="h-1/2 bg-black  ">
            <div className="absolute backdrop-blur-sm left-0 right-0 top-0 bottom-0 h-1/2">
              <div className=" absolute bottom-[10%] left-[20%]  w-[400px] h-[300px] rotate-30 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
              <div className=" absolute top-[10%] right-[35%]  w-[500px] h-[80%] bg-green-500  mix-blend-multiply filter blur-[100px] opacity-25 "></div>
              <div className=" absolute top-[10%] right-[10%] w-[500px] h-[80%] bg-violet-500  mix-blend-multiply filter blur-[100px] opacity-25 "></div>
            </div>
            <MaxWidthWrapper className="relative">
              <div className="justify-center align-middle flex items-center h-screen">
                <div className="lg:max-w-[500px]"  >
                  <div className="justify-center align-middle flex items-center pb-5 text-white text-4xl" >Welcome Back!</div>
                  <div className="justify-center align-middle flex items-center w-full  ">
                    <div className=" text-white text-xl">Login to access your account and continue your learning journey</div>
                  </div>
                  
                  <div className="justify-center align-middle flex items-center  pt-5">
                    <div className="block mx-auto md:max-w-[600px] lg:max-w-[500px] w-full 3xl:!max-w-[655px] px-8 py-5 bg-white shadow-2xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                    
                      <div className="flex gap-2 pt-3">
                        <div className="w-1/2 cursor-pointer">
                          <div className="rounded-[10px] border flex-row flex justify-start px-3 sm:!justify-center py-2 w-full items-center border-[#f1e7e7]">
                            <img className="pr-2" src="./images/Calendar.svg" alt="" />
                            <span className="text-sm lg:text-sm 2xl:text-base ">Login With Google</span>
                          </div>
                        </div>
                        <div className="w-1/2  cursor-pointer">
                          <div className="rounded-[10px] border flex-row flex justify-start px-3 sm:!justify-center py-2 w-full items-start border-[#f1e7e7]">
                            <img className="pr-2" src="./images/Clock.svg" alt="" />
                            <span className="text-sm lg:text-sm 2xl:text-base">Login With Github</span>
                          </div>
                        </div>
                      </div>


                      <div className="flex gap-2 pt-4 items-center">
                        <div className="w-1/3 flex justify-end"><div className="h-px bg-gray-400 w-full mr-2"></div></div>
                        <div className="w-1/3 flex justify-center"> Or login with</div>
                        <div className="w-1/3 flex justify-start"><div className="h-px bg-gray-400 w-full mr-2"></div></div>
                      </div>

                      <div className="pt-2 gap-y-2 ">
                        <div className="w-full pb-3 ">
                        <Input type="tel" placeholder="Phone Number"   />
                        </div>
                        <div className="w-full">
                          <div className="rounded-[10px] border flex-row flex justify-start  sm:!justify-start  w-full items-start ">
                          <Input type="tel" placeholder="Password"   />
                          </div>
                        </div>
                      </div>


                      
                      <div className="text-dark flex justify-end py-5 cursor-pointer">Forget Password?</div>
                      <Button className="w-full ">Login</Button>
                      <div className="text-dark flex justify-center py-5">Don’t have an account? <span className="text-sky-600 cursor-pointer pl-1">Register now</span></div>
                    
                    </div>
                    

                  </div>
                </div>
              </div>
            </MaxWidthWrapper>  
        </div>
    </section>
  );
};

export default LoginPage;
