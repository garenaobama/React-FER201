import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ProductBanner from "../components/ProductBanner";
import Top from "../components/Top";
import '../styles/DefaultLayout.css'

export default function DefaultLayout({className, children}) {
    return (
        <>
            <Top />
            <Banner />
            <ProductBanner>
                <div className="product-banner-title">
                    New Product
                </div>
            </ProductBanner>
            <ProductBanner>
                <div className="product-banner-title">
                    Hot Product
                </div>
            </ProductBanner>
            <Footer/>
        </>
    );
}