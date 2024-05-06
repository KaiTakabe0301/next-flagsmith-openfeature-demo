"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useFlag } from "@openfeature/react-sdk";

export default function Home() {
  const { value: showDemoButton } = useFlag("show_demo_button", false);
  return (
    <div className="flex flex-col gap-4 justify-between items-center">
      <Typography variant="h1">Here&apos;s our button!</Typography>
      {showDemoButton && (
        <div id="submit_button">
          <Button type="button">Flagsmith Quickstart Button!</Button>
        </div>
      )}
    </div>
  );
}
