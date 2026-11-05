window.SITE = {
  "sideSections": [
    {
      "title": "게임",
      "items": [
        {"id":"pachinko","label":"파칭코","icon":"pac"},
        {"id":"casino","label":"카지노","icon":"cas"},
        {"id":"slot","label":"슬롯","icon":"slt"},
        {"id":"sports","label":"스포츠","icon":"spo","expandable":true,"children":["축구","야구","농구","배구"]},
        {"id":"sportsbook","label":"스포츠북","icon":"bok","expandable":true,"children":["프리매치","라이브"]},
        {"id":"bet365","label":"BET365","icon":"b365"},
        {"id":"minigame","label":"미니게임","icon":"mini","expandable":true,"children":["파워볼","사다리","달팽이"]},
        {"id":"polymarket","label":"폴리마켓","icon":"poly"},
        {"id":"brand","label":"브랜드 게임","icon":"brd"}
      ]
    },
    {
      "title": "이벤트",
      "kind": "eventCard",
      "card": {"title":"투윈 이벤트","sub":"EVENT","icon":"evt"}
    },
    {
      "title": "투윈TV",
      "kind": "tvCard",
      "card": {"title":"중계 TwowinTV","sub":"365일 24시간 실시간 스포츠","icon":"tv"}
    },
    {
      "title": "일반적인",
      "items": [
        {"id":"mypage","label":"마이페이지","icon":"user"},
        {"id":"event","label":"이벤트","icon":"cal"},
        {"id":"cs","label":"고객센터","icon":"cs"},
        {"id":"faq","label":"자주 물어보는 질문","icon":"faq"},
        {"id":"terms","label":"이용규정","icon":"doc"},
        {"id":"domain","label":"도메인","icon":"globe"},
        {"id":"telegram","label":"텔레그램","icon":"tg"}
      ]
    }
  ],
  "sideMenus": [
    "파칭코","카지노","슬롯","스포츠","스포츠북","BET365","미니게임","폴리마켓","브랜드 게임",
    "마이페이지","이벤트","고객센터","FAQ","이용규정","도메인","텔레그램"
  ],
  "menus": [
    "스포츠","e스포츠","스포츠북","폴리마켓","카지노","슬롯","BET365"
  ],
  "menuIcons": ["02","03","04","05","06","07","09"],
  "menuEn": ["SPORTS","ESPORTS","SPORTSBOOK","POLYMARKET","CASINO","SLOTS","BET365"],
  "footerLinks": [
    "홈","스포츠 베팅","라이브 카지노","슬롯","E스포츠","이벤트","FAQ","이용규정"
  ],
  "rails": [
    {
      "title": "카지노",
      "dir": "casino",
      "items": [
        "evolution.png","pragmatic.png","allbet.png","oriental.png",
        "microgaming.png","playace.png","evolution.png","pragmatic.png"
      ]
    },
    {
      "title": "슬롯",
      "dir": "slots",
      "items": [
        "pragmatic.png","pgsoft.png","habanero.png","boongo.png",
        "netent.png","microgaming.png","oriental.png","pragmatic.png"
      ]
    },
    {
      "title": "스포츠",
      "dir": "sports",
      "items": [
        "sportsbook.png","saba.png","bt1.png","sportsbook.png",
        "saba.png","bt1.png","sportsbook.png","saba.png"
      ]
    }
  ]
};
