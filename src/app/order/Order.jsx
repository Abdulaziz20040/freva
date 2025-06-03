"use client";

import React, { useState } from "react";
import {
  Input,
  Select,
  DatePicker,
  Button,
  Form,
  Steps,
  message,
  Checkbox,
  Row,
} from "antd";

const { TextArea } = Input;
const { Option } = Select;
const { Step } = Steps;

import "../../../src/app/globals.css"; // Import global styles
export default function OrderPage() {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [showOtherProjectType, setShowOtherProjectType] = useState(false);
  const [showOtherPages, setShowOtherPages] = useState(false);
  const [showOtherBudget, setShowOtherBudget] = useState(false);
  const [projectType, setProjectType] = useState("");

  const getPurposeLabel = () => {
    switch (projectType) {
      case "web":
        return "Saytning asosiy maqsadi";
      case "mobile":
        return "Ilovaning asosiy maqsadi";
      case "bot":
        return "Botning asosiy maqsadi";
      case "figma":
        return "Dizayn loyihasining maqsadi";
      case "frontend":
        return "Frontend loyihaning maqsadi";
      default:
        return "Loyihaning asosiy maqsadi";
    }
  };

  const next = () => {
    form
      .validateFields()
      .then(() => setCurrent(current + 1))
      .catch(() => {});
  };

  const prev = () => setCurrent(current - 1);

  const BOT_TOKEN = "7831806767:AAEdwbQjeQyvcF2NNLzWAn1DonNNy4FxUzY";
  const CHAT_ID = "-1002685091196"; // Guruh chat IDsi

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
        parse_mode: "HTML", // HTML formatida xabar yuborish uchun
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
      "Loyiha turi":
        values.projectType === "other"
          ? values.projectTypeOther
          : values.projectType,
      "Figma dizayn": values.figmaDesign || "—",
      "Frontend turi":
        values.projectType === "web" ? values.frontendType || "—" : "—",
      "Loyiha maqsadi": values.projectTypeOther || "—",
      "Sahifalar soni": values.pages || "—",
      Muddat: values.deadline ? values.deadline.format("YYYY-MM-DD") : "—",
      Byudjet: values.budget || "—",
      Malumot: values.description || "—",
      "Admin panel": values.adminPanel || "—",
      Tillar: values.languages?.includes("all")
        ? "O‘zbekcha, Ruscha, Inglizcha"
        : (values.languages || []).join(", "),
      "Shartnoma qabul qilindi": values.agreement ? "Ha" : "Yo‘q",
    };

    // Emoji bilan maydon nomlarini tayyorlaymiz
    const emojiMap = {
      Ismi: "👤",
      Telegram: "📱",
      Telefon: "📞",
      "Aloqa turi": "🔗",
      "Aloqa vaqti": "⏰",
      "Loyiha turi": "📂",
      "Figma dizayn": "🎨",
      "Frontend turi": "💻",
      "Loyiha maqsadi": "🎯",
      "Sahifalar soni": "📄",
      Muddat: "🗓️",
      Byudjet: "💰",
      Malumot: "📝",
      "Admin panel": "⚙️",
      Tillar: "🌐",
      "Shartnoma qabul qilindi": "✅",
    };

    // Xabarni HTML formatida yaratish
    let messageText = `<b>📝 Yangi Buyurtma</b>\n\n`;

    for (const key in malumotlar) {
      let value = malumotlar[key];
      if (!value || value === "") {
        value = "—";
      }

      if (key === "Telegram") {
        if (value.startsWith("https://t.me/")) {
          const username = value.replace("https://t.me/", "");
          value = `<a href="${value}">${username}</a>`;
        }
      }

      const emoji = emojiMap[key] || "";

      messageText += `${emoji} <b>${key}:</b> ${value}\n`;
    }

    try {
      const telegramResponse = await sendMessageToTelegram(messageText);

      if (telegramResponse.ok) {
        message.success("Buyurtma muvaffaqiyatli yuborildi!");
        form.resetFields();
        setCurrent(0);
      } else {
        message.error("Buyurtma yuborishda xatolik yuz berdi!");
      }
    } catch (error) {
      message.error("Buyurtma yuborishda xatolik yuz berdi!");
      console.error(error);
    }
  };

  const getLabels = () => {
    switch (projectType) {
      case "web":
        return {
          pagesLabel: "Sayt sahifalari soni",
          descriptionLabel: "Sayt haqida qisqacha malumot bering",
          descriptionPlaceholder: "Sayt nima haqida, qanday xizmat qiladi?",
        };
      case "mobile":
        return {
          pagesLabel: "Ilova ekranlari soni",
          descriptionLabel: "Ilova haqida qisqacha malumot bering",
          descriptionPlaceholder: "Ilova qanday ishlaydi, asosiy funksiyalari?",
        };
      case "bot":
        return {
          pagesLabel: "Bot funksiyalari soni",
          descriptionLabel: "Bot haqida qisqacha malumot bering",
          descriptionPlaceholder: "Bot qanday xizmat ko‘rsatadi?",
        };
      case "figma":
        return {
          pagesLabel: "Dizayn sahifalari soni",
          descriptionLabel: "Dizayn haqida qisqacha malumot bering",
          descriptionPlaceholder: "Dizayn nima uchun kerak, asosiy g‘oya?",
        };
      default:
        return {
          pagesLabel: "Sahifalar soni",
          descriptionLabel: "Loyiha haqida qisqacha malumot bering",
          descriptionPlaceholder: "Loyiha haqida ma’lumot kiriting",
        };
    }
  };

  const languages = [
    { label: "O‘zbekcha", value: "uz" },
    { label: "Ruscha", value: "ru" },
    { label: "Inglizcha", value: "en" },
    { label: "Barchasi", value: "all" },
  ];

  return (
    <div className="">
      <div className="w-full max-w-3xl bg-white p-14 overflow-y-auto max-h-[710px] no-scrollbar">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-[#F2994A]">
          Buyurtma Berish
        </h1>

        <Steps
          current={current}
          style={{
            marginBottom: "20px",
          }}
        >
          <Step title="Shaxsiy Ma'lumotlar " />
          <Step title="Loyiha Tafsilotlari" />
          <Step title="Qo‘shimcha Ma'lumot" />
        </Steps>

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          autoComplete="off"
          scrollToFirstError
        >
          {current === 0 && (
            <>
              <Form.Item
                name="name"
                label="Ismingiz"
                rules={[
                  { required: true, message: "Iltimos, ismingizni kiriting" },
                ]}
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
                rules={[
                  { required: true, message: "Iltimos, vaqtni kiriting" },
                ]}
              >
                <Input type="text" />
              </Form.Item>
            </>
          )}

          {current === 1 && (
            <>
              <Form.Item
                name="projectType"
                label="Loyiha turi"
                rules={[{ required: true, message: "Loyiha turini tanlang" }]}
              >
                <Select
                  placeholder="Tanlang"
                  onChange={(val) => {
                    setProjectType(val);
                    setShowOtherProjectType(val === "other");
                    form.setFieldsValue({ projectTypeOther: undefined });
                  }}
                >
                  <Option value="web">Web sayt</Option>
                  <Option value="mobile">Mobil ilova</Option>
                  <Option value="bot">Telegram bot</Option>
                  <Option value="figma">Figma dizayn</Option>
                  <Option value="other">Boshqa</Option>
                </Select>
              </Form.Item>

              {projectType === "web" && (
                <>
                  <Form.Item
                    name="frontendType"
                    label="Backend kerakmi yoki faqat frontend?"
                    rules={[{ required: true, message: "Tanlang" }]}
                  >
                    <Select placeholder="Tanlang">
                      <Option value="faqat_frontend">Faqat frontend</Option>
                      <Option value="fullstack">Backend ham kerak</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="figmaDesign"
                    label="Figma dizayn kerakmi?"
                    rules={[{ required: true, message: "Iltimos, tanlang" }]}
                  >
                    <Select placeholder="Tanlang">
                      <Option value="kerak">Ha, kerak</Option>
                      <Option value="mavjud">Dizayn mavjud</Option>
                      <Option value="emas">Yo‘q, kerak emas</Option>
                    </Select>
                  </Form.Item>
                </>
              )}

              <Form.Item
                name="projectTypeOther"
                label="Loyihaning asosiy maqsadi"
                rules={[
                  {
                    required: projectType === "other",
                    message: "Ma’lumot kiriting",
                  },
                ]}
              >
                <Input placeholder="Loyihaning asosiy maqsadini kiriting" />
              </Form.Item>

              <Form.Item
                name="pages"
                label={getLabels().pagesLabel}
                rules={[
                  { required: true, message: "Iltimos, sonini kiriting" },
                ]}
              >
                <Input
                  type="number"
                  min={1}
                  placeholder="Sonini kiriting"
                  onChange={(e) => {
                    const val = e.target.value;
                    setShowOtherPages(false);
                    form.setFieldsValue({ pages: val });
                  }}
                />
              </Form.Item>

              {showOtherPages && (
                <Form.Item
                  name="pagesOther"
                  label="Qo‘shimcha ma’lumot"
                  rules={[
                    { required: true, message: "Iltimos, ma’lumot kiriting" },
                  ]}
                >
                  <Input placeholder="Qo‘shimcha ma’lumot" />
                </Form.Item>
              )}

              <Form.Item
                name="deadline"
                label="Loyihani tugatish muddati"
                rules={[
                  { required: true, message: "Iltimos, muddatni tanlang" },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                name="budget"
                label="Byudjet"
                rules={[
                  { required: true, message: "Iltimos, byudjetni tanlang" },
                ]}
              >
                <Select
                  placeholder="Tanlang"
                  onChange={(val) => {
                    setShowOtherBudget(val === "other");
                    form.setFieldsValue({ budgetOther: undefined });
                  }}
                >
                  <Option value="500$ - 1000$">500$ - 1000$</Option>
                  <Option value="1000$ - 2000$">1000$ - 2000$</Option>
                  <Option value="2000$ +">2000$ va yuqori</Option>
                  <Option value="other">Boshqa</Option>
                </Select>
              </Form.Item>

              {showOtherBudget && (
                <Form.Item
                  name="budgetOther"
                  label="Qo‘shimcha byudjet ma’lumoti"
                  rules={[
                    { required: true, message: "Iltimos, ma’lumot kiriting" },
                  ]}
                >
                  <Input placeholder="Byudjet miqdorini yozing" />
                </Form.Item>
              )}

              <Form.Item
                name="description"
                label={getLabels().descriptionLabel}
                rules={[
                  { required: true, message: "Iltimos, loyiha haqida yozing" },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder={getLabels().descriptionPlaceholder}
                />
              </Form.Item>
            </>
          )}

          {current === 2 && (
            <>
              <Form.Item
                name="figmaDesign"
                label="Figma dizayn kerakmi?"
                rules={[{ required: true, message: "Iltimos, tanlang" }]}
              >
                <Select placeholder="Tanlang">
                  <Option value="kerak">Ha, kerak</Option>
                  <Option value="mavjud">Dizayn mavjud</Option>
                  <Option value="emas">Yo‘q, kerak emas</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="adminPanel"
                label="Admin panel kerakmi?"
                rules={[
                  {
                    required: true,
                    message: "Iltimos, admin panel kerakligini tanlang",
                  },
                ]}
              >
                <Select placeholder="Tanlang">
                  <Option value="ha">Ha</Option>
                  <Option value="yoq">Yo‘q</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="languages"
                label="Qaysi tillarda kerak?"
                rules={[
                  {
                    required: true,
                    message: "Iltimos, kamida bir tilni tanlang",
                  },
                ]}
              >
                <Checkbox.Group
                  options={languages}
                  onChange={(checkedValues) => {
                    if (checkedValues.includes("all")) {
                      form.setFieldsValue({ languages: ["all"] });
                    } else {
                      form.setFieldsValue({
                        languages: checkedValues.filter((v) => v !== "all"),
                      });
                    }
                  }}
                />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject("Shartlarni qabul qilishingiz kerak"),
                  },
                ]}
              >
                <Checkbox>
                  Men shartlar va shaxsiy ma'lumotlarni qayta ishlash siyosatini
                  qabul qilaman.
                </Checkbox>
              </Form.Item>
            </>
          )}

          <Form.Item>
            <div className="flex justify-between">
              {current > 0 && (
                <Button onClick={prev} style={{ marginRight: 8 }}>
                  Orqaga
                </Button>
              )}
              {current < 2 && (
                <Button type="primary" onClick={next}>
                  Keyingi
                </Button>
              )}
              {current === 2 && (
                <Button type="primary" htmlType="submit">
                  Saqlash
                </Button>
              )}
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
