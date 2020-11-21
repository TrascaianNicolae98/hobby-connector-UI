import {Component, Inject, Injectable, OnDestroy} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hobby-connector-UI';
}



@Injectable({providedIn: 'root'})
export class InAppRootOverlayContainer extends OverlayContainer implements OnDestroy {
  constructor(@Inject(DOCUMENT) _document: any) {
    super(_document);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  getRootElement(): Element {
    return this._document.querySelector('app-root');
  }

  protected _createContainer(): void {
    super._createContainer();
    this._appendToRootComponent();
  }

  private _appendToRootComponent(): void {
    if (!this._containerElement) {
      return;
    }

    const rootElement = this.getRootElement();
    const parent = rootElement || this._document.body;
    parent.appendChild(this._containerElement);
  }
}
