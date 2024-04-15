import { ReactNode } from "react";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}
export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white rounded-xl drop-shadow-xl p-10">{children}</div>
  );
};
