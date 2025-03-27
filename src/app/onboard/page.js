import { fetchProfileAction } from "@/src/actions";
import OnBoard from "@/src/components/on-board";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


async function OnBoardPage() {

    //get the authenticated user from clerk

    const user = await currentUser();

    //fetch the profile info -> Either the user is candidate or recruiter

    const profileInfo = await fetchProfileAction(user?.id);

    if (profileInfo?._id) {
        if (profileInfo?.role === 'recruiter' && !profileInfo.isPremiumUser) redirect('/membership')
        else redirect('/')
    } else return <OnBoard />
}

export default OnBoardPage;