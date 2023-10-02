import { MDXRemote } from "next-mdx-remote/rsc";

async function getGithubProfile() {
  const res = await fetch(
    "https://raw.githubusercontent.com/susilo001/susilo001/main/README.md",
    {
      next: {
        revalidate: 3600, //  3600 in seconds
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch github profile");

  const rawMd = await res.text();

  return rawMd;
}

export default async function About() {
  const rawMd = await getGithubProfile();

  return (
    <article className="prose dark:prose-invert max-w-none prose-p:flex">
      <MDXRemote source={rawMd} />
    </article>
  );
}
