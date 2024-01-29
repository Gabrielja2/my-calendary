import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ name, type = "text", ...rest }, ref) => {
        return (
            <>
                <input {...rest} type={type} name={name} ref={ref} />
            </>
        );
    }
);

Input.displayName = "Input";
