import { fileURLToPath } from "url"

export const recruiterOnboardControls = [
    {
        label: 'Name',
        name: 'name',
        placeholder: 'Enter Your Name',
        component: 'input'
    },
    {
        label: 'Company Name',
        name: 'companyName',
        placeholder: 'Enter Your Company Name',
        component: 'input'
    },
    {
        label: 'Company Role',
        name: 'companyRole',
        placeholder: 'Enter Your Role',
        component: 'input'
    }
]

export const initialRecruiterFormdata = {
    name: '',
    companyName: '',
    companyRole: '',
}

export const candidateOnboardFormControls = [
    {
        label: 'Resume',
        name: 'resume',
        componentType: 'file'
    },
    {
        label: 'Name',
        name: 'name',
        placeholder: 'Enter Your Name',
        componentType: 'input'
    },
    {
        label: 'Current Company',
        name: 'companyName',
        placeholder: 'Enter Your Current Company Name',
        componentType: 'input'
    },
    {
        label: 'Current Job Location',
        name: 'currentJobLocation',
        placeholder: 'Enter Your Current Job Location',
        component: 'input'
    },
    {
        label: 'Preffered Job Location',
        name: 'prefferedJobLocation',
        placeholder: 'Enter Your Preferred Job Location',
        component: 'input'
    },
    {
        label: 'Current Salary',
        name: 'currentSalary',
        placeholder: 'Enter Your Current Salary',
        component: 'input'
    },
    {
        label: 'Notice Period',
        name: 'noticePeriod',
        placeholder: 'Enter Your Notice Period',
        component: 'input'
    },
    {
        label: 'Skilss',
        name: 'skills',
        placeholder: 'Enter Your Skills',
        component: 'input'
    },
    {
        label: 'Previous Company',
        name: 'previousCompanies',
        placeholder: 'Enter Your previous Companies',
        component: 'input'
    },
    {
        label: 'Total Experience',
        name: 'totalExperience',
        placeholder: 'Enter Your Total Experience',
        component: 'input'
    },
    {
        label: 'College',
        name: 'college',
        placeholder: 'Enter Your College',
        component: 'input'
    },
    {
        label: 'College Location',
        name: 'collegeLocation',
        placeholder: 'Enter Your College Location',
        component: 'input'
    },
    {
        label: 'Graduation Year',
        name: 'graduationYear',
        placeholder: 'Enter Your  Graduation Year',
        component: 'input'
    },
    {
        label: 'LinkedIn Link',
        name: 'linkedinLink',
        placeholder: 'Enter Your LinkedIn Profile',
        component: 'input'
    },
    {
        label: 'Github Link',
        name: 'gitLink',
        placeholder: 'Enter Your Git Profile',
        component: 'input'
    },



]

export const initialCandidateFormData = {
    resume:'',
    name:'',
    currentJobLocation:'',
    prefferedJobLocation:'',
    currentSalary:'',
    noticePeriod:'',
    skills:'',
    currentCompany:'',
    previousCompanies:'',
    totalExperience:'',
    college:'',
    collegeLocation:'',
    graduationYear:'',
    linkedinLink:'',
    githubLink:'',
    isPremiumUser: false



}