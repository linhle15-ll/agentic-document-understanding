"use client";
import React from "react";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";

import { title } from "@/components/primitives";

export default function ContactPage() {
  return (
    <div className="text-left max-w-2xl mx-auto rounded-2xl bg-white sm:shadow sm:p-8 p-4 flex flex-col gap-6 shadow-none mt-4">
      <div className="flex flex-col gap-2">
        <div
          className={title({
            size: "md",
            class: "font-semibold text-primary leading-tight lg:leading-snug",
          })}
        >
          Talk to Sales
        </div>
        <p className="text-lg text-gray-500">
          Tell us about your needs and we will get back to you as soon as
          possible.
        </p>
      </div>
      <Form className="flex flex-col gap-4 mt-2">
        <Input label="First Name" placeholder="John" type="firstName" />
        <Input label="Last Name" placeholder="Doe" type="lastName" />
        <Input label="Phone" placeholder="+1 234 567 8900" type="tel" />
        <Input label="Email" placeholder="jone@company.com" type="email" />
        <Input label="Company" placeholder="Company Inc." type="company" />
        <Input label="Title" placeholder="Software Engineer" type="title" />

        <Textarea
          id="message"
          label="Message"
          minRows={3}
          name="message"
          placeholder="How can we help you?"
          variant="faded"
        />

        <Button
          className="w-full mt-2 text-base font-semibold py-3"
          color="primary"
          type="submit"
          variant="solid"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
