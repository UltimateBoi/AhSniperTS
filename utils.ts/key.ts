import { decodeItemBytes } from "./decode_item_bytes";



export async function createItemKeyFromBytes(bytes: string): Promise<string | undefined> {
  const decoded = await decodeItemBytes(bytes);
  if (!decoded) return undefined;
}