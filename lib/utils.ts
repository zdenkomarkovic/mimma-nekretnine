import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Normalizuje tekst za pretragu: mala slova + zamena srpskih slova sa kvačicama
 * njihovim osnovnim ekvivalentima (č/ć -> c, š -> s, ž -> z, đ -> d).
 * Tako "cacak" pronalazi "Čačak" i obrnuto.
 */
export function normalizeSearchText(value: string): string {
  return value
    .toLowerCase()
    .replace(/č|ć/g, "c")
    .replace(/š/g, "s")
    .replace(/ž/g, "z")
    .replace(/đ/g, "d")
}
