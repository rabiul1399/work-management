import { Link } from "react-router-dom";

const SignUP = () => {
  return (
    <div>
      <div className="min-h-screen h-screen bg-base-200">
        <div className="">
          <div className="flex justify-between px-4  pt-3 md:px-8 pb-24 ">
            <div>
              <Link to="/" className="text-5xl font-bold">
                Booster
              </Link>
            </div>
            <div className="flex items-center  gap-3">
              <p className="py-6 hidden md:block">Already have an account?</p>
              <Link to="/login" className="btn shadow-lg w-24 btn-success mr-3">
                Log in
              </Link>
            </div>
          </div>
          <div className="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <div className="card-title mx-auto text-3xl ">Let`s go</div>
              <div className="form-control border-none">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control border-none">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="example@site.com"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">choose Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Minimum 8 characters"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label justify-start  cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text ml-3 ">
                    I agree to the{" "}
                    <span className="text-blue-500">
                      <a href="#">Terms</a>
                    </span>{" "}
                    and{" "}
                    <a href="#" className="text-blue-500 ">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
            </div>
          </div>

          <div className="flex gap-1  justify-center py-8">
            <p>Already have an account?</p>
            <Link className="underline text-blue-600 "> Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
