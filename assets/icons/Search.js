export default function Search({ isActive }) {
  return (
    <svg
      className={`DCxYpf w-5 group-hover:fill-blue-500 ${
        isActive && 'fill-blue-500'
      }`}
      focusable='false'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 0h24v24H0z' fill='none'></path>
      <path d='M16.32 14.88a8.04 8.04 0 1 0-1.44 1.44l5.76 5.76 1.44-1.44-5.76-5.76zm-6.36 1.08c-3.36 0-6-2.64-6-6s2.64-6 6-6 6 2.64 6 6-2.64 6-6 6z'></path>
    </svg>
  );
}
