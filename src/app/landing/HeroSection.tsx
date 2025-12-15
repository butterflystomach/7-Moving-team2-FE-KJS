import Image from "next/image";
import MovingSmall from "@/assets/img/Landing1.svg";
import MovingHome from "@/assets/img/Landing2.svg";
import MovingBusiness from "@/assets/img/Landing3.svg";
import MovingSmallMd from "@/assets/img/Landing_md_01.svg";
import MovingHomeMd from "@/assets/img/Landing_md_02.svg";
import MovingBusinessMd from "@/assets/img/Landing_md_03.svg";
import AnimatedText from "./AnimatedText.client";
import AuthButtons from "./AuthButtons.client";

export default function HeroSection() {
  return (
    <section
      id="section-1"
      className="flex min-h-screen flex-col items-center justify-center bg-[#F4F7FB]"
    >
      <AnimatedText className="pt-16 pb-6 text-center font-[Pretendard] text-[24px] font-semibold md:text-[36px]">
        원하는 이사 서비스를 요청하고 <br />
        견적을 받아보세요.
      </AnimatedText>

      {/* 모바일 */}
      <div className="flex w-full flex-col items-center gap-4 px-4 md:hidden">
        <Image src={MovingSmall.src} alt="소형이사" width={360} height={200} />
        <Image src={MovingHome.src} alt="가정이사" width={360} height={200} />
        <Image src={MovingBusiness.src} alt="기업이사" width={360} height={200} />
      </div>

      {/* 태블릿 */}
      <div className="hidden w-full flex-col items-center gap-4 px-6 md:flex lg:hidden">
        <Image src={MovingSmall.src} alt="소형이사" width={600} height={300} />
        <Image src={MovingHome.src} alt="가정이사" width={600} height={300} />
        <Image src={MovingBusiness.src} alt="기업이사" width={600} height={300} />
      </div>

      {/* 데스크톱 */}
      <div className="hidden lg:flex lg:gap-6">
        <Image src={MovingSmallMd.src} alt="소형이사" width={432} height={508} />
        <div className="flex flex-col gap-6">
          <Image src={MovingHomeMd.src} alt="가정이사" width={764} height={241} />
          <Image src={MovingBusinessMd.src} alt="기업이사" width={764} height={241} />
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <AuthButtons />
      </div>
    </section>
  );
}
