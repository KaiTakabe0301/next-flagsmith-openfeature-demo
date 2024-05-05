"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-between items-center">
      <Typography variant="h1">Here&apos;s our button!</Typography>
      <div id="submit_button">
        <Button type="button">Flagsmith Quickstart Button!</Button>
      </div>
    </div>
  );
}
