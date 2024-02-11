import LoginComponent from "../components/user/login";


const LoginHome = () =>
{
    return (
        <div className="flex flex-col space-y-2 px-2 mt-5">
            <div className="flex justify-center">
                <LoginComponent></LoginComponent>
            </div>
        </div>
    )
};

export default LoginHome;