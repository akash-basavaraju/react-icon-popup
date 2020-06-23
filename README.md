# `react-icon-popup`

A Tiny React Icon Popup. Its compatable with typescript.

## How to Use

First install the package with npm

`$ npm i react-icon-popup --save`

package usage below

```js
import IconPopup from "react-icon-popup";
import App from "./App.js";

function main() {
  return (
    <>
      <IconPopup
        popupTriggerer={<span>Icon to be clicked</span>}
        popupContent={
          <div
            onClick={() => {
              alert("popup clicked");
            }}
          >
            Content Inside the Popup
          </div>
        }
        onPopupTrigger={(...args) => {
          console.log(args);
        }}
        popupWidthInPx={100}
      />
    </>
  );
}
```

#### Raising Issues and PRs are heartly welcomed.

##### with :heart: by [Akash Basavaraju](https://github.com/akash-basavaraju)

```

```
