import React, { memo } from 'react'
import Listitem from '../Listitem'

const Firmpage = memo(({firm}) => {
  // console.log('firm',firm)
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

      <div className="my-20">
        <div className="lg:ml-60 mx-2 text-3xl font-bold block">{firm.title}</div>
          <h2 className="lg:ml-60 mx-2 py-5 text-xl">{firm.purpose}</h2>
          <p className="lg:ml-60 ml-2 mr-20 text-xl max-w-full" dangerouslySetInnerHTML={{ __html: firm.description }} />
          <div className="mt-10">
            {firm.jobs.map((data) => (<Listitem key={data.id} job={data} />))}
          </div>
        </div>
    </div>    
  )
})

export default Firmpage
