import React from "react";
import Image from "next/image";

interface WorkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  cta: React.ReactNode | React.ReactNode[];
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, cta }) => {
  return (
    <div className="w-[80%] cursor-pointer shadow-md flex-1 shadow-stone-600 md:w-full mx-auto md:mx-0 bg-white rounded-xl flex-col md:flex mb-14 ">
      <div>
        <Image
          width={600}
          height={300}
          className="transition-all duration-500 ease-in-out cursor-pointer"
          src={`
            https://picsum.photos/seed/${title}/500/300
        `}
          alt={title}
        />
      </div>
    </div>
  );
};

export default WorkCard;
