import { SVGProps } from "react"


const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (

    <svg
    height={props.height ?? '1em'}
    width={props.width ?? '1em'}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke={props.color ?? "#1E1E1E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M42 30v8a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-8m8-10 10 10m0 0 10-10M24 30V6"
    />
  </svg>
)
export default DownloadIcon;
