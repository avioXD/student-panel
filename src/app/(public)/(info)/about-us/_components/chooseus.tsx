import Image from "@/components/ui/image"
import { WhyChooseUs } from "../content";

interface Props {
    data: WhyChooseUs
}

const Chooseuscard :React.FC<Props> =({
     data
}) =>{


    return (<div className="p-4   relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg w-full   flex-row align-middle">
    <div className="flex flex-col md:flex-row gap-3">
    <div className="relative rounded-xl w-full  md:w-2/6 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none ">
      <Image
        src={data.image}
        alt="card-image"
        className=" w-full h-fit md:h-full object-cover "
      />
    </div>

    <div className="flex flex-col justify-center ">
      <h4 className="block mb-2 text-2xl font-semibold leading-snug tracking-normal text-black">
        {data.title}
      </h4>
      <p className="block mb-8  font-normal leading-relaxed text-gray-700">
       {data.content}
      </p>
    </div>
    </div>
  </div>)
}
export default Chooseuscard;