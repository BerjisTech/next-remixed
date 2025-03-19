import { FC, useEffect } from "react";

interface ProzPayPalButtonProps {
  paymentSucceeded: any;
  payment_amount: string;
  payment_currency_upper: string;
  description: string;
  fees_handled_by: string;
  total_fee_amount: string;
  viewer_eid: string;
  payee_eid: string;
}

const ProzPayPalButton: FC<ProzPayPalButtonProps> = ({
  paymentSucceeded,
  payment_amount,
  payment_currency_upper,
  description,
  fees_handled_by,
  total_fee_amount,
  viewer_eid,
  payee_eid,
}) => {
  useEffect(() => {
    const paymentAmount = (Math.round(parseFloat(payment_amount) * 100) / 100).toFixed(2);
    const totalFeeAmount = (Math.round(parseFloat(total_fee_amount) * 100) / 100).toFixed(2);

    const script = document.createElement("script");
    script.src = `${process.env.NEXT_PUBLIC_PAYPAL_URL_LEADING}${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}${process.env.NEXT_PUBLIC_PAYPAL_URL_END}`;
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            createOrder: (data: any, actions: any) => {
              // Create an order
              // We have to different line: one for payment and another for fee if payer pays it
              const items = [
                {
                  name: "Payment",
                  description:
                    description.substring(0, 126) + (description.length > 126 ? "…" : ""),
                  unit_amount: {
                    value: paymentAmount,
                    currency_code: payment_currency_upper,
                  },
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                },
              ];

              if (fees_handled_by != "pros") {
                items.push({
                  name: "Convenience fee",
                  description: "Convenience fee",
                  unit_amount: {
                    value: totalFeeAmount,
                    currency_code: payment_currency_upper,
                  },
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                });
              }

              // Calculate the total amount
              const totalItemAmount = items.reduce(
                (total, item) =>
                  total + parseFloat(item.unit_amount.value) * parseInt(item.quantity),
                0
              );

              // Assemble order
              const orderParams = {
                purchase_units: [
                  {
                    custom_id: "from EID%payer_eid% to EID%payee_eid% on %today_date_time%"
                      .replace("%payer_eid%", viewer_eid)
                      .replace("%payee_eid%", payee_eid)
                      .replace(
                        "%today_date_time%",
                        new Date().toJSON().slice(0, 19).replace("T", " ") + " UTC"
                      ),
                    soft_descriptor: "ProZ*Pay",
                    amount: {
                      currency_code: payment_currency_upper,
                      value: totalItemAmount.toFixed(2),
                      breakdown: {
                        item_total: {
                          value: totalItemAmount.toFixed(2),
                          currency_code: payment_currency_upper,
                        },
                      },
                    },
                    items: items,
                  },
                ],
              };

              return actions.order.create(orderParams);
            },
            onApprove: function (data: any, actions: any) {
              return actions.order.capture().then((details: any) => {
                const orderId = data.orderID;
                console.log(orderId);
                paymentSucceeded(orderId);
              });
            },
            onError: function (err: any) {
              console.error("PayPal Error:", err);
            },
          })
          .render("#paypal-button-container");
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [payment_amount]);

  return <div id="paypal-button-container"></div>;
};
export default ProzPayPalButton;
