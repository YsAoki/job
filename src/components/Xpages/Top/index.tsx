import { FC, useEffect, useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { ApiJobsResult } from "../../../types/apiJobs"; // ApiJobsResultのインポートを確認してください
import TopLayout from "../../templetes/TopLayout";

const Top: FC = () => {
  const [userIsLogin, setUserIsLogin] = useState(false);
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
    <TopLayout
      userIsLogin={userIsLogin}
      setUserIsLogin={() => setUserIsLogin}
      jobsInfo={jobsInfo as ApiJobsResult}
      jobsInfoLoading={jobsInfoLoading}
      jobsInfoError={jobsInfoError}
    />
  );
};

export default Top;
