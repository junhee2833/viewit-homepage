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
          className="max-w-6xl w-11/12 h-auto block mx-auto"
        />
      </div>
      
      {/* 영상과 이미지 사이 공백 */}
      <div className="bg-black w-full h-16"></div>
      
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
            className="max-w-3xl w-4/5 h-auto block mx-auto"
          />
        </div>
        {/* 포트폴리오 확인하기 버튼 */}
        <div className="w-full flex justify-center bg-black pb-8">
          <a
            href="https://drive.google.com/drive/folders/1fSuxQGuqg6w5o_5NQtTkmOsMDnk65lrk?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#a084f7] hover:bg-[#7c5fd4] text-white font-semibold rounded-full px-8 py-3 text-base shadow-lg transition-colors duration-200"
          >
            포트폴리오 확인하기
          </a>
        </div>
        <div className="bg-[#f6f6f6] w-full py-4">
          <img src="/videos/sample6.png" alt="sample6" className="max-w-4xl w-11/12 h-auto block mx-auto" />
        </div>
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
