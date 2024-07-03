export default function WhoVideo({ url, description }) {
  return (
    <div className="p-4">
      <div className="w-fit relative h-fit m-auto -mt-28">
        {/*<div className="hidden md:flex absolute w-full h-8 justify-center items-center left-0 top-0">
          <span className="w-4 h-4 bg-slate-700 rounded-full" />
  </div>*/}
        <video
          className="rounded-md"
          style={{ width: "100%", maxWidth: "900px" }}
          controls
          width="800"
          height="800"
          autoPlay
          muted
        >
          <source src={url}></source>
        </video>
        {/* <div className="hidden md:flex h-8 gap-x-12 absolute w-full bottom-0 left-0 justify-center items-center">
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
</div>*/}
        <div
          my-data-aos="zoom-in"
          data-aos-duration="500"
          className="flex m-auto relative p-4 xl:px-12"
          style={{ width: "100%", maxWidth: "900px" }}
        >
          <span
            className="columns-1 lg:columns-3 gap-x-16 text-slate-800"
            sx={{ fontSize: "1.15rem" }}
          >
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
