# Reload on Breakpoint
A simple script that reloads when your site is passing a defined breakpoint.

## Installation
Install via NPM:

```bash
npm install reload-on-breakpoint

```

## Usage

#### javascript

```javascript
import ReloadOnBreakpoint from "reload-on-breakpoint";

const bg = new ReloadOnBreakpoint([768, 992, 1200, ...]);

bg.mount();

```

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).