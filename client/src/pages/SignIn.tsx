export const SignIn = () => {
  return (
    <div className="bg-[--mustard] h-[850px] flex justify-center items-center gap-10">
      <div className="bg-[#f2f2f2] border border-black black-shadow w-[350px] h-[400px] flex flex-col items-center justify-center relative gap-2">
        <h2 className="madimi-one-regular text-2xl absolute top-6">SIGN IN</h2>
        <div>
          <p>E-MAIL</p>
          <input
            type="text"
            className="border border-black black-shadow inline p-1"
          />
        </div>
        <div>
          <p>PASSWORD</p>
          <input
            type="text"
            className="border border-black black-shadow inline p-1"
          />
        </div>
        <button className="bg-white px-2 py-1 border border-black black-shadow mt-2">
          LOGIN
        </button>
      </div>
      <div className="bg-[#f2f2f2] border border-black black-shadow w-[350px] h-[400px] flex flex-col items-center justify-center relative gap-2">
        <h2 className="madimi-one-regular text-2xl absolute top-6">CREATE ACCOUNT</h2>
        <div>
          <p>E-MAIL</p>
          <input
            type="text"
            className="border border-black black-shadow inline p-1"
          />
        </div>
        <div>
          <p>PASSWORD</p>
          <input
            type="text"
            className="border border-black black-shadow inline p-1"
          />
        </div>
        <button className="bg-white px-2 py-1 border border-black black-shadow mt-2">
          CREATE
        </button>
      </div>
    </div>
  );
};
