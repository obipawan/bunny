<p align="center">
  <img src="https://glcdn.githack.com/obipawan/bunny/raw/assets/bunny.png" height="100" width="100" />

  <h2 align="center">Bunny</h2>
  <p align="center">A simplistic lisp interpreter implemented in javascript heavily inspired by <a href="https://github.com/kanaka/miniMAL">miniMAL</a> and <a href="http://www.buildyourownlisp.com">buildyourownlisp</a></p>
</p>

Very much a wip

#### examples
- logical operations
```sh
(+ 10 20) //30
(+ 10 (+ 10 20)) //40
(- 20 10) //10
```
- environment variables
```sh
(def a 6) // 6
(+ a 1) // 7
(let (b 10) b) // 10
```
- closures
```sh
(fn (a) a) // function
( (fn (a) (+ a 10)) 10) // 20
( (def adder (fn (a b) (+ a b))) 5 10) //15
```

More to come...

#### Try it out
```sh
npm i && node index.js
```
#### Credits:
- miniMAL: https://github.com/kanaka/miniMAL
- buildyourownlisp: http://www.buildyourownlisp.com

#### Attributions:
`bunny.png` is created by [Catherine Please](https://thenounproject.com/CatherinePlease/) from [The Noun Project](https://thenounproject.com/)

##### license
WTFPL
