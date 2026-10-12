import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

const AccessLMS = () => {
  return (
    <section id="LMS" className="maxWSec w-full px-6 sm:px-12 py-16 flex">
      <div className="w-full flex bg-gradient-to-br from-amber-50/90 via-white to-purple-50/50 border-2 border-amber-200/80 rounded-3xl max-sm:flex-col overflow-hidden shadow-2xl">
        <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 gap-5">
          <span className="px-3.5 py-1 rounded-full bg-main/15 text-sec font-bold text-xs uppercase tracking-wider w-fit border border-main/30">
            Admissions & Merit Scholarships 2026
          </span>
          <h2 className="h2">
            Admissions & <br />
            <span className="text-sec">Science Merit</span>{" "}
            <span className="text-main">Desk</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[52ch]">
            Join the academic ranks of future doctors, engineers, and scientists at The Pakistan School of Science. Explore our state-of-the-art laboratories and secure merit-based scholarships.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a href="/OnlineAdmission">
              <Button btnType="main">
                <span>Online Admission Form</span>
                <svg
                  className="h-auto w-4"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                    fill="#fff"
                  />
                </svg>
              </Button>
            </a>

            <a href="/ContactUs">
              <Button btnType="sec">
                <span>Schedule Campus & Lab Tour</span>
              </Button>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center p-8 bg-gradient-to-br from-sec via-[#2B0955] to-[#120224] relative overflow-hidden">
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_center,#C59A47_0,transparent_70%)]"></div>
          <div className="relative z-10 flex flex-col items-center text-center p-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-white p-3 shadow-2xl border-4 border-main flex items-center justify-center mb-4">
              <Image
                src={"/psslogo.png"}
                width={300}
                height={300}
                alt="The Pakistan School of Science logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-berlin text-2xl sm:text-3xl text-white font-bold tracking-wide">
              PAKISTAN SCHOOL OF SCIENCE
            </h3>
            <p className="text-amber-300 font-bold text-sm tracking-widest uppercase mt-1">
              Knowledge Is Power
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessLMS;
