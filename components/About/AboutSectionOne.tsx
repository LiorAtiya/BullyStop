"use client"; // This is a client component 👈🏽
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import React, { useState } from 'react';

const AboutSectionOne = () => {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    education: '',
    occupation: '',
    income: '',
    favoriteColor: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const List = ({ text }) => (
    <>
      ?איך אתה מרגיש (מאוד לא טוב-1 | 5-מאוד טוב)
      <br />
      <p className="mb-5 text-lg font-medium text-right text-body-color">
        <form>
          <label>
            1
            <input type="radio" name="favoriteColor" value="red" checked={formData.favoriteColor === 'red'} onChange={handleChange} />

          </label>
          <br />
          <label>
            2
            <input type="radio" name="favoriteColor" value="green" checked={formData.favoriteColor === 'green'} onChange={handleChange} />

          </label>
          <br />
          <label>
            3
            <input type="radio" name="favoriteColor" value="blue" checked={formData.favoriteColor === 'blue'} onChange={handleChange} />

          </label>
          <br />
          <label>
            4
            <input type="radio" name="favoriteColor" value="blue" checked={formData.favoriteColor === 'blue'} onChange={handleChange} />

          </label>
          <br />
          <label>
            5
            <input type="radio" name="favoriteColor" value="blue" checked={formData.favoriteColor === 'blue'} onChange={handleChange} />

          </label>
        </form>
      </p>
    </>
  );

  const List2 = ({ text }) => (
    <>
      ?כיף לך להיות בבית ספר(מאוד לא טוב-1 | 5-מאוד טוב)
      <br />
      <p className="mb-5 text-lg font-medium text-right text-body-color">
        <form>
          <label>
            1
            <input type="radio" name="favoriteColor" value="red" checked={formData.favoriteColor === 'red'} onChange={handleChange} />

          </label>
          <br />
          <label>
            2
            <input type="radio" name="favoriteColor" value="green" checked={formData.favoriteColor === 'green'} onChange={handleChange} />

          </label>
          <br />
          <label>
            3
            <input type="radio" name="favoriteColor" value="blue" checked={formData.favoriteColor === 'blue'} onChange={handleChange} />

          </label>
          <br />
          <label>
            4
            <input type="radio" name="favoriteColor" value="blue" checked={formData.favoriteColor === 'blue'} onChange={handleChange} />

          </label>
          <br />
          <label>
            5
            <input type="radio" name="favoriteColor" value="blue" checked={formData.favoriteColor === 'blue'} onChange={handleChange} />

          </label>
        </form>
      </p>
    </>
  );

  const List3 = ({ text }) => (
    <>
      ?אתה אוהב את הכיתה שלך(מאוד לא טוב-1 | 5-מאוד טוב)
      <br />
      <p className="mb-5 text-lg font-medium text-right text-body-color">
        <form>
          <label>
            1
            <input type="radio" name="favoriteColor" value="red" checked={formData.favoriteColor === 'red'} onChange={handleChange} />

          </label>
          <br />
          <label>
            2
            <input type="radio" name="favoriteColor" value="green" checked={formData.favoriteColor === 'green'} onChange={handleChange} />

          </label>
          <br />
          <label>
            3
            <input type="radio" name="favoriteColor" value="blue" checked={formData.favoriteColor === 'blue'} onChange={handleChange} />

          </label>
          <br />
          <label>
            4
            <input type="radio" name="favoriteColor" value="blue" checked={formData.favoriteColor === 'blue'} onChange={handleChange} />

          </label>
          <br />
          <label>
            5
            <input type="radio" name="favoriteColor" value="blue" checked={formData.favoriteColor === 'blue'} onChange={handleChange} />

          </label>
        </form>
      </p>
    </>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 text-right">
              <SectionTitle
                title="שאלון קצר לתלמיד"
                paragraph="נא לסמן תשובה אחת"
                mb="44px"
              />

              <div
                className="mb-12 text-right wow fadeInUp lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="flex flex-wrap text-right">
                  <div className="w-full px-3">
                    <List text="Premium quality" />
                    <List2 text="Tailwind CSS" />
                    <List3 text="Use for lifetime" />
                  </div>

                  {/* <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div> */}
                </div>
              </div>
            </div>

            {/* <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="max-w-full mx-auto lg:mr-0"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
