import { prepareProjectEntry, client as sanityClient } from "$lib/utils/sanity";
import type { PageLoad } from './$types';
import type { DevExperience, PreparedProject, Project, Skill } from '$types/sanity.d.ts';

export const load: PageLoad = async () => {
    const developmentExperience: DevExperience[] = await sanityClient.fetch(
        '*[_type == "devExperience"] | order(startDate desc)'
    );

    const projects: Project[] = await sanityClient.fetch(
        '*[_type == "project"] | order(startDate desc)'
    );
    const preparedProjects: PreparedProject[] = projects.map(prepareProjectEntry);

    const skills: Skill[] = await sanityClient.fetch(
        '*[_type == "skills"][0].skillsList'
    );
    
    return {
        developmentExperience,
        projects: preparedProjects,
        skills,
    };
}