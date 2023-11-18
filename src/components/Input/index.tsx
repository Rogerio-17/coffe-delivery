import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyleContainer, InputStyled, InputWarpper, RightText } from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string,
    rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, rightText, error, ...props}, ref) => {
  return (
    <InputWarpper className={className}>
      
      <InputStyleContainer hasError={!!error}>
      <InputStyled {...props} ref={ref}></InputStyled>
      {rightText && <RightText>{rightText}</RightText>}
      </InputStyleContainer>
      {error && <p>{error}</p>}
    </InputWarpper>
  );
});
