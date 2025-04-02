import nbt from 'prismarine-nbt';
import { Buffer } from 'buffer';

export async function decodeItemBytes(bytes) {
    let buffer = Buffer.from(bytes, 'base64');
    var rawNBT = await nbt.parse(buffer);
    var decoded = rawNBT.parsed.value.i ? nbt.simplify(rawNBT.parsed.value.i) : undefined;
    return decoded;
}