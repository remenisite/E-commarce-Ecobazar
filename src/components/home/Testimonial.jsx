import TesttimonalCard from "../testimonial/TesttimonalCard";

export default function Testimonial() {
  return (
    <section className="bg-[#F2F2F2] py-[60px]">
      <div className="container">
        <h2 className="text-[32px] font-semibold font-main text-text">   Client Testimonials   </h2>
        <div className=" grid grid-cols-3 gap-[24px]">
          <TesttimonalCard />
          <TesttimonalCard />
          <TesttimonalCard />
        </div>
      </div>
    </section>
  );
}
