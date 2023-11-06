import React from "react";
import Image from "next/image";

interface WorkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  cta: React.ReactNode | React.ReactNode[];
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, cta }) => {
  return (
    <div className="w-[80%] md:w-full mx-auto md:mx-0 bg-white rounded-xl flex mb-14 ">
      <div className="w-2/3 py-[48px] pl-[114px] flex flex-col gap-1">
        <h3 className="font-work-sans text-[32px] font-semibold">{title}</h3>
        <p className="font-work-sans text-[#594F43] text-[24px]">
          {description}
        </p>
        <div className="font-work-sans text-[24px]">
          {Array.isArray(cta) ? cta.map((item) => item) : cta}
        </div>
      </div>
      <div className="w-1/3">
        <Image
          width={560}
          height={300}
          className="rounded-r-xl"
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
