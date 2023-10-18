import './App.css';
import NavBar from './components/navbar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import Landing from './components/navbar/landing/Landing';
import Songs from './components/songs/Songs';
import Footer from './components/Footer/Footer';
import Nums from './components/Nums/Nums';
import TopSingers from './components/Singers/Singers';

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
          }}></Row>
        <Row style={{ flex: "3" }}>
          <Col
            className='d-flex flex-column justify-content-start alidn-items-strech'
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
                <Row>
                  <span
                    className='text-start'
                    style={{
                      color: "#020617",
                      fontSize: "50px",
                      position: "relative",
                      left: "0"
                    }}>Top Rated :</span>
                  <Songs />
                </Row>
              </Col>
            </Row>
            <Row style={{}}>
              <Row style={{ height: "min-content", marginTop: "600px" }}>
                <span
                  className='text-start'
                  style={{
                    color: "#020617",
                    fontSize: "50px"
                  }}>Top Singers :</span>
                <TopSingers />
              </Row>
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