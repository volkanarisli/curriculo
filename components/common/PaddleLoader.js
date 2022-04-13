import Script from "next/script";

const PaddleLoader = () => {
    return (
        <Script
            src="https://cdn.paddle.com/paddle/paddle.js"
            onLoad={async () => {
                if (process.env.PADDLE_SANDBOX) {
                    Paddle.Environment.set("sandbox");
                }
                await Paddle.Setup({ vendor: Number(process.env.PADDLE_VENDOR_ID) });
            }}
        />
    )
}


export default PaddleLoader