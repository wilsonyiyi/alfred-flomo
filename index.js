import alfy from 'alfy';

// 导入环境变量
const { FLOMO_API_URL } = process.env;

if (!FLOMO_API_URL) {
    alfy.error('FLOMO_API_URL is not set');
    process.exit(1);
}

submit(alfy.input);

async function submit(content) {
    const response = await alfy.fetch(FLOMO_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
    });
}
