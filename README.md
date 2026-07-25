# Lifetime

Eine einfache Web-Anwendung, die die verbleibenden Tage bis zu einem Ziel berechnet.

## Funktionsweise

1. Ein Startdatum eingeben
2. Eine Anzahl an Jahren angeben
3. Das Ziel wird automatisch berechnet (Startdatum + Jahre)
4. Die verbleibenden Tage bis zum Ziel werden angezeigt

## Konfiguration

Standardwerte können in `config.js` angepasst werden:

```js
window.appConfig = {
    defaultDate: "1979-01-23",
    defaultYears: 94
};
```

## Nutzung

`index.html` im Browser öffnen. Kein Server erforderlich.

Eingaben und Zustand werden automatisch im Browser (localStorage) gespeichert.
