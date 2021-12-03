import Cos from "cos-nodejs-sdk-v5"

function parseFileUrl(client: Cos, filename: string) {
  const Bucket = 'jjxz-1257171806'
  return new Promise<string>((resolve) => {
    client.getObjectUrl({
      Bucket,
      Region: 'ap-shanghai',
      Key: filename,
      Sign: true,
      Method: 'put'
    }, (err, data) => {
      if (err) {
        console.log(err)
        resolve('')
      } else {
        resolve(data.Url)
      }
    })
  })
}

export default async function getPostUrl(filename: string) {

  const client = new Cos({
    SecretId: process.env.OSS_SEC_ID, // 此处为环境变量注入id
    SecretKey: process.env.OSS_SEC_KEY, // 此处为环境变量注入key
  })

  return await parseFileUrl(client, filename)
}