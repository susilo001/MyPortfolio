import { GoDotFill, GoSearch, GoFile, GoGitBranch } from "react-icons/go";
import Typewriter from "typewriter-effect";

export function Editor() {
  return (
    <div className="w-96 h-64 border-2 rounded-xl shadow-lg">
      <div className="w-full border-b p-2 flex justify-end ">
        <GoDotFill className="inline-block" />
        <GoDotFill className="inline-block" />
      </div>
      <div className="flex gap-2 h-3/4">
        <div className="border-r w-1/12 p-2 flex flex-col items-center gap-2 ">
          <GoFile />
          <GoSearch />
          <GoGitBranch />
        </div>
        <div className="text-xs">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("console.log('Hello World!');")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
      </div>
      <div className="w-full border-t p-2 flex justify-end h-1/6 ">
        <GoDotFill className="inline-block" />
        <GoDotFill className="inline-block" />
      </div>
    </div>
  );
}
