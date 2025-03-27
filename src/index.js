import prompt from 'prompt';
import { mainPrompt } from './prompts/prompt-main.js';

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select == 1) console.log('You chose 1 - QR Code');
        if (choose.select == 2) console.log('You chose 2 - Password');
    });

    prompt.start();
}

main();