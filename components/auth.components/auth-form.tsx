"use client";
import React from "react";
import Image from "next/image";
import { Form, Input, Button, Link } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { subtitle } from "@/components/primitives";
import fptLogo from "@/public/commons/fpt-logo.png";

export default function AuthForm({ isSignUp = true }: { isSignUp?: boolean }) {
  return (
    <div className="max-w-2xl mx-auto rounded-2xl bg-white sm:shadow sm:p-8 p-4 flex flex-col gap-6 shadow-none">
      {/* Logo placeholder */}
      <div className="flex flex-col items-center gap-2 mt-2">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          {/* You can put your logo SVG here */}
          <Image alt="Logo" className="w-11 h-11" src={fptLogo} />
        </div>
        <span className="text-2xl font-bold text-gray-800">
          Agentic Document Understanding
        </span>
      </div>
      {/* Title */}
      <div className="text-center mt-2">
        <div
          className={subtitle({
            size: "lg",
            class: "font-semibold text-primary leading-tight lg:leading-snug",
          })}
        >
          {isSignUp ? "Create your account" : "Sign in to your account"}
        </div>
      </div>
      {/* Form */}
      <Form className="flex flex-col gap-4">
        <Input
          isRequired
          label="Email"
          name="email"
          placeholder="Enter your email"
          type="email"
          variant="faded"
        />
        <Button
          className="w-full"
          color="primary"
          type="submit"
          variant="solid"
        >
          {isSignUp ? "Create account" : "Sign in"}
        </Button>
      </Form>
      {/* Switch link */}
      <div className="text-center text-gray-700">
        {isSignUp ? (
          <>
            Already had an account?
            <Link
              className="font-semibold text-blue-700 hover:underline"
              href="/sign-in"
            >
              Sign in
            </Link>
          </>
        ) : (
          <>
            Don&apos;t have an account?
            <Link
              className="font-semibold text-blue-700 hover:underline"
              href="/sign-up"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
      {/* Divider */}
      <div className="flex items-center gap-2 my-2">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-gray-400 text-sm">or</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>
      {/* Social buttons */}
      <div className="flex flex-col gap-3">
        <Button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-50">
          <FcGoogle className="text-xl" />
          Continue with Google
        </Button>
        <Button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-50">
          <FaGithub className="text-xl" />
          Continue with GitHub
        </Button>
      </div>
      {/* Terms */}
      <div className="text-xs text-gray-500 text-center mt-2">
        By continuing, you agree to the
        <a className="underline" href="/terms-of-use">
          Terms of Use
        </a>
        and
        <a className="underline" href="/privacy-policy">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
