import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function Loading() {
  return (
    <section className="loading">
      <DotLottieReact
        className="loading-gif"
        src="https://lottie.host/7337ebab-b7b7-4bb7-ac66-dfef1fa00719/s2DOIPc3W8.lottie"
        loop
        autoplay
      />
      <p className="orange-text">
        Please wait while we stir up your ingredients ...
      </p>
    </section>
  );
}
