import { useChatStore, useThemeStore } from "@/store/useChatStore";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { ChevronLeft, Images, SendHorizontal, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Chat } from "../ui/Chat";
import { useUserStore } from "@/hooks/useUserData";

export const A_Chat_mobile = ({ btn }: { btn: React.ReactNode }) => {
  const user = useUserStore((state) => state.user);
  const {
    tid,
    messages,
    setTid,
    loadChatHistory,
    sendChatMessage,
    addMessage,
  } = useChatStore();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { theme } = useThemeStore();
  const [show, setShow] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [fileName, setFileName] = useState("");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && user?.csrf) {
      setTid(user.uid);
      loadChatHistory(user.csrf);
      const intervalId = setInterval(() => {
        loadChatHistory(user.csrf);
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [isOpen, user?.csrf, setTid, loadChatHistory]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !user?.csrf) return;
    await sendChatMessage(user.csrf, newMessage);
    addMessage({
      tid: tid || "",
      text: "@" + fileName ? fileName : newMessage,
      time: Date.now(),
      status: 0,
      sender: "me",
    });
    setNewMessage("");
  };
  const DeleteChat = () => {
    setNewMessage("");
    setShow(!show);
    setShowCancel(!showCancel);
    onClose();
  };
  return (
    <>
      <Button
        onPress={onOpen}
        className={`p-0 m-0 h-full rounded-full flex items-center justify-center bg-transparent`}
        disableAnimation={true}
      >
        {btn}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "z-[9999] rounded-0 m-0 xl:rounded-[50px] bg-[#fff] dark:bg-[#0C0C0C] w-full",
          wrapper: "z-[9999999]",
          closeButton: "hidden",
          backdrop: "bg-transparent ",
        }}
        size="full"
      >
        <ModalContent className="pt-[26px] px-[20px]">
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center justify-between w-full">
                <ChevronLeft onClick={onClose} />
                <h1 className="text-[24px] dark:text-[#fff] text-[#3A3939]">
                  Support Chat
                </h1>
                <X onClick={onClose} />
              </ModalHeader>
              <ModalBody className="flex flex-col items-center justify-between min-h-[522px] px-0 !m-0">
                <div className="flex flex-col items-center gap-[26px]">
                  <Image
                    src={
                      theme === "dark"
                        ? "/footer/logo.svg"
                        : "/footer/logo_for_light.svg"
                    }
                    width={124}
                    height={52}
                    priority
                    alt="Chat icon"
                  />
                  <span className="text-[18px] dark:text-[#FFFFFF66] text-[#3A3939] font-medium">
                    Your assistant in any questions{" "}
                  </span>
                </div>

                <>
                  {!show ? (
                    <div className="flex flex-col items-center w-full rounded-[30px] bg-[#7676801F] px-[24px] py-[25px]">
                      <span
                        onClick={() => setShow((prev) => !prev)}
                        className="text-[15px] font-medium cursor-pointer dark:text-[#fff] text-[#3A3939]"
                      >
                        English
                      </span>
                      <Divider className="mt-[16px] mb-[12px]" />
                      <span
                        onClick={() => setShow((prev) => !prev)}
                        className="text-[15px] font-medium cursor-pointer dark:text-[#fff] text-[#3A3939]"
                      >
                        Russian
                      </span>
                      <Divider className="mt-[16px] mb-[12px]" />
                      <span
                        onClick={() => setShow((prev) => !prev)}
                        className="text-[15px] font-medium cursor-pointer dark:text-[#fff] text-[#3A3939]"
                      >
                        العربية
                      </span>
                      <Divider className="mt-[16px] mb-[12px]" />
                      <span
                        onClick={() => setShow((prev) => !prev)}
                        className="text-[15px] font-medium cursor-pointer dark:text-[#fff] text-[#3A3939]"
                      >
                        中文
                      </span>
                    </div>
                  ) : (
                    <>
                      {!showCancel ? (
                        <div className="md:max-h-[450px] max-h-[524px] overflow-y-auto w-full">
                          {messages.map((msg, index) => {
                            const decoded = msg.text;
                            const isAdmin = decoded.startsWith("#");
                            const isUser = decoded.startsWith("@");
                            const displayText = decoded.substring(1);
                            return (
                              <div
                                key={index}
                                className={`flex items-center w-full gap-2 mb-4 ${
                                  isUser ? "justify-end" : "justify-start"
                                }`}
                              >
                                {isAdmin && (
                                  <Image
                                    src="/chat/operator.svg"
                                    width={40}
                                    height={40}
                                    priority
                                    alt="Operator icon"
                                  />
                                )}
                                <div className="flex items-end gap-[5px]">
                                  <span className="text-base font-medium p-2 bg-[#7676801F] rounded-[35px] max-w-[256px] break-words">
                                    {displayText}
                                  </span>
                                  <span className="text-xs text-[#888888]">
                                    {new Date(msg.time).toLocaleTimeString()}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                          <div ref={messagesEndRef} />
                          {/* <div className="BOT flex flex-wrap gap-[7px] items-center mb-[20px]">
                            <button className="bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]">
                              Account security
                            </button>
                            <button className="bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]">
                              Swap
                            </button>
                            <button className="bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]">
                              Account security
                            </button>
                            <button className="bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]">
                              Swap
                            </button>
                            <button className="bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]">
                              Account security
                            </button>
                            <button className="bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]">
                              Swap
                            </button>
                            <button className="bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]">
                              Account security
                            </button>
                            <button className="bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]">
                              Swap
                            </button>
                          </div> */}
                          <div className="flex items-center gap-[10px] w-full pb-[.5rem]">
                            {/* <A_ChatUploader
															setFileName={setFileName}
															onFileUploaded={(filename: string) => {
																addMessage({
																	tid: tid || '',
																	text: '@' + filename,
																	time: Date.now(),
																	status: 0,
																	sender: 'me',
																})
															}}
														/> */}
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                handleSendMessage();
                              }}
                              className="relative flex items-center gap-[10px] w-full pb-[.5rem]"
                            >
                              <input
                                type="text"
                                value={newMessage}
                                autoFocus
                                onChange={(e) => setNewMessage(e.target.value)}
                                className="flex-1 border px-[25px] pr-[59px] py-4 rounded-[30px] bg-[#7676801F] w-full overflow-hidden"
                              />
                              <button
                                type="submit"
                                className="w-fit !m-0 !p-0 absolute top-[11px] right-[18px] bg-transparent"
                              >
                                <SendHorizontal
                                  strokeWidth={1}
                                  className="w-[32px] h-[32px]"
                                />
                              </button>
                            </form>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center w-full rounded-[30px] gap-[10px] bg-[#7676801F] py-[10px] px-[14px]">
                          <span className="text-[15px] dark:text-[#EFEFEF] text-[#3A3939] font-medium">
                            Are you sure you want to end chat?
                          </span>
                          <Button
                            className="dark:text-[#EFEFEF] text-[#3A3939] text-[18px] font-semibold bg-[#EEEEEE] dark:bg-[#000] w-full rounded-[20px] py-[8px]"
                            onPress={DeleteChat}
                          >
                            End Chat
                          </Button>
                          <Button
                            className="dark:text-[#FFFFFF66] text-[#3A3939] text-[18px] font-semibold bg-transparent dark:bg-transparent w-full py-[8px]"
                            disableAnimation
                            onPress={() => setShowCancel(!showCancel)}
                          >
                            Cancel
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
