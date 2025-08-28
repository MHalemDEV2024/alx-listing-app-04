import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center bg-p3 px-3 w-auto h-[19px]] rounded-full">
      <p className="text-sm font-medium text-[12.5px] text-black">{title}</p>
    </div>
  );
};

export default Pill;