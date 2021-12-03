import React, { useCallback } from 'react'
import getPostUrl from '../apis/lambda/uploader'
import fetchOssUpload from '../utils/uploadFile'
import style from './Home.module.scss'

export default function HomeView() {
  console.log(navigator.webdriver)
  return <div className={style.home}></div>
}
