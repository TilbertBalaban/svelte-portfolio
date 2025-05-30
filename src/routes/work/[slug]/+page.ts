import type { PreparedProject } from './../../../lib/types/sanity.d';
import { prepareProjectEntry, client as sanityClient } from 'src/lib/utils/sanity';
import type { PageLoad } from './$types';
import type { Project } from 'src/lib/types/sanity';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({
    params: { slug }
}) => {
    const projects: Project[] = await sanityClient.fetch(`*[_type == "project" && _slug == ${slug}]`);

    if (projects.length === 0) {
        throw error(404, 'Project not found');
    }

    const preparedProject: PreparedProject = prepareProjectEntry(projects[0]);

    return {
        project: preparedProject
    }
}