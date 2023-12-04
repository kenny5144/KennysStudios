import React from 'react'

const Portfolio = () => {
  return (
    <>
      
      <div className="w-100% m-auto absolute -z-[1] md:relative md:z-[1]  h-[75rem] justify-center ">
        <h1 className="text-center  text-bold text-3xl mt-5 "> My Work</h1>
        <div className="md:flex justify-center mt-8">
          <div className=" md:relative   md:top-36 ">
            <div className="container">
              <img
              loading="lazy"
                className=" rounded-lg w-screen md:w-96 md:h-auto  image h-auto"
                src={maria}
                alt=""
              />
              <div className="middle">
                <Link
                  className="text-4xl hover:underline text-bold"
                  to="/lifestyle"
                >
                  Lifestyle
                </Link>
              </div>
            </div>

            <div className="container  ">
              <img
              loading="lazy"
                className="rounded-lg w-screen  mt-2   md:w-96 md:h-auto image h-auto"
                src={baba}
                alt="event image"
              />
              <div className="middle">
                <Link
                  className="text-4xl hover:underline text-bold"
                  to="/Event"
                >
                  Event
                </Link>
              </div>
            </div>
          </div>
          <div className="md:ml-6 ">
            <div className="container">
              <img
              loading="lazy"
                className="rounded-lg w-screen mt-2 md:mt-0  image md:w-96 md:h-auto h-auto"
                src={selecover}
                alt=""
              />
              <div className="middle">
                <Link
                  className="text-4xl hover:underline text-bold"
                  to="/Studio"
                >
                  Studio
                </Link>
              </div>
            </div>

            <div className="container">
              <img
              loading="lazy"
                className="rounded-lg w-screen  mt-2 md:w-96 md:h-auto image h-auto"
                src={kay1}
                alt=""
              />
              <div className="middle">
                <Link
                  className="text-4xl hover:underline text-bold"
                  to="/business"
                >
                  Business
                </Link>
              </div>
            </div>
          </div>
        </div>
        <footer className=" mt-2 md:relative md:top-40 flex  bg-blue-300 h-20 ">
          <div className="justify-center self-center m-auto  w-auto ">

        <a href="https://www.instagram.com/kennys_studio/" className="  p-1.5 flex text-3xl mt-0" target="blank">{element} <span className="pl-1"> Instagram </span></a>
          </div>

        </footer>
      </div>
    </>
  )
}

export default Portfolio
