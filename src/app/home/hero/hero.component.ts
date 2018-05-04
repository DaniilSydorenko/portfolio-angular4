import { Component, AfterViewInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { TranslateService } from '@ngx-translate/core';
import { IpInfoService } from '../../shared/services/ip-info.service';
import { WOW } from 'wowjs/dist/wow';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['./hero.component.scss'],
})

export class AppHeroComponent implements AfterViewInit {
  param: any = { value: 'world' };
  greeting: string;

  constructor(private _scrollToService: ScrollToService, private _ipInfoService: IpInfoService, translate: TranslateService) {
    this.greeting = 'Hi, I am Daniil';
    translate.setDefaultLang('us');

    // TODO List of country_codes and check
    _ipInfoService.getVisitorData()
      .subscribe(data => {
        translate.use(data.country_code.toLowerCase());
      });
  }

  ngAfterViewInit() {
    new WOW().init();
  }

  public triggerScrollTo(scrollTo) {
    const config: ScrollToConfigOptions = {
      target: scrollTo
    };

    this._scrollToService.scrollTo(config);
  }
}
