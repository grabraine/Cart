import { Component, OnInit,ViewChild,ElementRef,Input } from '@angular/core';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';
import { MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('appTitle',{static: false}) nameElementRef: ElementRef;
@Input() public myInputVariable :string;

  private products: Product[];
  dataSource: any;

  displayedColumns: string[] = ['ID', 'NAME', 'PRICE', 'PHOTO','ADD'];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.findAll();
    this.dataSource = new MatTableDataSource(this.productService.findAll());
    this.myInputVariable ='123';
  }
  ngAfterViewInit() {
    console.log(this.nameElementRef.nativeElement.innerHTML); 
    //this.nameElementRef.nativeElement.innerHTML = "DOM updated successfully!!!"; 
  }
}
