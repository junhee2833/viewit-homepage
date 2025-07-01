"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function useInViewAnimation(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.7 } });
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [controls, threshold]);

  return [ref, controls] as const;
}

export default function PromoSection() {
  const [badgeRef, badgeControls] = useInViewAnimation();
  const [titleRef, titleControls] = useInViewAnimation();
  const [descRef, descControls] = useInViewAnimation();
  const [emphRef, emphControls] = useInViewAnimation();
  const [problemsRef, problemsControls] = useInViewAnimation();

  return (
    <section className="w-full bg-black text-white flex flex-col items-center py-16 px-4">
      {/* 상단 뱃지 */}
      <motion.div
        ref={badgeRef}
        initial={{ opacity: 0, y: 40 }}
        animate={badgeControls}
        className="mb-6"
      >
        <span className="inline-block bg-white text-black font-bold rounded-full px-6 py-2 text-lg shadow">STUDIO VIEWIT</span>
      </motion.div>
      {/* 메인 타이틀 */}
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: 40 }}
        animate={titleControls}
        className="text-[8px] sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-4 px-4 sm:px-0"
      >
        <span className="text-[#a084f7]">해외진출을 위해 필수적인 숏폼 마케팅</span>
      </motion.h2>
      <motion.div
        ref={descRef}
        initial={{ opacity: 0, y: 40 }}
        animate={descControls}
        className="text-center text-lg mb-2"
      >
        틱톡, 릴스, 아마존 리뷰 영상까지.<br />
        <span className="block sm:inline">해외 마케팅을 하려면 외국인 리뷰 영상이</span>
        <span className="block sm:inline">반드시 필요합니다.</span>
      </motion.div>
      {/* 중간 강조 문구 */}
      <motion.h3
        ref={emphRef}
        initial={{ opacity: 0, y: 40 }}
        animate={emphControls}
        className="text-[8px] sm:text-2xl md:text-3xl font-extrabold text-center mt-16 mb-10 px-4 sm:px-0"
      >
        <span className="block sm:inline">하지만, 어떻게 해야할지</span>
        <span className="block sm:inline">막막하시죠?</span>
      </motion.h3>
      {/* 하단 3가지 문제점 */}
      <motion.div
        ref={problemsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={problemsControls}
        className="flex flex-col sm:flex-row justify-center gap-10 w-full max-w-4xl"
      >
        {/* 비용 문제 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="text-4xl mb-3">💸</div>
          <div className="font-bold text-lg mb-2">비용 문제</div>
          <div className="text-base text-gray-300">숏폼 영상들을 확보하고 싶은데<br />건당 50만원이라 부담이 돼요.</div>
        </div>
        {/* 과도한 양의 업무 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="text-4xl mb-3">📝</div>
          <div className="font-bold text-lg mb-2">과도한 양의 업무</div>
          <div className="text-base text-gray-300">트렌디하게 가이드라인 작성,<br />외국인 섭외, 촬영, 편집 등<br />해야할 일이 너무 많아요.</div>
        </div>
        {/* 트렌드 분석의 어려움 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="text-4xl mb-3">📈</div>
          <div className="font-bold text-lg mb-2">트렌드 분석의 어려움</div>
          <div className="text-base text-gray-300">지금 유행하는 숏폼 트렌드를<br />잘 모르겠어요.</div>
        </div>
      </motion.div>
    </section>
  );
} 