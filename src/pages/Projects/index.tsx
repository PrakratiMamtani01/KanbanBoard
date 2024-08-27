const Projects = () => {
    return (
        <div>
            <div className="md:text-lg text-sm text-white font-bold">
                My Projects
            </div>
            <div className="flex flex-wrap justify-left gap-10 p-4">
                <div>
                    <a href="https://huggingface.co/spaces/prakrati-m/HealthInsurance" target="_blank" rel="noopener noreferrer">
                        <img
                        src="/src/assets/img/Regression.png"
                        className="w-28 h-28 sm:w-36 sm:h-36 rounded-lg object-cover transition-transform transform hover:scale-105"
                        alt="Linear classification project"
                        />
                    </a>
                </div>
                <div>
                    <a href="https://huggingface.co/spaces/NYU-DS-4-Everyone/fraud_detection" target="_blank" rel="noopener noreferrer">
                        <img
                        src="/src/assets/img/Classification.png"
                        className="w-28 h-28 sm:w-36 sm:h-36 rounded-lg object-cover transition-transform transform hover:scale-105"
                        alt="Fraud detection project"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
  };
  
  export default Projects;
  