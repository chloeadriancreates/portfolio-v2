import styles from "./projectcard.module.scss";
import Link from "next/link"
import Image from "next/image"
import { main } from "@/lib/main";
import { Language, Project } from "@/lib/types";

const ProjectCard = ({ project, language }: { project: Project, language: Language }) => {
    const { title, slug, tags } = project;
    const { tagline } = project.copy[language];
    const { skills } = main[language].showcase;

    return (
        <Link href={`/${language}/project/${slug}`} className={styles.project}>
            <Image src={`/images/${slug}/1.jpg`} alt="" fill={true} sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div>
                <div>
                    <h3>{title}</h3>
                    <p id="tagline">{tagline}</p>
                    <div id="tags" aria-label={skills}>
                        {tags.map(tag => <p key={tag}>{tag}</p>)}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;