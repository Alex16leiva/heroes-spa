import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = (e) => {  
        setFormState({ ...formState, [e.target.name]: e.target.value });    
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };
    

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
