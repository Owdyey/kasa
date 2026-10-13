import { IconTypes } from "@/types/icon"

export default function KasaLogo({ width, height, ...props }: IconTypes) {
  return (
    <svg
      width={width || "30"}
      height={height || "30"}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="8" fill="#432DD7" />
      <rect
        x="17.9677"
        y="8"
        width="4.64516"
        height="24"
        rx="2.32258"
        fill="white"
      />
      <path
        d="M11 21.1613C11 19.8786 12.0399 18.8387 13.3226 18.8387C14.6053 18.8387 15.6452 19.8786 15.6452 21.1613V29.6774C15.6452 30.9601 14.6053 32 13.3226 32C12.0399 32 11 30.9601 11 29.6774V21.1613Z"
        fill="white"
      />
      <rect
        x="24.9355"
        y="14.1935"
        width="4.64516"
        height="17.8065"
        rx="2.32258"
        fill="white"
      />
    </svg>
  )
}
