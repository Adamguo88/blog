"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { MenuProps } from "antd";
import { Menu, Row, Col } from "antd";

export default function App() {
  const [current, setCurrent] = useState("/");
  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    router.push(e.key);
  };

  const testFunc = () => {
    const items: MenuProps["items"] = [
      {
        label: "首頁",
        key: "/",
      },
      {
        label: "留言",
        key: "message",
      },
    ];
    return items;
  };

  return (
    <Row>
      <Col span={24}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={testFunc()} theme="dark" />
      </Col>
    </Row>
  );
}
