import { createQRCode } from './services/qr-code/create.js';
import { mainPrompt } from './prompts/prompt-main.js';
import prompt from 'prompt';
import chalk from 'chalk';

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) console.log('You chose 2 - Password');
    });

    prompt.start();
}

main();