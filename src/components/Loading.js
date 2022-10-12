const Loading = () => {
  return (
    <div class="w-full h-full flex items-center justify-center bg-stone-800">
      <svg
        className="mr-3 w-7 h-7 md:h-12 md:w-12 animate-spin text-yellow-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span class="font-medium text-xl md:text-3xl"> Processing... </span>
    </div>
  );
};

export default Loading;
