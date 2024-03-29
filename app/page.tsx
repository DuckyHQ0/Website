import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";

const hanson = localFont({
	src: "./hanson.woff2",
	display: "swap",
});

export default function Home() {
  const projectMetadata = getProjectMetadata();
  const projectPreviews = projectMetadata.map((project) => (
    <ProjectPreview key={project.slug} {...project} />
  ));
  return (
    <>
      <div className="flex flex-col py-[200px] pt-[400px] gap-24 max-w-[1300px] w-full">
        <div className="flex flex-col">
          <h1
            className={`${hanson.className} text-[86px] max-[670px]:text-1 max-[450px]:text-2 leading-none`}
          >
            DuckyHQ
          </h1>
          <p className="text-body">
            Unique open source software for the world.
          </p>
        </div>
        <div className="flex flex-wrap gap-12 max-[600px]:gap-24">
          <PrimaryButton text="Projects" type="primary" link="#projects" />
          <SecondaryButton
            text="GitHub"
            type="secondary"
            link="https://github.com/DuckyHQ0"
          />
        </div>
      </div>
      <div
        className="border border-stroke-1 rounded-out max-w-[1300px] w-full p-64 gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24"
        id="projects"
      >
        <h2 className="text-2 font-medium">Projects</h2>
        <div className="grid grid-cols-2 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
          {projectPreviews}
        </div>
      </div>
    </>
  );
}
