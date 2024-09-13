import { isEqual } from ".";
import { PREFECTURE_DEFAULT } from "../constans/default";
import { LocationInfo, Prefecture } from "../types/apiJobs";

// 選択中の都道府県情報を抽出する。
export const extractPrefectureData = (locationData: LocationInfo[], targetRegionId: string, targetPrefectureId: string): Prefecture => {
  const targetRegion = locationData.find((region) => isEqual(region.regionId, targetRegionId)); 
  const targetPrefecture = targetRegion?.prefectures.find((prefecture) =>
    isEqual(prefecture.prefectureId, targetPrefectureId)
  );
  if(!targetPrefecture) return PREFECTURE_DEFAULT //該当が存在しなかった場合は未選択状態の都道府県を返却
  return targetPrefecture
}