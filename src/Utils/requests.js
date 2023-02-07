import axios from 'axios'

export const getS3UrlFromRequest = async (path, reqType = 'GET') => {
  const url =
    'https://1anhg0dzl5.execute-api.us-east-1.amazonaws.com/dev/apollo/signed-urls'
  const resp = await axios.post(url, [
    {
      bucket: 'apollo-dev-assets-us-east-1',
      key: path,
      region: 'us-east-1',
      reqType,
    },
  ])

  const [data] = resp.data
  return reqType === 'GET'
    ? `https://editor.avataar.ai/${data.key}`
    : data.signedUrl
}
