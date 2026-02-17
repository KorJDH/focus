import {
  FeatureItem,
  GalleryItem,
  ScheduleEvent,
  ScheduleItem,
  SiteLinkSet,
} from "@/types/content";

const env = {
  app: process.env.NEXT_PUBLIC_APP_LINK,
  openChat: process.env.NEXT_PUBLIC_OPENCHAT_LINK,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_LINK,
  inquiryForm: process.env.NEXT_PUBLIC_INQUIRY_FORM_LINK,
};

export const siteInfo = {
  name: "FOCUS",
  club: "Bowling Club",
  locationName: "인천 크라운 볼링센터",
  tagline: "초보환영 · 실력향상",
  description:
    "FOCUS는 인천 크라운 볼링센터에서 활동하는 볼링 동호회로, 매주 목요일 저녁 8시 30분 정기모임을 운영합니다.",
};

export const links: SiteLinkSet = {
  app: env.app ?? "https://example.com/focus-app",
  openChat: env.openChat ?? "https://example.com/focus-openchat",
  instagram: env.instagram ?? "https://example.com/focus-instagram",
  inquiryForm: env.inquiryForm ?? "https://example.com/focus-inquiry",
};

export const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "클럽 소개" },
  { href: "/schedule", label: "일정 안내" },
  { href: "/gallery", label: "갤러리" },
  { href: "/notices", label: "공지" },
  { href: "/join", label: "가입" },
];

export const featureItems: FeatureItem[] = [
  {
    title: "정기모임",
    description:
      "매주 목요일 저녁 8시 30분 진행하며, 원활한 정기전 운영을 위해 최소 10분 전 도착이 원칙입니다.",
  },
  {
    title: "월회비",
    description: "월회비는 10,000원이며, 매월 고정 운영비로 사용됩니다.",
  },
  {
    title: "게임비",
    description: "게임비는 겜비+사이드 포함 19,000원으로 운영됩니다.",
  },
  {
    title: "다양한 구질 멤버",
    description:
      "클래식, 덤리스, 투핸드, 트위너, 털어치기 등 다양한 구질의 멤버들이 함께 노하우를 공유합니다.",
  },
];

export const scheduleItems: ScheduleItem[] = [
  { label: "정기모임", value: "매주 목요일 저녁 8시 30분 (최소 10분 전 도착)" },
  { label: "월회비", value: "10,000원" },
  { label: "게임비", value: "19,000원 (겜비 + 사이드)" },
  { label: "장소", value: "인천 크라운 볼링센터" },
];

export const locationInfo = {
  address: "대한민국 인천광역시 중구 송학동3가 7",
  mapUrl:
    "https://maps.google.com/?q=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD+%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C+%EC%A4%91%EA%B5%AC+%EC%86%A1%ED%95%99%EB%8F%993%EA%B0%80+7+%ED%81%AC%EB%9D%BC%EC%9A%B4+%EB%B3%BC%EB%A7%81%EC%84%BC%ED%84%B0",
};

export const aboutHighlights = [
  {
    title: "운영 정책",
    description:
      "정기모임은 매주 목요일 저녁 8시 30분, 월회비 10,000원, 게임비 19,000원으로 운영합니다. 정기전 진행을 위해 최소 10분 전 도착을 권장합니다.",
    linkLabel: "운영 원칙 더보기",
  },
  {
    title: "가입 조건",
    description:
      "볼링에 열정이 있고 장비를 소유(또는 구매 예정)한 분을 모집합니다. 정기전 월 1회 이상 참석, 가입 후 3시간 내 자기소개서 작성이 필수입니다.",
    linkLabel: "가입 조건 확인",
  },
];

