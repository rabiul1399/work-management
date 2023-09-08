import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import management2 from "../../images/banner/tsk-daily.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className="card md:card-side w-auto bg-base-100 p-4 md:pl-16 mt-8 md:mt-16">
      <div className="">
        <div className="card-body w-auto md:w-96 mb-4 mt-0 lg:mt-24 p-0 mr-8">
          <h2 className="card-title text-5xl font-bold  ">
            Get more Done with Booster
          </h2>
          <p>
            Plan, organize, and collaborate on any project with powerful task
            management that can be customized for every need.
          </p>
          <div className="card-actions mt-4">
            <button className="btn btn-primary ">
              Get Started <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>
          </div>
        </div>
      </div>
      <div>
        <figure className="w-auto">
          <img className="rounded " src={management2} alt="Album" />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
