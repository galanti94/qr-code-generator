import prompt from "prompt";
import { handle } from "./handle.js";
import { promptQRCode } from "../../prompts/prompt-qrcode.js";

export async function createQRCode() {
    prompt.get(promptQRCode, handle);

    prompt.start();
}