export const scheduleEvents: ScheduleEvent[] = [
  {
    id: "regular-thursday",
    badge: "REGULAR MATCH",
    title: "정기모임 / 정기전",
    dayTime: "매주 목요일 저녁 8시 30분",
    location: "장소: 인천 크라운 볼링센터",
    capacity: "참여 기준: 정기전 월 1회 이상 참석 필수",
    status: "STATUS: REGULAR",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuW_En9S8ymxeNH7Ih6Tj-Ixt8c_ZMx5nkEC3ow0YmD4D1TptHHwXhRI66nZHyC9s-ILdZMTdnSJTvNfvHT7QZUh612r8Y9LNqYVAYRZTkj768BGyBWyb6nxB2ADBNZaetKM12Pm3056OLsjZ9Mq18f1n9ZHPc9z2UklBqKmT8-sjfDL0AkgHHBxCCnZoDl9Iecplp848YCNSXzUD3sNCQagZh0hmdRfKCVvbVgQubZusJq6L2oZ_c_lEZBx4HxsEE2_fwez53f1C0",
  },
  {
    id: "open-meet",
    badge: "OPEN MEET",
    title: "벙개 모임",
    dayTime: "운영진 공지 일정",
    location: "장소: 공지 확인",
    capacity: "공지 등록 시 댓글/체크 필수 (참여·불참 모두)",
    status: "STATUS: CHECK REQUIRED",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyxOAA-j2Vry-xMKx9oM9xn8sJmpQBU-FKmmkg9lFeGIwNPZ8huFhMmNHPlGaTiKC3G1cws1yRHzyAFieHNSnzyCNU4GbCZMXwF5TtzoEtYsVzK5IEY7ioB2-12P1RnsplcrKwUQeOJR4SeH0ONNlJVHexiNvDcnohVMaIqBHW5HTMkn2AwE_KTDV0umDLPPhkwxKk1BwT7ovDgLwp5WBigv3InDHUy6jGYMauH4qOo6xLgyb_PVRjCu6vgg6u_gUK3P3OXrDv8go1",
  },
];

export const imageAssets = {
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7YQCz8BvBP6tq7gaMwE-dW1-e270r3neD3pp01HgcQxtXFax1RkbhMAoiVqLOsnGemQwt-rQqx7DfYsbEr8DHqXoYn9DE8BHU8JzeQnNEw68IAbfJMv6OIGiRNJ9DRrjguwxFtFquLmKmOtvSKgIR72tPu2tA9hxIQvUnjZ1FABP6O7CM__MtSkOPc06ETuRtPL93mg5xAhNUdibd5zLkz7Lr2dF6Zv6lLuwDnY9age6vTyICrezs0zPWQav8rxXFGhQki0NcSXA",
  homeHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDK_RlNxq1mUPdSl1aEyeNqbQydCFqAHQVQ15OdBnBYRYi55Aj8a4DoiJda2zT9Bjxops45WqWEB4dtLglW2wDKnhK5xSEiLKX9AZ_7ylQp1FmdTTeIVkBDn5wB9eJNiVUGft88tkQZ6IZyZEy-5U-mwMzPLUmYxIAmG_hfwtGm3kYLwkSb1oBaSwCUE5JE4mRDLsu0mv_VYuSIheXOOkJYU7dvminNneoY3sWxe4FqvGwXpAmuZtfeMQI4Mghly1rGYpThFF6iIWyG",
  aboutHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC_3GSeBeA2gVfAllaezsHUkkXAFdYXbuYYvjBZztnUNNXBOWRPZAQx6Pwse99xMkl9DCoTs5i30yw2vbWTyGhgBOkfd5AfQJTh96g266HV9cbfdBYRRU67LyX1Bl6Im9KCIgyEiQns4dxljHPph4meFdfrxXGc0J4ys6nIrnyeA-esd4lMshlba6STUkR-mkfC6bW0PaLkvUW0EdGG80rv7jlXUwvc4Vahag8-v9rC5g9VBLVhTRirjwr_AZdZ4fFwd_6zBgxs_YQB",
  aboutMap:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDtka8_Xf_RiNbFqENmUaTdvEO2Gc6Ivd9O9XwbPPyabxFuLQ9V2Vu7ikstyVSrauk637yK_rvnkftsXfdUF7OIUBYizqsqZ9Ovc2CD4mJ1jtFWmnYnkC_hmu6M3_yvCQGWdsRUpwudFix9eqr5A445LqoFa_Y91U5KSMn3MwybrSIBKx2wda-LHdXGR4G6lQSlt1Vnesk-cJg-7NKeOJvF8eOzoaMZbO-Z26_t7JDp_X9sjSpiBJHsFPBcx_F9WzepmIV7L9bXJSug",
};

