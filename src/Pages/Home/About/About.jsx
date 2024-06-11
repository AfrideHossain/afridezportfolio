const About = () => {
  const afrideImg = "https://i.ibb.co/6YMYP1Y/afridehossain-old.jpg";
  return (
    <div id="about">
      <div>
        <h1 className="font-bold text-3xl text-center my-3 text-white">
          About Me
        </h1>
        <p className="text-center text-white">My Introduction</p>
      </div>
      <div className="mt-8 flex gap-10 justify-center">
        <img src={afrideImg} alt="" className="w-64 rounded-md" />
        <div className="w-96">
          <p className="text-base text-gray-200">
            Dynamic and ambitious full stack web developer with a strong passion
            for growth and learning. Looking for a challenging role to leverage
            my quick learning abilities and powerfully contribute to a rising
            organization's success.
                  </p>
                  <div className="flex justify-between mt-5">
                      <div>
                        <p className="font-bold">Language</p>
                      </div>
                      <div>
                        <p className="font-bold">Language</p>
                      </div>
                      <div>
                        <p className="font-bold">Language</p>
                      </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default About;
