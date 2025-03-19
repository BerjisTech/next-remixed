import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full relative bg-accent-light flex gap-16 justify-center dark:bg-dark pb-40">
      <div className="h-[1788px] top-[134px] relative flex-col justify-center items-start gap-4 inline-flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex mb-12">
          <div className="grow shrink basis-0 h-16 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 self-stretch p-4 bg-accent rounded-custom shadow border border-accent flex-col justify-start items-center gap-4 inline-flex overflow-hidden">
              <div className="relative w-full h-16">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary text-2xl font-semibold font-['Poppins'] leading-loose">
                    WIWO: What I'm working on
                  </div>
                </div>
                <div className="absolute w-full h-full bg-gradient-to-r from-[#2e6969] to-secondary rounded-custom blur-sm opacity-20"></div>
                <div className="w-[170.77px] h-[170.77px] left-[-74.23px] top-[-64px] absolute origin-top-left rotate-[5.30deg] bg-gradient-to-l from-[#2e6969] to-secondary rounded-full blur-[5px]"></div>
                <div className="w-[135.70px] h-[135.70px] left-[41.05px] top-[-59px] absolute origin-top-left rotate-1 bg-gradient-to-l from-[#2e6969] to-secondary rounded-full blur-[2px]"></div>
                <div className="w-[136px] h-[136px] left-0 top-[29.10px] absolute bg-gradient-to-tr from-[#387777] to-[#6ed8d8] rounded-full blur-[2px]"></div>
                <div className="w-[135px] h-[136px] left-[79px] top-[18.10px] absolute bg-gradient-to-tr from-[#2e6969] to-secondary rounded-full blur-[3px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[1624px] bg-white rounded-custom shadow border border-[#eaecf0] flex-col justify-start items-start gap-3 flex dark:bg-black">
          <div className="self-stretch h-[72px] p-4 bg-white shadow border border-accent-light flex-col justify-start items-start gap-3 flex dark:bg-black">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="self-stretch px-4 py-2 bg-primary rounded-xl justify-start items-center gap-2 flex">
                  <div className="text-white text-sm font-medium font-['Poppins'] leading-tight">
                    All posts
                  </div>
                </div>
                <div className="h-10 px-4 py-2 bg-accent-light rounded-xl justify-start items-center gap-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 18V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V18M5.5 21C4.11929 21 3 19.8807 3 18.5V16.5C3 15.1193 4.11929 14 5.5 14C6.88071 14 8 15.1193 8 16.5V18.5C8 19.8807 6.88071 21 5.5 21ZM18.5 21C17.1193 21 16 19.8807 16 18.5V16.5C16 15.1193 17.1193 14 18.5 14C19.8807 14 21 15.1193 21 16.5V18.5C21 19.8807 19.8807 21 18.5 21Z"
                      stroke="#667085"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="text-dark-blue-hue text-sm font-normal font-['Poppins'] leading-tight">
                    Interpreting
                  </div>
                </div>
                <div className="h-10 px-4 py-2 bg-accent-light rounded-xl justify-start items-center gap-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 8L10 13M4 14L10 8L12 5M2 5H14M7 2H8M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21"
                      stroke="#667085"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="text-dark-blue-hue text-sm font-normal font-['Poppins'] leading-tight">
                    Translation
                  </div>
                </div>
                <div className="h-10 px-4 py-2 bg-accent-light rounded-xl justify-start items-center gap-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14 11H8M10 15H8M16 7H8M20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8Z"
                      stroke="#667085"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="text-dark-blue-hue text-sm font-normal font-['Poppins'] leading-tight">
                    Subtitling
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9849 5.09277C15.5649 5.09277 18.4769 8.00477 18.4769 11.5848C18.4769 13.2738 17.8287 14.8143 16.768 15.9704L18.8551 18.0532C19.0505 18.2486 19.0511 18.5646 18.8558 18.7599C18.7585 18.8586 18.6298 18.9072 18.5018 18.9072C18.3745 18.9072 18.2465 18.8586 18.1485 18.7612L16.0361 16.6548C14.9249 17.5447 13.516 18.0774 11.9849 18.0774C8.40485 18.0774 5.49219 15.1648 5.49219 11.5848C5.49219 8.00477 8.40485 5.09277 11.9849 5.09277ZM11.9849 6.09277C8.95619 6.09277 6.49219 8.55611 6.49219 11.5848C6.49219 14.6134 8.95619 17.0774 11.9849 17.0774C15.0129 17.0774 17.4769 14.6134 17.4769 11.5848C17.4769 8.55611 15.0129 6.09277 11.9849 6.09277Z"
                    fill="#98A2B3"
                  />
                </svg>
                <div className="justify-start items-center gap-1 flex">
                  <div className="px-3 py-1.5 bg-accent rounded-xl justify-start items-center gap-2.5 flex">
                    <div className="justify-start items-center gap-1 flex">
                      <div className="text-[#98a1b2] text-xs font-normal font-['Poppins'] leading-[18px]">
                        Last 24hrs
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18 9L12 15L6 9"
                          stroke="#98A2B3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch pr-2 justify-start items-start inline-flex">
            <div className="grow shrink basis-0 pl-4 pr-2 pb-4 bg-white flex-col justify-start items-start gap-3 inline-flex dark:bg-black">
              <div className="self-stretch h-[1524px] flex-col justify-start items-start gap-4 flex dark:bg-black">
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="h-[164px] p-4 rounded-custom justify-start items-start gap-2 flex">
                    <div className="pt-4 flex-col justify-start items-center gap-1 inline-flex">
                      <Image
                        className="w-16 h-[64.60px] rounded-full border border-accent"
                        src="/next/next_assets/images/green-logo.png"
                        alt="pstamp.png"
                        width={64} // w-16 = 64px
                        height={64.6} // h-[64.60px] = 64.6px
                      />
                    </div>
                    <div className="grow shrink basis-0 p-4 rounded-xl flex-col justify-start items-start gap-2 inline-flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-4 flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-primary text-sm font-medium font-['Poppins'] leading-tight">
                                ProZ updates
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-start items-center gap-4 flex">
                          <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                            5 mins
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-white text-base font-normal font-['Poppins']">
                              🎉
                            </div>
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              589
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[72px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch py-2 justify-center items-center gap-2.5 inline-flex">
                          <div className="grow shrink basis-0 text-dark-blue-hue text-sm font-normal font-['Poppins'] leading-tight dark:text-white">
                            ProZ just posted a 50% promotional offer on Business Plus Membership!
                          </div>
                        </div>
                        <div className="self-stretch justify-start items-center gap-2 inline-flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="h-8 px-2 py-1 bg-accent rounded-[9px] border border-accent justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  Pro Bono
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  {" "}
                                  project
                                </span>
                              </div>
                              <div className="w-6 h-6 justify-center items-center flex">
                                <Image
                                  className="w-[28.92px] h-[26.72px]"
                                  src="/next/next_assets/images/probono-logo.png"
                                  alt="pstamp.png"
                                  width={28.92}
                                  height={26.72}
                                />
                              </div>
                            </div>
                            <div className="px-3 py-1 bg-accent rounded-[9px] border border-accent justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  Pays via{" "}
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  ProZ*Pay
                                </span>
                              </div>
                              <div className="w-6 h-6 px-0.5 pt-[5.21px] pb-[4.21px] justify-center items-center flex">
                                <Image
                                  className="w-5 h-[14.58px]"
                                  src="/next/next_assets/images/proz-pay.svg"
                                  alt="pstamp.png"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="h-44 px-4 py-3 rounded-custom justify-start items-start gap-2 flex">
                    <div className="pt-4 flex-col justify-start items-center gap-1 inline-flex">
                      <div className="w-[72px] h-[72px] rounded-full border-2 border-secondary overflow-hidden justify-center items-center inline-flex">
                        <Image
                          className="w-full h-full object-cover"
                          src="/next/next_assets/images/cassandra.jpg"
                          alt="pstamp.png"
                          width={14}
                          height={14}
                        />
                      </div>
                      <div className="justify-start items-center gap-1 inline-flex">
                        <div className="w-[17.78px] h-[18.04px] pl-[1.59px] pr-[1.37px] pt-[1.59px] pb-[1.64px] flex-col justify-center items-center inline-flex">
                          <Image
                            className="w-[14.81px] h-[14.81px]"
                            src="/next/next_assets/images/pstamp.png"
                            alt="pstamp.png"
                            width={14}
                            height={14}
                          />
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.10938 11.8579L12.1997 16.1695L13.3285 13.6713L10.5528 9.84082L9.10938 11.8579Z"
                            fill="#172591"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.09375 13.6694L5.24105 16.149C7.3321 13.2252 9.44166 10.3015 11.5142 7.3777C12.3839 6.08236 12.532 5.17562 11.0886 2.86251C10.9527 2.62949 10.7913 2.41227 10.6075 2.21484L10.7925 2.4369C10.882 2.56065 10.9508 2.69815 10.9961 2.84401C11.2921 3.80626 9.29362 6.47097 8.71997 7.28518C7.18406 9.43175 5.64816 11.5228 4.09375 13.6694Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.31346 6.74929C7.83233 6.0461 7.29569 5.30591 6.9441 4.54721C6.81456 4.28814 6.48148 3.62196 6.42596 3.30738C6.38907 3.15538 6.38907 2.99676 6.42596 2.84476C6.46892 2.71862 6.53136 2.59999 6.61101 2.49316C6.5635 2.5517 6.52022 2.61354 6.48148 2.67821C4.79753 5.10235 5.01959 6.13862 5.8153 7.32294L6.87008 8.74781L8.31346 6.74929Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.79615 1.9006C8.37638 1.88103 7.95572 1.8934 7.53782 1.93761L7.24174 2.19668C7.14706 2.30097 7.06045 2.41232 6.98267 2.52977L6.85314 2.82584C6.82804 2.91613 6.82174 3.0106 6.83464 3.10342C6.84276 3.23422 6.86133 3.36417 6.89015 3.49202C6.90423 3.56707 6.92277 3.64122 6.94566 3.71408C8.11558 3.52297 9.30824 3.51672 10.4801 3.69557C10.5034 3.62911 10.5219 3.56109 10.5356 3.49202C10.5722 3.37205 10.5909 3.24734 10.5911 3.12192C10.6057 3.02918 10.5994 2.93433 10.5726 2.84435C10.5422 2.73469 10.4987 2.62908 10.4431 2.52977C10.3653 2.41232 10.2787 2.30097 10.184 2.19668L9.86944 1.9191L8.79615 1.9006Z"
                            fill="#172591"
                          />
                        </svg>
                      </div>
                      <div className="justify-start items-center gap-0.5 inline-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                            stroke="#667085"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                          Save
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 p-4 rounded-xl flex-col justify-start items-start gap-2 inline-flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-4 flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-primary text-sm font-medium font-['Poppins'] leading-tight">
                                Cassandra Runte
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              Brazil
                            </div>
                            <div className="w-4 h-3 rounded-sm justify-center items-center flex">
                              <div className="w-4 h-3 relative">
                                <div className="w-[0.34px] h-[0.36px] left-[5.41px] top-[4.60px] absolute"></div>
                                <div className="w-[0.31px] h-[0.35px] left-[5.82px] top-[4.61px] absolute"></div>
                                <div className="w-[0.30px] h-[0.36px] left-[6.21px] top-[4.63px] absolute"></div>
                                <div className="w-[0.32px] h-[0.36px] left-[7.94px] top-[4.92px] absolute"></div>
                                <div className="w-[0.36px] h-[0.44px] left-[8.27px] top-[5.02px] absolute"></div>
                                <div className="w-[0.35px] h-[0.37px] left-[8.66px] top-[5.21px] absolute"></div>
                                <div className="w-[0.38px] h-[0.45px] left-[9.36px] top-[5.52px] absolute"></div>
                                <div className="w-[0.36px] h-[0.37px] left-[10.62px] top-[6.38px] absolute"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-start items-center gap-4 flex">
                          <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                            2 mins
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-white text-base font-normal font-['Poppins']">
                              🎉
                            </div>
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              56
                            </div>
                          </div>
                          <div className="justify-start items-center gap-0.5 flex">
                            <div className="text-dark-blue-hue text-xs font-medium font-['Poppins'] leading-[18px]">
                              More
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                                stroke="#667085"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[92px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch py-2 justify-center items-center gap-2.5 inline-flex">
                          <div className="grow shrink basis-0 text-dark-blue-hue text-sm font-normal font-['Poppins'] leading-tight dark:text-white">
                            Just completed an order for translation of pharmaceutical government
                            regulations from Indonesian to English with a volume of more than 7000
                            words.
                          </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="h-8 px-2 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  Pro Bono
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  {" "}
                                  project
                                </span>
                              </div>
                              <div className="w-6 h-6 justify-center items-center flex">
                                <Image
                                  className="w-[28.92px] h-[26.72px]"
                                  src="/next/next_assets/images/probono-logo.png"
                                  alt="probono-logo.svg"
                                  height={28}
                                  width={26}
                                />
                              </div>
                            </div>
                            <div className="px-3 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  Gets paid via{" "}
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  ProZ*Pay
                                </span>
                              </div>
                              <div className="w-6 h-6 px-0.5 pt-[5.21px] pb-[4.21px] justify-center items-center flex">
                                <Image
                                  className="w-5 h-[14.58px]"
                                  src="/next/next_assets/images/proz-pay.svg"
                                  alt="proz-pay.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Medical
                              </div>
                            </div>
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Trados
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="h-48 px-4 py-3 justify-start items-start gap-4 flex">
                    <div className="pt-4 flex-col justify-start items-center gap-1 inline-flex">
                      <div className="w-[72px] h-[72px] rounded-full border-2 border-secondary overflow-hidden justify-center items-center inline-flex">
                        <Image
                          className="w-full h-full object-cover"
                          src="/next/next_assets/images/cassandra.jpg"
                          alt="cassandra.jpg"
                          height={72}
                          width={72}
                        />
                      </div>
                      <div className="justify-start items-center gap-1 inline-flex">
                        <div className="w-[17.78px] h-[18.04px] pl-[1.59px] pr-[1.37px] pt-[1.59px] pb-[1.64px] flex-col justify-center items-center inline-flex">
                          <Image
                            className="w-[14.81px] h-[14.81px]"
                            src="/next/next_assets/images/pstamp.png"
                            alt="pstamp.png"
                            width={14}
                            height={14}
                          />
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.10938 11.8579L12.1997 16.1695L13.3285 13.6713L10.5528 9.84082L9.10938 11.8579Z"
                            fill="#172591"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.09375 13.6694L5.24105 16.149C7.3321 13.2252 9.44166 10.3015 11.5142 7.3777C12.3839 6.08236 12.532 5.17562 11.0886 2.86251C10.9527 2.62949 10.7913 2.41227 10.6075 2.21484L10.7925 2.4369C10.882 2.56065 10.9508 2.69815 10.9961 2.84401C11.2921 3.80626 9.29362 6.47097 8.71997 7.28518C7.18406 9.43175 5.64816 11.5228 4.09375 13.6694Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.31346 6.74929C7.83233 6.0461 7.29569 5.30591 6.9441 4.54721C6.81456 4.28814 6.48148 3.62196 6.42596 3.30738C6.38907 3.15538 6.38907 2.99676 6.42596 2.84476C6.46892 2.71862 6.53136 2.59999 6.61101 2.49316C6.5635 2.5517 6.52022 2.61354 6.48148 2.67821C4.79753 5.10235 5.01959 6.13862 5.8153 7.32294L6.87008 8.74781L8.31346 6.74929Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.79615 1.9006C8.37638 1.88103 7.95572 1.8934 7.53782 1.93761L7.24174 2.19668C7.14706 2.30097 7.06045 2.41232 6.98267 2.52977L6.85314 2.82584C6.82804 2.91613 6.82174 3.0106 6.83464 3.10342C6.84276 3.23422 6.86133 3.36417 6.89015 3.49202C6.90423 3.56707 6.92277 3.64122 6.94566 3.71408C8.11558 3.52297 9.30824 3.51672 10.4801 3.69557C10.5034 3.62911 10.5219 3.56109 10.5356 3.49202C10.5722 3.37205 10.5909 3.24734 10.5911 3.12192C10.6057 3.02918 10.5994 2.93433 10.5726 2.84435C10.5422 2.73469 10.4987 2.62908 10.4431 2.52977C10.3653 2.41232 10.2787 2.30097 10.184 2.19668L9.86944 1.9191L8.79615 1.9006Z"
                            fill="#172591"
                          />
                        </svg>
                      </div>
                      <div className="justify-start items-center gap-0.5 inline-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                            stroke="#667085"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                          Save
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 p-4 rounded-xl flex-col justify-start items-start gap-2 inline-flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-4 flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-primary text-sm font-medium font-['Poppins'] leading-tight">
                                Cassandra Runte
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              Brazil
                            </div>
                            <div className="w-4 h-3 rounded-sm justify-center items-center flex">
                              <div className="w-4 h-3 relative">
                                <div className="w-[0.34px] h-[0.36px] left-[5.41px] top-[4.60px] absolute"></div>
                                <div className="w-[0.31px] h-[0.35px] left-[5.82px] top-[4.61px] absolute"></div>
                                <div className="w-[0.30px] h-[0.36px] left-[6.21px] top-[4.63px] absolute"></div>
                                <div className="w-[0.32px] h-[0.36px] left-[7.94px] top-[4.92px] absolute"></div>
                                <div className="w-[0.36px] h-[0.44px] left-[8.27px] top-[5.02px] absolute"></div>
                                <div className="w-[0.35px] h-[0.37px] left-[8.66px] top-[5.21px] absolute"></div>
                                <div className="w-[0.38px] h-[0.45px] left-[9.36px] top-[5.52px] absolute"></div>
                                <div className="w-[0.36px] h-[0.37px] left-[10.62px] top-[6.38px] absolute"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-start items-center gap-4 flex">
                          <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                            2 mins
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-white text-base font-normal font-['Poppins']">
                              🎉
                            </div>
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              56
                            </div>
                          </div>
                          <div className="justify-start items-center gap-0.5 flex">
                            <div className="text-dark-blue-hue text-xs font-medium font-['Poppins'] leading-[18px]">
                              More
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                                stroke="#667085"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[108px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch py-2 justify-center items-center gap-2.5 flex">
                          <div className="grow shrink basis-0 h-14 p-2 bg-accent rounded-xl border border-accent justify-between items-center flex">
                            <div className="justify-start items-center gap-2 flex flex-grow">
                              <div className="p-2.5 bg-[#12b669] rounded-[10px] justify-start items-center gap-[3.33px] flex">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_7258_22622)">
                                    <path
                                      d="M11.7094 5.00033C12.5233 5.15913 13.2713 5.55721 13.8577 6.1436C14.4441 6.73 14.8422 7.47805 15.001 8.29199M11.7094 1.66699C13.4004 1.85486 14.9773 2.61214 16.1812 3.8145C17.3851 5.01686 18.1444 6.59283 18.3344 8.28366M8.5235 11.5529C7.52219 10.5516 6.73153 9.41937 6.15153 8.21135C6.10164 8.10744 6.0767 8.05549 6.05753 7.98974C5.98943 7.75612 6.03835 7.46923 6.18003 7.27138C6.21989 7.2157 6.26752 7.16807 6.36278 7.07281C6.65412 6.78147 6.79979 6.6358 6.89503 6.48932C7.25419 5.93691 7.25419 5.22476 6.89503 4.67235C6.79979 4.52587 6.65412 4.3802 6.36278 4.08886L6.20039 3.92647C5.75752 3.4836 5.53609 3.26217 5.29827 3.14188C4.8253 2.90266 4.26675 2.90266 3.79378 3.14188C3.55596 3.26217 3.33453 3.4836 2.89166 3.92647L2.7603 4.05783C2.31895 4.49919 2.09827 4.71986 1.92973 5.01989C1.74271 5.35281 1.60825 5.86989 1.60938 6.25174C1.61041 6.59586 1.67716 6.83105 1.81067 7.30142C2.52814 9.82925 3.88187 12.2145 5.87185 14.2045C7.86184 16.1945 10.2471 17.5482 12.775 18.2657C13.2453 18.3992 13.4805 18.466 13.8246 18.467C14.2065 18.4681 14.7236 18.3337 15.0565 18.1467C15.3565 17.9781 15.5772 17.7574 16.0186 17.3161L16.1499 17.1847C16.5928 16.7419 16.8142 16.5204 16.9345 16.2826C17.1737 15.8096 17.1737 15.2511 16.9345 14.7781C16.8142 14.5403 16.5928 14.3189 16.1499 13.876L15.9875 13.7136C15.6962 13.4223 15.5505 13.2766 15.404 13.1814C14.8516 12.8222 14.1395 12.8222 13.5871 13.1814C13.4406 13.2766 13.2949 13.4223 13.0036 13.7136C12.9083 13.8089 12.8607 13.8565 12.805 13.8964C12.6072 14.038 12.3203 14.087 12.0866 14.0189C12.0209 13.9997 11.9689 13.9747 11.865 13.9249C10.657 13.3449 9.52482 12.5542 8.5235 11.5529Z"
                                      stroke="white"
                                      strokeWidth="1.66667"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_7258_22622">
                                      <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div className="text-primary text-base font-semibold font-['Poppins'] leading-normal mr-4">
                                Cassandra is on an interpreting call
                              </div>
                            </div>
                            <div className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px] ml-auto">
                              Learn more about calls
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="px-3 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  Gets paid via{" "}
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  ProZ*Pay
                                </span>
                              </div>
                              <div className="w-6 h-6 px-0.5 pt-[5.21px] pb-[4.21px] justify-center items-center flex">
                                <Image
                                  className="w-5 h-[14.58px]"
                                  src="/next/next_assets/images/proz-pay.svg"
                                  alt="pstamp.png"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Medical
                              </div>
                            </div>
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Trados
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="h-44 px-4 py-3 rounded-custom justify-start items-start gap-2 flex">
                    <div className="pt-4 flex-col justify-start items-center gap-1 inline-flex">
                      <div className="w-[72px] h-[72px] rounded-full border-2 border-secondary overflow-hidden justify-center items-center inline-flex">
                        <Image
                          className="w-full h-full object-cover"
                          src="/next/next_assets/images/cassandra.jpg"
                          alt="pstamp.png"
                          width={14}
                          height={14}
                        />
                      </div>
                      <div className="justify-start items-center gap-1 inline-flex">
                        <div className="w-[17.78px] h-[18.04px] pl-[1.59px] pr-[1.37px] pt-[1.59px] pb-[1.64px] flex-col justify-center items-center inline-flex">
                          <Image
                            className="w-[14.81px] h-[14.81px]"
                            src="/next/next_assets/images/pstamp.png"
                            alt="pstamp.png"
                            width={14}
                            height={14}
                          />
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.10938 11.8579L12.1997 16.1695L13.3285 13.6713L10.5528 9.84082L9.10938 11.8579Z"
                            fill="#172591"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.09375 13.6694L5.24105 16.149C7.3321 13.2252 9.44166 10.3015 11.5142 7.3777C12.3839 6.08236 12.532 5.17562 11.0886 2.86251C10.9527 2.62949 10.7913 2.41227 10.6075 2.21484L10.7925 2.4369C10.882 2.56065 10.9508 2.69815 10.9961 2.84401C11.2921 3.80626 9.29362 6.47097 8.71997 7.28518C7.18406 9.43175 5.64816 11.5228 4.09375 13.6694Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.31346 6.74929C7.83233 6.0461 7.29569 5.30591 6.9441 4.54721C6.81456 4.28814 6.48148 3.62196 6.42596 3.30738C6.38907 3.15538 6.38907 2.99676 6.42596 2.84476C6.46892 2.71862 6.53136 2.59999 6.61101 2.49316C6.5635 2.5517 6.52022 2.61354 6.48148 2.67821C4.79753 5.10235 5.01959 6.13862 5.8153 7.32294L6.87008 8.74781L8.31346 6.74929Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.79615 1.9006C8.37638 1.88103 7.95572 1.8934 7.53782 1.93761L7.24174 2.19668C7.14706 2.30097 7.06045 2.41232 6.98267 2.52977L6.85314 2.82584C6.82804 2.91613 6.82174 3.0106 6.83464 3.10342C6.84276 3.23422 6.86133 3.36417 6.89015 3.49202C6.90423 3.56707 6.92277 3.64122 6.94566 3.71408C8.11558 3.52297 9.30824 3.51672 10.4801 3.69557C10.5034 3.62911 10.5219 3.56109 10.5356 3.49202C10.5722 3.37205 10.5909 3.24734 10.5911 3.12192C10.6057 3.02918 10.5994 2.93433 10.5726 2.84435C10.5422 2.73469 10.4987 2.62908 10.4431 2.52977C10.3653 2.41232 10.2787 2.30097 10.184 2.19668L9.86944 1.9191L8.79615 1.9006Z"
                            fill="#172591"
                          />
                        </svg>
                      </div>
                      <div className="justify-start items-center gap-0.5 inline-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                            stroke="#667085"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                          Save
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 p-4 rounded-xl flex-col justify-start items-start gap-2 inline-flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-4 flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-primary text-sm font-medium font-['Poppins'] leading-tight">
                                Cassandra Runte
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              Brazil
                            </div>
                            <div className="w-4 h-3 rounded-sm justify-center items-center flex">
                              <div className="w-4 h-3 relative">
                                <div className="w-[0.34px] h-[0.36px] left-[5.41px] top-[4.60px] absolute"></div>
                                <div className="w-[0.31px] h-[0.35px] left-[5.82px] top-[4.61px] absolute"></div>
                                <div className="w-[0.30px] h-[0.36px] left-[6.21px] top-[4.63px] absolute"></div>
                                <div className="w-[0.32px] h-[0.36px] left-[7.94px] top-[4.92px] absolute"></div>
                                <div className="w-[0.36px] h-[0.44px] left-[8.27px] top-[5.02px] absolute"></div>
                                <div className="w-[0.35px] h-[0.37px] left-[8.66px] top-[5.21px] absolute"></div>
                                <div className="w-[0.38px] h-[0.45px] left-[9.36px] top-[5.52px] absolute"></div>
                                <div className="w-[0.36px] h-[0.37px] left-[10.62px] top-[6.38px] absolute"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-start items-center gap-4 flex">
                          <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                            2 mins
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-white text-base font-normal font-['Poppins']">
                              🎉
                            </div>
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              56
                            </div>
                          </div>
                          <div className="justify-start items-center gap-0.5 flex">
                            <div className="text-dark-blue-hue text-xs font-medium font-['Poppins'] leading-[18px]">
                              More
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                                stroke="#667085"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[92px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch py-2 justify-center items-center gap-2.5 inline-flex">
                          <div className="grow shrink basis-0 text-dark-blue-hue text-sm font-normal font-['Poppins'] leading-tight dark:text-white">
                            Just completed an order for translation of pharmaceutical government
                            regulations from Indonesian to English with a volume of more than 7000
                            words.
                          </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="h-8 px-2 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  Pro Bono
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  {" "}
                                  project
                                </span>
                              </div>
                              <div className="w-6 h-6 justify-center items-center flex">
                                <Image
                                  className="w-[28.92px] h-[26.72px]"
                                  src="/next/next_assets/images/probono-logo.png"
                                  alt="pstamp.png"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </div>
                            <div className="px-3 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  Gets paid via{" "}
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  ProZ*Pay
                                </span>
                              </div>
                              <div className="w-6 h-6 px-0.5 pt-[5.21px] pb-[4.21px] justify-center items-center flex">
                                <Image
                                  className="w-5 h-[14.58px]"
                                  src="/next/next_assets/images/proz-pay.svg"
                                  alt="pstamp.png"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Medical
                              </div>
                            </div>
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Trados
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="h-44 px-4 py-3 rounded-custom justify-start items-start gap-2 flex">
                    <div className="pt-4 flex-col justify-start items-center gap-1 inline-flex">
                      <div className="w-[72px] h-[72px] rounded-full border-2 border-secondary overflow-hidden justify-center items-center inline-flex">
                        <Image
                          className="w-full h-full object-cover"
                          src="/next/next_assets/images/cassandra.jpg"
                          alt="pstamp.png"
                          width={14}
                          height={14}
                        />
                      </div>
                      <div className="justify-start items-center gap-1 inline-flex">
                        <div className="w-[17.78px] h-[18.04px] pl-[1.59px] pr-[1.37px] pt-[1.59px] pb-[1.64px] flex-col justify-center items-center inline-flex">
                          <Image
                            className="w-[14.81px] h-[14.81px]"
                            src="/next/next_assets/images/pstamp.png"
                            alt="pstamp.png"
                            width={14}
                            height={14}
                          />
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.10938 11.8579L12.1997 16.1695L13.3285 13.6713L10.5528 9.84082L9.10938 11.8579Z"
                            fill="#172591"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.09375 13.6694L5.24105 16.149C7.3321 13.2252 9.44166 10.3015 11.5142 7.3777C12.3839 6.08236 12.532 5.17562 11.0886 2.86251C10.9527 2.62949 10.7913 2.41227 10.6075 2.21484L10.7925 2.4369C10.882 2.56065 10.9508 2.69815 10.9961 2.84401C11.2921 3.80626 9.29362 6.47097 8.71997 7.28518C7.18406 9.43175 5.64816 11.5228 4.09375 13.6694Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.31346 6.74929C7.83233 6.0461 7.29569 5.30591 6.9441 4.54721C6.81456 4.28814 6.48148 3.62196 6.42596 3.30738C6.38907 3.15538 6.38907 2.99676 6.42596 2.84476C6.46892 2.71862 6.53136 2.59999 6.61101 2.49316C6.5635 2.5517 6.52022 2.61354 6.48148 2.67821C4.79753 5.10235 5.01959 6.13862 5.8153 7.32294L6.87008 8.74781L8.31346 6.74929Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.79615 1.9006C8.37638 1.88103 7.95572 1.8934 7.53782 1.93761L7.24174 2.19668C7.14706 2.30097 7.06045 2.41232 6.98267 2.52977L6.85314 2.82584C6.82804 2.91613 6.82174 3.0106 6.83464 3.10342C6.84276 3.23422 6.86133 3.36417 6.89015 3.49202C6.90423 3.56707 6.92277 3.64122 6.94566 3.71408C8.11558 3.52297 9.30824 3.51672 10.4801 3.69557C10.5034 3.62911 10.5219 3.56109 10.5356 3.49202C10.5722 3.37205 10.5909 3.24734 10.5911 3.12192C10.6057 3.02918 10.5994 2.93433 10.5726 2.84435C10.5422 2.73469 10.4987 2.62908 10.4431 2.52977C10.3653 2.41232 10.2787 2.30097 10.184 2.19668L9.86944 1.9191L8.79615 1.9006Z"
                            fill="#172591"
                          />
                        </svg>
                      </div>
                      <div className="justify-start items-center gap-0.5 inline-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                            stroke="#667085"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                          Save
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 p-4 rounded-xl flex-col justify-start items-start gap-2 inline-flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-4 flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-primary text-sm font-medium font-['Poppins'] leading-tight">
                                Cassandra Runte
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              Brazil
                            </div>
                            <div className="w-4 h-3 rounded-sm justify-center items-center flex">
                              <div className="w-4 h-3 relative">
                                <div className="w-[0.34px] h-[0.36px] left-[5.41px] top-[4.60px] absolute"></div>
                                <div className="w-[0.31px] h-[0.35px] left-[5.82px] top-[4.61px] absolute"></div>
                                <div className="w-[0.30px] h-[0.36px] left-[6.21px] top-[4.63px] absolute"></div>
                                <div className="w-[0.32px] h-[0.36px] left-[7.94px] top-[4.92px] absolute"></div>
                                <div className="w-[0.36px] h-[0.44px] left-[8.27px] top-[5.02px] absolute"></div>
                                <div className="w-[0.35px] h-[0.37px] left-[8.66px] top-[5.21px] absolute"></div>
                                <div className="w-[0.38px] h-[0.45px] left-[9.36px] top-[5.52px] absolute"></div>
                                <div className="w-[0.36px] h-[0.37px] left-[10.62px] top-[6.38px] absolute"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-start items-center gap-4 flex">
                          <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                            2 mins
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-white text-base font-normal font-['Poppins']">
                              🎉
                            </div>
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              56
                            </div>
                          </div>
                          <div className="justify-start items-center gap-0.5 flex">
                            <div className="text-dark-blue-hue text-xs font-medium font-['Poppins'] leading-[18px]">
                              More
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                                stroke="#667085"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[92px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch py-2 justify-center items-center gap-2.5 inline-flex">
                          <div className="grow shrink basis-0 text-dark-blue-hue text-sm font-normal font-['Poppins'] leading-tight dark:text-white">
                            Just completed an order for translation of pharmaceutical government
                            regulations from Indonesian to English with a volume of more than 7000
                            words.
                          </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="h-8 px-2 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  Pro Bono
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  {" "}
                                  project
                                </span>
                              </div>
                              <div className="w-6 h-6 justify-center items-center flex">
                                <Image
                                  className="w-[28.92px] h-[26.72px]"
                                  src="/next/next_assets/images/probono-logo.png"
                                  alt="pstamp.png"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </div>
                            <div className="px-3 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  Gets paid via{" "}
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  ProZ*Pay
                                </span>
                              </div>
                              <div className="w-6 h-6 px-0.5 pt-[5.21px] pb-[4.21px] justify-center items-center flex">
                                <Image
                                  className="w-5 h-[14.58px]"
                                  src="/next/next_assets/images/proz-pay.svg"
                                  alt="pstamp.png"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Medical
                              </div>
                            </div>
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Trados
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="h-44 px-4 py-3 rounded-custom justify-start items-start gap-2 flex">
                    <div className="pt-4 flex-col justify-start items-center gap-1 inline-flex">
                      <div className="w-[72px] h-[72px] rounded-full border-2 border-secondary overflow-hidden justify-center items-center inline-flex">
                        <Image
                          className="w-full h-full object-cover"
                          src="/next/next_assets/images/cassandra.jpg"
                          alt="pstamp.png"
                          width={14}
                          height={14}
                        />
                      </div>
                      <div className="justify-start items-center gap-1 inline-flex">
                        <div className="w-[17.78px] h-[18.04px] pl-[1.59px] pr-[1.37px] pt-[1.59px] pb-[1.64px] flex-col justify-center items-center inline-flex">
                          <Image
                            className="w-[14.81px] h-[14.81px]"
                            src="/next/next_assets/images/pstamp.png"
                            alt="pstamp.png"
                            width={14}
                            height={14}
                          />
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.10938 11.8579L12.1997 16.1695L13.3285 13.6713L10.5528 9.84082L9.10938 11.8579Z"
                            fill="#172591"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.09375 13.6694L5.24105 16.149C7.3321 13.2252 9.44166 10.3015 11.5142 7.3777C12.3839 6.08236 12.532 5.17562 11.0886 2.86251C10.9527 2.62949 10.7913 2.41227 10.6075 2.21484L10.7925 2.4369C10.882 2.56065 10.9508 2.69815 10.9961 2.84401C11.2921 3.80626 9.29362 6.47097 8.71997 7.28518C7.18406 9.43175 5.64816 11.5228 4.09375 13.6694Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.31346 6.74929C7.83233 6.0461 7.29569 5.30591 6.9441 4.54721C6.81456 4.28814 6.48148 3.62196 6.42596 3.30738C6.38907 3.15538 6.38907 2.99676 6.42596 2.84476C6.46892 2.71862 6.53136 2.59999 6.61101 2.49316C6.5635 2.5517 6.52022 2.61354 6.48148 2.67821C4.79753 5.10235 5.01959 6.13862 5.8153 7.32294L6.87008 8.74781L8.31346 6.74929Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.79615 1.9006C8.37638 1.88103 7.95572 1.8934 7.53782 1.93761L7.24174 2.19668C7.14706 2.30097 7.06045 2.41232 6.98267 2.52977L6.85314 2.82584C6.82804 2.91613 6.82174 3.0106 6.83464 3.10342C6.84276 3.23422 6.86133 3.36417 6.89015 3.49202C6.90423 3.56707 6.92277 3.64122 6.94566 3.71408C8.11558 3.52297 9.30824 3.51672 10.4801 3.69557C10.5034 3.62911 10.5219 3.56109 10.5356 3.49202C10.5722 3.37205 10.5909 3.24734 10.5911 3.12192C10.6057 3.02918 10.5994 2.93433 10.5726 2.84435C10.5422 2.73469 10.4987 2.62908 10.4431 2.52977C10.3653 2.41232 10.2787 2.30097 10.184 2.19668L9.86944 1.9191L8.79615 1.9006Z"
                            fill="#172591"
                          />
                        </svg>
                      </div>
                      <div className="justify-start items-center gap-0.5 inline-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                            stroke="#667085"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                          Save
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 p-4 rounded-xl flex-col justify-start items-start gap-2 inline-flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-4 flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-primary text-sm font-medium font-['Poppins'] leading-tight">
                                Cassandra Runte
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              Brazil
                            </div>
                            <div className="w-4 h-3 rounded-sm justify-center items-center flex">
                              <div className="w-4 h-3 relative">
                                <div className="w-[0.34px] h-[0.36px] left-[5.41px] top-[4.60px] absolute"></div>
                                <div className="w-[0.31px] h-[0.35px] left-[5.82px] top-[4.61px] absolute"></div>
                                <div className="w-[0.30px] h-[0.36px] left-[6.21px] top-[4.63px] absolute"></div>
                                <div className="w-[0.32px] h-[0.36px] left-[7.94px] top-[4.92px] absolute"></div>
                                <div className="w-[0.36px] h-[0.44px] left-[8.27px] top-[5.02px] absolute"></div>
                                <div className="w-[0.35px] h-[0.37px] left-[8.66px] top-[5.21px] absolute"></div>
                                <div className="w-[0.38px] h-[0.45px] left-[9.36px] top-[5.52px] absolute"></div>
                                <div className="w-[0.36px] h-[0.37px] left-[10.62px] top-[6.38px] absolute"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-start items-center gap-4 flex">
                          <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                            2 mins
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-white text-base font-normal font-['Poppins']">
                              🎉
                            </div>
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              56
                            </div>
                          </div>
                          <div className="justify-start items-center gap-0.5 flex">
                            <div className="text-dark-blue-hue text-xs font-medium font-['Poppins'] leading-[18px]">
                              More
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                                stroke="#667085"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[92px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch py-2 justify-center items-center gap-2.5 inline-flex">
                          <div className="grow shrink basis-0 text-dark-blue-hue text-sm font-normal font-['Poppins'] leading-tight dark:text-white">
                            Just completed an order for translation of pharmaceutical government
                            regulations from Indonesian to English with a volume of more than 7000
                            words.
                          </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="h-8 px-2 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  Pro Bono
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  {" "}
                                  project
                                </span>
                              </div>
                              <div className="w-6 h-6 justify-center items-center flex">
                                <Image
                                  className="w-[28.92px] h-[26.72px]"
                                  src="/next/next_assets/images/probono-logo.png"
                                  alt="pstamp.png"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </div>
                            <div className="px-3 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  Gets paid via{" "}
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  ProZ*Pay
                                </span>
                              </div>
                              <div className="w-6 h-6 px-0.5 pt-[5.21px] pb-[4.21px] justify-center items-center flex">
                                <Image
                                  className="w-5 h-[14.58px]"
                                  src="/next/next_assets/images/proz-pay.svg"
                                  alt="pstamp.png"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Medical
                              </div>
                            </div>
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Trados
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="h-44 px-4 py-3 rounded-custom justify-start items-start gap-2 flex">
                    <div className="pt-4 flex-col justify-start items-center gap-1 inline-flex">
                      <div className="w-[72px] h-[72px] rounded-full border-2 border-secondary overflow-hidden justify-center items-center inline-flex">
                        <Image
                          className="w-full h-full object-cover"
                          src="/next/next_assets/images/cassandra.jpg"
                          alt="pstamp.png"
                          width={14}
                          height={14}
                        />
                      </div>
                      <div className="justify-start items-center gap-1 inline-flex">
                        <div className="w-[17.78px] h-[18.04px] pl-[1.59px] pr-[1.37px] pt-[1.59px] pb-[1.64px] flex-col justify-center items-center inline-flex">
                          <Image
                            className="w-[14.81px] h-[14.81px]"
                            src="/next/next_assets/images/pstamp.png"
                            alt="pstamp.png"
                            width={14}
                            height={14}
                          />
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.10938 11.8579L12.1997 16.1695L13.3285 13.6713L10.5528 9.84082L9.10938 11.8579Z"
                            fill="#172591"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.09375 13.6694L5.24105 16.149C7.3321 13.2252 9.44166 10.3015 11.5142 7.3777C12.3839 6.08236 12.532 5.17562 11.0886 2.86251C10.9527 2.62949 10.7913 2.41227 10.6075 2.21484L10.7925 2.4369C10.882 2.56065 10.9508 2.69815 10.9961 2.84401C11.2921 3.80626 9.29362 6.47097 8.71997 7.28518C7.18406 9.43175 5.64816 11.5228 4.09375 13.6694Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.31346 6.74929C7.83233 6.0461 7.29569 5.30591 6.9441 4.54721C6.81456 4.28814 6.48148 3.62196 6.42596 3.30738C6.38907 3.15538 6.38907 2.99676 6.42596 2.84476C6.46892 2.71862 6.53136 2.59999 6.61101 2.49316C6.5635 2.5517 6.52022 2.61354 6.48148 2.67821C4.79753 5.10235 5.01959 6.13862 5.8153 7.32294L6.87008 8.74781L8.31346 6.74929Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.79615 1.9006C8.37638 1.88103 7.95572 1.8934 7.53782 1.93761L7.24174 2.19668C7.14706 2.30097 7.06045 2.41232 6.98267 2.52977L6.85314 2.82584C6.82804 2.91613 6.82174 3.0106 6.83464 3.10342C6.84276 3.23422 6.86133 3.36417 6.89015 3.49202C6.90423 3.56707 6.92277 3.64122 6.94566 3.71408C8.11558 3.52297 9.30824 3.51672 10.4801 3.69557C10.5034 3.62911 10.5219 3.56109 10.5356 3.49202C10.5722 3.37205 10.5909 3.24734 10.5911 3.12192C10.6057 3.02918 10.5994 2.93433 10.5726 2.84435C10.5422 2.73469 10.4987 2.62908 10.4431 2.52977C10.3653 2.41232 10.2787 2.30097 10.184 2.19668L9.86944 1.9191L8.79615 1.9006Z"
                            fill="#172591"
                          />
                        </svg>
                      </div>
                      <div className="justify-start items-center gap-0.5 inline-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                            stroke="#667085"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                          Save
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 p-4 rounded-xl flex-col justify-start items-start gap-2 inline-flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-4 flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-primary text-sm font-medium font-['Poppins'] leading-tight">
                                Cassandra Runte
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              Brazil
                            </div>
                            <div className="w-4 h-3 rounded-sm justify-center items-center flex">
                              <div className="w-4 h-3 relative">
                                <div className="w-[0.34px] h-[0.36px] left-[5.41px] top-[4.60px] absolute"></div>
                                <div className="w-[0.31px] h-[0.35px] left-[5.82px] top-[4.61px] absolute"></div>
                                <div className="w-[0.30px] h-[0.36px] left-[6.21px] top-[4.63px] absolute"></div>
                                <div className="w-[0.32px] h-[0.36px] left-[7.94px] top-[4.92px] absolute"></div>
                                <div className="w-[0.36px] h-[0.44px] left-[8.27px] top-[5.02px] absolute"></div>
                                <div className="w-[0.35px] h-[0.37px] left-[8.66px] top-[5.21px] absolute"></div>
                                <div className="w-[0.38px] h-[0.45px] left-[9.36px] top-[5.52px] absolute"></div>
                                <div className="w-[0.36px] h-[0.37px] left-[10.62px] top-[6.38px] absolute"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-start items-center gap-4 flex">
                          <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                            2 mins
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-white text-base font-normal font-['Poppins']">
                              🎉
                            </div>
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              56
                            </div>
                          </div>
                          <div className="justify-start items-center gap-0.5 flex">
                            <div className="text-dark-blue-hue text-xs font-medium font-['Poppins'] leading-[18px]">
                              More
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                                stroke="#667085"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[92px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch py-2 justify-center items-center gap-2.5 inline-flex">
                          <div className="grow shrink basis-0 text-dark-blue-hue text-sm font-normal font-['Poppins'] leading-tight dark:text-white">
                            Just completed an order for translation of pharmaceutical government
                            regulations from Indonesian to English with a volume of more than 7000
                            words.
                          </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="h-8 px-2 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  Pro Bono
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  {" "}
                                  project
                                </span>
                              </div>
                              <div className="w-6 h-6 justify-center items-center flex">
                                <Image
                                  className="w-[28.92px] h-[26.72px]"
                                  src="/next/next_assets/images/probono-logo.png"
                                  alt="pstamp.png"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </div>
                            <div className="px-3 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  Gets paid via{" "}
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  ProZ*Pay
                                </span>
                              </div>
                              <div className="w-6 h-6 px-0.5 pt-[5.21px] pb-[4.21px] justify-center items-center flex">
                                <Image
                                  className="w-5 h-[14.58px]"
                                  src="/next/next_assets/images/proz-pay.svg"
                                  alt="pstamp.png"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Medical
                              </div>
                            </div>
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Trados
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="h-44 px-4 py-3 rounded-custom justify-start items-start gap-2 flex">
                    <div className="pt-4 flex-col justify-start items-center gap-1 inline-flex">
                      <div className="w-[72px] h-[72px] rounded-full border-2 border-secondary overflow-hidden justify-center items-center inline-flex">
                        <Image
                          className="w-full h-full object-cover"
                          src="/next/next_assets/images/cassandra.jpg"
                          alt="pstamp.png"
                          width={14}
                          height={14}
                        />
                      </div>
                      <div className="justify-start items-center gap-1 inline-flex">
                        <div className="w-[17.78px] h-[18.04px] pl-[1.59px] pr-[1.37px] pt-[1.59px] pb-[1.64px] flex-col justify-center items-center inline-flex">
                          <Image
                            className="w-[14.81px] h-[14.81px]"
                            src="/next/next_assets/images/pstamp.png"
                            alt="pstamp.png"
                            width={14}
                            height={14}
                          />
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.10938 11.8579L12.1997 16.1695L13.3285 13.6713L10.5528 9.84082L9.10938 11.8579Z"
                            fill="#172591"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.09375 13.6694L5.24105 16.149C7.3321 13.2252 9.44166 10.3015 11.5142 7.3777C12.3839 6.08236 12.532 5.17562 11.0886 2.86251C10.9527 2.62949 10.7913 2.41227 10.6075 2.21484L10.7925 2.4369C10.882 2.56065 10.9508 2.69815 10.9961 2.84401C11.2921 3.80626 9.29362 6.47097 8.71997 7.28518C7.18406 9.43175 5.64816 11.5228 4.09375 13.6694Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.31346 6.74929C7.83233 6.0461 7.29569 5.30591 6.9441 4.54721C6.81456 4.28814 6.48148 3.62196 6.42596 3.30738C6.38907 3.15538 6.38907 2.99676 6.42596 2.84476C6.46892 2.71862 6.53136 2.59999 6.61101 2.49316C6.5635 2.5517 6.52022 2.61354 6.48148 2.67821C4.79753 5.10235 5.01959 6.13862 5.8153 7.32294L6.87008 8.74781L8.31346 6.74929Z"
                            fill="#4C62E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.79615 1.9006C8.37638 1.88103 7.95572 1.8934 7.53782 1.93761L7.24174 2.19668C7.14706 2.30097 7.06045 2.41232 6.98267 2.52977L6.85314 2.82584C6.82804 2.91613 6.82174 3.0106 6.83464 3.10342C6.84276 3.23422 6.86133 3.36417 6.89015 3.49202C6.90423 3.56707 6.92277 3.64122 6.94566 3.71408C8.11558 3.52297 9.30824 3.51672 10.4801 3.69557C10.5034 3.62911 10.5219 3.56109 10.5356 3.49202C10.5722 3.37205 10.5909 3.24734 10.5911 3.12192C10.6057 3.02918 10.5994 2.93433 10.5726 2.84435C10.5422 2.73469 10.4987 2.62908 10.4431 2.52977C10.3653 2.41232 10.2787 2.30097 10.184 2.19668L9.86944 1.9191L8.79615 1.9006Z"
                            fill="#172591"
                          />
                        </svg>
                      </div>
                      <div className="justify-start items-center gap-0.5 inline-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                            stroke="#667085"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                          Save
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 p-4 rounded-xl flex-col justify-start items-start gap-2 inline-flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-4 flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-primary text-sm font-medium font-['Poppins'] leading-tight">
                                Cassandra Runte
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              Brazil
                            </div>
                            <div className="w-4 h-3 rounded-sm justify-center items-center flex">
                              <div className="w-4 h-3 relative">
                                <div className="w-[0.34px] h-[0.36px] left-[5.41px] top-[4.60px] absolute"></div>
                                <div className="w-[0.31px] h-[0.35px] left-[5.82px] top-[4.61px] absolute"></div>
                                <div className="w-[0.30px] h-[0.36px] left-[6.21px] top-[4.63px] absolute"></div>
                                <div className="w-[0.32px] h-[0.36px] left-[7.94px] top-[4.92px] absolute"></div>
                                <div className="w-[0.36px] h-[0.44px] left-[8.27px] top-[5.02px] absolute"></div>
                                <div className="w-[0.35px] h-[0.37px] left-[8.66px] top-[5.21px] absolute"></div>
                                <div className="w-[0.38px] h-[0.45px] left-[9.36px] top-[5.52px] absolute"></div>
                                <div className="w-[0.36px] h-[0.37px] left-[10.62px] top-[6.38px] absolute"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-start items-center gap-4 flex">
                          <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                            2 mins
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-white text-base font-normal font-['Poppins']">
                              🎉
                            </div>
                            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
                              56
                            </div>
                          </div>
                          <div className="justify-start items-center gap-0.5 flex">
                            <div className="text-dark-blue-hue text-xs font-medium font-['Poppins'] leading-[18px]">
                              More
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8.0026 3.33301V12.6663M3.33594 7.99967H12.6693"
                                stroke="#667085"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[92px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch py-2 justify-center items-center gap-2.5 inline-flex">
                          <div className="grow shrink basis-0 text-dark-blue-hue text-sm font-normal font-['Poppins'] leading-tight dark:text-white">
                            Just completed an order for translation of pharmaceutical government
                            regulations from Indonesian to English with a volume of more than 7000
                            words.
                          </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                          <div className="justify-start items-center gap-2 flex">
                            <div className="h-8 px-2 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  Pro Bono
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  {" "}
                                  project
                                </span>
                              </div>
                              <div className="w-6 h-6 justify-center items-center flex">
                                <Image
                                  className="w-[28.92px] h-[26.72px]"
                                  src="/next/next_assets/images/probono-logo.png"
                                  alt="pstamp.png"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </div>
                            <div className="px-3 py-1 bg-accent rounded-[9px] justify-start items-center gap-2 flex">
                              <div>
                                <span className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
                                  Gets paid via{" "}
                                </span>
                                <span className="text-primary text-xs font-medium font-['Poppins'] underline leading-[18px]">
                                  ProZ*Pay
                                </span>
                              </div>
                              <div className="w-6 h-6 px-0.5 pt-[5.21px] pb-[4.21px] justify-center items-center flex">
                                <Image
                                  className="w-5 h-[14.58px]"
                                  src="/next/next_assets/images/proz-pay.svg"
                                  alt="pstamp.png"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Medical
                              </div>
                            </div>
                            <div className="px-2 py-0.5 bg-accent-light rounded-[9px] justify-center items-center gap-2.5 flex">
                              <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                                Trados
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch px-1 py-2.5 justify-start items-start gap-2.5 flex"></div>
          </div>
        </div>
        <div className="self-stretch px-6 pt-3 pb-4 border-t border-[#eaecf0] justify-between items-center inline-flex">
          <div className="px-3.5 py-2 bg-white rounded-lg shadow border border-[#cfd4dc] justify-center items-center gap-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.8307 10.0003H4.16406M4.16406 10.0003L9.9974 15.8337M4.16406 10.0003L9.9974 4.16699"
                stroke="#344054"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-[#344053] text-sm font-semibold font-['Poppins'] leading-tight">
              Previous
            </div>
          </div>
          <div className="justify-start items-start gap-0.5 flex">
            <div className="w-10 h-10 bg-[#f8f9fb] rounded-lg justify-center items-center flex">
              <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                <div className="text-center text-[#1d2838] text-sm font-medium font-['Poppins'] leading-tight">
                  1
                </div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg justify-center items-center flex">
              <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                <div className="text-center text-[#475466] text-sm font-medium font-['Poppins'] leading-tight">
                  2
                </div>
              </div>
            </div>
          </div>
          <div className="px-3.5 py-2 bg-white rounded-lg shadow border border-[#cfd4dc] justify-center items-center gap-2 flex">
            <div className="text-[#344053] text-sm font-semibold font-['Poppins'] leading-tight">
              Next
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.16406 10.0003H15.8307M15.8307 10.0003L9.9974 4.16699M15.8307 10.0003L9.9974 15.8337"
                stroke="#344054"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative h-full overflow-visible w-min min-w-44">
        <div className="absolute top-32 flex flex-col gap-[24px]">
          <div className="p-4 bg-primary rounded-2xl flex flex-col gap-2 items-center">
            <div className="font-bold text-white text text-center">
              Let the community know what you are working on!
            </div>
            <div className="bg-white rounded-2xl bg-[##edf5f5] flex flex-row items-center justify-center gap-2 px-3 py-3 mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10.0026" cy="9.99967" r="6.66667" fill="white" />
                <path
                  d="M9.9974 1.66699C5.3949 1.66699 1.66406 5.39783 1.66406 10.0003C1.66406 14.6028 5.3949 18.3337 9.9974 18.3337C14.5999 18.3337 18.3307 14.6028 18.3307 10.0003C18.3307 5.39783 14.5999 1.66699 9.9974 1.66699ZM14.1641 10.8337H10.8307V14.167H9.16406V10.8337H5.83073V9.16699H9.16406V5.83366H10.8307V9.16699H14.1641V10.8337Z"
                  fill="url(#paint0_linear_7258_20298)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7258_20298"
                    x1="9.9974"
                    y1="2.08366"
                    x2="9.9974"
                    y2="18.3337"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#CAFF8B" />
                    <stop offset="1" stopColor="#53992A" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="font-normal text-primary">Post a WIWO</div>
            </div>
          </div>
          <div className="bg-accent p-4 rounded-lg border border-primary flex flex-col gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M14.8889 18.0153C15.3177 19.6157 14.368 21.2607 12.7676 21.6895C11.1672 22.1183 9.52218 21.1686 9.09336 19.5682M11.3894 5.74134C11.6937 5.19404 11.7939 4.53254 11.619 3.87994C11.2616 2.54627 9.8908 1.75482 8.55714 2.11217C7.22347 2.46953 6.43201 3.84037 6.78937 5.17404C6.96423 5.82663 7.38176 6.3494 7.91887 6.67128M16.7338 9.44578C16.3769 8.11364 15.424 6.99968 14.0847 6.34895C12.7454 5.69822 11.1295 5.56402 9.59241 5.97588C8.05534 6.38774 6.72301 7.31191 5.88853 8.5451C5.05405 9.77829 4.78577 11.2195 5.14272 12.5516C5.73329 14.7557 5.61861 16.514 5.24566 17.8502C4.82059 19.373 4.60806 20.1345 4.66548 20.2874C4.73117 20.4623 4.77869 20.5103 4.95292 20.5778C5.10521 20.6368 5.74498 20.4654 7.02453 20.1225L18.8896 16.9433C20.1691 16.6004 20.8089 16.429 20.9113 16.3018C21.0284 16.1562 21.0456 16.0909 21.015 15.9065C20.9883 15.7454 20.4235 15.1922 19.294 14.086C18.3029 13.1153 17.3244 11.6498 16.7338 9.44578Z"
                stroke="#4D9D9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-primary text-center">Activity on your recent WIWO</div>
            <div className="activity-subtext text-center">Show activity on your WIWO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
