import React, { useRef } from "react";
import Slider from "react-slick";
import "../../styles/output.css";
import star from "../../images/star.png";
import viezh from "../../images/viezh.png";
import yessica from "../../images/yessica.png";
import kim from "../../images/kim.png";
import { ArrowDiv } from "./ContactSlider.styles";

export default function ContactSlider() {
  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    return (
      <ArrowDiv
        className={`
      rounded-full
      flex
      items-center
      justify-center
      border-2
      mx-2
      my-2
      ${className}`}
        onClick={props.onClick}
      >
        {props.type === "next" ? (
          <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.75 8.003H3.925l4.538-5.45a1.252 1.252 0 
              0 0-1.925-1.6l-6.25 7.5c-.043.06-.08.122-.113.187 
              0 .063 0 .1-.087.163a1.25 1.25 0 0 0-.088.45c.001.154.03.307.088.45 
              0 .062 0 .1.087.162.033.066.07.128.112.188l6.25 7.5a1.25 1.25 
              0 0 0 1.763.162 1.25 1.25 0 0 0 .162-1.762l-4.537-5.45H18.75a1.25 1.25 0 0 0 0-2.5Z"
            />
          </svg>
        ) : (
          <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.25 8.003h14.825l-4.537-5.45a1.251 1.251 0 1 1 
            1.925-1.6l6.25 7.5c.041.06.08.122.112.187 0 .063 0 
            .1.088.163.056.143.086.296.087.45a1.25 1.25 0 0 
            1-.087.45c0 .062 0 .1-.088.162-.033.066-.07.128-.113.188l-6.25 
            7.5a1.25 1.25 0 0 1-.962.45 1.25 1.25 0 0 
            1-.963-2.05l4.538-5.45H1.25a1.25 1.25 0 0 1 0-2.5Z"
            />
          </svg>
        )}
      </ArrowDiv>
    );
  }

  const sliderRef = useRef();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider className="pt-5 px-2" ref={sliderRef} {...settings}>
        <div
          className="
            item              
            px-5
            md:px-3
            lg:px-5
            py-5
            border-2
            rounded
            shadow-lg
            hover:border-primary
            mx-auto
          "
        >
          <figure className="flex pb-5">
            <img src={viezh} alt="viezh" className="pr-5 md:pr-2 lg:pr-5" />
            <div className="flex flex-col">
              <h4 className="md:whitespace-nowrap">Viezh Robert</h4>
              <span className="text-secondary whitespace-nowrap text-xs md:text-sm">
                Warsaw, <br />
                Poland
              </span>
              <div class="lg:hidden flex items-start">
                <span class="pr-1 text-xs md:text-sm">4.5</span>
                <img src={star} alt="star" width="" class="w-3 md:w-4" />
              </div>
            </div>
            <div
              className="
                pl-2
                pt-1
                hidden
                lg:pl-2 lg:flex
                items-start text-secondary text-base"
            >
              <span className="px-1 text-xs md:text-sm">4.5</span>
              <img src={star} alt="star" width="" class="w-3 md:w-4" />
            </div>
          </figure>
          <div className="text-base max-w-xs">
            “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor.
            Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce
            arcu ex”
          </div>
        </div>

        <div
          className="
            item              
            px-5
            md:px-3
            lg:px-5
            py-5
            border-2
            rounded
            shadow-lg
            hover:border-primary
            mx-auto
          "
        >
          <figure className="flex pb-5">
            <img src={yessica} alt="yessica" className="pr-5 md:pr-2 lg:pr-5" />
            <div className="flex flex-col">
              <h4 className="md:whitespace-nowrap">Yessica Christy</h4>
              <span className="text-secondary whitespace-nowrap text-xs md:text-sm">
                Shanxi, <br />
                China
              </span>
              <div class="lg:hidden flex items-start">
                <span class="pr-1 text-xs md:text-sm">4.5</span>
                <img src={star} alt="star" width="" class="w-3 md:w-4" />
              </div>
            </div>
            <div
              className="
                pl-2
                pt-1
                hidden
                lg:pl-2 lg:flex
                items-start text-secondary text-base"
            >
              <span className="px-1 text-xs md:text-sm">4.5</span>
              <img src={star} alt="star" width="" class="w-3 md:w-4" />
            </div>
          </figure>
          <div className="text-base max-w-xs">
            “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor.
            Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce
            arcu ex”
          </div>
        </div>
        <div
          className="
            item              
            px-5
            md:px-3
            lg:px-5
            py-5
            border-2
            rounded
            shadow-lg
            hover:border-primary
            mx-auto
          "
        >
          <figure className="flex pb-5">
            <img src={kim} alt="kim" className="pr-5 md:pr-2 lg:pr-5" />
            <div className="flex flex-col">
              <h4 className="md:whitespace-nowrap">Kim Young Jou</h4>
              <span className="text-secondary whitespace-nowrap text-xs md:text-sm">
                Seoul, <br />
                South Korea
              </span>
              <div class="lg:hidden flex items-start">
                <span class="pr-1 text-xs md:text-sm">4.5</span>
                <img src={star} alt="star" width="" class="w-3 md:w-4" />
              </div>
            </div>
            <div
              className="
                pl-2
                pt-1
                hidden
                lg:pl-2 lg:flex
                items-start text-secondary text-base"
            >
              <span className="px-1 text-xs md:text-sm">4.5</span>
              <img src={star} alt="star" width="" class="w-3 md:w-4" />
            </div>
          </figure>
          <div className="text-base max-w-xs">
            “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor.
            Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce
            arcu ex”
          </div>
        </div>
        <div
          className="
            item              
            px-5
            md:px-3
            lg:px-5
            py-5
            border-2
            rounded
            shadow-lg
            hover:border-primary
            mx-auto
          "
        >
          <figure className="flex pb-5">
            <img src={viezh} alt="viezh" className="pr-5 md:pr-2 lg:pr-5" />
            <div className="flex flex-col">
              <h4 className="md:whitespace-nowrap">Viezh Robert</h4>
              <span className="text-secondary whitespace-nowrap text-xs md:text-sm">
                Warsaw, <br />
                Poland
              </span>
              <div class="lg:hidden flex items-start">
                <span class="pr-1 text-xs md:text-sm">4.5</span>
                <img src={star} alt="star" width="" class="w-3 md:w-4" />
              </div>
            </div>
            <div
              className="
                pl-2
                pt-1
                hidden
                lg:pl-2 lg:flex
                items-start text-secondary text-base"
            >
              <span className="px-1 text-xs md:text-sm">4.5</span>
              <img src={star} alt="star" width="" class="w-3 md:w-4" />
            </div>
          </figure>
          <div className="text-base max-w-xs">
            “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor.
            Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce
            arcu ex”
          </div>
        </div>

        <div
          className="
            item              
            px-5
            md:px-3
            lg:px-5
            py-5
            border-2
            rounded
            shadow-lg
            hover:border-primary
            mx-auto
          "
        >
          <figure className="flex pb-5">
            <img src={yessica} alt="yessica" className="pr-5 md:pr-2 lg:pr-5" />
            <div className="flex flex-col">
              <h4 className="md:whitespace-nowrap">Yessica Christy</h4>
              <span className="text-secondary whitespace-nowrap text-xs md:text-sm">
                Shanxi, <br />
                China
              </span>
              <div class="lg:hidden flex items-start">
                <span class="pr-1 text-xs md:text-sm">4.5</span>
                <img src={star} alt="star" width="" class="w-3 md:w-4" />
              </div>
            </div>
            <div
              className="
                pl-2
                pt-1
                hidden
                lg:pl-2 lg:flex
                items-start text-secondary text-base"
            >
              <span className="px-1 text-xs md:text-sm">4.5</span>
              <img src={star} alt="star" width="" class="w-3 md:w-4" />
            </div>
          </figure>
          <div className="text-base max-w-xs">
            “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor.
            Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce
            arcu ex”
          </div>
        </div>
        <div
          className="
            item              
            px-5
            md:px-3
            lg:px-5
            py-5
            border-2
            rounded
            shadow-lg
            hover:border-primary
            mx-auto
          "
        >
          <figure className="flex pb-5">
            <img src={kim} alt="kim" className="pr-5 md:pr-2 lg:pr-5" />
            <div className="flex flex-col">
              <h4 className="md:whitespace-nowrap">Kim Young Jou</h4>
              <span className="text-secondary whitespace-nowrap text-xs md:text-sm">
                Seoul, <br />
                South Korea
              </span>
              <div class="lg:hidden flex items-start">
                <span class="pr-1 text-xs md:text-sm">4.5</span>
                <img src={star} alt="star" width="" class="w-3 md:w-4" />
              </div>
            </div>
            <div
              className="
                pl-2
                pt-1
                hidden
                lg:pl-2 lg:flex
                items-start text-secondary text-base"
            >
              <span className="px-1 text-xs md:text-sm">4.5</span>
              <img src={star} alt="star" width="" class="w-3 md:w-4" />
            </div>
          </figure>
          <div className="text-base max-w-xs">
            “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor.
            Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce
            arcu ex”
          </div>
        </div>
      </Slider>
      <div className="md:pt-5 px-20 hidden md:flex justify-end">
        <Arrow
          type="next"
          onClick={() => {
            sliderRef.current.slickPrev();
          }}
        />
        <Arrow
          type="prev"
          onClick={() => {
            sliderRef.current.slickNext();
          }}
        />
      </div>
    </>
  );
}
