const Home = () => {
    return (
        <div className="text-white container mx-auto px-4 pb-12 mb-10 flex gap-7">
            <div className="mt-10 mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <img src="/src/assets/img/profile_img.jpg" className=" rounded-lg hover:shadow-lg object-cover" alt="My Profile Image" />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-3/4">
                <div className="text-2xl font-bold">
                    About Me
                </div>
                <div className="md:text-lg text-sm">
                    Hello my name is Prakrati Mamtani, I am a progressive problem solver, eager to develop competencies in new technologies and build systems that ease our daily life. My current profficiencies include:
                    <ul className="list-disc pl-6 md:text-lg text-sm">
                        <li>Full stack web development using React, Tailwind CSS, and Postgres.</li>
                        <li>Linear and Classification machine learning models along with optimisation using scikit-learn and mlFlow.</li>
                        <li>Convonutional Neural Network for image processing and classification using Fast Gradient Sign Method (FGSM), Projected Gradient Descent (PGD) on LeNet MNIST model using Python torchattack library.</li>
                        <li>IOS development using swift.</li>
                        <li>UI/UX designing using Figma and Canva.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;