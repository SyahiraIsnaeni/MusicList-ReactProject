
import { toast } from "react-toastify";

const RegisterService = {
    handleRegistration: (regObj, navigate) => {
        if (RegisterService.validate(regObj)) {
            fetch("http://localhost:8000/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regObj)
            })
            .then((res) => {
                toast.success('Registered successfully.');
                navigate('/login');
            })
            .catch((err) => {
                toast.error('Failed: ' + err.message);
            });
        }
    },

    validate: ({ id, name, password, email }) => {
        let isProceed = true;
        let errorMessage = 'Please enter the value in ';

        if (!id) {
            isProceed = false;
            errorMessage += 'Username';
        }
        if (!name) {
            isProceed = false;
            errorMessage += 'Fullname';
        }
        if (!password) {
            isProceed = false;
            errorMessage += 'Password';
        }
        if (!email) {
            isProceed = false;
            errorMessage += 'Email';
        }

        if (!isProceed) {
            toast.warning(errorMessage);
        } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            isProceed = false;
            toast.warning('Please enter a valid email');
        }

        return isProceed;
    },
};

export default RegisterService;
