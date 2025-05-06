import Dock from "../Dock/Dock"
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigator = useNavigate();

  const items = [
      { icon: <FaHome style={{color:"white"}} size={18} />, label: 'Home', onClick: () => navigator('/') },
      { icon: <FaProjectDiagram style={{color:"white"}} size={18} />, label: 'Project', onClick: () => navigator('/project') },
      { icon: <VscAccount style={{color:"white"}} size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
      { icon: <VscSettingsGear style={{color:"white"}} size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
    ];
  
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: 'transparent' }}>
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  )
}
export default Footer