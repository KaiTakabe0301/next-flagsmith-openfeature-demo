"use client";

import { Typography } from "@/components/ui/typography";
import dynamic from "next/dynamic";

/**
 * Flagsmithで、フラグの値を変更 → 画面をリロードすると、Hydration error が発生する
 * それを回避するために、dynamic import を使ってコンポーネントを読み込む
 */
const DemoButton = dynamic(
  () => import("@/components/demo-button").then((mod) => mod.DemoButton),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-between items-center">
      <Typography variant="h1">Here&apos;s our button!</Typography>
      <DemoButton />
    </div>
  );
}
