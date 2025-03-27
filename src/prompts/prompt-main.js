import chalk from "chalk";

export const mainPrompt = [
    {
        name: 'select',
        description: chalk.yellow.bold('Choose one tool (1 - QR Code or 2 - Password)'),
        pattern: /^[1-2]+$/,
        message: chalk.red('Choose 1 or 2 only'),
        required: true,
    },
];