import Script from "next/script";

const PaddleLoader = () => {
    return (
        <Script
            src="https://cdn.paddle.com/paddle/paddle.js"
            onLoad={() => {
                if (process.env.PADDLE_SANDBOX) {
                    Paddle.Environment.set("sandbox");
                }
                Paddle.Setup({
                    vendor: Number(process.env.PADDLE_VENDOR_ID),
                });
            }}
        />
    )
}


export default PaddleLoader