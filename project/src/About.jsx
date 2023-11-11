import React from 'react'

function About() {
  return (
     <>
     <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                       <img src="" alt="imag" />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Education
                      </h2>
                      <p className="mt-0 text-gray-600">
                           <div className='sides flex'><h2>Institute of Technolgy Guru Ghasidas Vishwavidyalaya </h2>
                           <h2 className='ma pl-12'>2021-2025</h2></div> 
                           <h2>Computer Science Engineering</h2>
                           <p>8.02 G.P.A</p>
                  <hr />
                  <div className="na flex"><h2>Sri Chaitanya Junior Kalasala</h2>
                  <h2 className='ma pl-56'>2019-2021</h2></div>
                   
                  <h2>Intermidiate</h2>
                  <p>97.4%</p>
                  <hr />
                  <div className="ma flex"><h2>Bhashyam High School</h2>
                   <h2 className='me pl-64'>2018-2019</h2></div>
                    
                  <h2>10th</h2>
                  <p>97.4%</p>
                      </p>
                  
                   
                  </div>
              </div>
          </div>
      </div>
     </>
  )
}

export default About