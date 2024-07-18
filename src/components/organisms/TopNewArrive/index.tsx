import { FC, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { TOP_PAGE_SLIDE_NUMBER } from "../../../config/Top";
import { ItemsInfo } from "../../../types/apiJobs";
import Container from "../../atoms/Container";
import SectionTitle from "../../molcules/SectionTitle";
import SwiperArrowButton from "../../molcules/SwiperArrowButton";
import TopNewArriveCard from "../TopNewArriveCard";
import { SSwiperWrapper } from "./style";

type TopNewArriveProps = {
  userIsLogin: boolean;
  items?: ItemsInfo[];
};

type Props = TopNewArriveProps;

const TopNewArrive: FC<Props> = ({ userIsLogin, items }) => {
  const swiperRef = useRef<any | null>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const updateActiveIndex = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const onClickSlidePrev = () => {
    swiperRef.current?.slidePrev();
  };
  const onClickSlideNext = () => {
    swiperRef.current?.slideNext();
  };

  // スライダーのボタン表示を行う
  const showSlidePrev: boolean = activeIndex !== 0;
  const showSlideNext: boolean = items ? activeIndex < items.length - TOP_PAGE_SLIDE_NUMBER : false;

  return (
    <Container>
      <SectionTitle>新着求人</SectionTitle>
      <SSwiperWrapper>
        {showSlidePrev && <SwiperArrowButton direction="left" onClick={onClickSlidePrev} />}
        {showSlideNext && <SwiperArrowButton direction="right" onClick={onClickSlideNext} />}
        <Swiper
          slidesPerView={TOP_PAGE_SLIDE_NUMBER}
          spaceBetween={48}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChangeTransitionEnd={updateActiveIndex}
        >
          {items?.map((item) => (
            <SwiperSlide key={item.jobId}>
              <TopNewArriveCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SSwiperWrapper>
    </Container>
  );
};

export default TopNewArrive;
