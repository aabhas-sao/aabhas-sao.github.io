import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchPosts(username: string) {
  const response = await fetch(`https://dev.to/api/articles?username=${username}`)
  const posts = await response.json()
  return posts;
}