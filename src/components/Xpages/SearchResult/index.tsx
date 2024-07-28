import { FC, useEffect, useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import useQueryParams from "../../../hooks/useQueryParams";
import { ApiJobsResult, ResultQuerys } from "../../../types/apiJobs";
import SearchResultLayout from "../../templetes/SearchResultLayout";

const SearchResult: FC = () => {
  const [userIsLogin, setUserIsLogin] = useState(false);

  const query = useQueryParams();

  const resultQuerys: ResultQuerys = {
    keyword: query.getAll("kwd"), //キーワード検索
    employmentId: query.get("emp"), //雇用形態
    regionId: query.get("rId"), //地方
    prefectureId: query.get("pId"), //都道府県
    discerningConditionId: query.get("discerningCondition"), //こだわり条件から探す
  };

  const {
    data: jobsInfo,
    fetchData: fetchJobsInfo,
    loading: jobsInfoLoading,
    error: jobsInfoError,
  } = useFetchData<ApiJobsResult>("./jobs");

  useEffect(() => {
    fetchJobsInfo();
  }, [fetchJobsInfo]);

  return (
    <SearchResultLayout
      userIsLogin={true}
      setUserIsLogin={() => setUserIsLogin}
      jobsInfo={jobsInfo as ApiJobsResult}
      jobsInfoLoading={jobsInfoLoading}
      jobsInfoError={jobsInfoError}
    />
  );
};

export default SearchResult;
