import { useFlags } from "flagsmith/react";
import { Button } from "@/components/ui/button";

export function DemoButton() {
  const flags = useFlags(["show_demo_button"]);
  return (
    <>
      {" "}
      {flags.show_demo_button && (
        <div id="submit_button">
          <Button type="button">Flagsmith Quickstart Button!</Button>
        </div>
      )}
    </>
  );
}
