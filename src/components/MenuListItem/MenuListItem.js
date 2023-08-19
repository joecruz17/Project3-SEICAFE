import styles from './MenuListItem.module.scss';
import InnerImageZoom from 'react-inner-image-zoom';


export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      <InnerImageZoom src={menuItem.imageUrl} zoomSrc={menuItem.imageUrl} width="90px" zoomScale=".4" hasSpacer={true}/>
      <div className={styles.name}>{menuItem.name}</div>
      <div className={styles.buy}>
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}