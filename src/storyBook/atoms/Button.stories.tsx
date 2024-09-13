import { Meta, StoryFn } from "@storybook/react";
import Button from "../../components/atoms/Button";

// メタデータの作成
export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    fill: { control: "boolean" },
  },
} as Meta<typeof Button>;

// Templateの型付け
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  children: "ボタン",
  fill: false,
};
