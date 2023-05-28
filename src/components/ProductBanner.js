
import '../styles/ProductBanner.css'
import ProductItem from './ProductItem';
export default function ProductBanner({className, children}){
    return(
        <div className='container'> 
            <div className={className}>
                {children}
            </div>
            <div className="row">
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
            </div>
        </div>
    );
}