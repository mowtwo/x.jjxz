import getPostUrl from "../apis/lambda/uploader"

export default async function fetchOssUpload(file: File) {
  try {
    const filename = encodeURIComponent(file.name)
    const url = await getPostUrl(filename)
    if (url == '') {
      throw new Error('url is empty')
    }
    const body = new Blob([file])
    const res = await fetch(url, {
      method: 'PUT',
      body,
    })
    return res
  } catch (err) {
    throw new err
  }
}