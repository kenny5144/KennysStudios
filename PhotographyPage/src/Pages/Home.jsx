import { useNavigate, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import image1c from "../images/homepageimages/image1c.jpg";
import shots from "../images/homepageimages/shots.jpg"
import kay3 from "../images/homepageimages/kay3.jpg"
import sele from "../images/homepageimages/sele.jpg";
import maria from "../images/homepageimages/maria.jpg"
import selecover from "../images/homepageimages/selecover.jpg"
import baba from "../images/homepageimages/baba.jpg"
import babyshowershot2 from "../images/homepageimages/babyshowershot2.jpg"
import babyshowershot1 from "../images/homepageimages/babyshowershot1.jpg"
import remembrance from "../images/homepageimages/remembrance.jpg"
import kay1 from "../images/homepageimages/kay1.jpg"
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
const element= <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
function Home() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper -z-[1] md:z-[1] "
      >
        <SwiperSlide>
          <img src={image1c} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shots} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={babyshowershot1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={babyshowershot2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={remembrance} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={kay3} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="w-100% m-auto absolute -z-[1] md:relative md:z-[1]  h-[75rem] justify-center ">
        <h1 className="text-center  text-bold text-3xl mt-5 "> My Work</h1>
        <div className="md:flex justify-center mt-8">
          <div className=" md:relative   md:top-36 ">
            <div className="container">
              <img
                className=" rounded-lg w-screen md:w-96 md:h-auto  image h-auto"
                src={maria}
                alt=""
              />
              <div className="middle">
                <Link
                  className="text-4xl hover:underline text-bold"
                  to="/lifestyle"
                >
                  Lifestyle
                </Link>
              </div>
            </div>

            <div className="container  ">
              <img
                className="rounded-lg w-screen  mt-2   md:w-96 md:h-auto image h-auto"
                src={baba}
                alt=""
              />
              <div className="middle">
                <Link
                  className="text-4xl hover:underline text-bold"
                  to="/Event"
                >
                  Events
                </Link>
              </div>
            </div>
          </div>
          <div className="md:ml-6 ">
            <div className="container">
              <img
                className="rounded-lg w-screen mt-2 md:mt-0  image md:w-96 md:h-auto h-auto"
                src={selecover}
                alt=""
              />
              <div className="middle">
                <Link
                  className="text-4xl hover:underline text-bold"
                  to="/Studio"
                >
                  Studio
                </Link>
              </div>
            </div>

            <div className="container">
              <img
                className="rounded-lg w-screen  mt-2 md:w-96 md:h-auto image h-auto"
                src={kay1}
                alt=""
              />
              <div className="middle">
                <Link
                  className="text-4xl hover:underline text-bold"
                  to="/business"
                >
                  Commercial
                </Link>
              </div>
            </div>
          </div>
        </div>
        <footer className=" mt-2 md:relative md:top-40 flex  bg-blue-300 h-20 ">
          <div className="justify-center self-center m-auto  w-auto ">

        <a href="https://www.instagram.com/kennys_studio/" className="  p-1.5 flex text-3xl mt-0 p-0" target="blank">{element} <span className="pl-1"> Instagram </span></a>
          </div>

        </footer>
      </div>
   
       
      
    </>
  );
}

export default Home;
