import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { TdTerminalComponent } from './';

describe('Component: Terminal', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdTerminalComponent,
        TestTerminalComponent,
        TestTerminalResetComponent,
        TestTerminalOptionsComponent,
      ],
      imports: [
      ],
    });
    TestBed.compileComponents();
  }));

  it('should initialize the markdown editor and set value and test ngModel', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TestTerminalComponent);
      let component: TestTerminalComponent = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editor1.value = '# Test this';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.editor1.value).toBe('# Test this');
          done();
        });
      });
    })();
  });

  it('should initialize the markdown editor with no toolbar options', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TestTerminalOptionsComponent);
      let component: TestTerminalOptionsComponent = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          let element: HTMLElement = fixture.nativeElement;
          expect(element.querySelectorAll('.editor-toolbar')).toBeTruthy();
          done();
        });
      });
    })();
  });

});

@Component({
  template: `
    <div>
      <td-terminal #editor1></td-terminal>
    </div>`,
})
class TestTerminalComponent {
  @ViewChild('editor1') editor1: TdTerminalComponent;
}

@Component({
  template: `
    <div>
      <td-terminal #editor1 [value]="Something"></td-terminal>
    </div>`,
})
class TestTerminalResetComponent {
  @ViewChild('editor1') editor1: TdTerminalComponent;
}

@Component({
  template: `
    <div>
      <td-terminal #editor1 [options]="opts"></td-terminal>
    </div>`,
})
class TestTerminalOptionsComponent {
  opts: any = {
    toolbar: false,
  };
  @ViewChild('editor1') editor1: TdTerminalComponent;
}
