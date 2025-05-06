import { Card, Button, Tooltip, Image } from 'antd';
import { FaReact, FaNode, FaExternalLinkAlt } from 'react-icons/fa';
import GradientText from '../../components/GradientText/GradientText';
import BlurText from '../../components/BlurText/BlurText';

const ProjectCard = ({ image, name, description, techIcons, demoLink }) => {
  return (
    <Card
        hoverable
        cover={<Image alt={name} src={image} style={{ height: 200, objectFit: 'cover', transition: 'transform 0.5s ease' }} />}
        style={{
            width: 350,
            borderRadius: 12,
            overflow: 'hidden',
            position: 'relative',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        bodyStyle={{ paddingBottom: 60,  }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
        }}
    >
      
        <GradientText
            colors={[
                "#ff3c3c",  // đỏ rực
                "pink",  // cam sáng
                "green",  // vàng chanh
                "blue",  // xanh lam sáng
                "#ff00ff",  // hồng fuchsia
            ]}
            animationSpeed={5}
            showBorder={false}
            className="custom-class"
            >
           <h3>{name}</h3>
        </GradientText>
        <BlurText
            text={description}
            delay={200}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
        />
      {/* <p>{description}</p> */}

      {/* Bottom overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: 16,
          right: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: 8 }}>
          {techIcons.map((item, index) => (
            <Tooltip key={index} title={item.name}>
                <span style={{ fontSize: 20, }}>{item.icon}</span>
            </Tooltip>
          ))}
        </div>
        <Button
            shape="round"
            icon={<FaExternalLinkAlt />}
            size="small"
            href={demoLink}
            target="_blank"
            style={{
                background: 'linear-gradient(135deg,rgb(255, 0, 4),rgb(4, 0, 255))',
                color: 'white',
                border: 'none',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                padding: '16px',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(1.2)';
                e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'none';
                e.currentTarget.style.transform = 'scale(1)';
            }}
            >
            Xem demo
        </Button>

      </div>
    </Card>
  );
};

export default ProjectCard;
