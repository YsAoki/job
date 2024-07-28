import { FC } from "react";
import { ApiJobsResult } from "../../../types/apiJobs";
import BreadCrumbs from "../../molcules/BreadCrumbs";
import { SBreadCrumbsLink, SBreadCrumbsText } from "../../molcules/BreadCrumbs/style";
import Header from "../../organisms/Header";
import SearchResultForm from "../../organisms/SearchResultForm";
import { SBreadCrumbsMargin, SContainer, SSearchFormAndValueFlexBox } from "./style";

type SearchResultLayoutProps = {
  userIsLogin: boolean;
  setUserIsLogin: () => void;
  jobsInfo: ApiJobsResult;
  jobsInfoLoading: boolean;
  jobsInfoError: Error | null;
};

type Props = SearchResultLayoutProps;

const SearchResultLayout: FC<Props> = ({ userIsLogin, setUserIsLogin, jobsInfo, jobsInfoLoading, jobsInfoError }) => {
  // パンくずリストを生成するReactNode配列
  const breadCrumbsArr = [
    <SBreadCrumbsLink to={"/"}>トップ</SBreadCrumbsLink>,
    <SBreadCrumbsText>求人検索結果一覧</SBreadCrumbsText>,
  ];
  const jobsInfoResult = jobsInfo ? jobsInfo.result : null;

  return (
    <>
      <Header userIsLogin={true} />
      <SContainer>
        <SBreadCrumbsMargin>
          <BreadCrumbs list={breadCrumbsArr} />
        </SBreadCrumbsMargin>
        <SSearchFormAndValueFlexBox>
          {jobsInfoResult && <SearchResultForm aggregationsInfo={jobsInfoResult.aggregations} />}

        </SSearchFormAndValueFlexBox>
      </SContainer>
    </>
  );
};

export default SearchResultLayout;
