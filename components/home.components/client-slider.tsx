"use client";
import React from "react";
import Image from "next/image";

const ClientLogos = [
  "https://picsum.photos/176/100?random=1",
  "https://picsum.photos/176/100?random=2",
  "https://picsum.photos/176/100?random=3",
  "https://picsum.photos/176/100?random=4",
  "https://picsum.photos/176/100?random=5",
  "https://picsum.photos/176/100?random=6",
  "https://picsum.photos/176/100?random=7",
];

const ClientLogo = ({ url }: { url: string }) => (
  <Image alt="brand logo" height={100} src={url} width={176} />
);

export default function ClientSlider() {
  const totalLogos = ClientLogos.length;

  return (
    <div className="flex w-full overflow-hidden">
      <div
        className="flex animate-infinite-scroll flex-row gap-10 py-10 w-[calc(2*var(--count)*(theme(gap.10)+176px))] shrink-0"
        style={
          {
            "--count": totalLogos,
            animationDuration: "10s",
          } as React.CSSProperties
        }
      >
        {[...ClientLogos, ...ClientLogos].map((url, index) => (
          <ClientLogo key={index} url={url} />
        ))}
      </div>
    </div>
  );
}
