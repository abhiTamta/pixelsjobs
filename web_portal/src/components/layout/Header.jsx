import React from "react";
import { BsBriefcase } from "react-icons/bs";
import Navigation from "./Navigation";
import { Button, Divider } from "antd";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between px-5 py-3 lg:px-0 lg:w-screen lg:max-w-7xl mx-auto">
        <div className="pr-5">
          <a href="/" className="flex gap-2 items-center text-2xl font-bold">
            <span>
              <BsBriefcase color="red" />
            </span>
            <span>Pixels Jobs</span>
          </a>
        </div>
        <div className="menu hidden lg:block">
          <Navigation />
        </div>
        <div className="access hidden lg:block">
          <Button className="loginBtn">Login</Button>
          <Button className="regiBtn">Register</Button>
          <Divider size="large" type="vertical" variant="solid" style={{width : "1px", height : "20px", background : "#919191"}} />
          <Button className="emplyBtn">For employers</Button>
        </div>
        <div className="lg:hidden">
          <TiThMenu size={25} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
