import { NextStudio } from "next-sanity/studio";
import { config } from "@lib/config";

export default function StudioPage() {
  // Loads the Studio, with all the needed meta tags and global CSS required for it to render correctly
  return <NextStudio config={config} />;
}
