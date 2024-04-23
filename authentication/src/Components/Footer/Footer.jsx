import React from 'react'
import Facebook from '/src/IMG/facebook.png'
import Instagram from '/src/IMG/instagram.png'
import Youtube from '/src/IMG/youtube.png'
import Twitter from '/src/IMG/twitter.png'

const Footer = () => {
  return (
    <div>
      <div>
          <div className="flex items-center justify-center">
              <div className="p-4">
                <img src={Facebook} alt=""/>
              </div>

              <div className="p-4">
                <img src={Instagram} alt=""/>
              </div>
              
              <div className="p-4">
                <img src={Twitter} alt=""/>
              </div>
              
              <div className="p-4">
                <img src={Youtube} alt=""/>
              </div>
          </div>
          <div className="flex items-center justify-center">
              <div className="p-4 text-xs">
                  <p>Condition of use</p>
              </div>

              <div className="p-4 text-xs">
                  <p>Privacy & Policy</p>
              </div>

              <div className="p-4 text-xs">
                  <p>Press Room</p>
              </div>
          </div>
          <div className="flex items-center justify-center text-xs text-gray-400 pb-4">
              &copy; 2024 MovieBox by Arthur Emmanuel
          </div>

      </div>
    </div>
  )
}

export default Footer
