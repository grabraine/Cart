import { Routes, RouterModule } from '@angular/router';
import {MainscreenComponent} from './mainscreen/mainscreen.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
	{ path: '', component: MainscreenComponent },
	{ path: 'main', component: MainscreenComponent },
	{ path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);