import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getOffer, getPricing, rules } from "./content";
import { GoCheckCircle } from "react-icons/go";
import Plans from "./_components/Plans";

const PlanSection: React.FC = async () => {
  const offer = await getOffer();
  const pricing: any = await getPricing();
  return (
    <div className="relative">
      <div className="pb-[50px]">
        <Tabs defaultValue="monthly" className="mx-auto ">
          <MaxWidthWrapper className="mx-auto items-center flex flex-col ">
            {" "}
            <div className="mb-8  ">
              <TabsList className="grid grid-cols-2 w-[350px]  mx-auto">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
            </div>
            <div className="flex gap-x-8 mb-4 ">
              {rules.map((rule, index) => (
                <div
                  className="flex items-center gap-x-2  text-gray-800"
                  key={index}
                >
                  <GoCheckCircle />
                  <p className=" text-subheading">{rule}</p>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>

          {/* <p className="text-center text-subheading mb-4">{offer}</p> */}
          <TabsContent value="monthly" className="w-full px-10 ">
            <Plans plan="monthly" />
          </TabsContent>
          <TabsContent value="yearly" className="w-full px-10">
            <Plans plan="yearly" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlanSection;
