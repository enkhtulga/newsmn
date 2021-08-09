import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import {
  ArrowForwardIos as IconArrowForwardIos,
  ArrowBackIos as IconArrowBackIos,
} from "@material-ui/icons";

SwiperCore.use([Navigation, Pagination]);

const NMenuCarousel = ({
  items,
  navigation,
  pagination,
  slidesPerView,
  spaceBetween,
  breakpoints,
  containerClass,
  ...rest
}) => {
  const classes = useStyles();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { ...props } = rest;

  const customPagination = {
    clickable: true,
    type: "bullets",
  };

  return (
    <div className={`slideWrap ${containerClass}`}>
      <Swiper
        slidesPerView={slidesPerView}
        slidesPerGroup={1}
        spaceBetween={spaceBetween}
        observeParents={true}
        observer={true}
        pagination={pagination && customPagination}
        {...props}
        className={classes.wrap}
        breakpoints={breakpoints}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper) {
              if (swiper.params) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
              if (swiper.navigation) {
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }
          });
        }}
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index} className={classes.slideWidth}>
              {item}
            </SwiperSlide>
          );
        })}
        {navigation && (
          <>
            <div ref={prevRef} className={classes.sliderButtonPrev}>
              <IconArrowBackIos fontSize="small" />
            </div>
            <div ref={nextRef} className={classes.sliderButtonNext}>
              <IconArrowForwardIos fontSize="small" />
            </div>
          </>
        )}
      </Swiper>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    position: "initial",
    paddingBottom: theme.spacing(5),
    "& > .swiper-pagination": {
      bottom: theme.spacing(5),
    },
    "& > .swiper-pagination > .swiper-pagination-bullet": {
      border: "2px solid transparent",
      borderColor: Colors.white,
      backgroundColor: Colors.white,
      opacity: 1,
    },
    "& > .swiper-pagination > .swiper-pagination-bullet-active": {
      backgroundColor: "transparent",
      borderColor: Colors.border_red,
    },
  },
  sliderButtonNext: {
    position: "absolute",
    borderRadius: 4,
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    right: 0,
    bottom: -39,
    transform: "translateY(-10px)",
    visibility: "visible",
    opacity: 1,
    color: Colors.text_gray_2,
    "&.swiper-button-disabled": {
      display: "flex",
      opacity: 0.4,
    },
  },
  sliderButtonPrev: {
    position: "absolute",
    borderRadius: 4,
    zIndex: 1,
    backdropFilter: "blur(1px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    right: 35,
    bottom: -39,
    transform: "translateY(-10px)",
    visibility: "visible",
    opacity: 1,
    color: Colors.text_gray_2,
    "&.swiper-button-disabled": {
      display: "flex",
      opacity: 0.4,
    },
  },
  slideWidth: {
    width: "auto",
  },
}));

export default NMenuCarousel;
