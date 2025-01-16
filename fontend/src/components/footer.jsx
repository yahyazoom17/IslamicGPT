import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container text-center">
        <span>Created By Yahya.</span><br />
        <span>© 2024 IslamicGPT Powered By ChatGPT. All rights reserved.</span>
        <div className="my-3">
          <a
            href="https://github.com/yahyazoom17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/simply._.yahya/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@CodeConfluxOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;