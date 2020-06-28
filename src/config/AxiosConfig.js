import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as AppConstants from "./AppConstants";


const instance = axios.create({
    baseURL: 'https://work-profile-sjshank.firebaseio.com/'
});

const successHandler = (response) => {
    return response;
};

const errorHandler = (error) => {
    toast.configure(AppConstants.TOAST_OPTIONS);
    if (error) {
        toast.error(AppConstants.GENERIC_ERROR_MSG, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    return Promise.reject({ ...error });
};


instance.interceptors.request.use(
    request => successHandler(request),
    error => errorHandler(error)
);
instance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);



export default instance;
