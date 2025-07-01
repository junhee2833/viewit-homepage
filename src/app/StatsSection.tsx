"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="w-full bg-black text-white flex flex-col items-center py-16 px-4"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* 로고 자리 */}
      <motion.div 
        className="flex justify-center mb-4"
        variants={itemVariants}
      >
        <div className="w-[240px] h-[60px] flex items-center justify-center">
          <img src="/icon2.png" alt="Viewit 로고" className="h-12 w-full object-contain" />
        </div>
      </motion.div>
      
      {/* 메인 타이틀 */}
      <motion.h2 
        className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-4 font-[Pretendard] leading-relaxed"
        variants={itemVariants}
      >
        <span className="text-[#a084f7]">해외 진출을 위한 모든 리뷰 영상 및 광고 영상 고민을<br /></span>
        <span className="text-white">한 번에 해결해드립니다</span>
      </motion.h2>
      
      {/* Number 타이틀 */}
      <motion.div 
        className="text-center text-4xl font-serif font-bold mt-16 mb-10"
        variants={itemVariants}
      >
        Number
      </motion.div>
      
      {/* 하단 3가지 숫자 정보 */}
      <div className="flex flex-col sm:flex-row justify-center gap-10 w-full max-w-4xl">
        {/* 제작한 숏폼 영상 수 */}
        <motion.div 
          className="flex-1 flex flex-col items-center text-center"
          variants={statsVariants}
        >
          <div className="text-5xl font-extrabold mb-2">250+</div>
          <div className="text-base text-gray-300">제작한 숏폼 영상 수</div>
        </motion.div>
        
        {/* 외국인 체험단 풀 */}
        <motion.div 
          className="flex-1 flex flex-col items-center text-center"
          variants={statsVariants}
        >
          <div className="text-5xl font-extrabold mb-2">1000+</div>
          <div className="text-base text-gray-300">보유한 외국인 체험단 풀</div>
        </motion.div>
        
        {/* 기업 재이용률 */}
        <motion.div 
          className="flex-1 flex flex-col items-center text-center"
          variants={statsVariants}
        >
          <div className="text-5xl font-extrabold mb-2">70%</div>
          <div className="text-base text-gray-300">기업 재이용률</div>
        </motion.div>
      </div>
    </motion.section>
  );
} 