import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// @ts-ignore
import script from "./scripts/copypage.inline"

/**
 * "Copy page" control rendered beside the article title: copies the page's raw
 * markdown, with a caret menu for copy / download. Raw markdown is served from
 * `<slug>.md`, emitted by the RawMarkdown emitter.
 */
const CopyPage: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const slug = fileData.slug
  if (!slug) return null
  return (
    <div class={classNames(displayClass, "copy-page")} data-mdpath={`/${slug}.md`}>
      <button class="copy-page-main" type="button" aria-label="Copy page as Markdown">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <rect x="9" y="9" width="12" height="12" rx="2.5" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
        <span class="copy-page-label">Copy page</span>
      </button>
      <button class="copy-page-caret" type="button" aria-label="More copy options">
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div class="copy-page-menu">
        <button class="copy-page-copy" type="button">
          Copy as Markdown
        </button>
        <button class="copy-page-download" type="button">
          Download .md
        </button>
      </div>
    </div>
  )
}

CopyPage.afterDOMLoaded = script

export default (() => CopyPage) satisfies QuartzComponentConstructor
