/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Suspense } from "react";
import { Skills as ServerSkills } from "./Skills";
import { useSearchParams } from "next/navigation";
import { SkillsSkeleton } from "../SkillsSkeleton/SkillsSkeleton";

function SkillsInner() {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category") as any;

  return <ServerSkills searchParams={{ category }} />;
}

export function Skills() {
  return (
    <Suspense fallback={<SkillsSkeleton />}>
      <SkillsInner />
    </Suspense>
  );
}
