import CheckBox from "../../components/atoms/CheckBox";

export default {
  title: "atoms/CheckBox",
  component: CheckBox,
};

export const CheckBoxNotChecked = () => {
  return <CheckBox isSelected={false} />;
};

export const CheckBoxChecked = () => {
  return <CheckBox isSelected={true} />;
};
