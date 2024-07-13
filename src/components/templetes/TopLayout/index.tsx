import { FC } from "react";
import { ApiJobsResult } from "../../../types/apiJobs";
import Header from "../../organisms/Header";
import TopHeroSearch from "../../organisms/TopHeroSearch";

type Props = {
  userIsLogin: boolean;
  setUserIsLogin: () => void;
  jobsInfo: ApiJobsResult;
  jobsInfoLoading: boolean;
  jobsInfoError: Error | null;
};

const TopLayout: FC<Props> = ({ userIsLogin, setUserIsLogin, jobsInfo, jobsInfoLoading, jobsInfoError }) => {
  const jobsInfoResult = jobsInfo ? jobsInfo.result : null;

  return (
    <>
      <Header userIsLogin={true} />
      {jobsInfo && (
        <TopHeroSearch
          employmentStatuses={jobsInfoResult?.aggregations.employmentStatuses}
          locations={jobsInfoResult?.aggregations.locations}
        />
      )}
    </>
  );
};

export default TopLayout;
