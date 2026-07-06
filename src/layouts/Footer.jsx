export default function Footer() {
  return (
    <>
      <footer
        className={
          "w-full bg-[#000000] border-t-2 border-[#3d0000] relative pt-12 pb-6 text-slate-400 overflow-hidden"
        }
      >
        <div
          className={
            "absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ff0000_1px,transparent_1px)] [background-size:16px_16px]"
          }
        ></div>

        <div
          className={
            "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 text-right relative z-10"
          }
        >
          <div className={"md:col-span-5 space-y-4"}>
            <div className={"flex items-center space-x-reverse space-x-3 mb-2"}>
              <span
                className={
                  "text-2xl font-black text-[#ff0000] tracking-wider cyber-text-glow"
                }
              >
                NickCode | نیک کد
              </span>
              <span
                className={
                  "text-[10px] bg-[#3d0000]/30 border border-[#950101]/40 px-2 py-0.5 rounded text-[#ff0000] font-mono"
                }
              >
                v2.6
              </span>
            </div>
            <p className={"text-xs text-slate-400 leading-relaxed max-w-sm"}>
              توسعه یافته بر پایه متدهای نوین وب جهت افزایش بهره‌وری
              برنامه‌نویسان فارسی‌زبان در معماری، پیاده‌سازی و هک پروژه‌های
              فرانت‌اند و بک‌اند در اتمسفر کامپایلرهای ابری.
            </p>
          </div>

          <div className={"md:col-span-3 space-y-4"}>
            <h4
              className={
                "text-white font-black text-sm uppercase tracking-wider relative inline-block pb-2"
              }
            >
              دایرکتوری دسترسی
              <span
                className={"absolute bottom-0 right-0 w-8 h-[2px] bg-[#ff0000]"}
              ></span>
            </h4>
            <ul className={"text-xs space-y-3 font-mono"}>
              <li>
                <a
                  href="courses.html"
                  className={
                    "flex items-center space-x-reverse space-x-2 text-slate-500 hover:text-[#ff0000] transition-colors duration-200 group"
                  }
                >
                  <span
                    className={
                      "text-[#950101] group-hover:text-[#ff0000] transition-colors"
                    }
                  >
                    &gt;
                  </span>
                  <span>// دایرکتوری_دوره‌ها</span>
                </a>
              </li>
              <li>
                <a
                  href="editor.html"
                  className={
                    "flex items-center space-x-reverse space-x-2 text-slate-500 hover:text-[#ff0000] transition-colors duration-200 group"
                  }
                >
                  <span
                    className={
                      "text-[#950101] group-hover:text-[#ff0000] transition-colors"
                    }
                  >
                    &gt;
                  </span>
                  <span>// محیط_تست_کد</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={
                    "flex items-center space-x-reverse space-x-2 text-slate-500 hover:text-[#ff0000] transition-colors duration-200 group"
                  }
                >
                  <span
                    className={
                      "text-[#950101] group-hover:text-[#ff0000] transition-colors"
                    }
                  >
                    &gt;
                  </span>
                  <span>// لایه_امنیت_شبکه</span>
                </a>
              </li>
            </ul>
          </div>

          <div className={"md:col-span-4 space-y-4"}>
            <h4
              className={
                "text-white font-black text-sm uppercase tracking-wider relative inline-block pb-2"
              }
            >
              وضعیت سیستم مرکزی
              <span
                className={"absolute bottom-0 right-0 w-8 h-[2px] bg-[#ff0000]"}
              ></span>
            </h4>
            <div
              className={
                "text-xs font-mono bg-[#3d0000]/10 p-4 border border-[#3d0000] rounded-xl space-y-2 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(61,0,0,0.2)]"
              }
            >
              <div className={"flex justify-between items-center"}>
                <span className={"text-slate-500"}>NETWORK NODE:</span>
                <div className={"flex items-center space-x-reverse space-x-2"}>
                  <span className={"relative flex h-2 w-2"}>
                    <span
                      className={
                        "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                      }
                    ></span>
                    <span
                      className={
                        "relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
                      }
                    ></span>
                  </span>
                  <span className={"text-emerald-500 font-bold tracking-wide"}>
                    OPERATIONAL
                  </span>
                </div>
              </div>
              <div className={"flex justify-between items-center"}>
                <span className={"text-slate-500"}>SECURE SHELL:</span>
                <span
                  className={
                    "text-[#ff0000] font-bold tracking-wide drop-shadow-[0_0_3px_#950101]"
                  }
                >
                  ENCRYPTED
                </span>
              </div>
              <div
                className={
                  "pt-2 border-t border-[#3d0000]/50 text-[10px] text-slate-600 flex justify-between"
                }
              >
                <span>LATENCY: 14ms</span>
                <span>© 2026 NICKCODE CO.</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            "border-t border-[#1c1c1c] pt-4 mt-4 text-center text-[10px] font-mono tracking-widest text-slate-600 relative z-10"
          }
        >
          NICKCODE TERMINAL NODE v2.4.0 // ALL SYSTEMS VERIFIED & PROTECTED BY
          CRIMSON CORE
        </div>
      </footer>
    </>
  );
}
