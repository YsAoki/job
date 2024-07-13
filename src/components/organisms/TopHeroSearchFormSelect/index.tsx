import { ChangeEvent, ComponentPropsWithoutRef, FC } from "react";
import { EmploymentStatusInfo } from "../../../types/apiJobs";
import Select from "../../atoms/Select";
import { STopHeroSearchFormSelectWrapper } from "./style";

type TopHeroSearchFormSelect = {
  employmentStatuses?: EmploymentStatusInfo[];
  userSelectEmploymentStatus: string;
  onChangeUserSelectEmploymentStatus: (E: ChangeEvent<HTMLSelectElement>) => void;
};

type Props = TopHeroSearchFormSelect & ComponentPropsWithoutRef<"select">;

const TopHeroSearchFormSelect: FC<Props> = ({
  employmentStatuses,
  userSelectEmploymentStatus,
  onChangeUserSelectEmploymentStatus,
  ...other
}) => {
  return (
    <STopHeroSearchFormSelectWrapper>
      <Select
        onChange={onChangeUserSelectEmploymentStatus}
        defaultValue={""}
        selectedValue={userSelectEmploymentStatus}
        {...other}
      >
        <option value={""}>雇用形態</option>
        {employmentStatuses?.map((item) => (
          <option key={item.employmentId} value={item.employmentId}>
            {item.name}
          </option>
        ))}
      </Select>
    </STopHeroSearchFormSelectWrapper>
  );
};

export default TopHeroSearchFormSelect;
