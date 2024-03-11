import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { qnaContent, questions } from "./content";
import { QNACard } from "./_components/QNACard";
import { Accordion } from "@/components/ui/accordion";

interface Props {}

export const QnaSection: React.FC<Props> = () => {
  return (
    <section className="bg-white rounded-t-2xl relative">
      {/* <div className="absolute backdrop-blur-sm left-0 right-0 top-20 bottom-0">
        <div className=" absolute top-[2%] left-[20%]  w-[400px] h-[400px] rotate-45 bg-green-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
        <div className=" absolute bottom-[10%] right-[20%]  w-80 h-[60%] bg-red-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
      </div> */}
      <MaxWidthWrapper>
        <div className="py-[100px] flex flex-col relative">
          <div className="text-center flex flex-col gap-4  mb-6 md:mb-10">
            <h2 className="text-heading ">{qnaContent.title}</h2>
            <p className="text-subheading mx-auto">{qnaContent.description}</p>
          </div>
          <div className=" p-2  md:mx-20 xl:mx-32 relative">
            <Accordion type="single" collapsible className="w-full">
              {questions.map((qs) => (
                <QNACard key={qs.id} data={qs} />
              ))}
            </Accordion>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
