import { FC } from "react";
import { ApiJobsResult } from "../../../types/apiJobs";
import Header from "../../organisms/Header";
import TopHeroSearch from "../../organisms/TopHeroSearch";
import TopNewArrive from "../../organisms/TopNewArrive";
import TopSearchWorkPlace from "../../organisms/TopSearchWorkPlace";
import { STopContentsFlexBox } from "./style";

type TopLayoutProps = {
  userIsLogin: boolean;
  setUserIsLogin: () => void;
  jobsInfo: ApiJobsResult;
  jobsInfoLoading: boolean;
  jobsInfoError: Error | null;
};

type Props = TopLayoutProps;

const TopLayout: FC<Props> = ({ userIsLogin, setUserIsLogin, jobsInfo, jobsInfoLoading, jobsInfoError }) => {
  const jobsInfoResult = jobsInfo ? jobsInfo.result : null;

  return (
    <>
      <Header userIsLogin={true} />
      {jobsInfo && (
        <>
          <TopHeroSearch
            employmentStatuses={jobsInfoResult?.aggregations.employmentStatuses}
            locations={jobsInfoResult?.aggregations.locations}
          />
          <STopContentsFlexBox>
            <TopNewArrive userIsLogin={userIsLogin} items={jobsInfoResult?.items} />
            <TopSearchWorkPlace locations={jobsInfoResult?.aggregations.locations} />
            
          </STopContentsFlexBox>
        </>
      )}
    </>
  );
};

export default TopLayout;
