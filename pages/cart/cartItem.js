
import { useSelector } from 'react-redux';
import classes from './cart.module.css';

function CatItem(props) {

    const { id, name, price, quantity, totalPrice, imageName } = props;
    let cartItems = useSelector((state) => state.cart.items);
    const existingItem = cartItems.find((item) => item.id === id);
    const AddToCartHandler = () => {
        if (!existingItem) {

            cartItems.push({

                id: id,

                name: name,

                imageName: imageName,

                price: priceafterdiscount,

                quantity: 1,

                totalPrice: priceafterdiscount,

            });

        } else {

            existingItem.quantity++;

            existingItem.totalPrice = (existingItem.totalPrice + priceafterdiscount);

        }



        const params = {

            total: cartAmount + priceafterdiscount,

            totalquantity: cartQuantity + 1,

            items: [

                ...cartItems,

            ]

        }



        axios.patch('http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff', params)

            .then((response) => {
                //console.log(response);
                addToCart(response);



            })

    }


    return (
        <tr className="cart_item">
            <td className={classes.product_remove}>
                <a title="Remove this item" className="remove" href="#">×</a>
            </td>

            <td className={classes.product_thumbnail}>
                <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" className="shop_thumbnail" src="/img/product-thumb-2.jpg" /></a>
            </td>

            <td className={classes.product_name}>
                <a href="single-product.html">{name}</a>
            </td>

            <td className={classes.product_price}>
                <span className="amount">{price}€</span>
            </td>

            <td className={classes.product_quantity}>
                <div className={classes.quantity}>
                    <input type="button" className={classes.minus} value="-" />
                    <input type="number" size={4} className="input-text qty text" title="Qty" value="1" min="0" step="1" />
                    <input type="button" className={classes.plus} onClick={AddToCartHandler} value="+" />
                </div>
            </td>

            <td className={classes.product_subtotal}>
                <span className={classes.amount}>15.00 €</span>
            </td>
        </tr>

    )
}
export default CatItem;