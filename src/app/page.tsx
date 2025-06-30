import ContactForm from "./ContactForm";

export default function Home() {
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
      
      {/* 추가 이미지 및 동영상 */}
      <div className="w-full flex flex-col gap-0">
        <div className="bg-black w-full py-4">
          <img src="/videos/sample3.png" alt="sample3" className="max-w-3xl w-4/5 h-auto block mx-auto" />
        </div>
        <div className="bg-black w-full py-4">
          <img src="/videos/sample4.png" alt="sample4" className="max-w-3xl w-4/5 h-auto block mx-auto" />
        </div>
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
        <div className="bg-[#f6f6f6] w-full py-4">
          <img src="/videos/sample6.png" alt="sample6" className="max-w-4xl w-11/12 h-auto block mx-auto" />
        </div>
      </div>
      
      {/* Contact us 폼 시작 */}
      <ContactForm />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 회사 정보 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Viewit Corp</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>사업자등록번호: 123-45-67890</p>
                <p>대표: 홍길동</p>
                <p>개인정보보호책임자: 김철수</p>
              </div>
            </div>
            
            {/* 연락처 정보 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📧 subin@viewitcorp.com</p>
                <p>📞 010-4785-6076</p>
                <p>🕒 평일 09:00 - 18:00</p>
              </div>
            </div>
            
            {/* 주소 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Address</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>서울특별시 강남구 테헤란로 123</p>
                <p>빌딩 4층 401호</p>
                <p>우편번호: 06123</p>
              </div>
            </div>
          </div>
          
          {/* 하단 구분선 및 저작권 */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2024 Viewit Corp. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
                <a href="#" className="hover:text-white transition-colors">사이트맵</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
