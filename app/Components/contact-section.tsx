"use client";

import type React from "react";
import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/caderrahmathulla",
  },
  {
    name: "X",
    icon: <XIcon />,
    href: "https://x.com/caderrahmathulla",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/caderrahmathulla",
  },
  {
    name: "Facebook",
    icon: <FacebookRoundedIcon />,
    href: "https://www.facebook.com/caderrahmathulla",
  },
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  type ResponseDetails = { message?: string; error?: string };
  const [responseDetails, setResponseDetails] =
    useState<ResponseDetails | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setResponseDetails(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setResponseDetails(data);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
        setResponseDetails(data);
      }
    } catch (error) {
      setSubmitStatus("error");
      setResponseDetails({
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full py-8 md:py-12 bg-[#1a1f2e] text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="px-4 sm:px-10 mx-auto max-w-6xl">
        <div className="text-left md:text-center mb-6 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-2">
            Connect with{" "}
            <span style={{ fontFamily: "'Playball', cursive" }}>Cader</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Connect for partnership opportunities, speaking engagements, or
            investment discussions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6 mr-1 md:mr-8"
            >
              <div className="space-y-1 md:space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-[#131722] border-none h-10 md:h-12 text-white"
                  placeholder="Name"
                />
              </div>

              <div className="space-y-1 md:space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#131722] border-none h-10 md:h-12 text-white"
                  placeholder="Email Address"
                />
              </div>

              <div className="space-y-1 md:space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-[#131722] border-none min-h-[100px] md:min-h-[120px] text-white"
                  placeholder="Message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#03045E] hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white h-10 md:h-12 rounded-[10px] transition-colors duration-200 font-medium"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <div className="mt-3 md:mt-4 p-2 md:p-3 bg-green-900/50 border border-green-700 rounded-md">
                  <p className="text-green-400 text-xs md:text-sm font-medium">
                    Message sent successfully!
                  </p>
                  {responseDetails?.message && (
                    <p className="text-green-300 text-xs mt-1">
                      {responseDetails.message}
                    </p>
                  )}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-3 md:mt-4 p-2 md:p-3 bg-red-900/50 border border-red-700 rounded-md">
                  <p className="text-red-400 text-xs md:text-sm font-medium">
                    Failed to send message. Please try again.
                  </p>
                  {responseDetails?.error && (
                    <p className="text-red-300 text-xs mt-1">
                      {responseDetails.error}
                    </p>
                  )}
                </div>
              )}
            </form>
          </div>

          <div className="bg-[#131722] p-4 md:p-6 rounded-lg">
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Connect Directly
              </h3>
              <p className="text-gray-400">Business Assistant</p>
              <a
                href="mailto:assistant@caderrahmathulla.com"
                className="text-gray-200 underline-offset-2 hover:underline"
              >
                assistant@caderrahmathulla.com
              </a>
            </div>

            <div className="border-t border-gray-700 my-4 md:my-6"></div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                Follow & Connect
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Cader's ${link.name} profile`}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-700 mt-4 md:mt-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
