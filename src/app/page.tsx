"use client";
import ContactForm from "./ContactForm";
import PromoSection from "./PromoSection";
import StatsSection from "./StatsSection";

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* 메인 영상 */}
      <div className="bg-black w-full pt-4 pb-4">
        <video
          src="/videos/sample2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="max-w-6xl w-full sm:w-11/12 h-auto block mx-auto"
        />
      </div>
      
      {/* 영상과 이미지 사이 공백 */}
      <div className="bg-black w-full h-10"></div>
      
      {/* 프로모션 섹션 */}
      <PromoSection />
      
      {/* 추가 이미지 및 동영상 */}
      <div className="w-full flex flex-col gap-0">
        <StatsSection />
        <div className="bg-black w-full py-4">
          <video
            src="/videos/sample5.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="max-w-3xl w-4/5 sm:w-4/5 w-full h-auto block mx-auto"
          />
        </div>
        {/* sample5.mp4 아래 검정색 여백 */}
        <div className="bg-black w-full py-6"></div>
        {/* 사진고 섹션 타이틀 */}
        <div className="w-full flex justify-center bg-black pt-10">
          <h2 className="text-xs sm:text-2xl font-bold text-center text-white">VIEWIT에서 제공하는 가치</h2>
        </div>
        {/* 사진고 섹션 추가 */}
        <section className="w-full flex flex-col sm:flex-row items-center justify-center gap-8 bg-black text-white py-6 px-6 sm:px-16">
          {/* 왼쪽 그래프(빈 이미지) */}
          <div className="flex-1 flex items-center justify-center min-h-[220px] sm:py-6 py-0 overflow-hidden h-[200px] sm:h-[390px]">
            <img src="/graph.png" alt="그래프 자리" className="w-full max-w-2xl h-full object-contain rounded scale-125 sm:scale-100" />
          </div>
          {/* 오른쪽 텍스트 박스 */}
          <div className="flex-1 flex flex-col gap-4 max-w-xl items-start sm:-translate-x-16">
            <ul className="flex flex-col gap-4 w-full">
              <li className="bg-[#232323] rounded-lg p-4 flex gap-3 items-start">
                <span className="text-[#a084f7] text-2xl mt-1">✔️</span>
                <div>
                  <b>저렴한 비용으로 대량 제작</b><br />
                  <span className="text-sm text-gray-200">- <span className='text-[#a084f7]'>외주 제작 대비 9배 저렴한 가격</span><br />- 체험단 풀을 바탕으로 빠르게 진행되는 대량 제작</span>
                </div>
              </li>
              <li className="bg-[#232323] rounded-lg p-4 flex gap-3 items-start">
                <span className="text-[#a084f7] text-2xl mt-1">✔️</span>
                <div>
                  <b>자유롭게 마케팅 2차 활용</b><br />
                  <span className="text-sm text-gray-200">- 원본 영상 파일 제공<br />- <span className='text-[#a084f7]'>틱톡, 인스타, 유튜브, 아마존 영상 리뷰 등 모든 플랫폼에 자유롭게 이용 가능</span></span>
                </div>
              </li>
              <li className="bg-[#232323] rounded-lg p-4 flex gap-3 items-start">
                <span className="text-[#a084f7] text-2xl mt-1">✔️</span>
                <div>
                  <b>최신 해외 트렌드를 반영한 가이드라인 기획</b><br />
                  <span className="text-sm text-gray-200">- 북미의 틱톡, 동남아시아의 Shopee 비디오 등 해외 각국의 트렌드 반영</span>
                </div>
              </li>
              <li className="bg-[#232323] rounded-lg p-4 flex gap-3 items-start">
                <span className="text-[#a084f7] text-2xl mt-1">✔️</span>
                <div>
                  <b>외국인 체험단 개인 틱톡 계정 업로드를 통한 홍보</b>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* 입력폼 나오기 전 검정색 여백 */}
        <div className="bg-black w-full py-6"></div>
      </div>
      
      {/* Contact us 폼 시작 */}
      <div id="contact-section">
        <ContactForm />
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {/* 회사 정보 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Viewit</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>VIEWIT | 대표: 오수빈 | 사업자등록번호: 889-15-02900</p>
                <p>경기도 광명시 사성로 91</p>
                <p>subin@viewitcorp.com</p>
              </div>
            </div>
          </div>
          
          {/* 하단 구분선 및 저작권 */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex justify-center items-center text-sm text-gray-400">
              <p>&copy; 2025 Viewit. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* 플로팅 문의하기 버튼 */}
      <button
        onClick={scrollToContact}
        className="fixed bottom-6 right-6 bg-[#e07a3a] hover:bg-[#d96a22] text-white font-semibold rounded-full px-4 py-3 text-sm shadow-lg transition-all duration-300 hover:scale-105 z-50"
      >
        문의하기
      </button>
    </div>
  );
}
