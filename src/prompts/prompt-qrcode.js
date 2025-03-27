import chalk from "chalk";

export const promptQRCode = [
    {
        name: 'link',
        description: chalk.yellow('Paste the link for your QR Code'),
    },
    {
        name: 'type',
        description: chalk.yellow('Do you want 1 - Normal or 2 - Terminal QR Code type?'),
        pattern: /^[1-2]+$/,
        message: chalk.red('Only 1 or 2 please'),
        required: true
    }
];