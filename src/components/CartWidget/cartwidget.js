import cart from './Assets/cart.webp';
import './Cartwidget.css';

const Cartwidget = () => {
  return (
    <div className="cart-widget">
      <img src={cart} alt='cart-widget' className="cart-icon" />
      <span className="cart-count">0</span>
    </div>
  );
}

export default Cartwidget;