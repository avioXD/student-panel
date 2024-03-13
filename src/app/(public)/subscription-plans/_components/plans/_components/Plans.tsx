import { PlansModel } from "@/models/pricing/plans";
import { getPlans, getPricing } from "../content";
import { Table, TableHeader } from "@/components/ui/table";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
/**  */

interface Props {
  plan: "yearly" | "monthly";
}

const Plans: React.FC<Props> = async ({ plan }) => {
  const subscriptionPlans: PlansModel[] | null = await getPlans();
  const pricing: any = await getPricing();

  return (
    <div>
      <table className="w-full border-collapse bg-white  sticky top-20 mx-10">
        <thead className=" bg-white ">
          <tr className="h-28 ">
            <th className="w-3/12 border-b  border-r pl-4"></th>
            <th className="text-start border-b  border-r pl-4">
              {" "}
              {/* Add border-b class for bottom border */}
              <p className="text-heading mb-2">Starter</p>
              <p className="text-subheading font-normal">
                {!pricing[plan].starter ? (
                  <span className="text-green-600">FREE</span>
                ) : (
                  pricing[plan].starter
                )}
              </p>
            </th>
            <th className="text-start border-b  border-r pl-4 w-3/12">
              {" "}
              {/* Add border-b class for bottom border */}
              <p className="text-heading mb-2">Standard</p>
              <p className="text-subheading font-normal">
                ₹{pricing[plan].standard}
              </p>
            </th>
            <th className="text-start border-b  pl-4 w-3/12">
              {" "}
              {/* Add border-b class for bottom border */}
              <p className="text-heading mb-2">Premium</p>
              <p className="text-subheading font-normal">
                ₹{pricing[plan].premium}
              </p>
            </th>
          </tr>
        </thead>
      </table>{" "}
      <table className="w-full border-collapse bg-white mx-10">
        <thead className=" bg-white sticky top-0">
          <tr>
            <th className="w-3/12 "></th>
            <th className="text-start w-3/12 "></th>
            <th className="text-start  w-3/12  "> </th>
            <th className="text-start  w-3/12  "></th>
          </tr>
        </thead>
        <tbody>
          {subscriptionPlans &&
            [
              ...subscriptionPlans,
              ...subscriptionPlans,
              ...subscriptionPlans,
            ].map((plan) => (
              <tr key={plan.id} className="h-20">
                <td className="  border-r pl-4">{plan.feature}</td>{" "}
                {/* Add border-b class for bottom border */}
                <td className="  border-r  pl-4">
                  {plan.starter.feature}
                </td>{" "}
                {/* Add   class for bottom border */}
                <td className="  border-r  pl-4">
                  {plan.standard.feature}
                </td>{" "}
                {/* Add   class for bottom border */}
                <td className="   pl-4">{plan.premium.feature}</td>{" "}
                {/* Add border-b class for bottom border */}
              </tr>
            ))}
          <tr className="h-20">
            <td className="  border-r pl-4"> </td>{" "}
            {/* Add border-b class for bottom border */}
            <td className="  border-r  pl-4">
              <Button>Start Learning</Button>
            </td>{" "}
            {/* Add   class for bottom border */}
            <td className="  border-r  pl-4">
              <Button>Select Plan</Button>
            </td>{" "}
            {/* Add   class for bottom border */}
            <td className="   pl-4">
              <Button>Select Plan</Button>
            </td>{" "}
            {/* Add border-b class for bottom border */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Plans;
