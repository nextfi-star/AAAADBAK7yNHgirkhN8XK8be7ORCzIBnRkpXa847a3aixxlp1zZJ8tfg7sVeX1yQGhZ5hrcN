import { useMemo } from "react";
import Link from "next/link";
import ArrowUP from "../ui/ArrowUP";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export const Profile_news = () => {
  const t = useTranslations("overview");
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    return `${hours}:${minutes} ${ampm}`;
  };

  const pathname = usePathname();
  const language = pathname.split("/")[1];

  const getCurrentDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    return `${day}.${month}.${year}`;
  };
  const getCurrentMonthName = () => {
    const now = new Date();
    return now.toLocaleString("en-En", { month: "long" });
  };
  const dataNews = useMemo(
    () => [
      {
        ru: "Kalshi запрашивает разрешение на торговлю политическими контрактами на фоне апелляции CFTC",
        arab: "تسعى Kalshi للحصول على إذن لتداول العقود السياسية وسط استئناف CFTC",
        chine: "Kalshi 正在寻求许可在 CFTC 上诉期间交易政治合同",
        en: "Kalshi seeks permission to trade political contracts amid CFTC appeal",
        date: getCurrentDate(),
        id: 1,
      },
      {
        ru: "Инвестируйте с умом: как NextFi обеспечивает до 10% прибыли в месяц",
        arab: "استثمر بحكمة: كيف يوفر NextFi ربحًا يصل إلى 10% شهريًا",
        chine: "明智投资：NextFi 如何每月提供高达 10% 的利润",
        en: "Invest wisely: how NextFi provides up to 10% profit per month",
        date: getCurrentDate(),
        id: 2,
      },
      {
        ru: "Будущее уже здесь: как будет выглядеть AI-ассистент NextFi?",
        arab: "المستقبل هنا بالفعل: كيف سيبدو المساعد الذكي NextFi؟",
        chine: "未来已经到来：NextFi AI 助手会是什么样子？",
        en: "The future is already here: what will the NextFi AI assistant look like?",
        date: getCurrentDate(),
        id: 3,
      },
      {
        ru: "NextFi меняет правила игры: инвестиции, защищенные искусственным интеллектом",
        arab: "NextFi يغير قواعد اللعبة: استثمارات محمية بالذكاء الاصطناعي",
        chine: "NextFi 颠覆行业规则：人工智能保护投资",
        en: "NextFi is a game changer: Investments protected by artificial intelligence",
        date: getCurrentDate(),
        id: 4,
      },
      {
        ru: "Уровни опыта в NextFi: как ваши инвестиции открывают новые возможности",
        arab: "مستويات الخبرة في NextFi: كيف تفتح استثماراتك فرصًا جديدة",
        chine: "NextFi 经验等级：您的投资如何开启新机遇",
        en: "NextFi Experience Levels: How Your Investments Open up New Opportunities",
        date: getCurrentDate(),
        id: 5,
      },
      {
        ru: "Как работает резервный фонд NextFi: защита ваших инвестиций 24/7",
        arab: "كيف يعمل صندوق الاحتياطي في NextFi: حماية استثماراتك على مدار الساعة",
        chine: "NextFi 储备基金如何运作：全天候保护您的投资",
        en: "How the NextFi Reserve Fund Works: Protecting Your Investments 24/7",
        date: getCurrentDate(),
        id: 6,
      },
      {
        ru: "NextFi в 2025 году: что ждет платформу и её пользователей?",
        arab: "NextFi في عام 2025: ماذا ينتظر المنصة ومستخدميها؟",
        chine: "2025 年的 NextFi：平台和用户将迎来什么？",
        en: "NextFi in 2025: what awaits the platform and its users?",
        date: getCurrentDate(),
        id: 7,
      },
    ],
    []
  );

  return (
    <div className="profile-news md:!bg-[#fff] dark:!bg-transparent md:dark:!bg-[#1e1e1e66] shadow-none md:!shadow-medium dark:!shadow-none w-full">
      <div className="profile-news-title">
        <span className="profile-news-title-first">{t("news")}</span>
        <span>
          {t("moreNews")} <ArrowUP />
        </span>
      </div>
      <span className="profile-news-date">
        {getCurrentMonthName() + " " + getCurrentDate()}
      </span>
      <ul className="profile-news-list">
        <li className="profile-news-list-item">
          {dataNews.map((news) => {
            const date = new Date(news.date);
            return (
              <Link
                key={news.id}
                className="profile-news-list-item-link"
                href="#"
              >
                <span className="news-date">{getCurrentTime()}</span>
                {news[language as "en" | "ru" | "arab" | "chine"]}
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
