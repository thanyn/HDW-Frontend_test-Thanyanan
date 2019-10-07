import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatCheckboxModule } from '@angular/material';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';


import { MatGridListModule } from '@angular/material/grid-list';

import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import {
  MatBadgeModule,
  MatBottomSheetModule,
  MatDividerModule,
  MatNativeDateModule,
  MatRippleModule,
  MatTreeModule,
} from '@angular/material';
import { from } from 'rxjs';
import{HttpModule}   from '@angular/http';
import {SlideshowModule} from 'ng-simple-slideshow';
import { NgImageSliderModule } from 'ng-image-slider';

import { HomeComponent } from 'src/app/component/home/home.component';
import { ProductControlService } from 'src/app/shared/product-control.service'
import { AddProductComponent } from 'src/app/component/add-product/add-product.component';
import { ViewProductComponent } from 'src/app/component/view-product/view-product.component';
import { ListProductComponent } from 'src/app/component/list-product/list-product.component';
import { ProductFilterPipe } from './shared/product-filter.pipe';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'view-product/:productCode', component: ViewProductComponent},
  { path: 'list-product', component: ListProductComponent}
];
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    ViewProductComponent,
    ListProductComponent,
    ProductFilterPipe
   
  ],
  imports: [
    HttpModule,
    SlideshowModule,
    NgImageSliderModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatDividerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatTreeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
