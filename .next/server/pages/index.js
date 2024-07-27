"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: ./src/components/AudioProvider.jsx
var AudioProvider = __webpack_require__(5331);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(956);
// EXTERNAL MODULE: ./src/components/FormattedDate.jsx
var FormattedDate = __webpack_require__(5672);
// EXTERNAL MODULE: ./src/site-config.ts
var site_config = __webpack_require__(2978);
// EXTERNAL MODULE: ./src/components/player/Favicons.jsx
var Favicons = __webpack_require__(6382);
;// CONCATENATED MODULE: ./src/pages/index.jsx












function PlayPauseIcon({ playing , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 10 10",
        fill: "none",
        ...props,
        children: playing ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
        }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"
        })
    });
}
function EpisodeEntry({ episode: { metadata , slug , hasNotes  }  }) {
    if (Object.keys(metadata).length === 0) {
        return null;
    }
    const date = new Date(metadata.pubDate);
    const audioPlayerData = (0,external_react_.useMemo)(()=>({
            title: metadata.title,
            audio: {
                src: `https://media.githubusercontent.com/media/mediocreminds/podcast/main/episodes/${slug}/${metadata.audioUrl}`,
                type: metadata.audioType
            },
            link: `/${slug}`
        }), [
        metadata,
        slug
    ]);
    const player = (0,AudioProvider/* useAudioPlayer */.x)(audioPlayerData);
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        "aria-labelledby": `episode-${slug}-title`,
        className: "py-10 sm:py-12",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-start",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        id: `episode-${slug}-title`,
                        className: "mt-2 text-lg font-bold text-slate-900",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/${slug}`,
                            children: metadata.title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FormattedDate/* FormattedDate */.J, {
                        date: date,
                        className: "order-first font-mono text-sm leading-7 text-slate-500"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-1 text-base leading-7 text-slate-700",
                        children: metadata.description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-4 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                type: "button",
                                onClick: ()=>player.toggle(),
                                className: "flex items-center text-sm font-bold leading-6 text-cyan-500 hover:text-cyan-700 active:text-cyan-900",
                                "aria-label": `${player.playing ? "Pause" : "Play"} episode ${metadata.title}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(PlayPauseIcon, {
                                        playing: player.playing,
                                        className: "h-2.5 w-2.5 fill-current"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ml-3",
                                        "aria-hidden": "true",
                                        children: "Listen"
                                    })
                                ]
                            }),
                            hasNotes && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "aria-hidden": "true",
                                        className: "text-sm font-bold text-slate-400",
                                        children: "/"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/${slug}`,
                                        className: "flex items-center text-sm font-bold leading-6 text-cyan-500 hover:text-cyan-700 active:text-cyan-900",
                                        "aria-label": `Show notes for episode ${metadata.title}`,
                                        children: "Show notes"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function EpisodeSearchBar({ query , setQuery , showSearchBar , setShowSearchBar ,  }) {
    return showSearchBar ? /*#__PURE__*/ jsx_runtime_.jsx("input", {
        id: "search-bar",
        className: "focus:shadow-outline-blue ml-auto block w-auto appearance-none rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-slate-900 placeholder-slate-500 shadow-sm transition duration-150 ease-in-out focus:border-blue-300 focus:placeholder-slate-400 focus:outline-none sm:text-sm sm:leading-5",
        placeholder: "Search for Episodes",
        type: "text",
        value: query,
        onChange: (e)=>{
            setQuery(e.target.value);
            if (e.target.value.length < 3) {
                history.pushState(null, null, "/");
            }
        },
        ref: (input)=>input && input.focus()
    }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
        id: "search-button",
        type: "button",
        onClick: (e)=>{
            e.stopPropagation();
            setShowSearchBar(true);
        },
        className: "focus:shadow-outline-blue ml-auto block w-auto appearance-none rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-slate-900 placeholder-slate-500 shadow-sm transition duration-150 ease-in-out focus:border-blue-300 focus:placeholder-slate-400 focus:outline-none sm:text-sm sm:leading-5",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            "aria-hidden": "true",
            className: "h-5 w-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            })
        })
    });
}
function filterEpisodes(episodes, query) {
    if (!query || query.length < 3) {
        return episodes;
    }
    const result = [];
    const tokens = query.trim().split(/\s/);
    for (const episode of episodes){
        if (tokens.some((token)=>new RegExp(token, "i").test(episode.metadata.title) || new RegExp(token, "i").test(episode.metadata.subtitle) || new RegExp(token, "i").test(episode.metadata.content) || new RegExp(token, "i").test(episode.metadata.description))) {
            result.push(episode);
            continue;
        }
        if (tokens.some((token)=>episode.metadata.keywords && episode.metadata.keywords.split(/,\s?/).some((keyword)=>new RegExp(token, "i").test(keyword)))) {
            result.push(episode);
            continue;
        }
        if (tokens.some((token)=>episode.metadata.author && episode.metadata.author.split(/,\s?/).some((author)=>new RegExp(token, "i").test(author)))) {
            result.push(episode);
            continue;
        }
    }
    history.replaceState(null, null, `?q=${encodeURIComponent(query)}`);
    return result.sort(({ metadata: { pubDate: a  }  }, { metadata: { pubDate: b  }  })=>new Date(b) - new Date(a));
}
function Home({ episodes  }) {
    const { 0: query , 1: setQuery  } = (0,external_react_.useState)("");
    const { 0: showSearchBar , 1: setShowSearchBar  } = (0,external_react_.useState)(false);
    const { query: { q =""  } ,  } = (0,router_namespaceObject.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (q) {
            setQuery(q);
            setShowSearchBar(true);
        }
    }, [
        q
    ]);
    const filteredEpisodes = (0,external_react_.useMemo)(()=>filterEpisodes(episodes, query), [
        episodes,
        query
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: site_config/* default.title */.Z.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: site_config/* default.description */.Z.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Favicons/* default */.Z, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pt-16 pb-12 sm:pb-4 lg:pt-12",
                onClick: (e)=>{
                    if (e.target.id !== "search-bar" && e.target.id !== "search-button") {
                        setShowSearchBar(false);
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-column flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-2xl font-bold leading-7 text-slate-900",
                                    children: "Episodes"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(EpisodeSearchBar, {
                                    query: query,
                                    setQuery: setQuery,
                                    showSearchBar: showSearchBar,
                                    setShowSearchBar: setShowSearchBar
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100",
                        children: filteredEpisodes.map((episode)=>/*#__PURE__*/ jsx_runtime_.jsx(EpisodeEntry, {
                                episode: episode
                            }, episode.slug))
                    })
                ]
            })
        ]
    });
};
async function getStaticProps() {
    const episodeSlugs = external_fs_default().readdirSync(`${process.cwd()}/episodes`);
    const episodes = [];
    for (const slug of episodeSlugs){
        if (slug === "base.md") {
            continue;
        }
        const markdown = external_fs_default().readFileSync(`${process.cwd()}/episodes/${slug}/index.md`, "utf8");
        const { data: metadata , content  } = external_gray_matter_default()(markdown);
        episodes.push({
            metadata,
            slug,
            hasNotes: !!content
        });
    }
    return {
        props: {
            episodes: episodes.sort(({ metadata: { pubDate: a  }  }, { metadata: { pubDate: b  }  })=>new Date(b) - new Date(a))
        },
        revalidate: 10
    };
}


/***/ }),

/***/ 2978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    title: "Fountain of Life Podcast",
    description: "Tulungan nyo ko mag isip ng description para dito",
    listen: {
        spotify: "https://open.spotify.com/show/6jKKAcpzGP02o4xBmXofjP",
        apple: "https://podcasts.apple.com/us/podcast/mediocre-minds-podcast/id1637152861",
        google: "https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpb2NyZW1pbmRzLmdpdGh1Yi5pby9wb2RjYXN0L3Jzcy9mZWVkLnhtbA",
        rss: "https://mediominds.libsyn.com/rss"
    }
});


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,331,445], () => (__webpack_exec__(8411)));
module.exports = __webpack_exports__;

})();