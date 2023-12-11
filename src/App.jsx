import { useState } from 'react'
import UncontrolledExample from './Carousel.jsx'
import BasicExample from './Card.jsx'
import image from './assets/lx.jpg'; 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div className="parallax1" style={{height:'600px',fontSize:'36px'}}>
<img src="https://th.bing.com/th/id/R.1acf1e19c617db034cf9d8d07a54186f?rik=Jeb4ziWjwQMuRw&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f12%2fLexus-Logo-Wallpaper-2022.png&ehk=Zspa3r%2fxG%2fAcfzFgIiiBVCY8TFiPzN8TRukEZaqSGhk%3d&risl=&pid=ImgRaw&r=0" alt="" style={{width:'200px', height:'200px', padding:'30px'}} />
</div>

<div className="parallax" >
<div className="parallax1" style={{height:'600px',fontSize:'36px'}}></div>
</div>

<div className="parallax">
<div className="parallax2 p-5 d-flex justify-content-between align-items-center">
<BasicExample src={"https://www.hdcarwallpapers.com/download/lexus_rx_300_crafted_edition_2021_4k-3840x2160.jpg"} model={"RX 300"}/>
<BasicExample src={" https://stat.overdrive.in/wp-content/odgallery/2019/10/54155__2019-Lexus-RXL_001.jpg"}  model={"RX 450h"}/>
<BasicExample src={"https://th.bing.com/th/id/OIP.vXaugi5CP5YJ4bgYI1NJJAHaE8?rs=1&pid=ImgDetMain"}  model={"RX 350"}/>
  </div> 
</div>

<UncontrolledExample />


    </>
  )
}

export default App
