export interface ButtonProps {
    text: string;
    handleClick: () => void;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
}