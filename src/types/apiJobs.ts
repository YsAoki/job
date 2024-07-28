// APIレスポンス
export type ApiJobsResult = {
  result: ResultInfo;
  status: boolean;
}

// 情報の結果
export type ResultInfo = {
  total: number;
  aggregations: AggregationsInfo;
  items: ItemsInfo[];
  pagination: PaginationInfo;
}

// 集計情報
export type AggregationsInfo = {
  discerningConditions: DiscerningConditionInfo[];
  locations: LocationInfo[];
  employmentStatuses: EmploymentStatusInfo[];
  occupations: OccupationsInfo[];
}

// こだわり条件から探す
export type DiscerningConditionInfo = {
  discerningConditionId: string;
  discerningConditionName: string;
  count: number;
}

// 地方一覧と県名
export type LocationInfo = {
  regionId: string;
  regionName: string;
  prefectures: Prefecture[];
}

export type Prefecture = {
  prefectureId: string;
  prefectureName: string;
}

// 雇用形態
export type EmploymentStatusInfo = {
  employmentId: string;
  name: string;
  count: number;
}

// 職種から探す
export type OccupationsInfo = {
  classificationId: string;
  name: string;
  count: number;
  items: OccupationsItems[];
}

export type OccupationsItems = {
  id: string;
  name: string;
  count: number;
}

// 新着求人
export type ItemsInfo = {
  jobId: string;
  companyId: string;
  companyName: string;
  jobDescription: string;
  jobImage: string;
  publicationStatus: string;
  publicationPeriod: { startDate: string; endDate: string };
  isFavorite: boolean;
  applicationStatus: string;
  jobResponsibilities: string; 
  targetCandidates: string;
  employmentId: string;
  employmentName: string;
  discerningConditions: DiscerningConditionDetail[];
  jobLocationText: string;
  salary: string;
  salaryIncreaseBonus: string;
  allowances: string;
  holidays: string;
  employeeBenefits: string;
  otherAllowances: string;
}

export type DiscerningConditionDetail = {
  discerningConditionId: string;
  discerningConditionName: string;
}

// ページネーション
export type PaginationInfo = {
  total: number;
  page: number;
  offset: number;
  isPrevActive: boolean;
  isNextActive: boolean;
}

// APIクエリパラメータ
export type ResultQuerys = {
  keyword:string[] | null, //キーワード検索
  employmentId: string | null, //雇用形態
  regionId: string | null, //地方
  prefectureId: string | null, //都道府県
  discerningConditionId: string | null, //こだわり条件から探す
};
