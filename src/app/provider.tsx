"use client";

import { ReactElement } from "react";
import { OpenFeature, OpenFeatureProvider } from "@openfeature/react-sdk";
import { FlagsmithClientProvider } from "@openfeature/flagsmith-client-provider";
import { IState } from "flagsmith/types";

export default function Provider({
  children,
  serverState,
}: {
  children: React.ReactNode;
  serverState: IState<string, string>;
}) {
  const flagsmithClientProvider = new FlagsmithClientProvider({
    environmentID: "XRAt6CNJZdUvsMpyPeqejr",
    api: "http://localhost:8000/api/v1/",
    state: serverState,
  });
  OpenFeature.setProvider(flagsmithClientProvider); // Attach the provider to OpenFeature
  return <OpenFeatureProvider>{children as ReactElement}</OpenFeatureProvider>;
}
