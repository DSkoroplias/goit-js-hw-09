!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),i={formEl:document.querySelector(".form"),delayInputEl:document.querySelector('input[name="delay"]'),stepInputEl:document.querySelector('input[name="step"]'),amountInputEl:document.querySelector('input[name="amount"]')};function l(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}i.formEl.addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(i.delayInputEl.value),o=Number(i.stepInputEl.value),r=Number(i.amountInputEl.value),a=0;a<r;a+=1)l(a+1,a*t+o).then((function(n){var t=n.position,o=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}));n.target.reset()}))}();
//# sourceMappingURL=03-promises.37e06248.js.map