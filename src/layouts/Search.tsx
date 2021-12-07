import React, { PropsWithoutRef, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { useSearchParams } from 'react-router-dom'
import useSearchHistory from '../hooks/useSearchHistory'
import nextTick from '../utils/nextTick'
import resolveClass from '../utils/resolveClass'
import style from './Home.module.scss'

interface HistoryPanelProps {
  searchWord: string
  onItemClick: (s: string) => void
  onClear: () => void
}

const SearchHistoryPanel = (props: PropsWithoutRef<HistoryPanelProps>) => {
  const [searchHistory] = useSearchHistory()
  const filteredSearchHistory = searchHistory
    .filter((item) => item.words.includes(props.searchWord))
    .sort((a, b) => {
      return a.lastTime.valueOf() - b.lastTime.valueOf()
    })
  if (filteredSearchHistory.length <= 0) {
    return (
      <div
        className={[style.history, style.empty].join(' ')}
        onClick={() => {
          console.log('click')
        }}
      >
        暂无对应搜索记录
      </div>
    )
  } else {
    return (
      <div className={style.history}>
        <ul className={style.list}>
          {filteredSearchHistory.map((item) => {
            return (
              <li
                className={style.item}
                key={item.words}
                onClick={() => {
                  props.onItemClick(item.words)
                }}
              >
                {item.words}
              </li>
            )
          })}
          <li
            className={[style.item, style.clear].join(' ')}
            onClick={() => {
              props.onClear()
            }}
          >
            <span
              className={['iconfont icon-clear', style.icon].join(' ')}
            ></span>
            删除历史记录
          </li>
        </ul>
      </div>
    )
  }
}

interface RemoveConfirmProps {
  onCancel: () => void
  onConfirm: () => void
}

const RemoveConfirm = (props: PropsWithoutRef<RemoveConfirmProps>) => {
  return createPortal(
    <div className={style.mask}>
      <div className={style.panel}>
        <div className={style.title}>提示</div>
        <div className={style.content}>确定清空搜索记录</div>
        <div className={style.buttons}>
          <button
            className={resolveClass(style.button, style.cancel)}
            onClick={() => {
              props.onCancel()
            }}
          >
            取消
          </button>
          <button
            className={resolveClass(style.button, style.primary)}
            onClick={() => {
              props.onConfirm()
            }}
          >
            清除
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default function HomeLayoutSearch() {
  const [query, setQuery] = useSearchParams()
  const [searchWord, setSearchWord] = useState(query.get('s') ?? '')
  const [isFocus, setFocus] = useState(false)
  const [hs, setHS] = useSearchHistory()
  const searchIt = useCallback(
    (s: string) => {
      if (s === '') {
        return
      }
      const fi = hs.findIndex((it) => it.words === s)
      if (fi >= 0) {
        hs[fi].lastTime = new Date()
        hs[fi].count++
        setHS(hs)
      } else {
        const dt = new Date()
        hs.push({
          words: s,
          firstTie: dt,
          lastTime: dt,
          count: 1,
        })
        setHS(hs)
      }
      query.set('s', s)
      setQuery(query)
    },
    [hs],
  )
  const [showClear, setShowClear] = useState(false)
  return (
    <div className={[style.search, isFocus ? style.focus : ''].join(' ')}>
      <div className={style.wrapper}>
        <input
          type="text"
          value={searchWord}
          onInput={(e) => {
            setSearchWord((e.target as HTMLInputElement).value)
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            nextTick(() => setFocus(false))
          }}
          placeholder="你想要什么？"
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              searchIt(searchWord)
              setSearchWord('')
            }
          }}
        />
        <span
          className={['iconfont icon-search', style.button].join(' ')}
          onClick={() => {
            searchIt(searchWord)
            setSearchWord('')
          }}
        ></span>
      </div>
      {isFocus ? (
        <SearchHistoryPanel
          searchWord={searchWord}
          onItemClick={(s) => {
            setSearchWord(s)
          }}
          onClear={() => {
            setShowClear(true)
          }}
        />
      ) : (
        ''
      )}
      {showClear ? (
        <RemoveConfirm
          onCancel={() => {
            setShowClear(false)
          }}
          onConfirm={() => {
            setHS([])
            setShowClear(false)
          }}
        />
      ) : (
        ''
      )}
    </div>
  )
}
