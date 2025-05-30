import { prepareProjectEntry, client as sanityClient } from 'src/lib/utils/sanity';
import type { PageLoad } from './$types';
import type { DevExperience, Project, Skill } from 'src/lib/types/sanity';

export const load: PageLoad = async () => {
    const developmentExperience: DevExperience[] = await sanityClient.fetch(
        '*[_type == "devExperience"] | order(startDate desc)'
    );

    const projects: Project[] = await sanityClient.fetch(
        '*[_type == "project"] | order(startDate desc)'
    );
    const preparedProjects = projects.map(prepareProjectEntry);

    const skills: Skill[] = await sanityClient.fetch(
        '*[_type == "skills"][0].skillsList'
    );
    
    return {
        developmentExperience,
        projects: preparedProjects,
        skills,
    };
}