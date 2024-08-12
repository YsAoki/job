import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { ApiJobsResult, ResultQueries } from "../../../types/apiJobs";
import SearchResultLayout from "../../templetes/SearchResultLayout";

const SearchResult: FC = () => {
  const [userIsLogin, setUserIsLogin] = useState(false);

  const [urlSearchParams] = useSearchParams();

  const resultQueries: ResultQueries = {
    keyword: urlSearchParams.getAll("kwd"), //キーワード検索
    employmentId: urlSearchParams.get("emp"), //雇用形態
    regionId: urlSearchParams.get("rId"), //地方
    prefectureId: urlSearchParams.get("pId"), //都道府県
    discerningConditionId: urlSearchParams.get("discerningCondition"), //こだわり条件から探す
  };

  const {
    data: jobsInfo,
    fetchData: fetchJobsInfo,
    loading: jobsInfoLoading,
    error: jobsInfoError,
  } = useFetchData<ApiJobsResult>("./jobs");

  useEffect(() => {
    fetchJobsInfo();
  }, []);

  return (
    <SearchResultLayout
      userIsLogin={true}
      setUserIsLogin={() => setUserIsLogin}
      jobsInfo={jobsInfo as ApiJobsResult}
      jobsInfoLoading={jobsInfoLoading}
      jobsInfoError={jobsInfoError}
      resultQueries={resultQueries}
    />
  );
};

export default SearchResult;
