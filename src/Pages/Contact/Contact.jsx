const Contact = () => {
  return (
    <>
      <div className="w-full h-96 flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl md:text-5xl font-bold w-fit">
          Reach me anytime via email.
        </h1>
        <a
          href="mailto:afredehossain@gmail.com"
          className="text-2xl break-all md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] from-[-60%] to-[#E70FAA] h-auto md:leading-normal leading-normal"
        >
          afredehossain@gmail.com
        </a>
      </div>
    </>
  );
};

export default Contact;
