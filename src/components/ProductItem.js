import '../styles/ProductBanner.css'
export default function ProductBanner(){
    return(
        <div className="product col-12 col-xl-3">
            <img src='..\assets\images\product.jpg'></img>
            <p>Yasuo</p>
            <button>Add to cart</button>
        </div>
    );
}