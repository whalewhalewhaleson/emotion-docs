import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  // fixed control surface: search + knowledge graph + reader view + theme
  afterBody: [Component.BottomBar()],
  footer: Component.SiteFooter({
    text: "Built by the team behind eMotion",
    link: "/about",
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.Flex({
      components: [
        { Component: Component.ArticleTitle(), grow: true, align: "start" },
        { Component: Component.CopyPage(), align: "start" },
      ],
    }),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [Component.PageTitle(), Component.Explorer({ folderDefaultState: "open" })],
  right: [Component.DesktopOnly(Component.TableOfContents())],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [Component.PageTitle(), Component.Explorer({ folderDefaultState: "open" })],
  right: [],
}
