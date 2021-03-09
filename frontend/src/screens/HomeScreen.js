import './HomeScreen.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


// component 
import Product from '../components/Product.js';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return <div className='homescreen'>
            <h2 className="hommescreen__title">Lastest Products</h2>
            <div className="homescreen__products"> {/* this will contain all the products */}
                {/* each individual product will have its own component */}
                {loading ? ( 
                    <h2>loading ...</h2> 
                ) : error ? (
                     <h2>{error}</h2> 
                ) : (
                    products.map((product) => <Product
                    key={product._id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    productId={product._id}
                    />)
                )}
            </div>
        </div>
    }

        
    

export default HomeScreen