"use client";
import { useState } from "react";

export default function Home() {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  async function setData() {
    await fetch("./api/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, value }),
    });

    setKey("");
    setValue("");
  }

  async function getData() {
    const res = await fetch(`./api/test?key=${key}`);
    const data = await res.json();
    setValue(data.value ?? "");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col gap-3">
        <input
          className="rounded border px-3 py-2"
          placeholder="key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />

        <input
          className="rounded border px-3 py-2"
          placeholder="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex gap-2">
          <button className="rounded border px-3 py-2" onClick={setData}>
            Set
          </button>

          <button className="rounded border px-3 py-2" onClick={getData}>
            Get
          </button>
        </div>
      </div>
    </div>
  );
}
