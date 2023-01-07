export default function Image({ isActive }) {
  return (
    <svg
      focusable='false'
      viewBox='0 0 24 24'
      className={`w-5 group-hover:fill-blue-500 ${isActive && 'fill-blue-500'}`}
    >
      <path d='M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5'></path>
    </svg>
  );
}
