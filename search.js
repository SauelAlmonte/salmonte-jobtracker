// const searchForm = document.querySelector("#search-form");
// const jobType = document.querySelector("#job-type");
// const resultSection = document.querySelector("#result-section");

// const url =
//   "http://api.adzuna.com/v1/api/jobs/us/search/1?app_id=6c270a0c&app_key=1c2305a4f9576500aa02455105b30439&results_per_page=20&what=javascript%20developer&content-type=application/json";

// let sampleData = {
//   salary_min: 50000,
//   longitude: -0.776902,
//   location: {
//     __CLASS__: "Adzuna::API::Response::Location",
//     area: ["UK", "South East England", "Buckinghamshire", "Marlow"],
//     display_name: "Marlow, Buckinghamshire"
//   },
//   salary_is_predicted: 0,
//   description:
//     "JavaScript Developer Corporate loremeenene ine iendedind eindeidn iend iedneidne deoid ed",
//   title: "Javascript Developer",
//   category: {
//     __CLASS__: "Adzuna::API::Response::Category",
//     label: "IT Jobs",
//     tag: "it-jobs"
//   },
//   id: "129698749",
//   salary_max: 55000,
//   company: {
//     __CLASS__: "Adzuna::API::Response::Company",
//     display_name: "Corporate Project Solutions"
//   }
// };

// jobResults.forEach(function (job) {
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <h4 class="text-4xl"><a href=${job.redirect_url}>${job.title}</a></h4>
//     <h5>${job.salary_min} - ${job.salary_max}</h5>
//     <h6>${job.location.display_name} - ${job.contract_time}</h6>
//     <p>${job.description}</p>
//     `;

//     resultSection.appendChild(div);
//   });

//   async function searchJobs(jobString, jobsCount = 10, country = "us") {
//     const url = `http://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=6c270a0c&app_key=1c2305a4f9576500aa02455105b30439&results_per_page=${jobsCount}&what=${jobString}&content-type=application/json`;
  
//     const result = await fetch(url);
//     const data = await result.json();
  
//     return data;
//     // console.log(result)
  
//     //@TODO: query API for jobs
//     // returns a dummy object
  
//     // jobs.push({
//     //   salary_min: 50000,
//     //   longitude: -0.776902,
//     //   location: {
//     //     __CLASS__: "Adzuna::API::Response::Location",
//     //     area: ["UK", "South East England", "Buckinghamshire", "Marlow"],
//     //     display_name: "Marlow, Buckinghamshire"
//     //   },
//     //   salary_is_predicted: 0,
//     //   description: `${jobString} Corporate loremeenene ine iendedind eindeidn iend iedneidne deoid ed`,
//     //   title: `${jobString}`,
//     //   category: {
//     //     __CLASS__: "Adzuna::API::Response::Category",
//     //     label: "IT Jobs",
//     //     tag: "it-jobs"
//     //   },
//     //   id: "129698749",
//     //   salary_max: 55000,
//     //   company: {
//     //     __CLASS__: "Adzuna::API::Response::Company",
//     //     display_name: "Corporate Project Solutions"
//     //   }
//     // });
  
//     // return sampleData;
//   }