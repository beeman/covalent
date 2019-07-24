import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../../app.animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'terminal-demo',
  styleUrls: [ './terminal.component.scss' ],
  templateUrl: './terminal.component.html',
  animations: [slideInDownAnimation],
})
export class TerminalDemoComponent {
  private data: string;
  private writeData: BehaviorSubject<string> = new BehaviorSubject<string>('Covalent \x1B[1;3;31mTerminal\x1B[0m $ ');

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  handleSend(data: string): void {
    this.data = data;
  }

  write(): void {
    this.writeData.next(Date.now().toString());
  }
}
