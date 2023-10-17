import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import Landing from './components/navbar/landing/Landing';
import Footer from './components/Footer/Footer';
import Nums from './components/Nums/Nums';
import TopSingers from './components/TopSingers/TopSingers';

function App() {
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
          }}><Col></Col></Row>
        <Row style={{ flex: "3" }}>
          <Col
            className='d-flex flex-column justify-content-start alidn-items-strech'
            style={{
              backgroundImage: "url(background/final-background-web-png.png)",
              backgroundSize: "cover",
              position: "relative",
              marginTop: "19%",
            }}>
            <Row style={{ flex: "1" }}><Col>asd</Col></Row>
            <Row style={{}}>
              <Row style={{ height: "min-content" }}>
                <span
                  className='text-start'
                  style={{
                    color: "#020617",
                    fontSize: "50px"
                  }}>
                  Top Singers :</span>
                <TopSingers />
              </Row>
            </Row>
            <Row style={{ flex: "1" }}><Col style={{ position: "relative", top: "-27%"}}><Landing /></Col></Row>
            <Row style={{ flex: "1" }}><Col>asd</Col></Row>
            <Row style={{ flex: "1" }}>
              <Col className='d-flex flex-column justify-content-end'>
                <Footer />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    </>
  );
}

export default App;