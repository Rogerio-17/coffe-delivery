import { ReactNode } from "react";
import { SectionTitleConatainer } from "./style";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  color: "yellow-dark-800" | "purple-dark-800";
}

export function SectionTitle({
  title,
  subtitle,
  icon,
  color,
}: SectionTitleProps) {
  return (
    <SectionTitleConatainer color={color}>
      <h6>{icon}</h6>
      <div>
        <span>{title}</span>
        <p>{subtitle}</p>
      </div>
    </SectionTitleConatainer>
  );
}
