import one from  "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

function Products() {
  return (
    <div className="products">
      <div className="box">
        <img src={one} alt="Perfume 1" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div className="box">
        <img src={two} alt="Perfume 2" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div className="box">
        <img src={three} alt="Perfume 3" />
        <p>
          Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long
          Lasting Perfume
        </p>
      </div>
    </div>
  )
}

export default Products
