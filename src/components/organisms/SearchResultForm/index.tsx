import { FC, useEffect } from "react";
import { EMPTY_STRING, PREFECTURE_DEFAULT } from "../../../constans/default";
import useHoldingData from "../../../hooks/useHoldingData";
import useInput from "../../../hooks/useInput";
import useToggle from "../../../hooks/useToggle";
import { AggregationsInfo, Prefecture, ResultQueries } from "../../../types/apiJobs";
import { isEqual } from "../../../utils";
import SearchResultFormKeyword from "../SearchResultFormKeyword";
import SearchResultFormLocation from "../SearchResultFormLocation";
import SearchResultFormLocationSelectModal from "../TopHeroSearchFormLocationSelectModal";
import { SForm, SPaper } from "./style";

type SearchResultFormProps = {
  aggregationsInfo: AggregationsInfo;
  resultQueries: ResultQueries;
};

type Props = SearchResultFormProps;

const SearchResultForm: FC<Props> = ({ aggregationsInfo, resultQueries }) => {
  //フリーワード検索
  const {
    input: inputKeyword,
    onChangeInput: onChangeInputKeyword,
    setInput: setInputKeyword,
  } = useInput(EMPTY_STRING);

  // 勤務地(地方名は選択済みのIDを文字列で管理、都道府県は選択済みのオブジェクトを管理している)
  // 地方選択
  const { holdingData: userSelectedRegionId, setHoldingData: setUserSelectedRegionId } = useHoldingData(EMPTY_STRING);
  // 都道府県名選択
  const { holdingData: userSelectedPrefecture, setHoldingData: setUserSelectedPrefecture } =
    useHoldingData<Prefecture>(PREFECTURE_DEFAULT);

  // 初回読み込み時にクエリに入力値の内容を反映する
  useEffect(() => {
    const rq = resultQueries;
    if (rq.keyword) setInputKeyword(rq.keyword.join(" "));
    if (rq.regionId) setUserSelectedRegionId(rq.regionId);
    if (rq.regionId && rq.prefectureId) {
      // 都道府県名をセット
      const targetRegion = aggregationsInfo.locations.find((region) => isEqual(rq.regionId, region.regionId)); //該当地方情報を抽出する
      const targetPrefecture = targetRegion?.prefectures.find((prefecture) =>
        isEqual(rq.prefectureId, prefecture.prefectureId)
      );
      if (targetPrefecture) setUserSelectedPrefecture(targetPrefecture); //選択中の都道府県情報セット
    }
  }, []);

  // モーダル制御
  const { toggle: showLocationModal, changeToggle: toggleShowLocationModal } = useToggle(); //勤務地選択
  const { toggle: showOccupationsModal, changeToggle: toggleShowOccupationsModal } = useToggle(); // 職種選択

  return (
    <>
      <SPaper>
        <SForm>
          <SearchResultFormKeyword inputKeyword={inputKeyword} onChangeInputKeyword={onChangeInputKeyword} />
          <SearchResultFormLocation
            toggleShowLocationModal={toggleShowLocationModal}
            selectedPrefecture={userSelectedPrefecture}
          />
        </SForm>
      </SPaper>
      {showLocationModal && ( // 地名選択時にモーダルを表示
        <SearchResultFormLocationSelectModal
          userSelectedRegionId={userSelectedRegionId}
          setUserSelectedRegionId={setUserSelectedRegionId}
          userSelectedPrefecture={userSelectedPrefecture}
          setUserSelectedPrefecture={setUserSelectedPrefecture}
          toggleShowModal={toggleShowLocationModal}
          locations={aggregationsInfo.locations}
        />
      )}
    </>
  );
};

export default SearchResultForm;
