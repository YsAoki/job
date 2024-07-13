import { FC, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { PREFECTURE_DEFAULT } from "../../../constatns";
import useHoldingData from "../../../hooks/useHoldingData";
import useInput from "../../../hooks/useInput";
import useSelect from "../../../hooks/useSelect";
import useToggle from "../../../hooks/useToggle";
import { EmploymentStatusInfo, LocationInfo, Prefecture } from "../../../types/apiJobs";
import TopHeroSearchFormKeywordInput from "../TopHeroSearchFormKeywordInput";
import TopHeroSearchFormLocationInput from "../TopHeroSearchFormLocationInput";
import TopHeroSearchFormLocationSelectModal from "../TopHeroSearchFormLocationSeletModal";
import TopHeroSearchFormSelect from "../TopHeroSearchFormSelect";
import { SContainer, SForm, SPaperBox, SSubmitButton } from "./style";

type Props = {
  employmentStatuses?: EmploymentStatusInfo[];
  locations?: LocationInfo[];
};

const TopHeroSearchForm: FC<Props> = ({ employmentStatuses, locations }) => {
  const navigate = useNavigate();

  // 雇用形態
  const { select: userSelectEmploymentStatus, onChangeSelect: onChangeUserSelectEmploymentStatus } = useSelect("");

  // 勤務地
  // 地方選択
  const { holdingData: userSelectedRegionId, setHoldingData: setUserSelectedRegionId } = useHoldingData("");
  // 都道府県名選択
  const { holdingData: userSelectedPrefecture, setHoldingData: setUserSelectedPrefecture } =
    useHoldingData<Prefecture>(PREFECTURE_DEFAULT);
  // 都道府県のみ選択状況をオブジェクト管理しているため、idのみ抽出。
  const selectedPrefectureIdExtract = userSelectedPrefecture.prefectureId;
  // モーダル表示のスイッチ
  const { toggle: showModal, changeToggle: toggleShowModal } = useToggle(false);

  // フリーワード検索
  const { input: keywordVal, onChangeInput: onChangeKeywordVal } = useInput("");

  const onSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (userSelectEmploymentStatus) queryParams.set("emp", userSelectEmploymentStatus);
    if (selectedPrefectureIdExtract) queryParams.set("pId", selectedPrefectureIdExtract);
    if (keywordVal) queryParams.set("kwd", keywordVal);
    navigate("/?" + queryParams.toString());
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
