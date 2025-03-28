import { fetchProfileAction } from "@/src/actions";
import JobListing from "@/src/components/job-listing";
import { currentUser } from "@clerk/nextjs/server";


async function JobsPage() {

    const user = await currentUser();
    const profileInfo = await fetchProfileAction(user?.id);

    return (

        <JobListing
            user = {JSON.parse(JSON.stringify(user))}
            profileInfo = {profileInfo}
        />
    );
}

export default JobsPage