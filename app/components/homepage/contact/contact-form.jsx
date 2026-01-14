"use client";

import { useForm, ValidationError } from "@formspree/react";
import { TbMailForward } from "react-icons/tb";
import GlowCard from "../../helper/glow-card";

function ContactForm() {
  const [state, handleSubmit] = useForm("mkonzgyg");

  if (state.succeeded) {
    return <p className="text-white">Thanks for your message!</p>;
  }

  return (
    <GlowCard identifier="contact-form">
      <div className="max-w-3xl text-white rounded-lg p-3 lg:p-5">
        <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
          Contact with me
        </p>
        <p className="text-sm text-[#d3d8e8]">
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base" htmlFor="name">
              Your Name:{" "}
            </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required={true}
              id="name"
              name="name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base" htmlFor="email">
              Your Email:{" "}
            </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required={true}
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-sm text-red-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base" htmlFor="message">
              Your Message:{" "}
            </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
              required={true}
              id="message"
              rows="4"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-sm text-red-400"
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              type="submit"
              disabled={state.submitting}
            >
              <span className="flex items-center gap-1">
                Send Message
                <TbMailForward size={20} />
              </span>
            </button>
          </div>
        </form>
      </div>
    </GlowCard>
  );
}

export default ContactForm;
