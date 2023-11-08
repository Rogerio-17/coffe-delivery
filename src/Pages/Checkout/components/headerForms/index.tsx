import { HeaderForm } from "./style";
import { ReactNode } from "react";

interface HeaderFormsProps {
    icon: ReactNode,
    title: string,
    description: string,
    color: "yellow-dark-800" | "purple-dark-800"
}

export function HeaderForms({icon, title, description, color}:HeaderFormsProps) {
  return (
    <HeaderForm color={color}>
      <span>
        {icon}
      </span>

      <div className="textMapLine">
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </HeaderForm>
  );
}
