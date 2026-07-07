import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  text: string
  link: string
}

/** Minimal footer: site name + one link. No generator attribution. */
export default ((opts: Options) => {
  const SiteFooter: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
      <footer class={`site-footer ${displayClass ?? ""}`}>
        <span>{cfg.pageTitle}</span>
        <a href={opts.link}>{opts.text}</a>
      </footer>
    )
  }
  return SiteFooter
}) satisfies QuartzComponentConstructor<Options>
