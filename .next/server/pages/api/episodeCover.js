"use strict";
(() => {
var exports = {};
exports.id = 82;
exports.ids = [82];
exports.modules = {

/***/ 3294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ episodeCover)
});

;// CONCATENATED MODULE: external "playwright-aws-lambda"
const external_playwright_aws_lambda_namespaceObject = require("playwright-aws-lambda");
;// CONCATENATED MODULE: ./src/pages/api/episodeCover.ts

const coverPageHtml = (title, episode, authors)=>{
    return `<html><body style="inset:0; margin: 0; padding: 0"><div style="font-family: Space Grotesk,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji; display: flex; flex-direction: column; width: 350px; height: 350px; background: rgba(0, 0, 0, 0) linear-gradient(to right bottom, rgb(212, 212, 216), rgb(103, 232, 249)) repeat scroll 0% 0% / auto padding-box border-box;">
  <h1 style="font-weight: bold; text-align: center; margin: 10px 0 0 0;">
    Mediocre Minds
  </h1>
    <img height="200" width="200" src="https://mediocreminds.vercel.app/_next/static/media/MMLogoBlack.8a48ef6e.png" style="margin: 0 auto; position: relative; top: -10px" />
  <p style="margin: 0 auto">
    Episode #${episode}
  </p>
  <h1 style="text-align: center; font-size: 150%; margin: 5px auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 330px;">
    ${title}
  </h1>
  <p style="text-align: center; margin: 5px auto">by ${authors}</p>
</div>
</html></body>
  `;
};
/* harmony default export */ const episodeCover = (async (req, res)=>{
    const browser = await external_playwright_aws_lambda_namespaceObject.launchChromium();
    const page = await browser.newPage({
        viewport: {
            width: 350,
            height: 350
        }
    });
    const { title , episode , authors  } = JSON.parse(req.query.data);
    await page.setContent(coverPageHtml(title, episode, authors));
    const data = await page.screenshot({
        type: "png"
    });
    await browser.close();
    res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
    res.setHeader("Content-Type", "image/png");
    res.end(data);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3294));
module.exports = __webpack_exports__;

})();