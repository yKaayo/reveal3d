import Header from "@/components/Header";
import Image from "next/image";

const About = () => {
  return (
    <section className="min-h-dvh w-full">
      <video
        autoPlay
        muted
        loop
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/purple_abstract.mp4" type="video/mp4" />
        <track src="/videos/purple_abstract.mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      <div className="absolute inset-0 w-full h-full bg-black/50"></div>

      <div className="absolute w-full h-full flex flex-col items-center justify-between">
        <Header />
        <Image
          src="/images/sobre.svg"
          className="w-full px-5 max-h-[60%]"
          height={29}
          width={37}
          alt="Logo"
        />
      </div>
    </section>
  );
};

export default About;
