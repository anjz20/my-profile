import React from 'react';
import Lottie from 'react-lottie';
import readingBook from '../../../assets/reading-book.json';

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='pt-24'>
      <div className='mb-12'>
        <h1 className='text-4xl font-semibold drop-shadow-md text-center'>
          My <span className='text-primary'>Qualification</span>
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
        <div className='mx-auto lg:ml-auto'>
          {/* Diploma */}
          <div className='p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer'>
            <div className='text-right mb-4'>
              <h3 className='text-xl font-semibold text-primary '>
                Bachelor's Degree
              </h3>
              <p className='text-sm text-neutral font-semibold'>2020 - 2024</p>
            </div>
            <p className='text-sm text-neutral text-justify'>
              I completed my <b>Bachelor's degree</b> in{' '}
              <b>Computer Science and Engineering</b> from Sambalpur University
              Institute of Information Technology (SUIIT), Burla, in 2020-2024.<br/>
            </p>
          </div>

          {/* React Developer */}
          <div className='my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer'>
            <div className='text-right mb-4'>
              <h3 className='text-2xl font-semibold text-primary '>HSC</h3>
              <p className='text-sm text-neutral font-semibold'>2017 - 2019</p>
            </div>
            <p className='text-sm text-neutral text-justify'>
              I completed my 12th grade in the <b>Science stream</b> from Netaji
              Subhash Memorial City College in 2019.
              <br />I secured the first division with a remarkable score of{' '}
              <b>78%</b>.
            </p>
          </div>

          {/* SSC */}
          <div className='p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer'>
            <div className='text-right mb-4'>
              <h3 className='text-2xl font-semibold text-primary '>SSC</h3>
              <p className='text-sm text-neutral font-semibold'>2007 - 2017</p>
            </div>
            <p className='text-sm text-neutral text-justify'>
              I achieved first division with a remarkable score of <b>82%</b> in my
              10th grade examinations, completing my schooling St.Xavier'S High
              School (SXHS), Cuttack in 2017.at
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
