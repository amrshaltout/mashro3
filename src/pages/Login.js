import React, { use } from "react";
import { useRouter } from 'next/router'



const Login = () => {

  const router = useRouter()
 
  async function handleSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')
 
    const response = await fetch('https://rentor-b.onrender.com/auth/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    console.log(username, password)
 
    if (response.ok) {
        const data = await response.json();
        const { access_token } = data; // Extract access_token from the response

        // Save the access token as a cookie
        document.cookie = `accessToken=${access_token}; path=/`;

        console.log('Logged in!');
        window.location.pathname = '/';

      } else {
        console.error('Failed to log in');
      }
  }




    return (
        <div className="bg-[#F9FAFB] flex items-center py-10">
            <div className="h-max mx-auto flex flex-col items-center">
                <img className="h-[40px] w-[47px] mb-5" src="/images/rentorLogo4.svg" alt="" />
                <h1 className="text-xl font-bold text-center pb-10">Sign in to your account</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="email">Email</label>
                        <input
                            className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                            type="email"
                            name="username"

                            placeholder="mehedi@jaman.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="password">Password</label>
                        <input
                            className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                            type="password"
                            name="password"
                            placeholder="******"
                            required
                        />
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <input type="checkbox" name="rememberMe" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <div className="w-1/2">
                            <a className="font-bold text-black" href="">Forgot password ?</a>
                        </div>
                    </div>
                    <div>
                        <button className="bg-amber-600 w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-amber-500" type="submit">Login</button>
                    </div>
                    <div className="flex">
                        <p className="text-center">Don't have and account ?</p>
                        <p className="text-center font-bold text-blue pl-1"> <a href="/Register2">Sign up</a></p>
                    </div>
                   {/* <div className="flex gap-4">
                        <button type="submit" className="bg-[#c71610] w-full py-1 rounded-md text-white font-bold cursor-pointer hover:bg-red-600">Gmail</button>
                    </div>*/}
                </form>
            </div>
        </div>
    );
};

export default Login;
