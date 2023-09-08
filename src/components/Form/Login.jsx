import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="min-h-screen h-screen bg-base-200">
        <div className="">
          <div className="flex justify-between px-4  pt-3 md:px-8 pb-24 ">
            <div>
              <Link to='/' className="text-5xl font-bold">Booster</Link>
            </div>
            <div className="flex items-center  gap-3">
              <p className="py-6 hidden md:block">Don`t have an account?</p>
              <Link to="/signUp" className="btn w-24 btn-success shadow-lg mr-3">
                Sign UP
              </Link>
            </div>
          </div>
          <div className="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <div className="card-title mx-auto text-3xl ">Welcome back!</div>
              <div className="form-control border-none">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>

          <div className="flex gap-1  justify-center py-8">
            <p>Don`t have an account?</p>
            <Link className="underline text-blue-600 "> Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
