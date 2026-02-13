/**
 * Re-export custom hooks from here.
 */

import { useEffect } from 'react';

export function useMount(fn: () => void | (() => void)): void {
  useEffect(() => fn(), []); // eslint-disable-line react-hooks/exhaustive-deps -- run only on mount
}
