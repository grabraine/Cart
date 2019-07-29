import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './services/product.service';
import { routing } from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import {RainbowDirective } from './hover';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    MainscreenComponent,
    RainbowDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    routing,
    MatTableModule
  ],
  exports: [RainbowDirective],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
