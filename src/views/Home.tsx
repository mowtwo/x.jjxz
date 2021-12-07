import React, { useCallback, useEffect } from 'react'
import goods from '../apis/lambda/goods'
import getPostUrl from '../apis/lambda/uploader'
import fetchOssUpload from '../utils/uploadFile'
import style from './Home.module.scss'

export default function HomeView() {
  useEffect(() => {
    goods().then((res) => {
      console.log(res)
    })
  }, [])
  return <div className={style.home}></div>
}
