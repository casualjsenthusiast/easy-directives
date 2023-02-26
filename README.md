<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">easy-directives</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/casualjsenthusiast/easy-directives/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/casualjsenthusiast/easy-directives/pulls)

</div>

---

<p align="center"> Useful directives for Angular with no extra dependencies
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Contributing](#contributing)
- [Directives](#directives)
  - [structural](#structural)
    - [loading](#loadingdirective)

## 🧐 About <a name = "about"></a>

Delegate handling of states which are not important (like a loading screen, or a 404 screen) to the directives and focus on what's more important (like building an aesthetically pleasing website).

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
git clone https://github.com/casualjsenthusiast/easy-directives.git
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Install the dependencies

```
npm i
```

Run the server locally

```
ng serve --open
```

Add directive to your html component and pass input to it. The following piece of code will display a loading component until the condition is true. Here `wc` and `lc` are the inputs to the `LoadingDirective`.
```
<div *appLoading="true; wc: 'class1'; lc: 'class2'">
  This paragraph is not displayed because the condition is true.
</div>
```

## Directives

### Structural
Directives that modifies the structure of dom elements

#### LoadingDirective

**Usage:**
```html
<div *appLoading="true">
  This paragraph is not displayed because the condition is true.
</div>
```

To modify styles of the loading component, pass string of classes as an input to the directive
```typescript
const wrapperDivClasses = 'class1 class2';
const loaderDivClasses = 'class3 class4';
```
and then in the html, pass input in the following manner
```html
<div *appLoading="true; wc: wrapperDivClasses; lc: loaderDivClasses">
  (A) This paragraph is displayed because the condition is false.
</div>
```


## 🔧 Contributing

* Before adding any new feature or a fix make sure to open an issue first!

Make sure you have `angular-cli` & `karma` installed globally.

```bash
$ npm install -g angular-cli karma
```

Clone the project, and install dependencies.

```bash
$ git clone https://github.com/casualjsenthusiast/easy-directives.git
$ npm install
```

Create a new branch

```bash
$ git checkout -b feat/someFeature
```

Add tests & make sure everything is running properly
```bash
$ npm test
```

Commit & push, and make a pull request!
