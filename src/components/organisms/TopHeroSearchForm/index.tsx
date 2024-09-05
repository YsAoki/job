import { FC, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { EMPTY_STRING, PREFECTURE_DEFAULT } from "../../../constans/default";
import { SPACE_SPLIT_PATTERN } from "../../../constans/pettern";
import useHoldingData from "../../../hooks/useHoldingData";
import useInput from "../../../hooks/useInput";
import useSelect from "../../../hooks/useSelect";
import useToggle from "../../../hooks/useToggle";
import { EmploymentStatusInfo, LocationInfo, Prefecture } from "../../../types/apiJobs";
import { isEqual } from "../../../utils";
import TopHeroSearchFormKeywordInput from "../TopHeroSearchFormKeywordInput";
import TopHeroSearchFormLocationInput from "../TopHeroSearchFormLocationInput";
import TopHeroSearchFormLocationSelectModal from "../TopHeroSearchFormLocationSelectModal";
import TopHeroSearchFormSelect from "../TopHeroSearchFormSelect";
import { SContainer, SForm, SPaperBox, SSubmitButton } from "./style";

type Props = {
  employmentStatuses?: EmploymentStatusInfo[];
  locations?: LocationInfo[];
};

const TopHeroSearchForm: FC<Props> = ({ employmentStatuses, locations }) => {
  const navigate = useNavigate();

  // 雇用形態
  const { select: userSelectEmploymentStatus, onChangeSelect: onChangeUserSelectEmploymentStatus } =
    useSelect(EMPTY_STRING);

  // 勤務地(地方名は選択済みのIDを文字列で管理、都道府県は選択済みのオブジェクトを管理している)
  // 地方選択
  const { holdingData: userSelectedRegionId, setHoldingData: setUserSelectedRegionId } = useHoldingData(EMPTY_STRING);
  // 都道府県名選択
  const { holdingData: userSelectedPrefecture, setHoldingData: setUserSelectedPrefecture } =
    useHoldingData<Prefecture>(PREFECTURE_DEFAULT);
  // 都道府県のみ選択状況をオブジェクト管理しているため、idのみ抽出。
  const selectedPrefectureIdExtract = userSelectedPrefecture.prefectureId;
  // モーダル表示のスイッチ
  const { toggle: showModal, changeToggle: toggleShowModal } = useToggle(false);

  // フリーワード検索
  const { input: keywordVal, onChangeInput: onChangeKeywordVal } = useInput(EMPTY_STRING);

  const onSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (userSelectEmploymentStatus) queryParams.set("emp", userSelectEmploymentStatus); //雇用形態
    if (userSelectedRegionId) queryParams.set("rId", userSelectedRegionId); //地方名称
    if (selectedPrefectureIdExtract) queryParams.set("pId", selectedPrefectureIdExtract); //都道府県名称
    if (keywordVal) {
      const keywordArr = keywordVal.split(SPACE_SPLIT_PATTERN);
      keywordArr.forEach((item) => {
        queryParams.append("kwd", item);
      }); //キーワード検索
    }
    // 都道府県が選択されていないかった場合はクエリから地方の選択状態を削除する。
    const prefectureIsDefault = isEqual(userSelectedPrefecture, PREFECTURE_DEFAULT);
    if (prefectureIsDefault) queryParams.delete("rId");

    const url = `/jobs/search-result?${queryParams.toString()}`;
    navigate(url);
  };

  return (
    <SPaperBox>
      <SContainer>
        <SForm onSubmit={onSubmitEvent}>
          <TopHeroSearchFormSelect
            employmentStatuses={employmentStatuses}
            userSelectEmploymentStatus={userSelectEmploymentStatus}
            onChangeUserSelectEmploymentStatus={onChangeUserSelectEmploymentStatus}
          />
          <TopHeroSearchFormLocationInput
            userSelectedPrefecture={userSelectedPrefecture.prefectureName}
            toggleShowModal={toggleShowModal}
            placeholder="勤務地"
          />
          <TopHeroSearchFormKeywordInput
            keywordVal={keywordVal}
            onChangeKeywordVal={onChangeKeywordVal}
            placeholder="キーワード"
          />
          <SSubmitButton type="submit" fill={true}>
            検索
          </SSubmitButton>
        </SForm>
      </SContainer>
      {showModal && (
        <TopHeroSearchFormLocationSelectModal
          locations={locations}
          userSelectedRegionId={userSelectedRegionId}
          setUserSelectedRegionId={setUserSelectedRegionId}
          userSelectedPrefecture={userSelectedPrefecture}
          setUserSelectedPrefecture={setUserSelectedPrefecture}
          toggleShowModal={toggleShowModal}
        />
      )}
    </SPaperBox>
  );
};

export default TopHeroSearchForm;
