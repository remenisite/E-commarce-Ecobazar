
import { FaArrowLeft, FaArrowRight, FaRegComments } from "react-icons/fa";
import { CiRuler } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";

 import foodImg from "../../assets/images/foofImg.png"

const posts = [
  { date: "21 FEB", category: "Food", author: "Admin", comments: 65, text: "Maecenas blandit risus elementum mauris malesuada.", image: foodImg,  },
];

export default function FoodSlider() {

  return (
    <div className="">
      <div className="container">



      <div className="">
        <div
          className="flex transition-transform duration-500" >
          {posts.map((post, i) => (
            <div
              key={i}
              className="w-[424px] h-[494px] border border-[#E5E5E5] shadow-md rounded-lg overflow-hidden" >
              <img
                src={post.image}
                alt={post.category}
                className="w-full h-[324px] object-cover"
              />
              <div className="p-[24px]">
                <div className="flex gap-[16px]">
                  <span className="text-[14px] flex items-center gap-1 font-normal font-main text-[#4D4D4D]"><CiRuler /> {post.category}</span>
                  <span className="text-[14px] flex items-center gap-1 font-normal font-main text-[#4D4D4D]"><FaRegUser /> By {post.author}</span>
                  <span className="flex items-center gap-1 text-[14px] font-normal font-main text-[#4D4D4D] ">
                    <FaRegComments /> {post.comments} comments
                  </span>
                </div>
                <p className="text-[18px] font-medium font-main text-text mt-[8px] mb-[20px]">{post.text}</p>
                <a
                  href="#"
                  className="text-green-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>

    </div>
  );
}
