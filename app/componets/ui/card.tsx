import { ReactNode } from "react";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}
export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-[#F5F8FE] rounded-xl  p-10 md:h-[350px] h-[300px]">
      {children}
    </div>
  );
};
