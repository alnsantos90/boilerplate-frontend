export function amplitudeDecoded (token: string) {
  if(!token){
    return
  }
  const buff = Buffer.from(token, 'base64');
  const decodedBuff = buff.toString('utf-8');
  return decodedBuff 
  
}