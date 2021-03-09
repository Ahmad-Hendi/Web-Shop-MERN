import './Product.css'
import { Link } from 'react-router-dom';

const Product = ({ imageUrl, name, price, description, productId }) => {
    return (
        <div className='product'>
            <img src={imageUrl} alt={name}/>

            <div className="product__info">
                {/* this will contain all the info about the product */}
                <p className='info__name'>{name}</p>
                {/* <p className='info__description'>{description}</p> */}
                <p className='info__price'>{price}</p>
                <Link to={`/product/${productId}`} className='info__button'>View</Link>  {/* a button that will take us to another page to show the project more in details */}
            </div>
        </div>
    )
}

export default Product
