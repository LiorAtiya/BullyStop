import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="py-16 overflow-hidden md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-right text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                ?צריך עזרה
              </h2>
              <p className="mb-12 text-base font-medium text-right text-body-color">
                פנה אלינו והמערכת תעזור לך תוך 24 שעות
              </p>
              <form>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 md:w-1/2">


                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="block mb-3 text-sm font-medium text-right text-dark dark:text-white"
                      >
                        :אימייל
                      </label>
                      <input
                        type="email"
                        placeholder="הכנס את האימייל שלך"
                        className="w-full rounded-md border text-right border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="block mb-3 text-sm font-medium text-right text-dark dark:text-white"
                      >
                        :שם מלא
                      </label>
                      <input
                        type="text"
                        placeholder="הכנס את השם המלא"
                        className="w-full rounded-md border text-right border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="block mb-3 text-sm font-medium text-right text-dark dark:text-white"
                      >
                        פירוט
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="הכנס את הפירוט שלך"
                        className="w-full resize-none text-right rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="py-4 text-base font-medium text-white transition duration-300 ease-in-out rounded-md bg-primary px-9 hover:bg-opacity-80 hover:shadow-signUp">
                      שלח
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
