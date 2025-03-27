'use client'

import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import CommonForm from "../common-form";
import { initialPostNewJobFormData, postNewJobFormControls } from "@/src/utils";

function PostNewJob() {

    const [showJobDialog, setShowJobDialog] = useState(false);
    const [jobFormData, setJobFormData] = useState(initialPostNewJobFormData)

    return (
        <div>
            <Button onClick={() => setShowJobDialog(true)}
                className="disabled:opacity-60 flex h-11 items-center justify-center px-5 ">
                Post a Job
                </Button>
                <Dialog open={showJobDialog} onOpenChange={() => setShowJobDialog(false)}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Post New Job 
                            </DialogTitle>
                            <div className="grid gap-4 py-4 ">
                                <CommonForm
                                buttonText={'Add'}
                                formData={jobFormData}
                                setFormData={setJobFormData}
                                formControls={postNewJobFormControls}
                                

                                 />

                            </div>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
        </div>
    );
}
export default PostNewJob;