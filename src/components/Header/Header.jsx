import { Layout, Menu, Avatar, Drawer, Button } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import "./style.css";
import { useState, useEffect } from "react";
import GlitchText from "../GlitchText/GlitchText";
import GradientText from "../GradientText/GradientText";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const HeaderPage = () => {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Detect if it's a mobile device
    const navigator = useNavigate(); // Use useNavigate from react-router-dom
    // Update isMobile when window resizes
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Call it immediately to set the initial state

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  
  return (
    <Header className="custom-header">
      {/* Logo & tên */}
      <div className="logo-section" onClick={() => navigator('/')}>
        <Avatar className="avatar" src="/laptop.svg" icon={<UserOutlined />} />
        <span className="txt-logo">
        {/* <GlitchText speed={0.5} enableShadows={true} enableOnHover={false} className="glitch-text">
        Khắc Tú | Frontend Developer
        </GlitchText> */}
        <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#ff6600"]}
            animationSpeed={4}
            showBorder={false}
            className="custom-class"
            >
            Khắc Tú | Fullstack Developer
        </GradientText>
        </span>
      </div>

      {/* Menu ngang cho desktop */}
      {/* {!isMobile ? (
        <div className="menu-desktop">
          <Menu
            mode="horizontal"
            theme="dark"
            className="menu"
            defaultSelectedKeys={["home"]}
          >
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="projects">Projects</Menu.Item>
            <Menu.Item key="Profile">Profile</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
          </Menu>
        </div>
      ) : (
        // Nút mở Drawer trên mobile
        <div className="menu-mobile">
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: "white", fontSize: 24 }} />}
            onClick={() => setOpen(true)}
          />
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setOpen(false)}
            open={open}
          >
            <Menu
              mode="vertical"
              defaultSelectedKeys={["home"]}
              onClick={() => setOpen(false)} // Close the drawer when a menu item is clicked
            >
              <Menu.Item key="home">Home</Menu.Item>
              <Menu.Item key="projects">Projects</Menu.Item>
              <Menu.Item key="Profile">Profile</Menu.Item>
              <Menu.Item key="contact">Contact</Menu.Item>            
            </Menu>
          </Drawer>
        </div>
      )} */}
    </Header>
  );
};

export default HeaderPage;
