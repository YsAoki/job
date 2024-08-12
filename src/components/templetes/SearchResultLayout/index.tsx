import { FC } from "react";
import { ApiJobsResult, ResultQueries } from "../../../types/apiJobs";
import BreadCrumbs from "../../molcules/BreadCrumbs";
import { SBreadCrumbsLink, SBreadCrumbsMargin, SBreadCrumbsText } from "../../molcules/BreadCrumbs/style";
import Header from "../../organisms/Header";
import SearchResultForm from "../../organisms/SearchResultForm";
import { SContainer, SSearchFormAndValueFlexBox } from "./style";

type SearchResultLayoutProps = {
  userIsLogin: boolean;
  setUserIsLogin: () => void;
  jobsInfo: ApiJobsResult | null;
  jobsInfoLoading: boolean;
  jobsInfoError: Error | null;
  resultQueries: ResultQueries;
};

type Props = SearchResultLayoutProps;

const SearchResultLayout: FC<Props> = ({
  userIsLogin,
  setUserIsLogin,
  jobsInfo,
  jobsInfoLoading,
  jobsInfoError,
  resultQueries,
}) => {
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
          {jobsInfoResult && (
            <SearchResultForm aggregationsInfo={jobsInfoResult.aggregations} resultQueries={resultQueries} />
          )}
        </SSearchFormAndValueFlexBox>
      </SContainer>
    </>
  );
};

export default SearchResultLayout;
