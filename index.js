function receivesAFunction(amACallback) {
  amACallback();
}
function amACallback() {
  console.log("Anything");
}
receivesAFunction(amACallback);

function returnsANamedFunction() {
  return function namedFunction() {};
}
function returnsAnAnonymousFunction() {
  return function () {};
}
