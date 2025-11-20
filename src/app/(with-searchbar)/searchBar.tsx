"use client";

import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const onChnageSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        value={search}
        onChange={onChnageSearch}
      />
      <button>검색</button>
    </div>
  );
}
