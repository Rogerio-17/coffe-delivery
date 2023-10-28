import { IntroDestaquesIncons } from "./style";
import { ReactNode } from "react";


interface InfoWithIconProps {
     cor: "yellow-dark-800" | "yellow-500" | "base-text-700" | "purple-500",
     content: string,
     icon: ReactNode,
}

export function InfoWithIcon({ cor, content, icon}: InfoWithIconProps) {
    return (
        <>
            <p><IntroDestaquesIncons cor={cor}>{icon}</IntroDestaquesIncons>{content}</p>
        </>
    )
}