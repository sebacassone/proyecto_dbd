import axios from "axios";

function stepIdToString(stepId: number): string {
    let step = "";

    if (stepId === 0) {
        step = "";
    }
    if (stepId === 1) {
        step = "Wall";
    }
    if (stepId === 2) {
        step = "Sector"
    }
    if (stepId === 3) {
        step = "Profile"
    }
    if (stepId === 4) {
        step = "Drainage"
    }
    if (stepId === 4) {
        step = "Drainage"
    }
    if (stepId === 5) {
        step = "Map"
    }
    if (stepId === 6) {
        step = "M1"
    }
    return step
}

export const addComment = async (idCse: string, stepId: number, comment: string) => {
    
    const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
    const url = apiUrl + "cse/m3_configuration/review_step"

    const aux = {
        id_cse: idCse,
        step: stepIdToString(stepId),
        step_status: "Rejected",
        comment: comment,
    }
    try {
        const { data } = await axios.post(url, aux);
        return data;
    } catch (error){
        return error;
    }
}

export const approveStep = async (idCse: string, stepId: number) =>{
    const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
    const url = apiUrl + "cse/m3_configuration/review_step"

    const aux = {
        id_cse: idCse,
        step: stepIdToString(stepId),
        step_status: "Approved",
        comment: "",
    }
    try {
        const { data } = await axios.post(url, aux);
        return data
    }catch(error){
        return error
    }
}

export const disapproveStep = async (idCse: string, stepId: number) =>{
    const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL as string;
    const url = apiUrl + "cse/m3_configuration/review_step"
    
    const aux = {
        id_cse: idCse,
        step: stepIdToString(stepId),
        step_status: "Rejected",
        comment: "",
    }
    try {
        const { data } = await axios.post(url, aux);
        return data
    }catch(error){
        return error
    }
}