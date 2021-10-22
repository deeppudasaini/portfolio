import { Fade } from "react-reveal";
import "./experience.css";
export default function Experience() {
  return (
    <div className="experience" id="experience">
      <Fade left duration={2000}>
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">Experiences</h1>
            <div className="experience-cards-div">
              <div className="experience-card grid grid-cols-3 gap-4">
                <div
                  style={{ background: "#9cd713" }}
                  className="experience-banner"
                >
                  <div className="experience-blurred_div"></div>
                  <div className="experience-div-company">
                    <h5 className="experience-text-company">Lipi Technology</h5>
                  </div>

                  <img
                    crossOrigin={"anonymous"}
                    className="experience-roundedimg"
                    src="lipi.png"
                    alt="Lipi Technology"
                  />
                </div>
                <div className="experience-text-details">
                  <h5 className="experience-text-role">Frontend Intern</h5>
                  <h4 className="experience-text-date">07/2021 - present</h4>
                  {/* <p className="subTitle experience-text-desc">Ma Nepali ho</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
