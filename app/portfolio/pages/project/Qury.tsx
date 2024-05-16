import React from "react";
import Butt from "./butt";

interface Query {
  pathname: string;
}

export default function MyWork({ searchParams }: { searchParams: Query }) {
  console.log(searchParams.pathname);
  return (
    <div>
      <h1>searchParams.pathname</h1>
      <Butt />
    </div>
  );
}
