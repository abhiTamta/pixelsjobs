import React from "react";
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import comLogo from "../../assets/images/company_logo/6317683.gif"

export const CarouselSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className="w-full px-3 cursor-pointer group">
        <div className="p-5 border border-gray-200 group-hover:shadow-xl rounded-md bg-white">
            <div className="mb-3">
                <h3 className="flex gap-1 items-center font-bold">MNCs <MdOutlineArrowForwardIos /></h3>
                <p>2.3K+ are actively hiring</p>
            </div>
            <div className="flex gap-3">
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
            </div>
        </div>
      </div>
      <div className="w-full px-3 cursor-pointer group">
        <div className="p-5 border border-gray-200 group-hover:shadow-xl rounded-md bg-white">
            <div className="mb-3">
                <h3 className="flex gap-1 items-center font-bold">MNCs <MdOutlineArrowForwardIos /></h3>
                <p>2.3K+ are actively hiring</p>
            </div>
            <div className="flex gap-3">
                <div className="border border-gray-200 bg-white rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
            </div>
        </div>
      </div>
      <div className="w-full px-3 cursor-pointer group">
        <div className="p-5 border border-gray-200 group-hover:shadow-xl rounded-md bg-white">
            <div className="mb-3">
                <h3 className="flex gap-1 items-center font-bold">MNCs <MdOutlineArrowForwardIos /></h3>
                <p>2.3K+ are actively hiring</p>
            </div>
            <div className="flex gap-3">
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
            </div>
        </div>
      </div>
      <div className="w-full px-3 cursor-pointer group">
        <div className="p-5 border border-gray-200 group-hover:shadow-xl rounded-md bg-white">
            <div className="mb-3">
                <h3 className="flex gap-1 items-center font-bold">MNCs <MdOutlineArrowForwardIos /></h3>
                <p>2.3K+ are actively hiring</p>
            </div>
            <div className="flex gap-3">
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
            </div>
        </div>
      </div>
      <div className="w-full px-3 cursor-pointer group">
        <div className="p-5 border border-gray-200 group-hover:shadow-xl rounded-md bg-white">
            <div className="mb-3">
                <h3 className="flex gap-1 items-center font-bold">MNCs <MdOutlineArrowForwardIos /></h3>
                <p>2.3K+ are actively hiring</p>
            </div>
            <div className="flex gap-3">
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
            </div>
        </div>
      </div>
      <div className="w-full px-3 cursor-pointer group">
        <div className="p-5 border border-gray-200 group-hover:shadow-xl rounded-md bg-white">
            <div className="mb-3">
                <h3 className="flex gap-1 items-center font-bold">MNCs <MdOutlineArrowForwardIos /></h3>
                <p>2.3K+ are actively hiring</p>
            </div>
            <div className="flex gap-3">
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
            </div>
        </div>
      </div>
      <div className="w-full px-3 cursor-pointer group">
        <div className="p-5 border border-gray-200 group-hover:shadow-xl rounded-md bg-white">
            <div className="mb-3">
                <h3 className="flex gap-1 items-center font-bold">MNCs <MdOutlineArrowForwardIos /></h3>
                <p>2.3K+ are actively hiring</p>
            </div>
            <div className="flex gap-3">
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
            </div>
        </div>
      </div>
      <div className="w-full px-3 cursor-pointer group">
        <div className="p-5 border border-gray-200 group-hover:shadow-xl rounded-md bg-white">
            <div className="mb-3">
                <h3 className="flex gap-1 items-center font-bold">MNCs <MdOutlineArrowForwardIos /></h3>
                <p>2.3K+ are actively hiring</p>
            </div>
            <div className="flex gap-3">
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
                <div className="border border-gray-200 bg-white p-1 rounded overflow-hidden">
                    <img src={comLogo} alt="" />
                </div>
            </div>
        </div>
      </div>
      
    </Slider>
  );
};
