// IA 에이전트: 웹사이트 콘텐츠 구조 정의

export const siteContent = {
  // 네비게이션
  navigation: {
    logo: "STAY",
    links: [
      { label: "서비스", href: "#services" },
      { label: "포트폴리오", href: "#portfolio" },
      { label: "프로세스", href: "#process" },
      { label: "후기", href: "#testimonials" },
      { label: "문의하기", href: "#contact" },
    ],
  },

  // 히어로 섹션
  hero: {
    tagline: "숙소 종합 컨설팅",
    headline: "당신의 숙소를\n새롭게 만들어드립니다",
    description:
      "인테리어 리모델링부터 운영 전략까지, STAY가 숙소의 가치를 높여드립니다.",
    cta: {
      primary: "무료 상담 신청",
      secondary: "포트폴리오 보기",
    },
    stats: [
      { value: "150+", label: "완료 프로젝트" },
      { value: "98%", label: "고객 만족도" },
      { value: "5년+", label: "업계 경력" },
    ],
  },

  // 서비스 섹션
  services: {
    tagline: "Services",
    headline: "종합 컨설팅 서비스",
    description: "디자인과 운영, 두 가지 전문성으로 숙소의 경쟁력을 높입니다.",
    items: [
      {
        id: "design",
        title: "공간 디자인",
        subtitle: "Interior & Remodeling",
        description:
          "게스트가 머물고 싶은 공간을 만듭니다. 트렌디한 인테리어 디자인과 효율적인 동선 설계로 숙소의 가치를 높여드립니다.",
        features: [
          "컨셉 기획 및 디자인",
          "인테리어 시공 관리",
          "가구 및 소품 스타일링",
          "촬영용 세팅 컨설팅",
        ],
      },
      {
        id: "operation",
        title: "운영 컨설팅",
        subtitle: "Operation & Marketing",
        description:
          "예약률과 수익을 극대화합니다. 에어비앤비, 부킹닷컴 등 플랫폼 최적화부터 가격 전략까지 운영 전반을 지원합니다.",
        features: [
          "플랫폼 리스팅 최적화",
          "가격 전략 수립",
          "게스트 응대 매뉴얼",
          "리뷰 관리 전략",
        ],
      },
    ],
  },

  // 포트폴리오 섹션
  portfolio: {
    tagline: "Portfolio",
    headline: "변화의 순간들",
    description: "STAY와 함께 새롭게 태어난 숙소들을 만나보세요.",
    items: [
      {
        id: 1,
        title: "제주 감성 스테이",
        location: "제주시 애월읍",
        category: "펜션",
        beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
        afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
        improvement: "+180% 예약률 상승",
      },
      {
        id: 2,
        title: "서울 루프탑 스튜디오",
        location: "서울 마포구",
        category: "게스트하우스",
        beforeImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
        afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        improvement: "+220% 수익 증가",
      },
      {
        id: 3,
        title: "부산 오션뷰 빌라",
        location: "부산 해운대구",
        category: "풀빌라",
        beforeImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
        afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        improvement: "+150% 예약률 상승",
      },
    ],
  },

  // 프로세스 섹션
  process: {
    tagline: "Process",
    headline: "함께하는 여정",
    description: "체계적인 프로세스로 최상의 결과를 만들어갑니다.",
    steps: [
      {
        number: "01",
        title: "상담 & 분석",
        description:
          "현재 숙소 상태와 운영 현황을 분석하고, 개선 방향을 함께 논의합니다.",
        duration: "1-2일",
      },
      {
        number: "02",
        title: "기획 & 제안",
        description:
          "맞춤형 리모델링 컨셉과 운영 전략을 담은 상세 제안서를 전달드립니다.",
        duration: "3-5일",
      },
      {
        number: "03",
        title: "실행 & 관리",
        description:
          "인테리어 시공과 운영 세팅을 진행하며, 전 과정을 꼼꼼히 관리합니다.",
        duration: "2-4주",
      },
      {
        number: "04",
        title: "오픈 & 지원",
        description:
          "새롭게 단장한 숙소 오픈을 함께하고, 안정화까지 지속 지원합니다.",
        duration: "지속",
      },
    ],
  },

  // 고객 후기 섹션
  testimonials: {
    tagline: "Testimonials",
    headline: "고객님들의 이야기",
    description: "STAY와 함께한 분들의 생생한 후기입니다.",
    items: [
      {
        id: 1,
        content:
          "처음 숙소 운영을 시작하면서 막막했는데, STAY 덕분에 3개월 만에 슈퍼호스트가 되었어요. 인테리어도 운영 노하우도 모두 만족스럽습니다.",
        author: "김지현",
        role: "제주 펜션 운영자",
        rating: 5,
      },
      {
        id: 2,
        content:
          "기존 숙소 리모델링을 맡겼는데, 예산 내에서 최대한의 변화를 이끌어내 주셨어요. 예약률이 2배 이상 올랐습니다.",
        author: "박성호",
        role: "서울 게스트하우스 운영자",
        rating: 5,
      },
      {
        id: 3,
        content:
          "운영 컨설팅만 받았는데도 리뷰 평점이 4.2에서 4.9로 올랐어요. 체계적인 매뉴얼과 꼼꼼한 피드백에 감사드립니다.",
        author: "이수진",
        role: "부산 풀빌라 운영자",
        rating: 5,
      },
    ],
  },

  // 문의 섹션
  contact: {
    tagline: "Contact",
    headline: "무료 상담 신청",
    description:
      "숙소에 대한 고민을 나눠주세요. 전문 컨설턴트가 맞춤 솔루션을 제안드립니다.",
    form: {
      fields: [
        { name: "name", label: "이름", type: "text", required: true },
        { name: "phone", label: "연락처", type: "tel", required: true },
        { name: "email", label: "이메일", type: "email", required: true },
        {
          name: "type",
          label: "숙소 유형",
          type: "select",
          options: ["펜션", "게스트하우스", "풀빌라", "호텔/모텔", "기타"],
        },
        {
          name: "service",
          label: "관심 서비스",
          type: "select",
          options: ["공간 디자인", "운영 컨설팅", "종합 컨설팅"],
        },
        { name: "message", label: "문의 내용", type: "textarea" },
      ],
      submitText: "상담 신청하기",
    },
    info: {
      email: "hello@stay-consulting.kr",
      phone: "02-1234-5678",
      hours: "평일 10:00 - 18:00",
    },
  },

  // 푸터
  footer: {
    logo: "STAY",
    description: "숙소 종합 컨설팅 전문 기업",
    links: [
      {
        title: "서비스",
        items: [
          { label: "공간 디자인", href: "#" },
          { label: "운영 컨설팅", href: "#" },
        ],
      },
      {
        title: "회사",
        items: [
          { label: "회사 소개", href: "#" },
          { label: "채용", href: "#" },
        ],
      },
    ],
    social: [
      { platform: "Instagram", href: "#" },
      { platform: "YouTube", href: "#" },
      { platform: "Blog", href: "#" },
    ],
    copyright: "© 2024 STAY. All rights reserved.",
  },
};
