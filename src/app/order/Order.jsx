"use client";

import React from "react";
import { Input, Button, Form, message } from "antd";

const { TextArea } = Input;

export default function OrderPage() {
  const [form] = Form.useForm();

  const BOT_TOKEN = "7831806767:AAEdwbQjeQyvcF2NNLzWAn1DonNNy4FxUzY";
  const CHAT_ID = "5941617229"; // Guruh chat IDsi

  const sendMessageToTelegram = async (text) => {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "HTML",
      }),
    });

    const data = await res.json();
    return data;
  };

  const onFinish = async () => {
    const values = form.getFieldsValue(true);

    const malumotlar = {
      Ismi: values.name,
      Telegram: values.telegram,
      Telefon: values.phone,
      "Aloqa vaqti": values.contactTime,
    };

    const emojiMap = {
      Ismi: "👤",
      Telegram: "📱",
      Telefon: "📞",
      "Aloqa vaqti": "⏰",
    };

    let messageText = `<b>📝 Yangi Buyurtma</b>\n\n`;

    for (const key in malumotlar) {
      let value = malumotlar[key];
      if (!value || value === "") value = "—";

      if (key === "Telegram" && value.startsWith("https://t.me/")) {
        const username = value.replace("https://t.me/", "");
        value = `<a href="${value}">${username}</a>`;
      }

      const emoji = emojiMap[key] || "";
      messageText += `${emoji} <b>${key}:</b> ${value}\n`;
    }

    try {
      const telegramResponse = await sendMessageToTelegram(messageText);

      if (telegramResponse.ok) {
        message.success("✅ Buyurtma muvaffaqiyatli yuborildi!");
        form.resetFields();
      } else {
        message.error("❌ Buyurtma yuborishda xatolik yuz berdi!");
      }
    } catch (error) {
      message.error("❌ Buyurtma yuborishda xatolik yuz berdi!");
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-3xl text-white p-14 overflow-y-auto max-h-[710px] no-scrollbar">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-[#aa33ea]">
        Buyurtma Berish
      </h1>

      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Ismingiz"
          rules={[{ required: true, message: "Iltimos, ismingizni kiriting" }]}
        >
          <Input placeholder="Ismingiz" />
        </Form.Item>

        <Form.Item
          name="telegram"
          label="Telegram link"
          rules={[
            {
              required: true,
              message: "Iltimos, Telegram link kiriting",
            },
            {
              type: "url",
              message: "To‘g‘ri URL kiriting (https://t.me/username)",
            },
          ]}
        >
          <Input placeholder="https://t.me/username" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Telefon raqam"
          rules={[
            { required: true, message: "Telefon raqamni kiriting" },
            {
              pattern: /^998\d{9}$/,
              message: "998901234567 formatida kiriting",
            },
          ]}
        >
          <Input placeholder="998901234567" />
        </Form.Item>

        <Form.Item
          name="contactTime"
          label="Aloqa uchun qulay vaqt"
          rules={[{ required: true, message: "Iltimos, vaqtni kiriting" }]}
        >
          <Input placeholder="10:00 - 18:00" />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            style={{
              backgroundColor: "#aa33ea",
              borderColor: "#aa33ea",
              color: "white",
              width: "100%",
            }}
          >
            Yuborish
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
