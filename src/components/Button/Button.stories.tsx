import Button from "./Button";

export default {
  title: "Component/Button",
  component: Button,
};

export const Default = () => {
  const task = {
    content: "출근하기",
    complete: false,
  };
  return <Button>버튼이닷</Button>;
};
