import ButtonTW from "./ButtonTW";
import { useState } from "react";

interface propsTW {
  name: string;
  user: string;
  followers: number;
  url: string;
}

export const TwitterCard = ({ name, user, followers, url }: propsTW) => {
  const [following, setFollowing] = useState(false);

  return (
    <div className="flex w-full max-w-sm items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
      <img
        src={url}
        alt={`Foto de perfil de ${name}`}
        className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-800"
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate font-semibold text-gray-900 dark:text-white">{name}</span>
        <span className="truncate text-sm text-gray-500 dark:text-gray-400">@{user}</span>
        <span className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          {followers > 100 ? (
            <span>es popular {followers}</span>
          ) : (
            <span> no es popular {followers}</span>
          )}
        </span>
      </div>
      <ButtonTW following={following} setFollowing={setFollowing} />
    </div>
  );
};
