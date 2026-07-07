async function fetchMarkdown(mdPath: string): Promise<string> {
  const res = await fetch(mdPath)
  if (!res.ok) throw new Error(`Could not fetch ${mdPath}`)
  return await res.text()
}

function flashLabel(root: HTMLElement, text: string) {
  const label = root.querySelector(".copy-page-label") as HTMLElement | null
  if (!label) return
  const original = label.dataset.original ?? label.textContent ?? ""
  label.dataset.original = original
  label.textContent = text
  setTimeout(() => {
    label.textContent = original
  }, 1800)
}

document.addEventListener("nav", () => {
  for (const root of document.getElementsByClassName("copy-page")) {
    const el = root as HTMLElement
    const mdPath = el.dataset.mdpath
    if (!mdPath) continue

    const menu = el.querySelector(".copy-page-menu") as HTMLElement | null
    const caret = el.querySelector(".copy-page-caret") as HTMLButtonElement | null
    const main = el.querySelector(".copy-page-main") as HTMLButtonElement | null
    const download = el.querySelector(".copy-page-download") as HTMLButtonElement | null
    const copyItem = el.querySelector(".copy-page-copy") as HTMLButtonElement | null

    const copyMarkdown = async () => {
      try {
        const md = await fetchMarkdown(mdPath)
        await navigator.clipboard.writeText(md)
        flashLabel(el, "Copied ✓")
      } catch {
        flashLabel(el, "Copy failed")
      }
      menu?.classList.remove("open")
    }

    const downloadMarkdown = async () => {
      try {
        const md = await fetchMarkdown(mdPath)
        const blob = new Blob([md], { type: "text/markdown" })
        const a = document.createElement("a")
        a.href = URL.createObjectURL(blob)
        a.download = mdPath.split("/").pop() ?? "page.md"
        a.click()
        URL.revokeObjectURL(a.href)
      } catch {
        flashLabel(el, "Download failed")
      }
      menu?.classList.remove("open")
    }

    const toggleMenu = (e: Event) => {
      e.stopPropagation()
      menu?.classList.toggle("open")
    }

    const closeMenu = (e: Event) => {
      if (!el.contains(e.target as Node)) menu?.classList.remove("open")
    }

    main?.addEventListener("click", copyMarkdown)
    copyItem?.addEventListener("click", copyMarkdown)
    download?.addEventListener("click", downloadMarkdown)
    caret?.addEventListener("click", toggleMenu)
    document.addEventListener("click", closeMenu)

    window.addCleanup(() => {
      main?.removeEventListener("click", copyMarkdown)
      copyItem?.removeEventListener("click", copyMarkdown)
      download?.removeEventListener("click", downloadMarkdown)
      caret?.removeEventListener("click", toggleMenu)
      document.removeEventListener("click", closeMenu)
    })
  }
})
