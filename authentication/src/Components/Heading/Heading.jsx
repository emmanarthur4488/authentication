import React from 'react'
// import './heading.css'
import Tv from '/src/IMG/tv.png'
import Icon from '/src/IMG/Icon.png'
import Menu from '/src/IMG/Menu.png'
import IMD from '/src/IMG/IMD.png'
import Tomatoe from '/src/IMG/tomatoe.png'
import Play from '/src/IMG/play.png'
import Poster from '/src/IMG/Poster.png'
import Icon2 from '/src/IMG/Icon2.png'



const Heading = () => {
  return (
    <div>
        <div>
            <div className=" max-w-full h-screen ">

                <img className=" absolute max-w-full h-screen " src={Poster} alt=""/>

                <div className=" flex justify-between items-center p-4">
                    <div className="relative flex items-center text-white ">
                        <img src={Tv} alt=""/>
                        <h4 className="pl-2 font-semibold">MovieBox</h4>
                    </div>
                    <div className="relative flex items-center ">
                        <input  type="search" placeholder="what do you want to watch?" className=" border-solid"/> <img className="w-4 h-4" src={Icon} alt=""/>
                    </div>
                    <div className="relative flex items-center text-white">
                        <p className="pr-2">Sign In</p>
                        <img src={Menu} alt=""/>
                    </div>
                    
                </div>

                <div className=" relative pt-26 pl-16">
                    <h1 className="text-white pt-28 font-semibold text-4xl" >John Wick 3 : <br/> Parabellum</h1>
                    <div className="flex gap-y-0.5 mt-4">
                        <div className="flex">
                            <img src={IMD} alt=""/>
                            <p className="text-white pl-2">86.0/100</p>
                        </div>

                        <div className="flex pl-12">
                            <img src={Tomatoe} alt=""/>
                            <p className="text-white pl-2">97%</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-white">John Wick is on the run after killing a member <br/> of the international assassins' guild, and with <br/> a $14 million price tag on his head, he is the <br/> target of hit men and women everywhere.</p>
                    </div>
                    <div className="mt-6 ">
                        <button className=" bg-red-500 text-white flex items center text-xl "><img src={Play} alt=""/>watch trailer</button>
                    </div>
                </div>
            </div>
            
        </div>

        <div>
            <div className="flex justify-between p-8">
                <div><h1 className="text-2xl font-semibold">Featured Movies</h1></div>
                <div className="flex items-center">
                    <p className="pr-2 font-semibold">see more</p> 
                    <img className="w-2 h-3" src={Icon2} alt=""/>
                </div>
            </div>
        </div>

        <div>
            {/* <NewArrival/> */}
        </div>

      
    </div>
  )
}

export default Heading
