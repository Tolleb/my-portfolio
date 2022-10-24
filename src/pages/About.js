/** @format */

import React from "react";
import AboutCss from "./About.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Resumeui from "../assets/UI developer_Mohamed Rashed_CV.pdf";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { SiAdobexd } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineSlack } from "react-icons/ai";
function About() {
  return (
    <div className='about'>
      <Container>
        <h2>ABOUT ME</h2>
        <hr className={AboutCss.line} />
        <Row>
          <Col md={6}>
            <h4>I'm Mohamed Rashed</h4>
            <h4>Front end developer & UI/UX Designer</h4>
            <p className={AboutCss.abstract}>
              Computer science and ITI Graduated with +3 years of experience in
              maintaining, building and designing responsive web and mobile
              apps. Good in self study as most of Technologies I used in my apps
              based on self study. Always seeking for improving my skills, code
              quality.
            </p>
            <a
              style={{
                backgroundColor: "rgb(92 43 43)",
                border: "none",
                padding: "6px 12px",
                marginTop: "10Ppx",
              }}
              href={Resumeui}
              className='btn btn-primary'
              download>
              download my resume
              <i
                className='fa fa-fw fa-download'
                style={{
                  fontSize: "17px",
                  marginLeft: "5px",
                }}></i>
            </a>
          </Col>
          <Col md={6}>
            <h3 className={AboutCss.skills1}>Skills</h3>
            <div className={AboutCss.skills}>
              <Row>
                <Col md={6}>
                  <ul style={{ margin: "15px", fontSize: "17px" }}>
                    <li>
                      <AiFillHtml5 />
                    </li>
                    <li>
                      <IoLogoCss3 />
                    </li>
                    <li>
                      <SiBootstrap />
                    </li>

                    <li>
                      <SiJquery />
                    </li>
                    <li>
                      <TbBrandJavascript />
                    </li>
                    <li>
                      <RiReactjsLine />
                    </li>

                    <li>
                      <CgFigma />
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul style={{ margin: "15px", fontSize: "17px" }}>
                    <li>
                      <SiAdobexd />
                    </li>
                    <li>
                      <FaGithubSquare />
                    </li>
                    <li>
                      <AiOutlineSlack />
                    </li>
                    <li>Responsive</li>
                    <li>Agile</li>
                    <li>UX research</li>
                    <li>UX Frameworks</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
