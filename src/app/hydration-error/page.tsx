"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useFlags } from "flagsmith/react";

/**
 * Flagsmithで、フラグの値を変更 → 画面をリロードすると、Hydration error が発生する
 * @returns
 */
export default function Home() {
  const flags = useFlags(["show_demo_button"]);
  return (
    <div className="flex flex-col gap-4 justify-between items-center">
      <Typography variant="h1">Here&apos;s our button!</Typography>
      {flags.show_demo_button.enabled && (
        <div id="submit_button">
          <Button type="button">Flagsmith Quickstart Button!</Button>
        </div>
      )}
    </div>
  );
}
