import { client as sanityClient } from 'src/lib/utils/sanity';
import type { PageLoad } from './$types';
import type { DevExperience } from 'src/lib/types/sanity';

export const load: PageLoad = async () => {
    const developmentExperience: DevExperience[] = await sanityClient.fetch(
        '*[_type == "devExperience"] | order(startDate desc)'
    );
    
    return {
        developmentExperience
    };
}