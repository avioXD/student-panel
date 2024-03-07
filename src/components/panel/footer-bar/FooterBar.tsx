import MaxWidthWrapper from "../MaxWidthWrapper";
import { FooterOptionsCard } from "./_components/OptionsCard";
import {
  LinksSectionContent,
  companySectionContent,
  programCategorySectionContent,
  socialMediaSectionContent,
} from "./content";

export default function FooterBar() {
  return (
    <section className="relative bg-black rounded-t-2xl overflow-hidden">
      <div className="absolute backdrop-blur-sm left-0 right-0 top-20 bottom-0">
        <div className=" absolute bottom-[10%] left-[10%]  w-[400px] h-[400px] rotate-45 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
        <div className=" absolute top-[10%] right-[40%]  w-[400px] h-[60%] bg-green-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
        <div className=" absolute top-[10%] right-[10%] w-[400px] h-[60%] bg-violet-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
      </div>

      <MaxWidthWrapper>
        <div className="my-[60px] flex flex-col relative mx-4 rounded-xl border-2 border-gray-600   ">
          <div className="  p-8">
            {" "}
            <div className="mb-8 ">
              <img
                src="/assets/logo/logo-offset.svg"
                alt="Dataspace Academy Logo"
                className="h-12 mx-auto md:mx-0   "
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-1">
                <FooterOptionsCard data={companySectionContent} />
              </div>
              <div className="col-span-1">
                <FooterOptionsCard data={programCategorySectionContent} />
              </div>
              <div className="col-span-1">
                <FooterOptionsCard data={LinksSectionContent} />
              </div>
              <div className="col-span-1">
                <div className=" text-white">
                  <h3 className="text-lg font-semibold mb-4">
                    {socialMediaSectionContent.title}
                  </h3>
                  <ul className="flex  gap-2 md:gap-8 ">
                    {socialMediaSectionContent.options.map((option) => (
                      <li
                        key={option.id}
                        className="text-sm mb-1 cursor-pointer"
                      >
                        <a
                          href={option ? option.link : ""}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={option.icon} alt={option.label} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
