// src/pages/index.js
import Image from "next/image";
import mercadopago from "mercadopago";
import mpPic from "../public/img/mercadopago.png";
import productPic from "../public/img/product.png";
import { getLayout } from '../layouts/main'
import { Elements } from "@stripe/react-stripe-js";

import { useStripeClientSecret, useStripePromise } from "../lib/stripe";
import { Button, Divider } from "../ui/core";
import { PayForm } from "../ui/components/pay-form";

export default function IndexPage({ mercadoPagoUrl }) {
  const stripeClientSecret = useStripeClientSecret();
  const stripePromise = useStripePromise();
  return (
    <div className="flex">
      <div className="flex space-x-20 mx-auto py-32">
        <div className="flex flex-col w-[592px]">
          <h2 className="mb-6 text-2xl font-bold">Confirm and pay</h2>
          <a href={mercadoPagoUrl}>
            <Button className="bg-[#01B1EA] flex justify-center items-center w-full">
              Pay with{" "}
              <span className="ml-1">
                <Image height={40} width={98} src={mpPic} alt="Mercado Pago" />
              </span>
            </Button>
          </a>
          <div className="my-6 relative flex justify-center items-center">
            <span className="text-center bg-white px-4">Or pay with card</span>
            <Divider className="z-[-1] absolute top-[13px]" />
          </div>
          {stripeClientSecret && (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret: stripeClientSecret,
                appearance: {
                  theme: "flat",
                },
              }}
            >
              <PayForm />
            </Elements>
          )}
        </div>
        <div className="flex flex-col w-[491px]">
          <Image
            src={productPic}
            height={320}
            width={491}
            alt="Modern Studio with One Queen Bed"
          />
          <p className="flex justify-between items-center my-6">
            <span>Modern Studio with One Queen Bed</span>
            <span className="text-sm">Miami Beach, Florida</span>
          </p>
          <Divider />
          <div className="flex flex-col mt-6">
            <h5 className="font-bold mb-6">Price details</h5>
            <div className="flex flex-col space-y-4">
              <div className="flex text-sm">
                <span className="flex-1">$42.00 x 2 nights</span>
                <span>$84.00</span>
              </div>
              <div className="flex text-sm">
                <span className="flex-1">Cleaning fee</span>
                <span>$20.00</span>
              </div>
              <div className="flex text-sm">
                <span className="flex-1">Service fee</span>
                <span>$14.68</span>
              </div>
              <div className="flex text-sm">
                <span className="flex-1">Occupancy taxes and fees</span>
                <span>$13.52</span>
              </div>
              <div className="flex text-sm font-bold">
                <span className="flex-1">Total (USD)</span>
                <span>$132.20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

IndexPage.getLayout = getLayout;

export async function getServerSideProps() {
  const isProd = process.env.NODE_ENV === "production";

  mercadopago.configure({
    access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN,
  });

  const { response } = await mercadopago.preferences.create({
    items: [
      {
        id: "00000001",
        currency_id: "ARS",
        title: "Modern Studio with One Queen Bed",
        quantity: 1,
        unit_price: 132.2,
      },
    ],
    external_reference: "00000001",
    back_urls: {
      failure: `${process.env.NEXT_PUBLIC_BASE_URL}/thanks/failure}`,
      success: `${process.env.NEXT_PUBLIC_BASE_URL}/thanks/success}`,
    },
    binary_mode: true,
  });

  return {
    props: {
      mercadoPagoUrl: isProd
        ? response.init_point
        : response.sandbox_init_point,
    },
  };
}


