import Image from 'next/image';
import { Message } from '../../ui/components';
import { Button } from '../../ui/core';
import { getLayout } from '../../layouts';
import thank from '../../public/img/thanks.png'

export default function ThanksFailurePage() {
	const URL = process.env.NEXT_PUBLIC_BASE_URL;

	return (
		<Message
			title="Oh no"
			content="Your payment hasn't been received"
			action={
				<a href="https://payments-system1.vercel.app">
				<Button
					className="bg-primary"
					onClick={() => window.location.replace(URL)}
					>
					Return to home.
				</Button>
					</a>
			}
			image={<Image src={thank} alt="" width={160} height={160} />}
		/>
	);
}

ThanksFailurePage.getLayout = getLayout;