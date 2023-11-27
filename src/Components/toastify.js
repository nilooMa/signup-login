import { toast } from 'react-toastify';
export const notify = (type,text) => {
    if(type === "success") {
        toast.success(text,{
        theme: "colored"
    });
    }
    else {
        toast.error(text,{theme: "colored"});
    }
}