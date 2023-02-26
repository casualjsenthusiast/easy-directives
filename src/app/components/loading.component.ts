import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { AddComponent } from '../add-component';

@Component({
  selector: 'app-loading',
  template: `
    <div #wrapper>
      <div #loader></div>
    </div>
  `,
  styles: [
    `
      .cssload-container {
        width: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        z-index: 9999;
      }

      .cssload-speeding-wheel {
        content: '';
        display: block;
        width: 63px;
        height: 63px;
        margin: 0 auto;
        border: 4px solid rgb(0, 0, 0);
        border-radius: 50%;
        border-left-color: transparent;
        border-right-color: transparent;
        animation: cssload-spin 500ms infinite linear;
        -o-animation: cssload-spin 500ms infinite linear;
        -ms-animation: cssload-spin 500ms infinite linear;
        -webkit-animation: cssload-spin 500ms infinite linear;
        -moz-animation: cssload-spin 500ms infinite linear;
      }

      @keyframes cssload-spin {
        100% {
          transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @-o-keyframes cssload-spin {
        100% {
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @-ms-keyframes cssload-spin {
        100% {
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @-webkit-keyframes cssload-spin {
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @-moz-keyframes cssload-spin {
        100% {
          -moz-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class LoadingComponent implements OnInit, AfterViewInit, AddComponent {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('loader') loader!: ElementRef;

  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.data.wrapperClass && this.data.loaderClass) {
      this.wrapper.nativeElement.classList.add(...this.data.wrapperClass);
      this.loader.nativeElement.classList.add(...this.data.loaderClass);
    } else {
      this.wrapper.nativeElement.classList.add('cssload-container');
      this.loader.nativeElement.classList.add('cssload-speeding-wheel');
    }
  }
}
