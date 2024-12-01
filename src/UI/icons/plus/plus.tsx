
const PlusIcon = ({ size = 24, color = "#ffffff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    aria-hidden="true"
  >
    <g>
      <g>
        <rect width="24" height="24" opacity="0" transform="rotate(180 12 12)" />
        <path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" />
      </g>
    </g>
  </svg>
);

export default PlusIcon;
