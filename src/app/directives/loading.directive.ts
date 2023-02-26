import {
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AddComponent } from '../add-component';
import { LoadingComponent } from '../components/loading.component';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective implements OnChanges {
  componentRef!: ComponentRef<any>;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) {}

  private _wc!: string;
  @Input()
  set appLoadingWc(value: string) {
    this._wc = value;
  }

  private _lc!: string;
  @Input()
  set appLoadingLc(value: string) {
    this._lc = value;
  }

  @Input() set appLoading(isLoading: boolean) {
    if (isLoading) {
      this.componentRef =
        this._viewContainerRef.createComponent<AddComponent>(LoadingComponent);
      this.componentRef.instance.data = {
        wrapperClass: this._wc?.split(' '),
        loaderClass: this._lc?.split(' '),
      };
    } else {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appLoadingWc'] || changes['appLoadingWc']) {
      this.componentRef.instance.data = {
        wrapperClass: this._wc?.split(' '),
        loaderClass: this._lc?.split(' '),
      };
    }
  }
}
