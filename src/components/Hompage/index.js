import React from "react";
import "../../styles/output.css";
import logo from "../../images/PEDDLE.svg";
import web_developer from "../../images/web_developer_1.png";
import user from "../../images/user.svg";
import location from "../../images/location.svg";
import server from "../../images/Server.svg";
import music from "../../images/71h1_ux51_210519 1.png";
import pricing3 from "../../images/pricing3.png";
import pricing1 from "../../images/pricing1.png";
import pricing2 from "../../images/pricing2.png";
import netflix from "../../images/netflix.png";
import reddit from "../../images/reddit.png";
import amazon from "../../images/amazon.png";
import discord from "../../images/discord.png";
import spotify from "../../images/spotify.png";

import {
  Button,
  Section1Heading1,
  Section1Image,
  Section1Text,
  Section1Button,
  Section2Text,
  Section3Image,
  SectionUL,
  Section4Li,
  Section4Button,
  Section4Wrapper,
  Section5Li,
  FooterMark,
  Section7Wrapper,
} from "./Homepage.styles";
import ContactSlider from "../ContactSlider";

function Homepage() {
  return (
    <div style={{ paddingTop: "40px" }}>
      <div className="pl-32 border-none border-gray-300 pr-20">
        <div className="container mx-auto flex justify-between">
          <img src={logo} alt="peddle" className="cursor-pointer" />
          <nav>
            <ul className="flex items-baseline px-6">
              <li>
                <a
                  className="px-4 py-2 font-normal text-base text-secondary"
                  href="#2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 font-normal text-base text-secondary"
                  href="#2"
                >
                  FAQS
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 font-normal text-base text-secondary"
                  href="#2"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 font-normal text-base text-secondary"
                  href="#2"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="flex items-center">
              <li>
                <a className="px-2 py-2 hover:text-primary" href="#2">
                  Sign In
                </a>
              </li>
              <li>
                <Button href="#" className="px-8 py-2 signUp">
                  Sign Up
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <section>
        {/* section 1 */}
        <div className="pt-8 pl-32 flex items-center justify-between">
          <div className="flex flex-col max-w-sm">
            <Section1Heading1>
              We Are Everything We Aspire To BE
            </Section1Heading1>
            <Section1Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              orci condimentum lectus efficitur tempor vel eu massa. Sed
              molestie turpis eget ipsum malesuada dignissim
            </Section1Text>
            <div className="flex flex-col pt-5">
              <Section1Button className="text-center py-4 shadow-2xl">
                Get Started
              </Section1Button>
            </div>
          </div>
          <div>
            <Section1Image src={web_developer} alt="web developer" />
          </div>
        </div>
      </section>
      <section className="pl-32 my-20 mr-10 mr-12 pr-20">
        {/* <!-- section 2--> */}
        <div className="pt-10 pb-10 grid grid-cols-3 gap-4 shadow-2xl">
          <div className="flex justify-center border-r-2">
            <img src={user} alt="user" className="pr-5" />
            <div className="flex flex-col">
              <h2>90+</h2>
              <Section2Text>Users</Section2Text>
            </div>
          </div>
          <div className="flex justify-center border-r-2">
            <img src={location} alt="location" className="pr-5" />
            <div className="flex flex-col">
              <h2>30+</h2>
              <Section2Text>Location</Section2Text>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={server} alt="servers" className="pr-5" />
            <div className="flex flex-col">
              <h2>40+</h2>
              <Section2Text>Servers</Section2Text>
            </div>
          </div>
        </div>
      </section>
      <section className="pl-20 pt-8 flex items-center pr-20">
        {/* <!-- section 3--> */}
        <div>
          <Section3Image src={music} alt="music" />
        </div>
        <div className="flex flex-col">
          <h3>Features We Provide For You</h3>
          <br />
          <div
            className="text-secondary font-normal text-base"
            style={{ maxWidth: "427.88px" }}
          >
            Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero
            eu sem finibus lacinia nec pulvinar.
          </div>
          <br />
          <SectionUL>
            <Section4Li>Curabitur tempor justo</Section4Li>
            <Section4Li>Curabitur tempor justo</Section4Li>
            <Section4Li>Curabitur tempor justo</Section4Li>
            <Section4Li>Curabitur tempor justo</Section4Li>
          </SectionUL>
        </div>
      </section>
      <div style={{ backgroundImage: "linear-gradient(#FAFAFA, #ffffff)" }}>
        <section className="pl-1 my-20 section4">
          {/* <!-- section 4--> */}
          <div className="pt-10 flex flex-col items-center">
            <h3>Choose Your Plan</h3>
            <br />
            <div className="text-secondary text-base text-center max-w-xl">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </div>
            <div className="grid grid-cols-3 gap-12 pt-8">
              <div className="border-2 rounded flex flex-col items-center bg-white hover:border-primary">
                <img
                  src={pricing3}
                  alt="free"
                  width="207px"
                  className="pt-10"
                />
                <h4 className="p-10">Free Plan</h4>
                <SectionUL>
                  <Section5Li>Mauris sem neque</Section5Li>
                  <Section5Li>Mauris sem neque</Section5Li>
                  <Section5Li>Mauris sem neque</Section5Li>
                  <Section5Li>Mauris sem neque</Section5Li>
                </SectionUL>
                <h2 className="pt-32">Free</h2>
                <Section4Button
                  className="
                  mt-10
                  mb-10
                  flex
                  items-center
                  justify-center
                  hover:shadow-2xl
                "
                >
                  Select
                </Section4Button>
              </div>
              <Section4Wrapper className="border-2 rounded flex flex-col items-center bg-white hover:border-primary">
                <img
                  src={pricing2}
                  alt="standard"
                  width="207px"
                  className="pt-14 "
                />
                <h4 className="p-10">Standard Plan</h4>
                <SectionUL>
                  <Section5Li>Mauris sem neque</Section5Li>
                  <Section5Li>Mauris sem neque</Section5Li>
                  <Section5Li>Mauris sem neque</Section5Li>
                  <Section5Li>Mauris sem neque</Section5Li>
                  <Section5Li>Mauris sem neque</Section5Li>
                </SectionUL>
                <h2 className="pt-20">
                  $9 <Section2Text>/ mo</Section2Text>
                </h2>
                <Section4Button
                  className="
                  mt-10
                  mb-10
                  flex
                  items-center
                  justify-center
                  hover:shadow-2xl
                "
                >
                  Select
                </Section4Button>
              </Section4Wrapper>
              <div className="border-2 rounded flex flex-col items-center bg-white hover:border-primary">
                <img
                  src={pricing1}
                  alt="premium"
                  width="207px"
                  className="pt-10"
                />
                <h4 className="p-10">Premium Plan</h4>
                <SectionUL>
                  <Section5Li>Mauris sem neque</Section5Li>
                  <Section5Li>Mauris sem neque</Section5Li>
                  <Section5Li>Mauris sem neque</Section5Li>
                  <Section5Li>Mauris sem neque</Section5Li>
                  <Section5Li>Mauris sem neque</Section5Li>
                  <Section5Li>Mauris sem neque</Section5Li>
                </SectionUL>
                <h2 className="pt-10">
                  $12 <Section2Text>/ mo</Section2Text>
                </h2>
                <Section4Button
                  className="
                  mt-10
                  mb-10
                  flex
                  items-center
                  justify-center
                  hover:shadow-2xl
                "
                >
                  Select
                </Section4Button>
              </div>
            </div>
          </div>
        </section>
        <section className="pl-20 pt-15 pr-20">
          {/* <!-- section 5--> */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="max-w-xs text-center pb-5">
              Get Started With Paddle Today
            </h3>
            <div className="text-secondary max-w-lg text-center pb-5">
              Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
              ante egestas ullamcorper
            </div>
            <div
              className="
              px-20
              py-5
              text-white
              cursor-pointer
              rounded
              bg-primary
              border-2
              font-bold
              shadow-2xl
              hover:bg-white hover:shadow-sm
              hover:text-primary
              hover:border-primary
            "
            >
              Start Today
            </div>
          </div>
          <div className="flex items-center justify-between pt-8">
            <img src={netflix} className="px-5 w-48" alt="netflix" />
            <img src={reddit} className="px-5 w-48" alt="reddit" />
            <img src={amazon} className="px-5 w-48" alt="amazon" />
            <img src={discord} className="px-5 w-48" alt="discord" />
            <img src={spotify} className="px-5 w-48" alt="spotify" />
          </div>
        </section>
        <section className="pt-20 pb-20">
          {/* <!-- section 6--> */}
          <div className="pl-20 pr-20 flex flex-col items-center justify-center">
            <h3 className="text-center pb-5">
              Trusted by Thousands of <br />
              Happy Customer
            </h3>
            <div className="text-secondary max-w-xl text-center pb-5">
              Nam laoreet cursus diam, sed tristique arcu semper non.
              Suspendisse et suscipit est, nec laoreet mi. Nunc pellentesque
              imperdiet ultricies.
            </div>
          </div>
          <ContactSlider />
        </section>
        <Section7Wrapper className="pl-20 pr-20">
          {/* <!-- section 7--> */}
          <div className="bg-white flex justify-between rounded py-5 px-2 shadow-2xl">
            <div className="flex flex-col items-center justify-center pl-10">
              <h3 className="pb-5">
                Subscribe Now for <br />
                Get Special Features!
              </h3>
              <div className="text-secondary pb-5 pr-10">
                Praesent mollis lobortis nisl nec laoreet.
              </div>
            </div>
            <div className="flex items-center pr-10">
              <div
                className="
                  px-20 
                  py-5 
                  bg-primary 
                  text-white 
                  font-bold
                  rounded   
                  border-2         
                  cursor-pointer
                  shadow-2xl
                  hover:bg-white hover:shadow-sm
                  hover:text-primary
                  hover:border-primary
                "
              >
                Subscribe Now
              </div>
            </div>
          </div>
        </Section7Wrapper>
      </div>
      <section className="pt-32 pb-32" style={{ background: "#f8f8f8" }}>
        <div className="pl-32 border-none border-gray-300 pr-20">
          <div className="container mx-auto flex justify-between">
            <div className="max-w-sm pr-10">
              <img src={logo} alt="peddle" className="cursor-pointer" />
              <br />
              <span className="text-secondary pb-5">
                Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
                ante egestas ullamcorper. Duis id mauris consequat, ultrices
                ligula at, laoreet mag.
              </span>
            </div>

            <div className="grid grid-cols-3 gap-16">
              <div className="flex flex-col">
                <a className="px-4 py-2 font-medium text-lg pb-5" href="#2">
                  Product
                </a>
                <a className="px-4 py-2 text-secondary font-normal" href="#2">
                  Praesent
                </a>
                <a className="px-4 py-2 text-secondary font-normal" href="#2">
                  Laoreet
                </a>
                <a className="px-4 py-2 text-secondary font-normal" href="#2">
                  Laoreet
                </a>
                <a className="px-4 py-2 text-secondary font-normal" href="#2">
                  Server
                </a>
              </div>
              <div className="flex flex-col">
                <a className="px-4 py-2 font-medium text-lg " href="#2">
                  Engage
                </a>
                <a className="px-4 py-2 text-secondary font-normal" href="#2">
                  Mauris
                </a>
                <a className="px-4 py-2 text-secondary font-normal" href="#2">
                  Aenean
                </a>
                <a className="px-4 py-2 text-secondary font-normal" href="#2">
                  Linsean
                </a>
                <a className="px-4 py-2 text-secondary font-normal" href="#2">
                  Lingula
                </a>
              </div>
              <div className="flex flex-col">
                <a className="px-4 py-2 font-medium text-lg " href="#2">
                  Earn Money
                </a>
                <a className="px-4 py-2 text-secondary font-normal" href="#2">
                  Ultrices
                </a>
                <a className="px-4 py-2 text-secondary font-normal" href="#2">
                  Fusce
                </a>
              </div>
            </div>
          </div>
          <FooterMark>©2020PADDLE</FooterMark>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
