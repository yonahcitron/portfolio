import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/yonahcitron" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/yonah-citron-b76705192/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:citronyonah@gmail.com"><EmailIcon/></a>
      </div>
      <p>Note: Demo pictures of company projects are excluded to respect intellectual property rights.</p>
      <p>&copy; 2026 Yonah Citron. All rights reserved.</p>
    </footer>
  );
}

export default Footer;