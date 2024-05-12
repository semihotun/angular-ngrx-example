import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
})
export class HeaderComponent implements AfterViewInit {
  isShowMobilBars!: boolean;
  subCategoryLists!: NodeListOf<HTMLElement>;

  constructor(private elRef: ElementRef<HTMLElement>) {}
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 1000) {
      this.isShowMobilBars = false;
      this.subCategoryLists.forEach((item: HTMLElement) => {
        item.style.display = 'none';
      });
    }
  }
  ngAfterViewInit(): void {
    this.subCategoryLists =
      this.elRef.nativeElement.querySelectorAll<HTMLElement>(
        '.sub-category-list'
      );
  }
  showMobileBars() {
    this.isShowMobilBars = !this.isShowMobilBars;
  }
  showSubNodeCategory(e: EventTarget) {
    const target = (e as HTMLElement).nextElementSibling as HTMLElement;
    let isShowSubNodeCategory =
      target.style.display == 'none' || target.style.display == ''
        ? false
        : true;
    if (isShowSubNodeCategory) {
      target.style.display = 'none';
      target.classList.remove('sub-category-open');
    } else if (!isShowSubNodeCategory) {
      target.style.display = 'flex';
      target.classList.add('sub-category-open');
    }
  }
  changeHeaderRightClasses(): string {
    if (window.innerWidth < 1000) {
      if (this.isShowMobilBars == true) {
        return 'active';
      } else if (this.isShowMobilBars == false) {
        return 'deactive';
      } else {
        return 'display-none';
      }
    }
    return '';
  }
}
