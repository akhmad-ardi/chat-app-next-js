"use client";

import React from "react";

// components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InputMessage() {
  return (
    <form className="flex items-center space-x-3">
      <Input type="text" placeholder="Type your message..." />
      <Button type="submit" className="p-3 bg-primary text-white rounded-lg">
        Send
      </Button>
    </form>
  );
}
