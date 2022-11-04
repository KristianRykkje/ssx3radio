import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { config } from "@lib/sanity.config";

const studioConfig = defineConfig(config as any);

export default function StudioPage() {
  return <NextStudio config={studioConfig} />;
}
