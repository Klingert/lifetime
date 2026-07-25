# Lifetime

A simple web app that calculates the remaining days until a target date.

## How It Works

1. Enter a start date
2. Enter a number of years
3. The target is automatically calculated (start date + years)
4. The remaining days until the target are displayed

## Configuration

Default values can be customized in `config.js`:

```js
window.appConfig = {
    defaultDate: "2000-01-01",
    defaultYears: 80
};
```

## Usage

Open `index.html` in a browser. No server required.

Inputs and state are automatically saved in the browser (localStorage).
