import { FC } from "react";
import { OccupationsInfo } from "../../../types/apiJobs";
import { isEqual, twoArraysEqual } from "../../../utils";
import Button from "../../atoms/Button";
import Overlay from "../../atoms/Overlay";
import ScrollCard from "../../molcules/ScrollCard";
import ScrollCardChecked from "../../molcules/ScrollCardChecked";
import {
  SAlertUserTodo,
  SButtonWrapper,
  SCategoryTitle,
  SContainer,
  SPaperBox,
  SScrollBox,
  SSelectArea,
  SSelectAreaWrapper,
  STitleText,
} from "./style";

type SearchResultFormOccupationsSelectModalProps = {
  occupations: OccupationsInfo[];
  userSelectedOccupationId: string;
  setUserSelectedOccupationId: (occupationId: string) => void;
  userSelectedOccupationItemsId: string[];
  setUserSelectedOccupationItemsId: (id: string[]) => void;
  toggleShowOccupationsModal: () => void;
};
// holdingData: userSelectedOccupationItemsId, setHoldingData: setUserSelectedOccupationItemsId
type Props = SearchResultFormOccupationsSelectModalProps;

const SearchResultFormOccupationsSelectModal: FC<Props> = ({
  occupations,
  userSelectedOccupationId,
  setUserSelectedOccupationId,
  userSelectedOccupationItemsId,
  setUserSelectedOccupationItemsId,
  toggleShowOccupationsModal,
}) => {
  // 選択中のoccupationIdと一致するオブジェクトを抽出
  const extractSelectedOccupation: OccupationsInfo | undefined = occupations.find((occupation) =>
    isEqual(occupation.classificationId, userSelectedOccupationId)
  );

  // 職種の大カテゴリの選択を管理
  const handleOccupationClick = (occupationId: string) => {
    setUserSelectedOccupationId(occupationId);
  };

  const addOrDelThisClassificationId = (classificationId: string) => {
    if (userSelectedOccupationItemsId.includes(classificationId)) {
      //すでに管理内容に含まれていた場合は削除する。
      const v = userSelectedOccupationItemsId.filter((val) => !isEqual(val, classificationId));
      return setUserSelectedOccupationItemsId(v);
    }
    const newArr = [...userSelectedOccupationItemsId];
    newArr.push(classificationId);
    setUserSelectedOccupationItemsId(newArr);
  };

  // チェックボックス「全て」を選択した際。state管理中の配列が引数。
  const onClickAllClassificationId = (stateArr: string[]) => {
    const arr = extractSelectedOccupation ? extractSelectedOccupation?.items.map((item) => item.id) : [];
    console.log(twoArraysEqual(arr, stateArr));
  };

  const thisItemIdExistsStateArr = (state: string[], id: string): boolean => state.includes(id);

  const onClickReset = () => {
    toggleShowOccupationsModal();
    // ステートのリセットも忘れず
  };

  return (
    <>
      <Overlay>
        <SPaperBox onClick={(e) => e.stopPropagation()}>
          <SContainer>
            <STitleText tag="h3">職種</STitleText>
            <SSelectAreaWrapper>
              <SSelectArea>
                <SCategoryTitle>分類</SCategoryTitle>
                <SScrollBox>
                  {occupations?.map((occupation) => (
                    <ScrollCard
                      key={occupation.classificationId}
                      isSelected={isEqual(occupation.classificationId, userSelectedOccupationId)}
                      onClick={() => handleOccupationClick(occupation.classificationId)}
                    >
                      {occupation.name}
                    </ScrollCard>
                  ))}
                </SScrollBox>
              </SSelectArea>
              <SSelectArea>
                <SCategoryTitle>職種</SCategoryTitle>
                <SScrollBox>
                  {extractSelectedOccupation && ( // 分類選択済みの場合
                    <>
                      <ScrollCardChecked
                        isSelected={true}
                        onClick={() => onClickAllClassificationId(userSelectedOccupationItemsId)}
                      >
                        全て
                      </ScrollCardChecked>
                      {extractSelectedOccupation.items.map((item) => (
                        <ScrollCardChecked
                          key={item.id}
                          isSelected={thisItemIdExistsStateArr(userSelectedOccupationItemsId, item.id)}
                          onClick={() => addOrDelThisClassificationId(item.id)}
                        >
                          {item.name}
                        </ScrollCardChecked>
                      ))}
                    </>
                  )}
                  {!extractSelectedOccupation && ( //分類未選択または一致無しの場合
                    <SAlertUserTodo>分類を選択してください</SAlertUserTodo>
                  )}
                </SScrollBox>
              </SSelectArea>
            </SSelectAreaWrapper>
            <SButtonWrapper>
              <Button onClick={onClickReset}>リセット</Button>
              <Button fill={true} onClick={toggleShowOccupationsModal}>
                決定
              </Button>
            </SButtonWrapper>
          </SContainer>
        </SPaperBox>
      </Overlay>
    </>
  );
};

export default SearchResultFormOccupationsSelectModal;
