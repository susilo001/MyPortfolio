import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

async function getGithubProfile() {
  const res = await fetch(
    "https://raw.githubusercontent.com/susilo001/susilo001/main/README.md",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch github profile");

  const rawMd = await res.text();

  return rawMd;
}

export default async function About() {
  const rawMd = await getGithubProfile();

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 place-content-between">
      <article className="prose dark:prose-invert max-w-none prose-p:flex prose-p:flex-wrap prose-p:text-justify lg:basis-3/4">
        <MDXRemote source={rawMd} />
      </article>
      <div className="lg:basis-1/4">
        <figure className="flex justify-center">
          <Image
            src="https://avatars.githubusercontent.com/u/62362490?v=4"
            alt="Profile"
            width={256}
            height={256}
            className="rounded-full"
            priority
          />
        </figure>
      </div>
    </div>
  );
}
