"use client";

import { createFlagsmithInstance } from "flagsmith/isomorphic";
import { FlagsmithProvider } from "flagsmith/react";
import { IState } from "flagsmith/types";
import { ReactElement, useRef } from "react";

export default function Provider({
  children,
  flagsmithState,
}: {
  children: React.ReactNode;
  flagsmithState?: IState<string, string>;
}) {
  const flagsmithRef = useRef(createFlagsmithInstance());
  return (
    <FlagsmithProvider
      flagsmith={flagsmithRef.current}
      serverState={flagsmithState}
    >
      {children as ReactElement}
    </FlagsmithProvider>
  );
}
