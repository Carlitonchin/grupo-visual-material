export default function WhoVideo({ url, description }) {
  return (
    <div className="p-4">
      <div className="w-fit relative h-fit p-1 md:p-8 bg-black rounded-xl border-black md:border-white  border-4  m-auto -mt-28">
        <div className="hidden md:flex absolute w-full h-8 justify-center items-center left-0 top-0">
          <span className="w-4 h-4 bg-slate-700 rounded-full" />
        </div>
        <video
          style={{ width: "100%", maxWidth: "900px" }}
          controls
          width="800"
          height="800"
          autoPlay
          muted
        >
          <source src={url}></source>
        </video>
        <div className="hidden md:flex h-8 gap-x-12 absolute w-full bottom-0 left-0 justify-center items-center">
          <span className="w-4 h-4 rounded-sm bg-white" />
          <span className="w-4 h-4 rounded-full bg-white" />
          <svg
            className="w-4 h-4"
            viewBox="0 0 512 512"
            version="1.1"
            fill="#fffff"
            transform="rotate(270)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>triangle-filled</title>{" "}
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="drop"
                  fill="#fff"
                  transform="translate(32.000000, 42.666667)"
                >
                  {" "}
                  <path
                    d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
                    id="Combined-Shape"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>
      <div
        className="flex m-auto relative p-4 xl:px-12"
        style={{ width: "100%", maxWidth: "900px" }}
      >
        <svg
          className="absolute hidden xl:flex"
          style={{ left: "-130px", top: "calc(50% - 100px)" }}
          width="200px"
          height="200px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M14 21C12.8954 21 12 20.1046 12 19V15.3255C12 14.8363 12 14.5917 11.9447 14.3615C11.8957 14.1575 11.8149 13.9624 11.7053 13.7834C11.5816 13.5816 11.4086 13.4086 11.0627 13.0627L10 12L11.0627 10.9373C11.4086 10.5914 11.5816 10.4184 11.7053 10.2166C11.8149 10.0376 11.8957 9.84254 11.9447 9.63846C12 9.40829 12 9.1637 12 8.67452V5C12 3.89543 12.8954 3 14 3"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <span
          className="columns-1 lg:columns-3 gap-x-16 text-gray-500"
          sx={{ fontSize: "1.15rem" }}
        >
          {description}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute hidden xl:flex"
          style={{ right: "-130px", top: "calc(50% - 100px)" }}
          width="200px"
          height="200px"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M10 21C11.1046 21 12 20.1046 12 19V15.3255C12 14.8363 12 14.5917 12.0553 14.3615C12.1043 14.1575 12.1851 13.9624 12.2947 13.7834C12.4184 13.5816 12.5914 13.4086 12.9373 13.0627L14 12L12.9373 10.9373C12.5914 10.5914 12.4184 10.4184 12.2947 10.2166C12.1851 10.0376 12.1043 9.84254 12.0553 9.63846C12 9.40829 12 9.1637 12 8.67452V5C12 3.89543 11.1046 3 10 3"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
}
