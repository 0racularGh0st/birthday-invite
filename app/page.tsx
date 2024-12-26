"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import BG from './public/bg.jpg';
import Confetti from 'react-confetti';
import React from "react";


export default function Home() {
  const [confetti, setConfetti] = React.useState(false);

  const handleClick = () => {
    setConfetti(true);
    setTimeout(() => {
      window.open('https://wa.me/+919500188309?text=I%20will%20be%20there%20for%20the%20party')
    }, 3500);
  }
  
  return (
    <div className="w-full h-full font-primary font-semibold">
      <Image src={BG} alt="bg" layout="fill" objectFit="cover" className="fixed top-0 left-0 z-0" />
      <div className="flex flex-col z-10 relative text-white items-center justify-center w-[100vw] h-[100vh]">
        <h3 className="text-lg mb-6 text-[#dce6ff] text-[24px]" style={{ fontWeight: 600 }}>
          You are cordially invited to
        </h3>
        <h1 className="text-xl text-center text-[#ffffff] text-[40px]" style={{ fontWeight: 600, lineHeight: '44px' }}>
          Michael's Barbeque / Karaoke Party
          <p>&</p>
          Nigel's Birthday
        </h1>
        <h3 className="mt-6 text-center">
          <span className="text-[#dce6ff] text-[24px]">Monday, 30th December 2024</span>
          <br />
          <span className="text-[#dce6ff] text-[24px]">From 6:30 PM onwards</span>
        </h3>
        <h3 className="mt-6 text-center mb-6">
          <span className="text-[#dce6ff] text-[24px]">At Michael's Residence (Divine Residency)</span>
          <br />
          <span className="text-[#dce6ff] text-[24px] ">House no 607, 4th Floor</span>
        </h3>
        <div className="max-w-[calc(100%-32px)] flex justify-center relative group">
        <div className="absolute w-full h-full bg-blue-500 z-10 rounded-[20px] opacity-50 pointer-events-none group-hover:bg-transparent transition-all duration-300"/>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.507906396266!2d77.13368667585057!3d28.52444958898002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d00710e467d%3A0xce8c8d5ca766190a!2sDivine%20residency!5e0!3m2!1sen!2sin!4v1735232450939!5m2!1sen!2sin" width="100%" height={300} style={{border:0, borderRadius: '20px', zIndex: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="relative">
        </iframe>
        </div>
        <button
          onClick={() => handleClick()}
          className="mt-6 px-8 py-2 text-[#ffffff] bg-[#ffffff7f] rounded-[10px] text-lg font-semibold hover:rounded-none transition-all duration-300"
        >
          I'll Be There!
        </button>
      </div>
      {confetti && <Confetti
        width={400}
        height={600}
        recycle={false}
        gravity={0.1}
        numberOfPieces={500}
        style={{
          top: '0px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />}
      
    </div>
  );
}