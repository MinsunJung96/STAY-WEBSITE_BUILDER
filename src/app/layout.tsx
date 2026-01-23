import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STAY | 숙소 종합 컨설팅",
  description:
    "인테리어 리모델링부터 운영 전략까지, 당신의 숙소를 새롭게 만들어드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
