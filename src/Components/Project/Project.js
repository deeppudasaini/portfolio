import { Component } from "react";
import Axios from "axios";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Bounce } from "react-reveal";
import {Fade} from 'react-reveal';
import "./project.css";
class Project extends Component {
  Title = [];
  state = {
    repo: [],
    language: []
  };

  async componentDidMount() {
    const api_key = process.env.REACT_APP_GITHUB_API_KEY;

    let repos = await Axios.get(
      `https://api.github.com/users/deeppudasaini/repos`,
    );

    let lang = {};

    //Cached language data
    if (localStorage.getItem("lang")) {
      lang.data = JSON.parse(localStorage.getItem("lang"));
    } else {
      lang = await Axios.get("https://github-lang-deploy.herokuapp.com/");
      localStorage.setItem("lang", JSON.stringify(lang.data));
    }

    this.setState({
      repo: repos.data,
      language: lang.data
    });
  }

  comapare(a, b) {
    if (a.stargazers_count > b.stargazers_count) return -1;
    else if (a.stargazers_count < b.stargazers_count) return 1;
    else if ((a.stargazers_count = b.stargazers_count)) {
      if (a.forks_count > b.forks_count) return -1;
      else if (a.forks_count < b.forks_count) return 1;
      else return 0;
    }
  }

  render() {
    const { repo, language } = this.state;
    const filtered = repo.sort(this.comapare);
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <Bounce top duration={3000}>
      <div className="project" id="project">
        
          <h1 className="experience-heading">Projects</h1>
          <Carousel responsive={responsive}>
            {filtered.map((data, i) => (
              
              
              <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5 mx-10">
                <div class="flex justify-center md:justify-end -mt-16">
                  <img
                    class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                    src="https://img.icons8.com/color/150/000000/git.png"
                  />
                </div>
                <div>
                  <a href={data.clone_url} target="_blank">
                    <h2 class="text-gray-800 text-3xl font-semibold">
                      {data.name}
                    </h2>
                  </a>
                  <p class="mt-2 text-gray-600">{data.description}</p>
                </div>
                <div class="flex justify-end mt-4">
                  <a href="#" class="text-xl font-medium text-indigo-500">
                    {data.language}
                  </a>
                </div>
              </div>
              
            ))}
            
          </Carousel>
           
      </div>
      </Bounce>   
      
    );
  }
}
export default Project;
