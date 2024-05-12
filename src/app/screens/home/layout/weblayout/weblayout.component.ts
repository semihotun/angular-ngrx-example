import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-weblayout',
  templateUrl: './weblayout.component.html',
  styleUrls: ['./weblayout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WeblayoutComponent implements OnInit {
  constructor(private translateService: TranslateService) {
    const userLang = navigator.language || 'tr';
    const languageCode = userLang.split('-')[0];
    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);
  }
  switchLanguage(code: string) {
    this.translateService.use(code);
  }
  ngOnInit() {}
}
