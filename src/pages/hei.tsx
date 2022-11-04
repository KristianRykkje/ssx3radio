import client from "@lib/sanity.server";
import { ssx3radioGroq } from "@lib/schema/ssx3radio";

export default function IndexPage(props) {
  console.log("🚀 ~ file: hei.tsx ~ line 4 ~ IndexPage ~ props", props);
  return <div></div>;
}

export async function getStaticProps() {
  const ssx3radio = await client.fetch(ssx3radioGroq);

  return {
    props: {
      ssx3radio,
    },
  };
}
