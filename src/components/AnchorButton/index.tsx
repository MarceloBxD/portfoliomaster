interface AnchorButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  inverse?: boolean;
  title: string;
}

export const AnchorButton = ({
  inverse,
  title,
  ...props
}: AnchorButtonProps) => {
  return (
    <a
      {...props}
      href="#courses"
      className={
        inverse
          ? "flex text-sm justify-center items-center rounded-md w-[224px] h-[60px] border border-solid border-black font-semibold py-4 px-10 "
          : `bg-[#0D0D0D] text-sm flex justify-center items-center hover:bg-white hover:text-black hover:border-black border-2 transition-all duration-300 w-[224px] h-[60px] font-semibold rounded-md py-4 px-10 text-center  text-white`
      }
    >
      {title}
    </a>
  );
};
