function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");const l={formEl:document.querySelector(".form"),delayInputEl:document.querySelector('input[name="delay"]'),stepInputEl:document.querySelector('input[name="step"]'),amountInputEl:document.querySelector('input[name="amount"]')};function i(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.formEl.addEventListener("submit",(function(t){t.preventDefault();let n=Number(l.delayInputEl.value),o=Number(l.stepInputEl.value),r=Number(l.amountInputEl.value);for(let t=0;t<r;t+=1)i(t+1,t*n+o).then((({position:t,delay:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}));t.target.reset()}));
//# sourceMappingURL=03-promises.9de8537b.js.map
