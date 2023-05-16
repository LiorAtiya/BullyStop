import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  האקתון 2023 - די לאלימות
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">

                  <div className="flex items-center justify-center">
                    <img src="/images/together.jpeg" className="h-72 w-72" alt="children" />
                  </div>

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
        
        </div>
    
      </section>
    </>
  );
};

export default Hero;
