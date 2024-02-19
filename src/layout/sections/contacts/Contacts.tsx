import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";
import React, { ElementRef } from "react";
import emailjs from "@emailjs/browser";

export const Contacts: React.FC = () => {
  const form = React.useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_wkljfmd", "template_s8iyfaw", form.current, {
        publicKey: "2P7is63EiAa5t27Mh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <S.StyledContacts id={"contact"}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.StyledForm ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder={"name"} name={"user_name"} />
          <S.Field required placeholder={"email"} name={"email"} />
          <S.Field required placeholder={"subject"} name={"subject"} />
          <S.Field
            required
            placeholder={"message"}
            as={"textarea"}
            name={"message"}
          />
          <Button type={"submit"}>Send message</Button>
        </S.StyledForm>
      </Container>
    </S.StyledContacts>
  );
};
