import './App.css';
import NavBar from './components/navbar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import Landing from './components/navbar/landing/Landing';
import Songs from './components/songs/Songs';
import Footer from './components/Footer/Footer';
import Nums from './components/Nums/Nums';
import OurServices from './components/OurServices/OurServices';
import { useEffect, useState } from 'react';
import Reveal from './components/animation/Reveal';

function App() {
  const [scroll, setScroll] = useState(0);
  useEffect(
    () => {
      function scroll(e) {
        setScroll(window.scrollY);
      }
      document.addEventListener("scroll", scroll);
      return () => document.removeEventListener("scroll", scroll);
    },
    []
  );

  return (
    <>
      <NavBar />
      <Container
        className='
                text-center
                d-flex
                flex-column
                justify-content-start
                align-items-strech
                '
        style={{
          height: "500vh"
        }}
        fluid
      >
        <Row
          className='
                  position-fixed
                  w-100
                  h-100
                  '
          style={{
            flex: "1",
            backgroundImage: "url('assets/Landing (web) - 1-image3.png')",
            backgroundSize: "cover",
            scale: `${1 + scroll / 1000} ${1 + scroll / 1000}`
          }}></Row>
        <Row style={{ flex: "3" }}>
          <Col
            className='d-flex flex-column justify-content-start align-items-stretch'
            style={{
              backgroundImage: "url(background/final-background-web-png.png)",
              backgroundSize: "cover",
              position: "relative",
              marginTop: "19%",
            }}>
            <Row>
              <Col style={{ position: "relative", top: "-43%" }}>
                <Landing />
              </Col>
            </Row>
            <Row style={{ flex: "1" }}>
              <Col>
                <Row style={{ height: "100%" }}>
                  <Reveal durationTime={0.5} xis={-400} yis={0}><span
                    className='text-start'
                    style={{
                      color: "#312D44",
                      fontSize: "50px",
                    }}><span className='text-warning' >Top</span> <span style={{color: "#312D44"}}>Rated</span> : </span></Reveal>
                  <Songs />
                </Row>
              </Col>
            </Row>

            <Row style={{ height: "min-content", marginTop: "700px", overflow:"hidden"}}>
              <span
                className='text-start'
                style={{
                  color: "#020617",
                  fontSize: "50px"
                }}>Our Services :</span>
              <div style={{position:"relative"}}><OurServices /></div>
            </Row> 
            
            <Row style={{
              flex: "1"
            }}>
              <Col className='d-flex flex-column justify-content-end'>
                <Row>
                  <span
                    className='
                              position-absolute
                              text-start
                              '
                    style={{
                      marginTop: "100px",
                      color: "#020617",
                      fontSize: "50px"
                    }}>
                    statistics :
                  </span>
                  <Nums />
                </Row>
                <Row>
                  <Footer />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    </>
  );
}

export default App;