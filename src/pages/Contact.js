/** @format */
import React from "react";
import Container from "react-bootstrap/Container";
import { RiWhatsappFill } from "react-icons/ri";
import { FaBehanceSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactCss from "./Contact.module.css";

function Contact() {
  return (
    <div className='contact'>
      <Container>
        <h2>CONTACT WITH ME</h2>
        <hr className={ContactCss.line} />
        <Row>
          <Col md={6}>
            <div className={ContactCss.contactlink}>
              <h6>
                <i className='fa fa-fw fa-envelope' />
                <span className={ContactCss.mail}>
                  mohamedtolleba2016@gmail.com
                </span>
              </h6>
              <h6>
                <i className='fa fa-fw fa-phone' />
                +966510503376
              </h6>
              <h6>
                <RiWhatsappFill className={ContactCss.whatsapp} />
                00201150693188
              </h6>

              <h6>
                <i className='fa fa-fw fa-location-dot' />
                Riyadh, Saudi Arabia
              </h6>

              <a
                href='https://www.behance.net/mohamedtolib'
                target='_blank'
                rel='noreferrer'>
                <FaBehanceSquare className={ContactCss.whatsapp} />
              </a>

              <a
                href='https://github.com/Tolleb'
                target='_blank'
                rel='noreferrer'>
                <FaGithubSquare className={ContactCss.whatsapp} />
              </a>

              <a
                href='https://www.linkedin.com/in/mohamed-tolleba/'
                target='_blank'
                rel='noreferrer'>
                <BsLinkedin className={ContactCss.whatsapp} />
              </a>
            </div>
          </Col>
          <Col md={6}>
            <div class='mapouter'>
              <div class='gmap_canvas'>
                <iframe
                  class='gmap_iframe'
                  width='100%'
                  frameborder='0'
                  scrolling='no'
                  marginheight='0'
                  marginwidth='0'
                  src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=الرياض, الملز&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
                <a href='https://proxysite.pro'></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
