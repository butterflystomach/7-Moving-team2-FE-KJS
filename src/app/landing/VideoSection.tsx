import AnimatedText from "./AnimatedText.client";

export default function VideoSection() {
  return (
    <section
      id="section-2"
      className="flex min-h-screen flex-col items-center justify-center bg-[#F4F7FB] py-20"
    >
      <AnimatedText>
        이사 과정을 영상으로 <br />
        간편하게 확인해보세요.
      </AnimatedText>

      <div className="mt-8 w-full max-w-[1400px] px-4">
        <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/rvuPFGw_-fY"
            title="Moving Service Intro Video"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          />
        </div>
      </div>
    </section>
  );
}
