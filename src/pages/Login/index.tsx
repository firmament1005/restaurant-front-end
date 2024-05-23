import React, { useState } from "react";
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }

    const handleRememberMeChange = (e: any) => {
        setRememberMe(e.target.checked);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log('Submitting:', { email, password, rememberMe });
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Restaurant
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <Input type="email" id="email" label="Email" placeholder="senior@gmail.com" value={email} onChange={handleEmailChange} required={true} />
                            <Input type="password" id="password" label="Password" placeholder="••••••••" value={password} onChange={handlePasswordChange} required={true} />
                            <Checkbox id="remember" label="Remember me" checked={rememberMe} onChange={handleRememberMeChange} required={false} />
                            <Button text="Sign in" onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Login;