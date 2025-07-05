/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Skills as ServerSkills } from './Skills';
import { useSearchParams } from 'next/navigation';

export function Skills() {
  const searchParams = useSearchParams();
  const category = searchParams?.get('category') as any;
  
  return <ServerSkills searchParams={{ category }} />;
}