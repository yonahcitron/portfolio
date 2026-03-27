import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (

      <div className="about-container">
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/headshots/portfolio-site-headshot.jpeg`} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yonahcitron" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yonah-citron-b76705192/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Yonah Citron</h1>
          <h2>Software & Data Engineer</h2>
          <div className="mobile_social_icons">
            <a href="https://github.com/yonahcitron" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yonah-citron-b76705192/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
  );
}

export default Main;
// https://raw.githubusercontent.com/yonahcitron/my-website-assets/main/assets/images/profile.png