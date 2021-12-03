import React, { useCallback } from 'react'
import getPostUrl from '../apis/lambda/uploader'
import fetchOssUpload from '../utils/uploadFile'
import style from './Home.module.scss'

export default function HomeView() {
  const upload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const t = e.currentTarget as HTMLInputElement
    if (t.files.length > 0) {
      fetchOssUpload(t.files[0])
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [])

  return (
    <div className={style.home}>
      <input type="file" onChange={(e) => {
        upload(e)
      }} />
    </div>
  )
}
