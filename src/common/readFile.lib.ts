import fs from 'fs';

export async function readFileAsBase64 ( filePath: string ): Promise<string>
{
  const fileData = fs.readFileSync(filePath);
  const base64Data = Buffer.from(fileData).toString('base64');
  return base64Data;
}