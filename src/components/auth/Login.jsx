"use client"
import {useRouter} from "next/navigation"
import { POST } from "@/app/api/login/route";


function Login() {

  const router = useRouter();

  const onSubmit =  async(e) => {
    e.preventDefault();
    
    let userName = e.target.userName.value;
    let password = e.target.password.value;

    let payload = {
      username:userName,
      password: password
    }
    // let payload = {
    //   username: "johnd",
    //   password: "m38rmF$"
    // }

    const data_login = await POST(payload);
    //let data = JSON.parse(data_login);
    if(data_login){
      localStorage.setItem('token',data_login.token);
      //router.push();
    }else{
      return alert("incorrect username or password");
    }
    console.log("peticion realizada",data_login);
    // fetch('https://fakestoreapi.com/auth/login',{
    //     method:'POST',
    //     body:JSON.stringify({
    //         username: "johnd",
    //         password: "m38rmF$"
    //     })
    // })
    //     .then(res=>res.json())
    //     .then(json=>console.log(json))

  // fetch('https://fakestoreapi.com/auth/login', {
  //   method: "POST", // or 'PUT'
  //   body: JSON.stringify(payload), // data can be `string` or {object}!
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .catch((error) => console.error("Error:", error))
  //   .then((response) => console.log("Success:", response));

    // console.log("data",data);

            
  }


  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/*  Right column container with form */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <p className="mx-4 mb-0 text-2xl text-center font-medium dark:text-white">
              Login
            </p>
            <form onSubmit={onSubmit}>
              {/* <!-- Email input --> */}

              <div className="relative mb-6">
                <label
                  htmlFor="userName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User name
                </label>
                <input
                  type="text"
                  id="userName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>

              {/* <!-- Password input --> */}

              <div className="relative mb-6" data-te-input-wrapper-init>
                <label
                  htmlFor="password"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="peer block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
              </div>

              {/* <!-- Submit button --> */}

              <button
                data-te-ripple-color="light"
                className="inline-block w-full rounded  bg-neutral-50 px-7 pb-2 pt-2.5 
                text-xs font-medium uppercase leading-normal text-neutral-800 
                shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100
                 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
                 focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
                 focus:outline-none focus:ring-0 
                 active:bg-neutral-200 
                 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
                 dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] 
                 dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] 
                 dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] 
                 dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
              >
                Sign in
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
