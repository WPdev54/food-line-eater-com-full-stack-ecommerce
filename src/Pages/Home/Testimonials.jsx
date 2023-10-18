import ReactStars from "react-stars";
import SharedTitle from "../../Shared/sharedTitle";
import img from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import { Rating } from "@smastrom/react-rating";

export function Testimonials() {
  return (
    <div className="flex py-20 justify-center items-center justify-items-center mx-auto text-center">
      <div className="">
        <SharedTitle subtitle={"What Our Clients Say"} title={"TESTIMONIALS"} />
        <div className="content flex justify-center justify-items-center mx-auto text-center">
          <div className="text">
            <img src="../../../public/quote-left 1.svg" className="text-center mx-auto" alt="" />
            <p className="max-w-4xl mt-4 font-bold text-gray-900">
              Various version have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like). It
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <h3 className="text-amber-500 font-black mt-12 text-2xl ">WPDEV</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
 <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                         */
