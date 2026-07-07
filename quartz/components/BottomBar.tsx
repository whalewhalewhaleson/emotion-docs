import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { concatenateResources } from "../util/resources"
import SearchConstructor from "./Search"
import { D3Config } from "./Graph"
// @ts-ignore
import graphScript from "./scripts/graph.inline"
// @ts-ignore
import darkmodeScript from "./scripts/darkmode.inline"
// @ts-ignore
import readerModeScript from "./scripts/readermode.inline"
import darkmodeStyle from "./styles/darkmode.scss"
import readerModeStyle from "./styles/readermode.scss"

/**
 * The site's single control surface: a fixed pill at the bottom of the
 * viewport holding search, the page-local knowledge graph, reader mode, and
 * the theme toggle. Search results and the graph open UPWARD from the bar.
 *
 * Reuses the stock Quartz inline scripts — search.inline via the composed
 * Search component, and graph/darkmode/readermode bind by class name
 * (.global-graph-icon / .darkmode / .readermode), so the stock behavior
 * (⌘K, ⌘G, Esc, theme persistence) keeps working.
 */

// Graph shown relative to the CURRENT page (depth 2 neighborhood); the
// current page's node renders in the accent color (--secondary).
const graphCfg: D3Config = {
  drag: true,
  zoom: true,
  depth: 2,
  scale: 0.9,
  repelForce: 0.5,
  centerForce: 0.3,
  linkDistance: 30,
  fontSize: 0.6,
  opacityScale: 1,
  showTags: false,
  removeTags: [],
  focusOnHover: true,
  enableRadial: true,
}

export default (() => {
  const Search = SearchConstructor({ enablePreview: true })

  const BottomBar: QuartzComponent = (props: QuartzComponentProps) => {
    const { displayClass } = props
    return (
      <div class={classNames(displayClass, "bottom-bar")}>
        <div class="bottom-bar-inner">
          <Search {...props} />
          <span class="bb-divider"></span>
          <button class="global-graph-icon bb-btn" type="button" aria-label="Knowledge graph">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            >
              <circle cx="12" cy="5" r="2.2" />
              <circle cx="5" cy="18" r="2.2" />
              <circle cx="19" cy="18" r="2.2" />
              <path d="M10.9 6.9L6.3 16m6.8-9.1l4.6 9.1M7.2 18h9.6" />
            </svg>
          </button>
          <button class="readermode bb-btn" type="button" aria-label="Reader view">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 6.5C10.5 5 8.5 4.5 6 4.5c-1.2 0-2.3.15-3 .4v13.6c.7-.25 1.8-.4 3-.4 2.5 0 4.5.5 6 2 1.5-1.5 3.5-2 6-2 1.2 0 2.3.15 3 .4V4.9c-.7-.25-1.8-.4-3-.4-2.5 0-4.5.5-6 2z" />
              <path d="M12 6.5V20" />
            </svg>
          </button>
          <button class="darkmode bb-btn" type="button" aria-label="Toggle light and dark mode">
            <svg
              class="dayIcon"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            >
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
            </svg>
            <svg
              class="nightIcon"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>
        </div>
        <div class="global-graph-outer">
          <div class="global-graph-container" data-cfg={JSON.stringify(graphCfg)}></div>
        </div>
      </div>
    )
  }

  BottomBar.beforeDOMLoaded = concatenateResources(
    Search.beforeDOMLoaded,
    darkmodeScript,
    readerModeScript,
  )
  BottomBar.afterDOMLoaded = concatenateResources(Search.afterDOMLoaded, graphScript)
  BottomBar.css = concatenateResources(Search.css, darkmodeStyle, readerModeStyle)

  return BottomBar
}) satisfies QuartzComponentConstructor
