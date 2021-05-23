import Head from "next/head";

export default function CustomHead(props: { title: string }) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
