import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { useEffect, useState } from "react";
const SignUP = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: username });
    navigate("/");
  };

  return (
    <div>
      <div className="min-h-screen bg-base-200">
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
              <form onSubmit={handleSubmit}>
                <div className="form-control border-none">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="John Doe"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control border-none">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
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
                    name="password"
                    placeholder="Minimum 8 characters"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label justify-start  cursor-pointer">
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="checkbox"
                      required
                    />
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
                  <button type="submit" className="btn btn-primary">
                    Sign up
                  </button>
                </div>
              </form>
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
