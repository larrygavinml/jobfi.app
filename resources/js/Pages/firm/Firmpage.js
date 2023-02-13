import React, { memo } from 'react'

const Firmpage = memo(({firm}) => {
  return (
    <div>
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

      <div className="flex justify-center my-20">
        <div>
          <div className="w-full text-3xl font-bold block">{firm.title}</div>
          <h2 className="py-5 text-xl">{firm.purpose}</h2>
          <p className="max-w-4xl text-xl">{firm.description}</p>
          <form className="mt-10 w-full h-auto " >
            <input className="px-14 py-3 rounded-md text-white text-base font-semibold bg-green-500 hover:bg-green-700" type="submit" value="Post" />
          </form>
        </div>
        
      </div>
    </div>    
  )
})

export default Firmpage
