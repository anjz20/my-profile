import React from 'react';
import Lottie from 'react-lottie';
import experience from '../../../assets/experience.json';

const Experience = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: experience,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='pt-24'>
      <div className='mb-12'>
        <h1 className='text-4xl font-semibold drop-shadow-md text-center'>
          My <span className='text-primary'>Experience</span>
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
        <div className=''>
        <Lottie
            options={defaultOptions}
            height='70%'
            width='90%'
            className='mx-auto lg:mr-auto'
          />
        </div>
        {/* <div className='mx-auto lg:ml-auto'>
          {/* Twilio */}
          {/* <div className='p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer'> */}
            {/* <div className='text-right mb-4'>
              <h3 className='text-xl font-semiboldtext-orange-500'>
                Field Operator @Twilio
              </h3>
              <p className='text-sm text-neutral font-semibold'>
                Feb2022 - Feb2023
              </p>
            </div>
            <p className='text-sm text-neutral text-justify'>
              I'm one of the <b>Top 10 folks in India</b> & <b>Top 200 folks globally</b> who
              got accepted into Twilio Field Operator.<br/>Twilio Field Operators
              are <b>student leaders</b> looking for opportunities to lead, explore new
              technologies, and serve their communities.<br/> Field Operators get a
              head-start through hands-on <b>workshops</b> with <b>expert speakers</b> and the
              support of our growing community.
            </p>
          // </div> */} 
{/* 
          {/* GSSOC */}
          {/* <div className='my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer'>
            <div className='mb-4'>
              <h3 className='text-2xl font-semiboldtext-orange-500'>
                Open-Source Contributor @GSSOC
              </h3>
              <p className='text-sm text-neutral font-semibold'>
                Mar2022 - May2022
              </p>
            </div>
            <p className='text-sm text-neutral text-justify'>
              This was an <b>Open Source program</b> for enthusiasts who enjoy
              contributing to projects or working on a single problem statement
              collaboratively to find the best possible solutions.
              <br /> I contributed to <b>five projects</b> during GSSoC'22, and <b>seven</b>
              of my PRs were <b>successfully merged</b>.
              <br />
              Throughout the program, I learned something useful and got a deep
              dive into open source.
              <br />
              And also secured a <b>Rank of 98th amongst 850+ contributors</b>.
            </p>
          </div>  */}

          {/* Microsoft */}
          <div className='p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer'>
            <div className='text-right mb-4'>
              <h3 className='text-2xl font-semibold text-primary '>
              Open Source Contributor
              </h3>
              <p className='text-sm text-neutral font-semibold'>
              Oct 2022 - Nov 2022
              </p>
            </div>
            <p className='text-sm text-neutral text-justify'>
            Successfully participated in Hacktoberfest 2022 and achieved personal milestones.
Merged a total of 7 pull requests out of 4,showcasing a high level of contribution and involvement.
Enjoyed the process of solving random issues and providing assistance to fellow developers, finding it both enjoyable and fulfilling.
Gained valuable experience and learning by overcoming challenges, making mistakes, and actively issuing pull requests, further enhancing skills in the realm of open source development.
            </p>
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default Experience;
