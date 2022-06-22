import React from "react";

function Experience() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Experience</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Full Stack Developer <span className="h6">at Coding Gujju</span></h5>
                                    <p className="mb-0">APR 2016 - PRESENT</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum vel excepturi autem mollitia, blanditiis voluptatum perspiciatis alias eos architecto in, adipisci voluptatem corrupti quidem enim accusamus itaque non tempore!</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">FrontEnd Developer <span className="h6">at Microsoft</span></h5>
                                    <p className="mb-0">APR 2016 - APR 2019</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum vel excepturi autem mollitia, blanditiis voluptatum perspiciatis alias eos architecto in, adipisci voluptatem corrupti quidem enim accusamus itaque non tempore!</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;
