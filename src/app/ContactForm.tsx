"use client";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="w-full bg-[#353535] text-white py-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 좌측 안내 */}
        <div className="flex flex-col gap-6 justify-center">
          <h2 className="text-3xl font-bold mb-2">Contact us</h2>
          <p className="mb-6 text-lg">메일 또는 폼을 통해 문의주시면 확인 후 연락드리겠습니다.</p>
          <div className="flex items-center gap-3 mb-2">
            <Image src="/file.svg" alt="이메일" width={24} height={24} />
            <span className="text-base">subin@viewitcorp.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/window.svg" alt="전화" width={24} height={24} />
            <span className="text-base">010-4785-6076</span>
          </div>
        </div>
        {/* 우측 입력 폼 */}
        <form className="bg-transparent flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="company" className="text-sm mb-1">회사명</label>
              <input id="company" name="company" type="text" className="rounded p-2 text-black bg-white" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm mb-1">성함/직책</label>
              <input id="name" name="name" type="text" className="rounded p-2 text-black bg-white" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm mb-1">이메일</label>
              <input id="email" name="email" type="email" className="rounded p-2 text-black bg-white" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-sm mb-1">연락처</label>
              <input id="phone" name="phone" type="text" className="rounded p-2 text-black bg-white" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="content" className="text-sm mb-1">문의내용 (선택)</label>
            <textarea id="content" name="content" rows={5} className="rounded p-2 text-black bg-white" />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input id="privacy" name="privacy" type="checkbox" className="w-4 h-4" />
            <label htmlFor="privacy" className="text-xs select-none">
              문의에 대한 답변을 받기 위해 <a href="#" className="text-purple-300 underline">개인정보 취급방침</a>에 동의합니다.
            </label>
          </div>
          <button type="submit" className="mt-4 bg-[#e07a3a] hover:bg-[#d96a22] text-white font-semibold rounded w-full py-3 text-lg transition-colors">문의 접수하기</button>
        </form>
      </div>
    </section>
  );
} 