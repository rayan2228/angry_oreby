import React, { useEffect, useState } from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import Image from "./layouts/Image";
import List from "./layouts/List";
import NavItem from "./layouts/NavItem";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(true);
  useEffect(() => {
    function resize() {
      if (window.innerWidth < 1024) {
        setMenuToggle(false);
      } else {
        setMenuToggle(true);
      }
    }
    resize();
    window.addEventListener("resize", resize);
  });

  return (
    <Container>
      <Flex className="lg:flex">
        <div className="lg:w-1/2">
          <Image imgSrc="assets/logo.webp" />
        </div>
        <div className="lg:w-1/2">
          <FaBars
            className="lg:hidden md:block ml-auto mt-[-20px]"
            onClick={() => setMenuToggle(!menuToggle)}
          />
          {menuToggle && (
            <NavItem className="flex mt-5 lg:mt-0 flex-col justify-center  lg:flex-row text-secondary capitalize font-secondary font-normal lg:text-sm lg:gap-10 lg:justify-end">
              <List link="/" itemName="home" />
              <List link="/shop" itemName="shop" />
              <List link="/about" itemName="about" />
              <List link="/contacts" itemName="contacts" />
              <List link="/journal" itemName="journal" />
            </NavItem>
          )}
        </div>
      </Flex>
    </Container>
  );
};

export default Navbar;
