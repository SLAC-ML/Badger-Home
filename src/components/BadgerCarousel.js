import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import MainGUIUrl from '@site/static/img/gui/main.png'
import EditorGUIUrl from '@site/static/img/gui/editor.png'
import ConstGUIUrl from '@site/static/img/gui/constraints.png'
import TableGUIUrl from '@site/static/img/gui/table.png'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const BadgerCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      loop
      style={{
        '--swiper-pagination-color': '#EEEEEE',
        '--swiper-navigation-color': '#EEEEEE',
      }}
    >
      <SwiperSlide>
        <img alt="Badger run monitor" src={MainGUIUrl} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="Badger routine editor" src={EditorGUIUrl} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="Badger constraints config" src={ConstGUIUrl} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="Badger data table" src={TableGUIUrl} />
      </SwiperSlide>
    </Swiper>
  )
}

export default BadgerCarousel
