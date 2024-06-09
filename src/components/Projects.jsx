
const Projects = () => {
    return (
        <section className="py-20 bg-gray-200">
        <h2 className="text-6xl font-bold mb-8 text-center text-indigo-600">Projects</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0 ">
                   <h5> Bike Bazar— <small>A bike selling Application</small>  : <a href="https://bikebazar-53d40.web.app" className="text-warning">Live </a>
                    |  
                   <a className="text-warning" href="https://github.com/shahinurdev/Bike-Bazar">Client code</a> |
                   <a className="text-warning" href="https://github.com/shahinurdev/Bike-Bazar-Server"> Server Code</a></h5>     
                    <p> <strong className="text-white bg-dark">Description</strong>: In this Application, Customers can choose and buy Bikes.
                       The customer can go to the order menu and see what he/she has ordered.
                       Admin can add bikes and remove them.
                       Firebase Auth and MongoDB use the Backend.</p>
                       
                  <p><strong className="text-white bg-dark"> Tools</strong>: Html5, Css3, Bootstrap, JavaScript, React, React-Router,
                   NodeJs, Firebase Auth, Express, MongoDB</p>
           </div>

          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
           
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                    <h5>  Easy Arrived Rides— <small>A vehicle rent application</small> : <a href="https://easy-arrived-rides.web.app/" target="_blank"  rel="noreferrer" className="text-warning">Live</a>| <a href="https://github.com/shahinurdev/Easy-Arrived-Rides" target="_blank" rel="noreferrer" className="text-warning">See Code</a>|</h5>

                       <p> <strong className="text-white bg-dark" >Description</strong>: The user using this application rents a vehicle.
                        Users can log in by clicking by Login Button
                        After rent, the user can see a map of where he/she is going.</p>

                       <p><strong className="text-white bg-dark">Using Technology</strong>:  React, React Dom, React-Bootstraps,
                        Firebase, Firebase-Auth and HTML5, CSS3</p>

                </div>

          </div>
        
        </div>
      </section>
    );
};

export default Projects;