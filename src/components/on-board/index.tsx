'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { useState } from "react";
import CommonForm from "../common-form";
import { candidateOnboardFormControls, initialCandidateFormData, initialRecruiterFormdata, recruiterOnboardControls } from "@/src/utils";

function OnBoard() {

    const [currentTab, setCurrentTab] = useState('candidate');
    const [recruiterFormData, setRecruiterFormData] = useState(initialRecruiterFormdata);
    const [candidateFormData, setCandidateFormData] = useState(initialCandidateFormData)
 
    function handleTabChange(value) {
        setCurrentTab(value);
    }


    return (
        <div className="bg-white">
            <Tabs value={currentTab} onValueChange={handleTabChange} >
                <div className="w-full" >
                    <div className="flex items-baseline justify-between border-b pb-6 pt-24 " >
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">Welcome to OnBoarding</h1>
                    </div>
                    <TabsList>
                        <TabsTrigger value="candidate">Candidate</TabsTrigger>
                        <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="candidate">
                    <CommonForm
                    formData={candidateFormData}
                    setFormData={setCandidateFormData}
                    formControls={candidateOnboardFormControls}
                    buttonText={'OnBoard as Candidate'}
                    />
                </TabsContent>
                <TabsContent value="recruiter">
                    <CommonForm
                        formControls={recruiterOnboardControls}
                        buttonText={'Onboard as Recruiter'}
                        formData={recruiterFormData}
                        setFormData={setRecruiterFormData}
                    />
                </TabsContent>
            </Tabs>
        </div>
    );
}
export default OnBoard;