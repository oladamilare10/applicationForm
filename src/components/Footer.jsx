
const Footer = () => {
  return (
      <div style={{width: "100%",backgroundColor:"#ff7a3d",color:"#fff",padding:50,paddingBottom:100}}>
        <div style={{width: "100%",display:"flex",justifyContent: "space-evenly"}}>
            <div style={{maxWidth:"40%"}}>
                <h3>About Us</h3>
                <div className="aboutShort">
                We believe that online shopping should be easy, convenient, 
                and enjoyable. That’s why we created Kart Central, 
                a platform that connects you with the best products and
                 deals from around the world. Our mission is to make your 
                 life easier and happier by delivering quality and value 
                 to your doorstep.
                </div>
            </div>
            <div style={{maxWidth:"40%"}}>
                <h3>Shortcut</h3>
                <ul>
                    <li style={{listStyle:"none"}}>
                        <a style={{color:"#fff",textDecoration:"none"}} href="https://kartcentral.store/">Home</a>
                    </li>
                    <li style={{listStyle:"none"}}>
                        <a style={{color:"#fff",textDecoration:"none"}} href="https://kartcentral.store/shop-2/">Store</a>
                    </li>
                    <li style={{listStyle:"none"}}>
                        <a style={{color:"#fff",textDecoration:"none"}} href="https://kartcentral.store/about/">About</a>
                    </li>
                    <li style={{listStyle:"none"}}>
                        <a style={{color:"#fff",textDecoration:"none"}} href="https://kartcentral.store/contact/">Contact</a>
                    </li>
                </ul>
            </div>
            {/* <div style={{maxWidth:"30%"}}>
                <h3>Links</h3>
                <ul>
                    <li style={{listStyle:"none"}}>
                        <a style={{color:"#fff",textDecoration:"none"}} href="https://kartcentral.store/">Home</a>
                    </li>
                </ul>
            </div> */}
        </div>
        <div className="copyR" style={{textAlign: "center",marginTop:45}}>
            © 2024 KartCentral. Powered by KartCentral Developer.
        </div>
      </div>
  )
}

export default Footer
