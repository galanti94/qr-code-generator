import qr from "qrcode-terminal";
import chalk from "chalk";

export async function handle(err, result) {
    if (err) {
        console.log('Error on aplication');
        return;
    }

    const isSmall = result.type == 2;

    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green('QR Code successfuly generated'));
        console.log(qrcode);
    });
}