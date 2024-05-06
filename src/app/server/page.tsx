import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Flagsmith from "flagsmith-nodejs";

const flagsmith = new Flagsmith({
  environmentKey: "EuAfFiumzd5hkiNLU49zTt",
  apiUrl: "http://localhost:8000/api/v1/",
});

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  const isEnabled = flags.isFeatureEnabled("show_demo_button");

  return (
    <div className="flex flex-col gap-4 justify-between items-center">
      <Typography variant="h1">Here&apos;s our button!</Typography>
      {isEnabled && (
        <div id="submit_button">
          <Button type="button">Flagsmith Quickstart Button!</Button>
        </div>
      )}
    </div>
  );
}
