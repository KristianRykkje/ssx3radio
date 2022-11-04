"use client";
import { useStyledComponentsRegistry } from "../src/styled-components";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheetDocument } from "next-sanity/studio";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return (
    <StyledComponentsRegistry>
      <ServerStyleSheetDocument />
      {children}
    </StyledComponentsRegistry>
  );
}
