import { useEffect, useRef, useState } from 'react';
import './css.css'
import gsap from 'gsap';
import { TypeAnimation } from 'react-type-animation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Col, Row, Card, Tag, Typography, Space, Anchor, Grid } from 'antd';
const { Title, Text, Paragraph } = Typography;
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Lightning from '../Lightning/Lightning';
import Iridescence from '../Iridescence/Iridescence';
import Squares from '../Squares/Squares';
import LetterGlitch from '../LetterGlitch/LetterGlitch';
import Stack from '../StackImage/Stack';
import GlitchText from '../GlitchText/GlitchText';
const { useBreakpoint } = Grid;


const Banner = () => {

    const laptopRef = useRef();
    const screens = useBreakpoint(); // true/false cho từng kích thước

    useEffect(() => {
        gsap.fromTo(laptopRef.current, 
          { y: 0 }, 
          {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: "power1.inOut"
          }
        );
    }, []);
    

    const code = `
    const developer = {
        fullName: 'Đỗ Khắc Tú',
        title: 'Fullstack Developer',
        location: 'Vietnam',
        experience: '
            Đã có 6 tháng kinh nghiệm làm việc với React và Node.js.
            Đã tham gia vào nhiều dự án thực tế 
            và có khả năng làm việc độc lập cũng như trong nhóm.',
        contact: {
            Email: 'dokhactu1822@gmail.com',
            Phone: '0972.138.493',
            Github: 'https://github.com/20810310383',
            Website: 'https://projectweb.dokhactu.site'
        },
        skills: {
            frontend: ['React', 'Redux', 'HTML5', 'CSS3', 'JavaScript', 'Antdesign', 'Bootstrap'],
            backend: ['Node.js', 'Express', 'MongoDB', 'SQL'],
            devOps: ['Docker', 'Git', 'CI/CD'],
            other: ['RESTful APIs']
        },
        
        isHireable() {
            return (
                this.skills.frontend.length > 0 &&
                this.skills.backend.length > 0 &&
                this.strengths.includes('Hard-working') &&
                this.strengths.includes('Fast Learner')
            );
        }
    };
    `;

    const fullCode = code.trim();
    const [displayedCode, setDisplayedCode] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const indexRef = useRef(0); // dùng useRef để giữ giá trị giữa các lần render
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (!isDeleting) {
          // GÕ TỪNG KÝ TỰ
          if (indexRef.current < fullCode.length) {
            setDisplayedCode(fullCode.slice(0, indexRef.current + 1));
            indexRef.current += 1;
          } else {
            setIsDeleting(true); // khi gõ xong thì chuyển sang xóa
          }
        } else {
          // XÓA TỪNG KÝ TỰ
          if (indexRef.current > 0) {
            setDisplayedCode(fullCode.slice(0, indexRef.current - 1));
            indexRef.current -= 1;
          } else {
            setIsDeleting(false); // khi xóa xong thì chuyển lại gõ
          }
        }
      }, 100); // chỉnh tốc độ gõ ở đây
  
      return () => clearInterval(interval);
    }, [isDeleting]);

    const images = [
        { id: 1, img: "../../../public/186479431_981693029235399_5634664986611583041_n.jpg" },
        { id: 2, img: "../../../public/272979841_1151687032235997_4906584431151808978_n.jpg" },
        { id: 3, img: "../../../public/336164611_150075117665376_6530587348099552931_n.jpg" },
        { id: 4, img: "../../../public/452000390_1707566876648007_4926589300158667499_n.jpg" }
    ];

  return (
    <div className="banner-container">        
        {/* <Iridescence
            color={[1, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={2.0}            
        /> */}
        {/* <Squares 
            speed={0.3} 
            squareSize={40}
            direction='diagonal' // up, down, left, right, diagonal
            borderColor='#fff'
            hoverFillColor='red'
        /> */}
        {/* <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={true}
        smooth={true}
        /> */}
        <Row gutter={[16, 16]} >
            {/* Laptop image - ẩn trên mobile */}
            {screens.md && (
            <Col md={8} className="banner-text" >
                <div
                ref={laptopRef}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    padding: '0 20px',
                    position: 'relative',
                    zIndex: 1,
                    left: 40,
                    top: 30,
                }}
                className="laptop-img"
                >
                {/* <img className="laptop-img" width={300} src="/laptop.svg" alt="Laptop" style={{ maxWidth: '100%' }} /> */}
                <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: 300, height: 300 }}
                    cardsData={images}
                />
                </div>
            </Col>
            )}

            {/* Code Card */}
            <Col xs={24} md={screens.md ? 16 : 24} className="banner-text">
            <div
                style={{
                display: 'flex',
                justifyContent: 'center',
                padding: 100,
                }}
            >
                <Card
                    title="👨‍💻 Developer Info"                   
                    bordered={false}
                    style={{
                        width: '100%',
                        maxWidth: 950,
                        maxHeight: 500,
                        borderRadius: 12,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                        color: '#fff',
                    }}
                    headStyle={{
                        color: 'black',
                        background: '#FFFFCC',
                        borderBottom: '1px solid #333',
                    }}
                
                >
                <div
                    style={{
                    maxHeight: 400,
                    overflowY: 'auto',
                    paddingRight: 10,
                    overflowX: 'hidden',  // 👈 Bật chế độ ẩn thanh cuộn ngang
                    whiteSpace: 'pre-wrap', wordBreak: 'break-word'
                    }}
                >
                    <SyntaxHighlighter
                    language="javascript"
                    wrapLines={true}
                    style={atomOneDark}
                    customStyle={{
                        fontFamily: `'Fira Code', 'Consolas', 'Courier New', monospace'`,
                        fontSize: '16px',
                        background: 'transparent',
                        padding: 0,
                        lineHeight: '1.6',
                    }}
                    >
                    {displayedCode}
                    </SyntaxHighlighter>
                </div>
                </Card>
            </div>
            </Col>
        </Row>
    </div>
  )
}
export default Banner