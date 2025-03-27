export const mainPrompt = [
    {
        name: 'select',
        description: 'Choose one tool (1 - QR Code or 2 - Password)',
        pattern: /^[1-2]+$/,
        message: 'Choose 1 or 2 only',
        required: true,
    },
];