import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href="https://x.com/Anjalisharma_90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-blue-600" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/anjali-sharma-3b58961b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://leetcode.com/u/Anjz2024/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="text-2xl text-orange-500" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://github.com/anjz20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black" />
          </a>
          
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://leetcode.com/u/Anjz2024/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leetcode
          </a>
         
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://drive.google.com/file/d/1TTZ_9u9jqzKq1uMIDjaw-GJY8WJXwU8j/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://github.com/anjz20"
              className="text-primary hover:underline"
              target="blank"
            >
              Anjali Sharma
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
