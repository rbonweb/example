import React, { useEffect } from "react";

function Experience() {

    // const [experience, setExperience] = React.useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/")
    //         .then(res => res.json())
    //         .then(data => {
    //             setExperience(data);
    //         });
    // }, []);

    let experience = [
        {
            title: "Software Engineer",
            company: "Google",
            date: "May 2020 - Present",
            description: "I am currently working on a project to build a new version of the Google Chrome browser. I am working on the frontend of the project, and I am working on the backend of the project. I am also working on the frontend of the project, and I am working on the backend of the project. I am currently working on a project to build a new version of the Google Chrome browser. I am working on the frontend of the project, and I am working on the backend of the project. I am also working on the frontend of the project, and I am working on the backend of the project."
        },
        {
            title: "Full Engineer",
            company: "Microfost",
            date: "May 2016 - December 2019",
            description: "Lorem Ipsum"
        },
        {
            title: "Full Engineer",
            company: "Microfost",
            date: "May 2016 - December 2019",
            description: "Lorem Ipsum"
        }
    ]


    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Experience</h1>


                    {experience.map((item, index) => (
                        <div className="row" key={index}>
                            <div className="col-md-6 offset-md-3">
                                <div className="card mb-5">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{item.title} <span className="h6">at {item.company}</span></h5>
                                        <p className="mb-0">{item.date}</p>
                                        <small>{item.description}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;
