import Link from 'next/link';

import classes from './cartButton.module.css';

export default function cartButton() {

    return (
        <div className="col-sm-4">
            <Link href='/cart/cart'>
                <button className={classes.item}>

                    Cart :
                    <span className={classes.cart_amunt}>100.58 €</span>
                    <i className="fa fa-shopping-cart"> </i>
                    <span className={classes.product_count}>5</span>

                </button>
            </Link>

        </div>
    );
}