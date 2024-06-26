import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm)

    const onInputChange = (e) => {  
        setformState({ ...formState, [e.target.name]: e.target.value });    
    };

    const onResetForm = () => {
        setformState(initialForm);
    };
    

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
