const langList = ['en', 'ru'];
const langArr = {
    "Selected" : {
        "en" : "English",
        "ru" : "Русский",
    },
    "About" : {
        "en" : "About us",
        "ru" : "О нас",
    },
    "Download" : {
        "en" : "Download",
        "ru" : "Скачать",
    },
    "Help" : {
        "en" : "Help",
        "ru" : "Помощь",
    },
    "Team" : {
        "en" : "Our team",
        "ru" : "Наша команда",
    },
    "Slogan" : {
        "en" : "We shall protect your digital fortress",
        "ru" : "Мы отстоим вашу цифровую крепость",
    },
    "Introduction" : {
        "en" : "In connection with the post-COVID situation and the foreign policy of the Russian Federation, people began to travel more within the country. However, some part of the population still prefers to relax abroad. Our team has developed an application that is designed to solve the eternal questions of travelers. Where to go for a walk? Where to have a delicious dinner? What is this city famous for? There is an answer! Entertainment assistant - will become your friend and indispensable assistant anywhere in the world.",
        "ru" : "В связи с послековидной ситуацией и внешней политикой Российской Федерации люди стали больше путешествовать внутри страны. Однако некоторая часть населения до сих пор предпочитает отдыхать за рубежом. Наша команда разработала приложение, которое призвано решить вечные вопросы путешественников. Куда сходить на прогулку? Где вкусно поужинать? Чем знаменит данный город? Ответ есть! Entertainment assistant - станет вашим другом и незаменимым помощником в любой точке земного шара."
    },
    "WhyName" : {
        "en" : "How are we better?",
        "ru" : "Почему мы лучше?",
    },
    "Why" : {
        "en" : "Entertainment assistant is a domestic answer to foreign applications. Our product is focused primarily on the audience of the Russian Federation, which has created a real boom in domestic tourism. long-familiar cities. The trend towards exploring the homeland will only grow, and the constant development of tourism will ensure continued interest and an influx of new travelers. Up-to-date information, nice functionality, keyword search, adding favorite places to “favorites” - this is only a small part of what what the Entertainment assistant is capable of.",
        "ru" : "Entertainment assistant - отечественный ответ иностранным приложениям. Наш продукт ориентирован в первую очередь на аудиторию РФ, которая устроила настоящий бум внутреннего туризма. Введенные санкции послужили катализатором для исследований родного края и близлежащих территорий. Наше приложение станет путеводителем для путешественников, открывая всё новые уголки вроде-бы давно знакомых городов. Тенденция к изучению родины будет только расти, а постоянное развитие туризма обеспечит непрекращающийся интерес и приток новых путешественников. Актуальная информация, приятный функционал, поиск по ключевым словам, добавление любимых мест в “избранное” - это лишь малая часть того, на что способен Entertainment assistant.",

    },
    "MapName" : {
        "en" : "Application starting page",
        "ru" : "Стартовая страница приложения",
    },
    "Map" : {
        "en" : "The application, when loaded, opens the place where the user was last time, from this page you can already go to such tabs as:",
        "ru" : "Приложение при загрузке открывает место где последний раз был пользователь, с этой страницы уже можно перейти на такие вкладки как:",
    },
    "SearchLi" : {
        "en" : "Search",
        "ru" : "Поиск",
    },
    "TimeLi" : {
        "en" : "Entertainment and leisure",
        "ru" : "Развлечения и досуг",
    },
    "ReviewsLi" : {
        "en" : "Reviews",
        "ru" : "Отзывы",
    },
    "FavsLi" : {
        "en" : "Favorites",
        "ru" : "Избранное",
    },
    "ProfileLi" : {
        "en" : "Profile",
        "ru" : "Профиль",
    },
    "SettingsLi" : {
        "en" : "Settings",
        "ru" : "Настройки",
    },
    "PlacesName" : {
        "en" : "Places",
        "ru" : "Места",
    },
    "Places" : {
        "en" : "Our app has collected many popular places from memorials and restaurants to hotels and hiking trails. Since this is still not enough, our users can add and evaluate other people's added places themselves. Also, if you have already decided on the chosen hotel or cinema, you can book seats directly from our application!",
        "ru" : "В нашем приложении собрано множество популярных мест начиная с мемориалов и ресторанов вплоть до отелей и пешеходных троп. Так как этого всё равно мало, наши пользователи могут сами добавлять и оценивать чужие добавленные места. Также, если вы уже определились с выбранным отелем или кинотеатром, вы можете забронировать места прямо из нашего приложения!",
    },
    "ReviewsName" : {
        "en" : "Reviews",
        "ru" : "Отзывы",
    },
    "Reviews" : {
        "en" : "Entertainment Assistant users can leave reviews for places they like or dislike and rate other people's reviews for the place they visited. Thanks to our moderation system, irrelevant or false reviews will quickly disappear, and truthful and useful ones will get to the top of the list.",
        "ru" : "Пользователи Entertainment Assistant могут оставлять отзывы на понравившиеся или не понравившиеся им места и оценивать чужие отзывы на посещённое место. Благодаря нашей системе модерации, не актуальные или ложные отзывы быстро исчезнут, а правдивые и полезные попадут в начало списка.",
    },
    "Review1" : {
        "en" : "User Artem Sadykov left a comment",
        "ru" : "Пользователь Артём Садыков оставил комментарий",
    },
    "Review2" : {
        "en" : "Horrible place near the tech uni, corresponding contingent",
        "ru" : "Ужасное место возле политеха, контингент соответствующий",
    },
    "DownloadProblem" : {
        "en" : "Having problems downloading?",
        "ru" : "Проблемы с загрузкой?",
        "jp" : "ダウンロードに問題がありますか?",
    },
    "Faq" : {
        "en" : "Frequently asked questions",
        "ru" : "Часто задаваемые вопросы",
    },
    "Q1" : {
        "en" : "Why is there no real questions?",
        "ru" : "Почему тут нету настоящих вопросов?",
    },
    "A1" : {
        "en" : "Because we don't have any yet. If they appear, we will put them here.",
        "ru" : "Потому что у нас их пока нет. Если они появятся, мы разместим их здесь.",
    },
    "Q2" : {
        "en" : "What kinds of questions will you put here?",
        "ru" : "Какие вопросы вы сюда добавляете?",
    },
    "A2" : {
        "en" : "We will include questions that are often asked and yet have a simple and usually similar answers.",
        "ru" : "Мы будем добавлять вопросы, которые часто задают, но при этом они имеют простые и обычно похожие ответы.",
    },
    "Q3" : {
        "en" : "What score does this project deserve?",
        "ru" : "Какой оценки заслуживает этот проект?",
    },
    "A3" : {
        "en" : "Of course it deserves 100 points.",
        "ru" : "Конечно он заслуживает 100 баллов.",
    },
    "NoQ" : {
        "en" : "Haven't found an answer to your question?",
        "ru" : "Не нашли ответ на свой вопрос?",
    },
    "ContactUsButton" : {
        "en" : "Contact us!",
        "ru" : "Свяжитесь с нами!",
    },
    "ReadBefore" : {
        "en" : "Before messaging us, please check out our FAQs, as your question may have already been addressed.",
        "ru" : "Перед тем, как отправить нам сообщение, ознакомьтесь с часто задаваемыми вопросами, так как ваш вопрос, возможно, уже обсуждался.",
    },
    "QType" : {
        "en" : "Type of your question",
        "ru" : "Тип вашего вопроса",
    },
    "AppQ" : {
        "en" : "Application techincal question",
        "ru" : "Технический вопрос по приложению",
    },
    "CoopQ" : {
        "en" : "Cooperation",
        "ru" : "Сотрудничество",
    },
    "AppIdea" : {
        "en" : "Application idea",
        "ru" : "Идея для приложения",
    },
    "GeneralQ" : {
        "en" : "General question",
        "ru" : "Общий вопрос",
    },
    "QEmail" : {
        "en" : "Your email",
        "ru" : "Ваша почта",
    },
    "QConfirm" : {
        "en" : "Confirm your email",
        "ru" : "Подтвердите вашу почту",
    },
    "WrongEmail" : {
        "en" : "Emails don't match",
        "ru" : "Почта не совпадает",
    },
    "QSubject" : {
        "en" : "Subject",
        "ru" : "Тема",
    },
    "QMessage" : {
        "en" : "Message",
        "ru" : "Сообщение",
    },
    "ContactSend" : {
        "en" : "Send",
        "ru" : "Отправить",
    },
    "SentEmail" : {
        "en" : "Sent!",
        "ru" : "Отправлено!",
    },
    "ContactUs" : {
        "en" : "Contact us",
        "ru" : "Свяжитесь с нами",
    }
}
