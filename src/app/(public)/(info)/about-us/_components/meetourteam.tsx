import Image from "@/components/ui/image";
import { OurTeam } from "../content";

interface Props{
    data: OurTeam
}

const Meetourteam : React.FC<Props> =({
    data
}) =>{
    return(
        <div className="relative flex mx-auto  max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white   ">
                <div className="relative m-0 overflow-hidden rounded-xl shadow-none ">
                  <Image
                    src={data.image}
                    alt="ui/ux review check" />
                </div>
                <div className="py-6">
                  <h4 className="block  text-2xl antialiased font-semibold  text-black">
                    {data.name}
                  </h4>
                  <p className="block mt-3 text-subheading antialiased font-normal leading-relaxed text-black">
                    {data.designation}
                  </p>
                </div>
              </div>
    )
} 

export default Meetourteam;