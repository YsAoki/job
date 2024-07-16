import { ComponentPropsWithoutRef, FC } from "react";
import { ItemsInfo } from "../../../types/apiJobs";
import Image from "../../atoms/Image";
import {
  SBottomIconWithWrapper,
  SCompanyNameText,
  SIconButtonLike,
  SIconWithText,
  SImageWrapper,
  SInfoContainer,
  SJobsDescription,
  STopNewArriveCard,
} from "./style";

type Props = ItemsInfo & ComponentPropsWithoutRef<"div">;
const TopNewArriveCard: FC<Props> = ({
  jobId,
  companyId,
  companyName,
  jobDescription,
  jobImage,
  publicationPeriod,
  publicationStatus,
  isFavorite,
  applicationStatus,
  jobResponsibilities,
  targetCandidates,
  employmentId,
  employmentName,
  discerningConditions,
  jobLocationText,
  salary,
  salaryIncreaseBonus,
  allowances,
  holidays,
  employeeBenefits,
  otherAllowances,
}) => {
  return (
    <STopNewArriveCard>
      <SImageWrapper>
        <Image src={jobImage} />
      </SImageWrapper>
      <SInfoContainer>
        <SCompanyNameText>{companyName}</SCompanyNameText>
        <SJobsDescription>{jobDescription}</SJobsDescription>
        <SBottomIconWithWrapper>
          <SIconWithText>{jobLocationText}</SIconWithText>
          <SIconWithText>{jobLocationText}</SIconWithText>
        </SBottomIconWithWrapper>
        <SIconButtonLike />
      </SInfoContainer>
    </STopNewArriveCard>
  );
};

export default TopNewArriveCard;
