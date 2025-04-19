import { PageIntro } from '../components';
import { CartShopComponent } from '../components';

export const CartShop = () => {
  return (
    <div>
      <PageIntro text={'Cart Shop Page'} />
      <CartShopComponent />
    </div>
  );
};
