import { ReccomendationsData } from "./constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "./style.sass";

const Recommendations = () => {
  return (
    <section className="testimonial container section" id="recommendations">
      <h2 className="section__title">My ex-colleagues say</h2>
      <span className="section__subtitle">Recommendations</span>

      <Swiper
        className="mySwiper testimonials__container"
        loop
        grabCursor
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {ReccomendationsData.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />

              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Recommendations;
