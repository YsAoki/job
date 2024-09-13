import { FC, useEffect } from "react";
import { EMPTY_STRING, PREFECTURE_DEFAULT } from "../../../constans/default";
import useHoldingData from "../../../hooks/useHoldingData";
import useInput from "../../../hooks/useInput";
import useToggle from "../../../hooks/useToggle";
import { AggregationsInfo, Prefecture, ResultQueries } from "../../../types/apiJobs";
import { extractPrefectureData } from "../../../utils/forJobsResult";
import SearchResultFormKeyword from "../SearchResultFormKeyword";
import SearchResultFormLocation from "../SearchResultFormLocation";
import SearchResultFormOccupations from "../SearchResultFormOccupations";
import SearchResultFormOccupationsSelectModal from "../SearchResultFormOccupationsSelectModal";
import SearchResultFormLocationSelectModal from "../TopHeroSearchFormLocationSelectModal";
import { SForm, SPaper } from "./style";

type SearchResultFormProps = {
  aggregationsInfo: AggregationsInfo;
  resultQueries: ResultQueries;
};

type Props = SearchResultFormProps;

const SearchResultForm: FC<Props> = ({ aggregationsInfo, resultQueries }) => {
  const { locations, occupations } = aggregationsInfo;

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

  // 選択中の職種ID(分類)
  const { holdingData: userSelectedOccupationId, setHoldingData: setUserSelectedOccupationId } =
    useHoldingData<string>(EMPTY_STRING);
  // 選択中の職種ID(複数)
  const { holdingData: userSelectedOccupationItemsId, setHoldingData: setUserSelectedOccupationItemsId } =
    useHoldingData<string[]>([]);

  // 初回読み込み時にクエリに入力値の内容を反映する
  useEffect(() => {
    const rq = resultQueries;
    if (rq.keyword) setInputKeyword(rq.keyword.join(" "));
    if (rq.regionId) setUserSelectedRegionId(rq.regionId);
    if (rq.regionId && rq.prefectureId) {
      const prefectureVal = extractPrefectureData(locations, rq.regionId, rq.prefectureId); //都道府県情報を抽出
      setUserSelectedPrefecture(prefectureVal);
    }
  }, []);

  // モーダル画面表示の制御
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
          <SearchResultFormOccupations toggleShowOccupationsModal={toggleShowOccupationsModal} />
        </SForm>
      </SPaper>
      {showLocationModal && ( // 地名選択時にモーダル表示
        <SearchResultFormLocationSelectModal
          userSelectedRegionId={userSelectedRegionId}
          setUserSelectedRegionId={setUserSelectedRegionId}
          userSelectedPrefecture={userSelectedPrefecture}
          setUserSelectedPrefecture={setUserSelectedPrefecture}
          toggleShowModal={toggleShowLocationModal}
          locations={aggregationsInfo.locations}
        />
      )}
      {showOccupationsModal && ( //職種選択時にモーダル表示
        <SearchResultFormOccupationsSelectModal
          occupations={occupations}
          userSelectedOccupationId={userSelectedOccupationId}
          setUserSelectedOccupationId={setUserSelectedOccupationId}
          userSelectedOccupationItemsId={userSelectedOccupationItemsId}
          setUserSelectedOccupationItemsId={setUserSelectedOccupationItemsId}
          toggleShowOccupationsModal={toggleShowOccupationsModal}
        />
      )}
    </>
  );
};

export default SearchResultForm;
