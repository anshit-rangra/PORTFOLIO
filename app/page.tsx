import Scene from "@/components/Scene";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1 className="text-8xl">Welcome to My Portfolio</h1>
    <video
        autoPlay
        loop
        muted         
        playsInline   
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Forces the video to fill the screen without squishing
          zIndex: -1,         // Puts the video behind everything else
        }}
      ><source src="/bg.mp4" type="video/mp4" /></video>

    {/* <Scene /> */}
    </>
  );
}
