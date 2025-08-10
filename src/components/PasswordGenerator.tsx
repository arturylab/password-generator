"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Copy, Check, RefreshCcw } from "lucide-react";

export default function PasswordGenerator() {
  const [length, setLength] = useState<number>(16);
  const [includeLower, setIncludeLower] = useState<boolean>(true);
  const [includeUpper, setIncludeUpper] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const generatePassword = useCallback(() => {
    let chars = "";
    if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (!chars) return;

    let generated = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generated += chars[randomIndex];
    }
    setPassword(generated);
  }, [length, includeLower, includeUpper, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeLower, includeUpper, includeNumbers, includeSymbols, generatePassword]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
    <h1 className="text-4xl md:text-7xl font-bold mb-2 text-center text-[#4de3af]">
      Password Generator
    </h1>
      <p className="mb-6 text-gray-400 text-base md:text-lg text-center max-w-2xl">
        Secure your world with strong, smart, and unique passwords.
      </p>

      <div className="bg-neutral-900 p-6 md:p-12 rounded-2xl shadow-lg w-full max-w-4xl text-center">
        <div className="text-2xl md:text-4xl font-mono mb-6 break-all text-[#4de3af]">{password || "—"}</div>

        <Slider
          value={[length]}
          onValueChange={(val) => setLength(val[0])}
          min={4}
          max={64}
          step={1}
          className="mb-2"
        />
        <div className="mb-6 text-gray-400">{length}</div>

        <div className="flex flex-row justify-between flex-wrap gap-4 mb-6">
          <label className="flex items-center gap-2">
            <Checkbox checked={includeLower} onCheckedChange={(v) => setIncludeLower(Boolean(v))} /> a-z
          </label>
          <label className="flex items-center gap-2">
            <Checkbox checked={includeUpper} onCheckedChange={(v) => setIncludeUpper(Boolean(v))} /> A-Z
          </label>
          <label className="flex items-center gap-2">
            <Checkbox checked={includeNumbers} onCheckedChange={(v) => setIncludeNumbers(Boolean(v))} /> 0-9
          </label>
          <label className="flex items-center gap-2">
            <Checkbox checked={includeSymbols} onCheckedChange={(v) => setIncludeSymbols(Boolean(v))} /> symbols
          </label>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={copyToClipboard}
            variant="outline"
            className="text-primary flex items-center gap-2 transition-opacity duration-200 hover:opacity-90"
          >
            {copied ? (
              <>
                <Check size={18} /> Copied
              </>
            ) : (
              <>
                <Copy size={18} /> Copy
              </>
            )}
          </Button>
          <Button
            onClick={generatePassword}
            className="border border-muted flex items-center gap-2 transition-opacity duration-200 hover:opacity-90"
          >
            <RefreshCcw size={18} /> Generate
          </Button>
        </div>
      </div>
    </div>
  );
}