export const homeGalleryItems: GalleryItem[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwbXNyRUSRBNIdPvjoEmP06-bT4vGKQItXHspnvfHUwPQ8oaklJg4sAxJ1pMN72TwV0TiCciAiMrNZm0CDy2hcCfAm8giBjjLJjNGXg6FgiS10LRGJ73YWHIA6UZvC_boXDciXsBHerpSX6MlZCzn0j6vcr_PhGeanmoADrwSLEHy21rAqalQIinKz5wTTB8lDT6yZnmXmx9oE05lXEx0kIbVHaCylGaf6OOYHJZWd7E8dLzohe9x4GrMwW_AuagA56zmCe5WOVaA6",
    alt: "Person releasing a bowling ball on a lane",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUzXAYsErMF6RAZvOvUZbuA0lCAx6cZ_AJaPiAhnRl9X7xD68lNCLgklQaO3mFL2RESJe0OZl8TjTbq7zWO4V9D5sAt6xoyzC3hKNnB4CNLH6h-Mt1gua9N4kZ01rg6FxNO7YRUXuq2g2XwaOCAW11dW9G0z6VQTcMXVwr_Ucu6nMTNiwXgnC7hgisa5vuXzIqvYTCmyXOXYhPUGd-bV9BjA-l1Tn9QfyCot-LsC58EOzGq6zGo6L6s0hmAqpscpOYGVUOOSgNOPLF",
    alt: "Group of friends high-fiving at a bowling alley",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhBCtJsKZnfjwpRcPTDzljm5-JYsdIZIErUi849ZWgTYlSam9F1Ss5At2_aLUOVU1S3rmPMeGJOBNbSVv7GXMybBX6-LhrJ80wjK9489H2ajPdgTSO1efkis53mVPJlI7t5eokDcoG6a5AOhfYZBNCmLcOOSSmusqGN68pP_YnZ2vzPY-dskYrnPxRAUgAfYTqGW4V5VsQcIXZPHSYNp5d_lea_0fCLVZXsEWQyEXEOuwJglGUI9xeYntqJfTVTxkiuZmem1g33jfk",
    alt: "Rows of colorful bowling balls on a rack",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpC6USY1bkrOnORUyNu2tCM52j12iRzwlfbV6O-XS9qknBUcXx_1Mf8I8CBJmUzFCeweVLmxHhBztxYPl7zy2jGR53gJ2qM-SdpumQOi-U3hs4bTf76lJI0eR1hXtZze6D2xfWClrMO1jqvzQvQ7ENyAl0oiMzLWnZUwYSo5N1xLc2PwtY-W_VdL9_VeaEo_7H5OoqQFQk52RadPv8fcGjC3a4i_kmreFeNufSU3VBud-HQATaqUYlulq6OdIabMhKKW3DWCYwR-Y-",
    alt: "Action shot of bowling pins being struck",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVyxdP_wblshCL9ekgWeToOMeRtoYWkZ11Q_pcAYEEc8q8M4sk7OhmGLIEbPsMJs-RcecHohLC_kA6Q-3uCidiWdrmI5EiYBUs36WwIYSd3eUunW487C7aMQ9E53iWkSEFGA_dx3a22nLYF6zSDr_w0T2qg_Nh82U2erWQAXwyF4Vu2ZIf8wS0AiWja0aQWwT-su8rJ6981cQJVxgPoqSYKKSI5nIZtR90Tn9oJG4_GFSVcht_VnyuKBPX3TODNKHULflzRi0VQ9Bm",
    alt: "Bowling club gathering photo inside the alley",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcSzHHL1CexWMkbr9patbKLgNEwGt6KO2FSUkFHczT2-Yi3VcDpgu_2NiaRRrUdvqKABLbfaM_hB29KdYGjT2LfRoNnO9OmnZ9meijBvbvzCuYa4CRmpSb2i710op17UqoREeDJVUzhMu8rtrDokXq2Oyl-gRpO1boZVUe7HJbE1lC7nucMsTNSiFw3FULdaMLV1sJ2xpkme7USdj1tqaKROZSStiEhmzKTy7w-6Slu5-gXzIj7AMnqL0kISpdHR-TM33cvpsPF7YE",
    alt: "Two people laughing while holding bowling balls",
  },
];
