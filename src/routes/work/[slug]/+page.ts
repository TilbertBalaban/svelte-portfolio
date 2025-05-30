import type { PreparedProject } from '$types/sanity.d.ts';
import { prepareProjectEntry, client as sanityClient } from  "$lib/utils/sanity";
import type { PageLoad } from './$types';
import type { Project } from '$types/sanity.d.ts';
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