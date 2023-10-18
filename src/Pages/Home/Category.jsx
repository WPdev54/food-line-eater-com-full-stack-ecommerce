import SharedTitle from "../../Shared/sharedTitle";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";

const Category = () => {
  return (
    <div className="py-8">
    <h1>
      <SharedTitle subtitle={"From 11:00am to 10:00pm"} title={"ORDER ONLINE"}/>
    </h1>
      <div className="hidden md:block">
        <div className="container  md:flex items-center justify-center mx-auto gap-12 mb-12">
          <div className="first rounded-3xl rounded-b-3xl flex justify-center">
            <div className="img-1">
              <img className="translate-y-0 hover:translate-y-[-18px] transition-all duration-500" src={slide1} />
              <h1 className="text-center relative text-4xl text-gray-700 bottom-16">
                SALAD
              </h1>
            </div>
          </div>

          <div className="second rounded-3xl rounded-b-3xl flex justify-center">
            <div className="img-2">
              <img className="translate-y-0 hover:translate-y-[-18px] transition-all duration-500" src={slide2} />
              <h1 className="text-center relative text-4xl text-gray-700 bottom-16">
                SOUPS
              </h1>
            </div>
          </div>

          <div className="third rounded-3xl rounded-b-3xl flex justify-center">
            <div className="img-3">
              <img className="translate-y-0 hover:translate-y-[-18px] transition-all duration-500" src={slide3} />
              <h1 className="text-center relative text-4xl text-gray-700 bottom-16">
                PIZZAS
              </h1>
            </div>
          </div>

          <div className="forth rounded-3xl rounded-b-3xl flex justify-center">
            <div className="img-4">
              <img className="translate-y-0 hover:translate-y-[-18px] transition-all duration-500" src={slide4} />
              <h1 className="text-center relative text-4xl text-gray-700 bottom-16">
                DESERTS
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden px-8">
        <div className="container   gap">
          <div className="group1 flex gap-7 items-center justify-center mx-auto">
            <div className="first rounded-3xl rounded-b-3xl flex justify-center">
              <div className="img-1">
                <img className="translate-y-0 hover:translate-y-[-18px] transition-all duration-500" src={slide1} />
                <h1 className="text-center relative text-4xl text-gray-700 bottom-16">
                  SALAD
                </h1>
              </div>
            </div>

            <div className="second rounded-3xl rounded-b-3xl flex justify-center mb-4">
              <div className="img-2">
                <img className="translate-y-0 hover:translate-y-[-18px] transition-all duration-500" src={slide2} />
                <h1 className="text-center relative text-4xl text-gray-700 bottom-16">
                  SOUPS
                </h1>
              </div>
            </div>
          </div>

          <div className="group2 flex gap-7 items-center justify-center mx-auto">
            <div className="third rounded-3xl rounded-b-3xl flex justify-center mb-4">
              <div className="img-3">
                <img className="translate-y-0 hover:translate-y-[-18px] transition-all duration-500" src={slide3} />
                <h1 className="text-center relative text-4xl text-gray-700 bottom-16">
                  PIZZAS
                </h1>
              </div>
            </div>

            <div className="forth rounded-3xl rounded-b-3xl flex justify-center mb-4">
              <div className="img-4">
                <img className="translate-y-0 hover:translate-y-[-18px] transition-all duration-500" src={slide4} />
                <h1 className="text-center relative text-4xl text-gray-700 bottom-16">
                  DESERTS
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
