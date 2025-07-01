"use client";

export default function StatsSection() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center py-16 px-4">
      {/* 로고 자리 */}
      <div className="flex justify-center mb-4">
        <div className="w-[240px] h-[60px] flex items-center justify-center">
          <img src="/icon2.png" alt="Viewit 로고" className="h-12 w-full object-contain" />
        </div>
      </div>
      {/* 메인 타이틀 */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-4 font-[Pretendard] leading-relaxed">
        <span className="text-[#a084f7]">해외 진출을 위한 모든 리뷰 영상 및 광고 영상 고민을<br /></span>
        <span className="text-white">한 번에 해결해드립니다</span>
      </h2>
      {/* Number 타이틀 */}
      <div className="text-center text-4xl font-serif font-bold mt-16 mb-10">Number</div>
      {/* 하단 3가지 숫자 정보 */}
      <div className="flex flex-col sm:flex-row justify-center gap-10 w-full max-w-4xl">
        {/* 제작한 숏폼 영상 수 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="text-5xl font-extrabold mb-2">250+</div>
          <div className="text-base text-gray-300">제작한 숏폼 영상 수</div>
        </div>
        {/* 외국인 체험단 풀 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="text-5xl font-extrabold mb-2">1000+</div>
          <div className="text-base text-gray-300">보유한 외국인 체험단 풀</div>
        </div>
        {/* 기업 재이용률 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="text-5xl font-extrabold mb-2">70%</div>
          <div className="text-base text-gray-300">기업 재이용률</div>
        </div>
      </div>
    </section>
  );
} 