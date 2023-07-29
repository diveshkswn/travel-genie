export interface PropsTypes {
  placeholder?: string;
  handleSearch?: (prompt: string, args: any) => void;
  className?: string;
  type?: string;
  required?: boolean;
  prompt?: string;
  searchClassName?: string;
  ref?: React.Ref<HTMLInputElement>;
  callback?: () => void;
}
