import { FC } from "react";
import { EmploymentStatusInfo, LocationInfo } from "../../../types/apiJobs";
import TopHeroSearchForm from "../TopHeroSearchForm";
import { STopHeroSearchWrapper } from "./style";

type Props = {
  employmentStatuses?: EmploymentStatusInfo[];
  locations?: LocationInfo[];
};

const TopHeroSearch: FC<Props> = ({ employmentStatuses, locations }) => {
  return (
    <STopHeroSearchWrapper>
      <TopHeroSearchForm employmentStatuses={employmentStatuses} locations={locations} />
    </STopHeroSearchWrapper>
  );
};

export default TopHeroSearch;
