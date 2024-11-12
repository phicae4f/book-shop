import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          Новинки Этой Недели
        </h1>
        <p className="mb-10">
          Самое время разбавить ваш список для чтения последними и
          увлекательными изданиями литературного мира. От ужасающих триллеров до
          затягивающих мемуаров, новинки этой недели придутся по вкусу каждому{" "}
        </p>
        <button className="btn-primary">Подписаться</button>
      </div>
    </div>
  );
};

export default Banner;
