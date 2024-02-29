function LoaderCard() {
  return (
    <div className="bg-[#ffffff75] w-[20rem] sm:w-[35rem] min-h-[25rem] p-5 rounded-2xl animate-pulse">
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full flex flex-col gap-4 border-[#b1b1b191] border-b-2">
          <p className="bg-[#b1b1b191] w-[6rem] h-[2rem] rounded-xl"></p>
          <p className="bg-[#b1b1b191] w-[8rem] h-[2rem] rounded-xl"></p>
          <div className=" flex items-center gap-10 text-5xl justify-center">
            <p className="bg-[#b1b1b191] w-[80%] h-[5rem] rounded-xl"></p>
          </div>
          <p className="my-2 opacity-80 text-xl"></p>
        </div>
        <p className="bg-[#b1b1b191] w-[60%] h-[2rem] rounded-xl"></p>
        <h2 className="bg-[#b1b1b191] w-[40%] h-[2rem] rounded-xl"></h2>
      </div>
    </div>
  );
}

export { LoaderCard };

function LoaderCards() {
  return (
    <>
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className="bg-[#ffffff75] w-full min-h-[25rem] p-5 rounded-2xl animate-pulse"
        >
          <div className="flex flex-col gap-4 w-full">
            <div className="w-full flex flex-col gap-4 border-[#b1b1b191]">
              <p className="bg-[#b1b1b191] w-[6rem] h-[2rem] rounded-xl"></p>
              <p className="bg-[#b1b1b191] w-[8rem] h-[2rem] rounded-xl"></p>
              <div className="w-full flex justify-center">
                <p className="bg-[#b1b1b191] w-[70%] h-[2rem] rounded-xl"></p>
              </div>
              <div className=" flex items-center gap-10 text-5xl justify-center">
                <p className="bg-[#b1b1b191] w-[80%] h-[5rem] rounded-xl"></p>
              </div>
              <p className="my-2 opacity-80 text-xl"></p>
            </div>
            <p className="bg-[#b1b1b191] w-[60%] h-[2rem] rounded-xl"></p>
            <h2 className="bg-[#b1b1b191] w-[40%] h-[2rem] rounded-xl"></h2>
          </div>
        </div>
      ))}
    </>
  );
}

export { LoaderCards };
