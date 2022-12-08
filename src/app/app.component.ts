import { Component, HostBinding } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group,

} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  @HostBinding('@.disabled')
  public animationsDisabled = false;
  constructor(private contexts: ChildrenOutletContexts) {}
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

  title = 'my-app';
}
