type PlanOption = {
  [key: string]: string;
};

type Plan = {
  id: number;
  icon: string;
  header: string;
  title: string;
  planOptions: PlanOption[];
  btnText: string;
};

///////////////////////

export const homePics = {
  hero1: { src: "/home/dasf.svg" },
  hero2: { src: "/home/Group-10770.svg" },
};

export const featuresItems = [
  {
    text: "طراحی سایت با گرافیک اختصاصی",
    logo: { src: "/home/features-1.svg" },
  },
  { text: "طراحی سایت واکنش گرا", logo: { src: "/home/features-2.svg" } },
  { text: "طراحی سایت با کدهای بهینه", logo: { src: "/home/features-3.svg" } },
  { text: "خدمات سئو سایت حرفه ای", logo: { src: "/home/features-4.svg" } },
  { text: "جذب مشتریان بالقوه", logo: { src: "/home/features-5.svg" } },
  { text: "افزایش ترافیک طبیعی سایت", logo: { src: "/home/features-6.svg" } },
];

export const AboutPersents = [
  {
    label: "طراحی اصولی و چشم نواز",
    text: "طراحان ما وب سایتی منحصر به فرد و جذاب برای شما خلق خواهند کرد.",
    logo: { src: "/home/about-3.svg" },
    customStyle: "lg:col-span-1",
  },
  {
    label: "رعایت استاندارد های جهانی",
    text: "ما تمام استانداردهای روز طراحی سایت را در وب سایت شما رعایت خواهیم کرد.",
    logo: { src: "/home/about-2.svg" },
    customStyle: "lg:col-span-1",
  },
  {
    label: "آموزش و پشتیبانی",
    text: "ما نحوه مدیریت وب سایت را به شما آموزش می‌دهیم و پاسخگوی سوالات شما هستیم.",
    logo: { src: "/home/about-1.svg" },
    customStyle: "lg:col-span-2",
  },
];

export const planPrices: Plan[] = [
  {
    id: 1,
    icon: "/home/pricingCard.svg",
    header: "پلن وی آی پی",
    title: "برای کسب اطلاعات از قیمت تماس بگیرید",
    planOptions: [
      { desc1: "سایت کامل فروشگاهی و وبلاگ" },
      { desc2: "ارائه سئو حرفه ای همه جانبه" },
      { desc3: "پشتیبانی همه روزه و مستقیم" },
    ],
    btnText: "تماس بگیرید",
  },
  {
    id: 2,
    icon: "/home/pricingCard.svg",
    header: "پلن استاندارد",
    title: "برای کسب اطلاعات از قیمت تماس بگیرید",
    planOptions: [
      { desc1: "سایت وبلاگ یا فروشگاهی" },
      { desc2: "سئو فروشگاه یا مقالات" },
      { desc3: "پشتیبانی و ارائه آموزش" },
    ],
    btnText: "تماس بگیرید",
  },
  {
    id: 3,
    icon: "/home/pricingCard.svg",
    header: "پلن اقتصادی",
    title: "برای کسب اطلاعات از قیمت تماس بگیرید",
    planOptions: [
      { desc1: "سایت لندینگ ( معرفی )" },
      { desc2: "سئو بصورت پایه" },
      { desc3: "ارائه ویدیو آموزشی" },
    ],
    btnText: "تماس بگیرید",
  },
];

export const ContactUsSec = {
  topTexts: {
    heading: "تماس با ما",
    label: "با ما در ارتباط باشید",
    href: "/contact-us",
  },
  logo: { src: "/home/contact-us.svg" },
  inputs: [
    {
      type: "text",
      name: "uName",
      customStyle: "col-span-1 p-2 row-start-1 border rounded-2xl",
      plchldr: "نام و نام خانوادگی",
    },
    {
      type: "text",
      name: "uPhone",
      customStyle: "col-span-1 p-2 row-start-1 border rounded-2xl",
      plchldr: "شماره تلفن",
    },
    {
      type: "email",
      name: "uEmail",
      customStyle: "col-span-1 p-2 row-start-2 border rounded-2xl",
      plchldr: "ایمیل",
    },
    {
      type: "text",
      name: "uTel",
      customStyle: "col-span-1 p-2 row-start-2 border rounded-2xl",
      plchldr: "شماره ثابت",
    },
    {
      type: "text",
      name: "desc",
      customStyle: "border rounded-2xl col-span-2 row-start-3 row-span-5 p-2",
      plchldr: "توضیحات",
    },
  ],
  submitButton: {
    type: "submit",
    text: "ارسال",
    style: "rounded-b-2xl rounded-tl-2xl bg-emerald-900 text-white p-2",
  },
};
