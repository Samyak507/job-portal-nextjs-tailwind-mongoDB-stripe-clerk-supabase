import mongoose from "mongoose";


const ProfileSchema = new mongoose.Schema({
    userId : String,
    role : String,
    email : String,
    isPremiumUser: Boolean,
    membershipType : String,
    membershipStarted : String,
    membershipEnded : String,
    recruiterInfo : {
        name: String,
        companyName: String,
        companyRole: String
    },
    candidateInfo :{
        name:String,
        currentJobLocation:String,
        prefferdJobLocation: String,
        currentSalary : String,
        noticePeriod: String,
        skills: String,
        currentCompany: String,
        previousCompanies : String,
        totalExperience: String,
        college: String,
        collegeLocation : String,
        graduatedYear: String,
        linkedInProfile: String,
        githubProfile: String,
        resume: String,

    }

})

const Profile = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema)

export default Profile;