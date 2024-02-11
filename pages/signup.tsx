import SignUp from "../components/user/signup";


const SignupHome = () =>
{
    return (
        <div className="flex flex-col space-y-2 px-2 mt-5">
            <div className="flex flex-row justify-center">
                <SignUp></SignUp>
            </div>
        </div>
    )
};

export default SignupHome;