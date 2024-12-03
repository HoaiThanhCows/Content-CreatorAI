// /api/process-payment.js
import Razorpay from "razorpay";

export default async function handler(req, res) {
  const { subscriptionId } = req.body;

  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    // Thực hiện thanh toán ở đây
    const payment = await razorpay.payments.fetch(subscriptionId);

    // Xử lý logic nếu thanh toán thành công
    if (payment.status === "captured") {
      res.status(200).json({ success: true, paymentId: payment.id });
    } else {
      res.status(400).json({ success: false, error: "Payment not captured" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to process payment" });
  }
}
