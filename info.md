## Noctis

Dark Blue Theme with Blue accent Colors for [Home Assistant](https://www.home-assistant.io) 

[![](https://img.shields.io/badge/My-Configuration-blue?style=for-the-badge)](https://github.com/aFFekopp/homeassistant)

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=flat-square)](https://github.com/custom-components/hacs) ![STARS](https://img.shields.io/github/stars/aFFekopp/noctis?color=yellow&style=flat-square) ![ISSUES](https://img.shields.io/github/issues-raw/aFFekopp/noctis?style=flat-square) ![LASTCOMMIT](https://img.shields.io/github/last-commit/aFFekopp/noctis?style=flat-square)

## Screenshot
![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/1.jpg)

## Installation

#### Manual Installation
1. copy the `themes` folder into your home-assistant folder
2. add this to your `configuration.yaml`

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

3. restart home-assistant
4. select the theme in your user's profile (bottom left)

**Optional**: I recommend installing [Custom Header](https://github.com/maykar/custom-header)

#### HACS

1. Go to the Community Store.
2. Search for `Noctis`.
3. Navigate to `Noctis`.
4. Press Install.

#### Fonts

If you want to use the custom fonts, you need to add this to your `ui-lovelace.yaml` under `resources`

```yaml
- url: 'https://fonts.googleapis.com/css?family=Raleway'
  type: css
```

#### Blur

If you want the blur effect on your popup cards add this to your `ui-lovelace.yaml` under `resources`

```yaml
- url: /local/popup-background.js
  type: js
```
thanks to [@matt8707](https://github.com/matt8707) for posting this

and put `popup-background.js` into your `www` folder

## My other Themes
- [Dark Teal](https://github.com/aFFekopp/dark_teal)

## Aditional Screenshots

#### PC

![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/1-1.jpg) | ![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/2.jpg)
:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/3.jpg) | ![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/4.jpg)
![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/5.jpg) | ![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/6.jpg)

#### Android

![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/android/1.jpg) | ![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/android/2.jpg) | ![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/android/3.jpg)
:-------------------------:|:-------------------------:|:-------------------------: