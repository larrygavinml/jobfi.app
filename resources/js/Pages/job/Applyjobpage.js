import React from "react";


export function Applyjobpage() {
  return (
    <main>
       <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "20vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url("https://jobfi-io.imgix.net/bg222.b2568a38.jpg")`
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
        </div>

       <section className="pt-20 pb-48">
       <div className="p-6 border border-gray-300 sm:rounded-md">
    <form>
      <label className="block mb-6">
        <span className="text-gray-700">Your name</span>
        <input
          required
          name="name"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Joe Bloggs"
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Email address</span>
        <input
          required
          name="email"
          type="email"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="joe.bloggs@example.com"
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Years of experience</span>
        <select
          required
          name="experience"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        >
          <option>Less than a year</option>
          <option>1 - 2 years</option>
          <option>2 - 4 years</option>
          <option>4 - 7 years</option>
          <option>7 - 10 years</option>
          <option>10+ years</option>
        </select>
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Tell us more about yourself</span>
        <textarea
          name="message"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="What motivates you?"
        ></textarea>
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Your CV</span>
        <input
          required
          name="cv"
          type="file"
          className="
            block
            w-full
            mt-1
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        />
      </label>
      <div className="mb-6">
        <div className="mt-2">
          <div>
            <label className="inline-flex items-center">
              <input
                name="remote"
                value="yes"
                type="radio"
                className="
                  text-indigo-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                checked
              />
              <span className="ml-2">You'd like to work remotely</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                name="re"
                value="no"
                type="radio"
                className="
                  text-indigo-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              />
              <span className="ml-2">You'd prefer to work onsite</span>
            </label>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <button
          type="submit"
          className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
        >
          Apply
        </button>
      </div>
      <div>
        <div className="mt-2 text-gray-700 text-right text-xs">
          by
          <a href="https://herotofu.com" className="hover:underline" target="_blank"
            >HeroTofu</a
          >
        </div>
      </div>
    </form>
  </div>
       </section>  
    </main>    
  );
}
