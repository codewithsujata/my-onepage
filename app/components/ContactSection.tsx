"use client";

export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-white mt-40 mb-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-8xl font-bold text-gray-900 mb-6 leading-tight">
            Decided ?<br />
            <span className="text-orange-500">Contact Us</span>
          </h1>
          <hr className="w-12 border-t border-gray-300 mb-6 mx-auto md:mx-0" />
          <p className="text-gray-500 leading-relaxed">
            High energy combined with lots of smarts lends itself to disaster when the dog is not properly cared for.
            It’s imperative that Corgis receive appropriate amounts of{" "}
            <span className="font-semibold text-gray-700">exercise, special food, bath, care and brain activities.</span>{" "}
            Be caring and responsible.
          </p>
        </div>

        <div className="md:w-1/2 w-full">
          <form className="flex flex-col gap-6">
            <input type="text" placeholder="Enter your name" className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2" />
            <input type="email" placeholder="Enter your email" className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2" />
            <textarea placeholder="Write your message..." rows={4} className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2 resize-none" />
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
