import { Col, Row } from "antd";
import BlurText from "../../components/BlurText/BlurText";
import Particles from "../../components/Particles/Particles";
import { FaReact } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import ProjectCard from "./ProjectCard";
import { useMediaQuery } from 'react-responsive'; // Thêm import
import { SiAntdesign, SiMongodb } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import './css.css';

const Projects = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Kiểm tra nếu màn hình nhỏ hơn 768px (mobile)
    console.log("isMobile", isMobile);
    

    const projects = [
        {
            name: 'Website Bán Đồ Chơi, BabyThree, Gấu Bông, Đồ Chơi Trẻ Em (Reponsive dùng trên mobile hợp lý, đẹp mắt)',
            description: 'Website bán đồ chơi trẻ em, gấu bông, đồ chơi trẻ em. Sử dụng NodeJS, ReactJS, MongDB. Giúp người dùng có thể thanh toán online và nhận hàng tận nơi.',
            image: 'https://backend-project-web.dokhactu.site/uploads/1744225298199.png',
            demoLink: 'https://blindboxmibia.com/',
            techIcons: [
                { icon: <FaReact size={30} style={{color:'blue'}}/>, name: 'ReactJS' },
                { icon: <RiNodejsLine size={30} style={{color:'green'}} />, name: 'NodeJS' },
                { icon: <SiAntdesign style={{color:'#ff66ff'}} size={30} />, name: 'Ant Design' },
                { icon: <SiMongodb style={{color:'green'}} size={30} />, name: 'Mongodb' },
            ],
        },
        {
            name: 'Xây dựng website bán về các thể loại game Roblox và các dịch vụ (giống web sharecode.vn có thể cho người dùng đăng sản phẩm lên bán)',
            description: 'Sử dụng NodeJS, ReactJS, MongDB. Tích hợp nạp tiền tự động với SEPAY. Gạch thẻ cào tự động chỉ 3-5s với gachthe1s.com',
            image: '../../../public/bandicam 2025-05-06 19-10-59-912.png',
            demoLink: 'https://www.shoprobux.store/',
            techIcons: [
                { icon: <FaReact size={30} style={{color:'blue'}}/>, name: 'ReactJS' },
                { icon: <RiNodejsLine size={30} style={{color:'green'}} />, name: 'NodeJS' },
                { icon: <SiAntdesign style={{color:'#ff66ff'}} size={30} />, name: 'Ant Design' },
                { icon: <SiMongodb style={{color:'green'}} size={30} />, name: 'Mongodb' },
            ],
        },
        {
            name: 'Website đặt lịch khám bệnh online, tích hợp thanh toán.',
            description: 'Website đặt lịch khám bệnh online, tích hợp thanh toán online với VNPAY. Sử dụng NodeJS, ReactJS, MongDB. Giúp người dùng có thể đặt lịch khám bệnh online với bác sĩ.',
            image: 'https://backend-project-web.dokhactu.site/uploads/1739258773747.png',
            demoLink: 'https://projectweb.dokhactu.site/detail-product?IdAcc=67929db18c1ce3a62cfae94e&IdLoaiSP=677b987a49cffa55455e68aa',
            techIcons: [
                { icon: <FaReact size={30} style={{color:'blue'}}/>, name: 'ReactJS' },
                { icon: <RiNodejsLine size={30} style={{color:'green'}} />, name: 'NodeJS' },
                { icon: <SiAntdesign style={{color:'#ff66ff'}} size={30} />, name: 'Ant Design' },
                { icon: <SiMongodb style={{color:'green'}} size={30} />, name: 'Mongodb' },
            ],
        },
        {
            name: 'Website bán đồ điện tử. Tích Hợp thanh toán online.',
            description: 'Website bán đồ điện tử sử dụng NodeJS, ReactJS, MongDB. Tích Hợp thanh toán online với VNPAY / SEPAY. Giúp người dùng có thể thanh toán online và nhận hàng tận nơi.',
            image: 'https://backend-project-web.dokhactu.site/uploads/1737629224107.jpg',
            demoLink: 'https://shopbandodientu.dokhactu.site/',
            techIcons: [
                { icon: <FaReact size={30} style={{color:'blue'}}/>, name: 'ReactJS' },
                { icon: <RiNodejsLine size={30} style={{color:'green'}} />, name: 'NodeJS' },
                { icon: <SiAntdesign style={{color:'#ff66ff'}} size={30} />, name: 'Ant Design' },
                { icon: <SiMongodb style={{color:'green'}} size={30} />, name: 'Mongodb' },
            ],
        },        
        {
            name: 'Website bán đồ điện tử (Giao diện gần giống CellphoneS), tích hợp thanh toán.',
            description: 'Website bán đồ điện tử sử dụng NodeJS, ReactJS, MongDB. Tích Hợp thanh toán online với VNPAY / SEPAY. Giúp người dùng có thể thanh toán online và nhận hàng tận nơi.',
            image: 'https://backend-project-web.dokhactu.site/uploads/1745509974873.png',
            demoLink: 'https://projectweb.dokhactu.site/detail-product?IdAcc=6807032e475d12be7600c45a&IdLoaiSP=677b987a49cffa55455e68aa',
            techIcons: [
                { icon: <FaReact size={30} style={{color:'blue'}}/>, name: 'ReactJS' },
                { icon: <RiNodejsLine size={30} style={{color:'green'}} />, name: 'NodeJS' },
                { icon: <SiAntdesign style={{color:'#ff66ff'}} size={30} />, name: 'Ant Design' },
                { icon: <SiMongodb style={{color:'green'}} size={30} />, name: 'Mongodb' },
            ],
        },
        {
            name: 'Website Bán Account Game, VPS, Tool Game tự động',
            description: 'Sử dụng NodeJS, ReactJS, MongDB. Giúp người dùng có thể mua bán tài khoản game, VPS, Tool Game tự động. Nạp tiền tự động với SEPAY.',
            image: '../../../public/bandicam 2025-05-06 19-16-35-053.png',
            demoLink: 'https://avatar2x.com/',
            techIcons: [
                { icon: <FaReact size={30} style={{color:'blue'}}/>, name: 'ReactJS' },
                { icon: <RiNodejsLine size={30} style={{color:'green'}} />, name: 'NodeJS' },
                { icon: <SiAntdesign style={{color:'#ff66ff'}} size={30} />, name: 'Ant Design' },
                { icon: <SiMongodb style={{color:'green'}} size={30} />, name: 'Mongodb' },
            ],
        },
        {
            name: 'Website Đặt Lịch Tour Du Lịch Online',
            description: 'Website Đặt Lịch Tour Du Lịch Online. Sử dụng NodeJS, ReactJS, MongDB. Giúp người dùng có thể đặt lịch tour du lịch online',
            image: 'https://backend-project-web.dokhactu.site/uploads/1745515261835.png',
            demoLink: 'https://tourdulich.vercel.app/',
            techIcons: [
                { icon: <FaReact size={30} style={{color:'blue'}}/>, name: 'ReactJS' },
                { icon: <RiNodejsLine size={30} style={{color:'green'}} />, name: 'NodeJS' },
                { icon: <SiAntdesign style={{color:'#ff66ff'}} size={30} />, name: 'Ant Design' },
                { icon: <SiMongodb style={{color:'green'}} size={30} />, name: 'Mongodb' },
            ],
        },
        
            
    ];

    return (
        <div style={{ maxWidth: 1300, position: 'relative', backgroundColor: '#050816', paddingBottom: 60, margin:'auto' }}>
            {/* Particles background */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* Content */}
            <Row justify="center" style={{ position: 'relative', zIndex: 1, padding: '100px 10px 40px 10px' }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ padding: '0 100px',marginBottom: 40 }}>
                    {!isMobile && (
                        <div
                            className="hidden-mobile"
                            style={{
                                maxWidth: 1400,
                                margin: '0 auto',
                                textAlign: 'center',
                                fontSize: '1.3rem',
                            }}
                        >
                            <BlurText
                                text="Các dự án sau đây thể hiện kỹ năng và kinh nghiệm của tôi thông qua các ví dụ thực tế về công việc của tôi. Mỗi dự án được mô tả ngắn gọn với các liên kết đến kho lưu trữ mã và bản demo trực tiếp trong đó. Nó phản ánh khả năng giải quyết các vấn đề phức tạp, làm việc với các công nghệ khác nhau và quản lý dự án hiệu quả của tôi."
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-2xl mb-8"
                            />
                        </div>
                    )}
                </Col>

                <Col xs={24}>
                    <Row gutter={[24, 24]} justify="center" style={{ padding: '0 100px' }}>
                        {projects.map((project, index) => (
                            <Col key={index} xs={24} sm={12} lg={8}>
                                <ProjectCard {...project} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Projects;
