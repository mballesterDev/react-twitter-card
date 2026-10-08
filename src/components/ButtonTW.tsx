interface propsButtonTW {
  following: boolean;
  setFollowing: (value: boolean) => void;
}

const ButtonTW = ({ following, setFollowing }: propsButtonTW) => {
  const handleClick = () => {
    setFollowing(!following);
  };
  return (
    <button
      onClick={handleClick}
      className={`${following ? "bg-white" : "bg-red-600"} shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200`}
    >
      {following ? "Siguiendo" : "Seguir"}
    </button>
  );
};

export default ButtonTW;
