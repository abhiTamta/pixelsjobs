import { Button, Card, Form, Input, Select } from "antd";
import React from "react";
import { FaCode } from "react-icons/fa";

const HomeBanner = () => {
  return (
    <div className="relative w-full bg-cover bg-center bg-no-repeat bg-[url(./../../assets/images/home_banner/slider12.jpg)]">
      <div className="max-w-7xl mx-auto pt-20 px-5 lg:px-0  w-full">
        <div className="w-full mb-20">
          <div className="">
            <h1 className="text-4xl lg:text-7xl text-white mb-3 font-bold">
              <span className="text-red-600">3,000+</span> Browse Jobs
            </h1>
            <h5 className="text-xl lg:text-3xl text-gray-500 mb-14">
              Find Jobs, Employment & Career Opportunities
            </h5>
          </div>

          <div className="p-10 w-full bg-black/30 rounded-xl">
            <Form layout="inline" className="flex flex-col lg:flex-row gap-3">
              <Input
                size="large"
                className="flex-1 rounded-none"
                placeholder="Enter skills / designations / companies"
              />
              <Select
                size="large"
                className="flex-1 rounded-none"
                placeholder="Select experience"
              />
              <Input
                size="large"
                className="flex-1 rounded-none"
                placeholder="Enter locagtion"
              />
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form>
          </div>
        </div>
        <div className="w-full grid grid-cols-6">
          <div className="group flex flex-col items-center justify-center p-10 border border-gray-50/10 shadow transition-transform duration-300 ease-in-out transform hover:bg-sky-500 hover:-translate-y-2 hover:shadow-lg">
            <FaCode
              size={30}
              className="mb-3 text-sky-500 transition-colors duration-300 group-hover:text-white"
            />
            <h3 className="text-xl text-white font-semibold transition-colors duration-300 group-hover:text-white">
              Developer
            </h3>
            <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
              7 Jobs
            </p>
          </div>
          <div className="group flex flex-col items-center justify-center p-10 border border-gray-50/10 shadow transition-transform duration-300 ease-in-out transform hover:bg-sky-500 hover:-translate-y-2 hover:shadow-lg">
            <FaCode
              size={30}
              className="mb-3 text-sky-500 transition-colors duration-300 group-hover:text-white"
            />
            <h3 className="text-xl text-white font-semibold transition-colors duration-300 group-hover:text-white">
              Developer
            </h3>
            <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
              7 Jobs
            </p>
          </div><div className="group flex flex-col items-center justify-center p-10 border border-gray-50/10 shadow transition-transform duration-300 ease-in-out transform hover:bg-sky-500 hover:-translate-y-2 hover:shadow-lg">
            <FaCode
              size={30}
              className="mb-3 text-sky-500 transition-colors duration-300 group-hover:text-white"
            />
            <h3 className="text-xl text-white font-semibold transition-colors duration-300 group-hover:text-white">
              Developer
            </h3>
            <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
              7 Jobs
            </p>
          </div><div className="group flex flex-col items-center justify-center p-10 border border-gray-50/10 shadow transition-transform duration-300 ease-in-out transform hover:bg-sky-500 hover:-translate-y-2 hover:shadow-lg">
            <FaCode
              size={30}
              className="mb-3 text-sky-500 transition-colors duration-300 group-hover:text-white"
            />
            <h3 className="text-xl text-white font-semibold transition-colors duration-300 group-hover:text-white">
              Developer
            </h3>
            <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
              7 Jobs
            </p>
          </div><div className="group flex flex-col items-center justify-center p-10 border border-gray-50/10 shadow transition-transform duration-300 ease-in-out transform hover:bg-sky-500 hover:-translate-y-2 hover:shadow-lg">
            <FaCode
              size={30}
              className="mb-3 text-sky-500 transition-colors duration-300 group-hover:text-white"
            />
            <h3 className="text-xl text-white font-semibold transition-colors duration-300 group-hover:text-white">
              Developer
            </h3>
            <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
              7 Jobs
            </p>
          </div><div className="group flex flex-col items-center justify-center p-10 border border-gray-50/10 shadow transition-transform duration-300 ease-in-out transform hover:bg-sky-500 hover:-translate-y-2 hover:shadow-lg">
            <FaCode
              size={30}
              className="mb-3 text-sky-500 transition-colors duration-300 group-hover:text-white"
            />
            <h3 className="text-xl text-white font-semibold transition-colors duration-300 group-hover:text-white">
              Developer
            </h3>
            <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
              7 Jobs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
