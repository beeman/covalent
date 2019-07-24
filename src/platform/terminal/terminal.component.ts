import { Component, Input, AfterViewInit, ElementRef, ViewChild, Output, EventEmitter, AfterViewChecked } from '@angular/core'
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';

import { Terminal } from 'xterm';
import * as fit from 'xterm/dist/addons/fit/fit';
import * as webLinks from 'xterm/dist/addons/webLinks/webLinks';

Terminal.applyAddon(fit);
Terminal.applyAddon(webLinks);

interface IDimension {
  h: number;
  w: number;
}

@Component({
  selector: 'td-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: [ './terminal.component.scss' ],
})
export class TdTerminalComponent implements AfterViewInit, AfterViewChecked {
  private xterm: Terminal | any;
  private dimensions$: BehaviorSubject<IDimension> = new BehaviorSubject<IDimension>({ h: 0, w: 0 });

  @ViewChild('terminal') container: ElementRef;

  @Output() send: EventEmitter<string> = new EventEmitter();
  @Input() write: BehaviorSubject<string> = new BehaviorSubject('');

  ngAfterViewInit(): void {
    this.xterm = new Terminal({ cursorBlink: true, rows: 800, cols: 250 });

    this.xterm.open(this.container.nativeElement);
    // this.xterm.reset();
    // this.xterm.resize(100, 50);
    this.xterm.focus();
    // this.xterm.add
    // this.xterm.loadAddon(WebLinksAddon);

    this.dimensions$
      .pipe(
        distinctUntilChanged((a: IDimension, b: IDimension) => a.h === b.h && a.w === b.w),
        throttleTime(100),
      )
      .subscribe(() => this.fit());

    // this.fit();
    //
    // this.xterm.on('data', (data: string) => {
    //   this.send.emit(data);
    // });
    //
    // this.write.asObservable().subscribe((data: string) => {
    //   console.log('received data to write', data);
    //   this.xterm.write(data);
    // });
  }

  fit(): void {
    console.log('fit term');
    // setTimeout(() => this.xterm.fit(), 1);
  }

  ngAfterViewChecked(): void {
    this.setDimensions();
  }

  setDimensions(): void {
    const { offsetHeight, offsetWidth } = this.container.nativeElement;

    this.dimensions$.next({ h: offsetHeight, w: offsetWidth });
    // this.fit();
  }

}
