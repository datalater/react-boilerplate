import { TransparentButton } from "./Button.styles";

interface IProps {
  children?: React.ReactNode;
}

const IconButton = ({ children }: IProps) => {
  return <TransparentButton>{children}</TransparentButton>;
};

export default IconButton;
