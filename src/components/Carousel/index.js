import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import {
  ChevronLeft as IconChevronLeft,
  ChevronRight as IconChevronRight,
} from "@material-ui/icons";

SwiperCore.use([Navigation, Pagination]);

const NCarousel = ({
  items,
  navigation,
  pagination,
  slidesPerView,
  breakpoints,
  containerClass,
  ...rest
}) => {
  const classes = useStyles();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { ...props } = rest;

  const customPagination = {
    clickable: pagination,
    type: "bullets",
  };

  return (
    <div className={`slideWrap ${containerClass}`}>
      <Swiper
        slidesPerView={slidesPerView}
        slidesPerGroup={1}
        spaceBetween={0}
        observeParents={true}
        observer={true}
        pagination={customPagination}
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
              <IconChevronLeft fontSize="small" />
            </div>
            <div ref={nextRef} className={classes.sliderButtonNext}>
              <IconChevronRight fontSize="small" />
            </div>
          </>
        )}
      </Swiper>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    paddingBottom: theme.spacing(6),
    "& > .swiper-pagination": {
      bottom: 0,
    },
    "& > .swiper-pagination > .swiper-pagination-bullet": {
      border: "1px solid transparent",
      borderColor: Colors.border_gray,
      backgroundColor: Colors.white,
      opacity: 1,
    },
    "& > .swiper-pagination > .swiper-pagination-bullet-active": {
      backgroundColor: Colors.title,
      borderColor: Colors.title,
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
    right: theme.spacing(1),
    top: "50%",
    transform: "translateY(-10px)",
    visibility: "visible",
    opacity: 1,
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
    left: theme.spacing(1),
    top: "50%",
    transform: "translateY(-10px)",
    visibility: "visible",
    opacity: 1,
  },
  slideWidth: {
    maxWidth: "none",
  },
}));

export default NCarousel;