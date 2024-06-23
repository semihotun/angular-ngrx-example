import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Gesture, GestureController, GestureDetail } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
})
export class HeaderComponent implements AfterViewInit, OnInit {
  isShowMobilBars: BehaviorSubject<boolean | null> = new BehaviorSubject<
    boolean | null
  >(null);
  subCategoryLists!: NodeListOf<HTMLElement>;
  headerMobilWidth: number = 1000;
  headerRightClassList: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  isNavigationBackUrl: string = '';
  isMobil: boolean = false;
  constructor(
    private elRef: ElementRef<HTMLElement>,
    private gestureCtrl: GestureController,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.initializeGesture();
    this.changeHeaderRightClasses();
    if (window.innerWidth < this.headerMobilWidth) {
      this.isMobil = true;
    }
  }
  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    const clickedInside =
      this.headerRight.nativeElement.parentNode?.parentNode?.contains(
        event.target as Node
      );
    if (clickedInside == false) {
      this.removeSubCategoryOpenClass();
      this.isShowMobilBars.next(false);
    }
  }
  removeSubCategoryOpenClass() {
    const elements =
      this.elRef.nativeElement.querySelectorAll('.sub-category-open');
    elements.forEach((element: Element) => {
      (element as HTMLElement).classList.replace(
        'sub-category-open',
        'sub-category-close'
      );
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > this.headerMobilWidth) {
      this.isShowMobilBars.next(false);
    }
  }
  @ViewChild('headerRight', { static: true })
  headerRight!: ElementRef<HTMLElement>;

  initializeGesture() {
    const gesture: Gesture = this.gestureCtrl.create({
      el: this.headerRight.nativeElement,
      gestureName: 'swipe-right',
      onMove: (ev) => this.onMove(ev),
      onEnd: (ev) => this.onEnd(ev),
    });
    gesture.enable(true);
  }
  onMove(ev: GestureDetail) {
    if (ev.deltaX > 0) {
      ///Burada ileride move oldukça header-right'ın left değeri arttırılabilir
    }
  }

  onEnd(ev: GestureDetail) {
    if (ev.deltaX > 0) {
      this.headerRightClassList.next('deactive');
      this.cdr.detectChanges();
    }
  }
  ngAfterViewInit(): void {
    this.subCategoryLists =
      this.elRef.nativeElement.querySelectorAll<HTMLElement>(
        '.sub-category-list'
      );
  }
  showMobileBars() {
    this.isShowMobilBars.next(!this.isShowMobilBars.value);
  }
  showSubNodeCategory(e: EventTarget) {
    const target = (e as HTMLElement).nextElementSibling as HTMLElement;
    if (!target.classList.contains('sub-category-close')) {
      target.classList.replace('sub-category-open', 'sub-category-close');
    } else if (target.classList.contains('sub-category-close')) {
      target.classList.replace('sub-category-close', 'sub-category-open');
    }
  }
  changeHeaderRightClasses() {
    if (window.innerWidth < this.headerMobilWidth) {
      this.isShowMobilBars.subscribe((isShowMobilBars) => {
        if (isShowMobilBars == true) {
          this.headerRightClassList.next('active');
          return;
        } else if (isShowMobilBars == false) {
          this.headerRightClassList.next('deactive');
          return;
        }
        this.headerRightClassList.next('display-none');
      });
    }
  }
}
