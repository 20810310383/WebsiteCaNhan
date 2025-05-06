import { Col, Row } from "antd"
import Banner from "../../components/Banner/Banner"
import CircularGallery from "../../components/CircularGallery/CircularGallery"
import RollingGallery from "../../components/RollingGallery/RollingGallery"

const Home = () => {
  return (
    <div>
        <Banner/>

        <Row justify="center" style={{width: '100%', height: '100vh', position: 'relative', backgroundColor: '#050816'}}> 
          <Col xs={24} md={24} >
            <div style={{ height: '700px', position: 'relative', }}>
              <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.12}/>
            </div>          
          </Col>
        </Row>
    </div>
  )
}
export default Home