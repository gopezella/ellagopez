import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "antd";
import axios from "axios";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinFilled,
  FacebookFilled,
  EnvironmentOutlined,
  PhoneOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";

import profile from "../../assets/profile.jpeg";
import "./Contact.css";

export default function Contact(props) {
  const state = useSelector((state) => state);
  const [form] = Form.useForm();
  const url =
    "https://email-sender-nodejs-nodemailer.herokuapp.com/api/v1/send-email";
  const [result, setResult] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [data, setData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const sendEmail = () => {
    setIsSuccessful(false);
    setResult("");
    setIsLoading(true);
    axios
      .post(url, {
        email: data.email,
        name: data.name,
        message: data.message,
      })
      .then((res) => {
        setData({
          email: "",
          name: "",
          message: "",
        });
        form.resetFields();
        setIsLoading(false);
        setIsSuccessful(true);
        setResult(res.data.message);
      });
  };

  const clear = () => {
    setIsSuccessful(false);
    setResult("");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <h1 className="contactHeader" id="contactHeader">
            CONTACT
          </h1>
          <div className="contactContent">
            <div
              className={
                "formContainer " + (state.toggleDarkTheme ? "dark" : "light")
              }
            >
              <h1 className="formHeader">Let's get in touch</h1>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                // onSubmit={sendEmail}
                form={form}
                onFinish={sendEmail}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input
                    onChange={handleChange}
                    value={data.name}
                    id="name"
                    placeholder="Name"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Invalid Email",
                    },
                    {
                      required: true,
                      message: "Please enter your email",
                    },
                  ]}
                >
                  <Input
                    onChange={handleChange}
                    value={data.email}
                    id="email"
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  name="intro"
                  rules={[{ required: true, message: "Enter your message" }]}
                >
                  <Input.TextArea
                    onChange={handleChange}
                    value={data.message}
                    id="message"
                    showCount
                    maxLength={100}
                    rows={5}
                    placeholder="Message"
                  />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 16 }}>
                  <Button
                    htmlType="submit"
                    className="contactFormButton"
                    onClick={clear}
                  >
                    {isLoading ? "Sending.." : "Submit"}
                  </Button>
                  {isSuccessful ? (
                    <p className="successMessage">
                      <CheckCircleTwoTone twoToneColor="#52c41a" /> {result}
                    </p>
                  ) : (
                    ""
                  )}
                </Form.Item>
              </Form>
            </div>

            <div
              className={
                "informationContainer " +
                (state.toggleDarkTheme ? "dark" : "light")
              }
            >
              <div className="informationContent">
                <div className="information">
                  <div className="profileHead">
                    <img src={profile} alt="Profile" />
                    <h2>Ella Gopez</h2>
                    <p>Frontend Developer</p>
                  </div>

                  <p className="personalInfoItem">
                    <MailOutlined />
                    <span>gopezellam@gmail.com</span>
                  </p>
                  <p className="personalInfoItem">
                    <PhoneOutlined />
                    <span>09999876621</span>
                  </p>
                  <p className="personalInfoItem">
                    <EnvironmentOutlined />
                    <span>Pampanga, Philippines</span>
                  </p>
                  <div className="contactSocialLinksContainer">
                    <h3>Connect:</h3>
                    <ul className="contactSocialLinks">
                      <li>
                        <a href="mailto:gopezellam@gmail.com">
                          <MailOutlined />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/gopezella"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GithubOutlined />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/ellagopez/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <LinkedinFilled />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/gopezella/"
                          target="_blank"
                          without
                          rel="noreferrer"
                        >
                          <FacebookFilled />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
