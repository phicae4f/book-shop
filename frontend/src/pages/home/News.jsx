
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"
import { Link } from "react-router-dom";


const news = [
  {
    id: 1,
    title: "Глобальный климатический саммит призывает к срочным действиям",
    description:
      "Мировые лидеры собираются на Глобальный климатический саммит, чтобы обсудить неотложные стратегии борьбы с изменением климата, уделяя особое внимание сокращению выбросов углекислого газа и внедрению решений в области возобновляемых источников энергии.",
    image: news1,
  },
  {
    id: 2,
    title: "Объявлено о прорыве в технологии искусственного интеллекта",
    description:
      "Исследователи объявили о крупном прорыве в области искусственного интеллекта, а новые достижения обещают произвести революцию в различных отраслях - от здравоохранения до финансов.",
    image: news2,
  },
  {
    id: 3,
    title:
      "Новая космическая миссия направлена на исследование далеких галактик",
    description:
      "НАСА обнародовало планы новой космической миссии, целью которой будет исследование далеких галактик в надежде проникнуть в суть происхождения Вселенной.",
    image: news3,
  },
  {
    id: 4,
    title:
      "Фондовые Рынки Достигли Рекордных Высот На Фоне Восстановления Экономики",
    description:
      "Мировые фондовые рынки достигли рекордных высот, поскольку продолжают появляться признаки восстановления экономики после проблем, связанных с глобальной пандемией.",
    image: news4,
  },
  {
    id: 5,
    title:
      "Новый инновационный смартфон, выпущенный ведущей технологической компанией",
    description:
      "Ведущая технологическая компания выпустила свою последнюю модель смартфона, отличающуюся передовыми технологиями, увеличенным временем автономной работы и новым элегантным дизайном.",
    image: news1,
  },
];

const News = () => {
  return (
    <div className='py-16'>
        <h2 className="text-3xl font-semibold mb-6">Новинки</h2>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            news.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                        {/*content */}
                        <div className='py-4'>
                            <Link to='/'>
                                <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                            </Link>
                            <div className='w-10 h-[4px] bg-primary mb-5'></div>
                            <p className='text-sm text-gray-600'>{item.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                            <img src={item.image} alt="" className="w-full object-cover"/>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
};

export default News;
