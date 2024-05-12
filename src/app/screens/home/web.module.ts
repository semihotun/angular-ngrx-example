import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header';
import { FooterComponent } from './layout/footer/footer.component';
import { WeblayoutComponent } from './layout/weblayout/weblayout.component';
import { WebLayoutRoutingModule } from './web-layout-routing.module';
import { IndexComponent } from './index/index.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogService } from 'src/app/services/blog.service';
import { LikesComponent } from './likes/likes.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule } from '@angular/forms';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WeblayoutComponent,
    IndexComponent,
    AboutComponent,
    LikesComponent,
  ],
  imports: [
    CommonModule,
    WebLayoutRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BlogService,
  ],
})
export class WebModule {}
