export default function WordInitial({ text }: { text: string }) {
  return (
    <p className="rounded-lg bg-primary px-2 py-1 font-semibold text-white">
      {text
        .trim()
        .split(/\s+/)
        .map((word) => word[0].toUpperCase())
        .join("")}
    </p>
  )
}
