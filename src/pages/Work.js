/** @format */

import React from "react";
import WorkCss from "./Work.module.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { workData } from "./data";
function Work() {
  const settings = {
    dots: true,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='work'>
      <Container>
        <h2>MY WORKS</h2>
        <hr className={WorkCss.line} />
        <Slider className={WorkCss.slider} {...settings}>
          {workData?.map((item) => {
            let arr = item.info;
            return (
              <Card className={WorkCss.card}>
                <div className='card-top'>
                  <img
                    className={WorkCss.workimg}
                    src={item.img}
                    alt={item.title}
                  />
                  <div className={WorkCss.iteminfo}>
                    <h6 className={WorkCss.tools}>Skills Used</h6>
                    <ul>
                      {arr?.map((item1) => {
                        return <li>{item1}</li>;
                      })}
                    </ul>
                  </div>
                  <h5 className={WorkCss.title}>{item.title}</h5>
                </div>
                <div className='card-bottom'>
                  <a
                    href={item.link}
                    className='btn btn-primary'
                    target='blank'>
                    Live preview
                    <i
                      className='fa fa-fw fa-eye'
                      style={{
                        fontSize: "17px",
                        marginLeft: "8px",
                      }}></i>
                  </a>
                </div>
              </Card>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
}

export default Work;
