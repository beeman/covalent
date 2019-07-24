## TdTerminalComponent: td-terminal

`<td-terminal>` element generates a simplemde markdown editor.

## API Summary

#### Inputs

+ value?: string
  + value of text in editor
+ options?: object
  + Options Object of valid Configurations listed here: <a href="https://github.com/sparksuite/simplemde-markdown-editor#configuration">https://github.com/sparksuite/simplemde-markdown-editor#configuration</a>


#### Properties

+ isPreviewActive?: function()
  + is the Preview Active. Returns boolean
+ isSideBySideActive?: function()
  + is the Side By Side Active. Returns boolean
+ isFullscreenActive?: function()
  + is Full Screen Active. Returns boolean
+ clearAutosavedValue?: function()
  + clears Auto Saved Value. Returns void
+ toTextArea?: function()
  + reverts to the Initial textarea. Returns void
+ simpleMDE?: function()
  + getter function for the underlying simpleMDE Object. Returns SimpleMDE

## Installation

This component can be installed as npm package.

```bash
npm install @covalent/terminal
```

## Setup

Import the **CovalentTerminalModule** in your NgModule:

```typescript
import { CovalentTerminalModule } from '@covalent/terminal';
@NgModule({
  imports: [
    CovalentTerminalModule,
    ...
  ],
  ...
})
export class MyModule {}
```

### Usage

```html
<td-terminal [value]="Some Text" [options]="options"></td-terminal>
```

```typescript
class MyComponent {
  options: any = {
    lineWrapping: true,
    toolbar: false,
    ...
  };
}
```
