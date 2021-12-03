import { useCallback, useState } from "react"

export interface SearchItem {
  words: string;
  count: number;
  firstTie: Date;
  lastTime: Date;
}

export default function useSearchHistory() {
  const k = '_search__history'
  const _d = localStorage.getItem(k)
  let data: SearchItem[] = []
  if (_d) {
    try {
      const dt = JSON.parse(_d)
      if (Array.isArray(dt)) {
        data = dt
      }
    } catch { }
  }
  const [_his, _setHis] = useState(data)
  const setHistory = useCallback((his: SearchItem[]) => {
    _setHis(his)
    localStorage.setItem(k, JSON.stringify(his))
  }, [_his])
  return [
    _his,
    setHistory
  ] as const
}