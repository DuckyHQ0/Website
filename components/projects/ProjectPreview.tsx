"use client";

import Link from "next/link";
import { ProjectMetadata } from "./ProjectMetadata";
import { Tilt } from "react-tilt";

const tiltOptions = {
    reverse: true,
    max: 15,
    perspective: 2250,
    scale: 1,
    transition: false,
};

export default function ProjectPreview(props: ProjectMetadata) {
    return (
        <Tilt options={tiltOptions}>
            <Link
                href={`/projects/${props.slug}`}
                className="bg-cover bg-center bg-clip-padding w-full h-auto aspect-[3/1.7] flex flex-col place-content-end align-bottom place-items-end p-32 rounded-out border border-stroke-1 hover:scale-[1.05] active:scale-[.75] duration-150 max-[540px]:p-24"
                style={{backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.65)), url(${props.image})`}}
            >
                <h3 className="text-3 w-full font-medium max-[540px]:text-body">{props.title}</h3>
                <p className="text-sub w-full">{props.type}</p>
            </Link>
        </Tilt>
    );
}