import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** public/ 폴더의 로컬 이미지 경로에 basePath를 붙여줍니다. */
export function withBasePath(src: string): string {
  if (!src.startsWith("/") || src.startsWith(BASE_PATH)) return src;
  return `${BASE_PATH}${src}`;
}

