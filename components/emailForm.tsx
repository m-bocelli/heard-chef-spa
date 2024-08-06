"use client";

import { Button, Input, Spinner } from "@nextui-org/react";
import { MailIcon } from "./icons";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function EmailForm() {
    const [userEmail, setUserEmail] = useState<string>("");
    const [pending, setPending] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);

    function sendEmail(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const templateParams: Record<string, unknown> = {
            to_name: "heardchefapp@gmail.com",
            user_email: userEmail,
        };

        setPending(true);
        emailjs
            .send("service_hyn31ni", "template_yvg0qe6", templateParams, {
                publicKey: "WlkqrAS_yp9LsGyHq",
                limitRate: {
                    throttle: 5000,
                },
            })
            .then((res) => console.log(res))
            .catch((e) => console.error(e))
            .finally(() => {
                setPending(false);
                setSubmitted(true);
            });
    }
    return (
        <form
            className="flex flex-col justify-center text-center text-purple"
            onSubmit={sendEmail}
        >
            <h1 className="my-2">Apply to beta test</h1>
            <Input
                type="email"
                label="Email"
                placeholder="example@gmail.com"
                isRequired
                startContent={
                    <MailIcon className="text-xl text-purple pointer-events-none flex-shrink-0" />
                }
                onChange={(e) => setUserEmail(e.target.value)}
            />
            <Button
                type="submit"
                className="bg-purple text-white"
                isDisabled={userEmail.length === 0 || submitted}
            >
                {pending ? (
                    <Spinner color="white" />
                ) : submitted ? (
                    "Applied"
                ) : (
                    "Apply"
                )}
            </Button>
        </form>
    );
}
