import fs from "fs"
import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"
import { FullSlug } from "../../util/path"

/**
 * Emits each published page's raw markdown source at `<slug>.md`, powering the
 * "Copy page / Download .md" control. Receives only post-filter content, so
 * pages without `publish: true` never emit.
 */
export const RawMarkdown: QuartzEmitterPlugin = () => {
  return {
    name: "RawMarkdown",
    async *emit(ctx, content) {
      for (const [_tree, file] of content) {
        const fp = file.data.filePath
        const slug = file.data.slug
        if (!fp || !slug) continue
        const src = await fs.promises.readFile(fp, "utf-8")
        yield write({
          ctx,
          slug: slug as FullSlug,
          ext: ".md",
          content: src,
        })
      }
    },
  }
}
